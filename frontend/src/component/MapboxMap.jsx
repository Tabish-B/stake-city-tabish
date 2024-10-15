import React, { useEffect, useRef, useState } from 'react';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import DropTaskPopup from "./droptask";
import GamifiedTaskPopup from "./starttask";
import SearchBar from "./searchbar";
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './styles/mapboxmap.css';

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

const MapboxMap = ({ showControls, q_id }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentLocation, setCurrentLocation] = useState("");
  const [activePopup, setActivePopup] = useState(null);
  const [dropTaskSuccess, setDropTaskSuccess] = useState(false);
  const [taskCoordinates, setTaskCoordinates] = useState(null);
  const [taskMarkers, setTaskMarkers] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [center, setCenter] = useState([0, 0]);
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [query, setQuery] = useState("");
  const [longLat, setLongLat] = useState(null);
  const [verbalAddress, setVerbalAddress] = useState(null);
  const [allTasks, setAllTasks] = useState([]);
  const [isLink, setIsLink] = useState(false);

  // Fetch locations from the backend when the component mounts
  useEffect(() => {
    if (q_id) {
      setIsLink(true);
  
        // Fetch the question data from the API
        fetch(`http://localhost:5000/api/view_question/${q_id}`)
          .then((response) => {
            if (!response.ok) {
              throw new Error("Question not found.");
            }
            return response.json();
          })
          .then((data) => {
            setAllTasks((prevTasks) => [...prevTasks, data]);
            setSelectedTask({
              question_id: data.question_id,
              title: data.taskTitle,
              description: data.taskDescription,
              location: data.location_name,
              user_name: data.user_name,
              full_name: data.full_name,
              stakeAmount: data.stake_amount,
              share_url: data.share_url,
              navigation_url: data.navigation_url
            });
            handleMarkerClick(data);
          })
          .catch((error) => {
            console.error(error.message);
          });
      }
    
    const fetchLocations = async () => {
      try {
        const token = sessionStorage.getItem("jwtToken");
        const response = await fetch("http://localhost:5000/api/get_all_tasks", {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        }); 
        const data = await response.json();
        setAllTasks(data); 
      } catch (error) {
        console.error("Error fetching locations:", error);
      }
    };

    fetchLocations();
  }, []);

  // Create markers for each location
  useEffect(() => {
    console.log("tasks", allTasks);
    allTasks.forEach((task) => {
      console.log("task", task);
      createMarker(task.coordinates, task);
    });
  }, [allTasks]);
  
  const sampleTask = {
    title: "Magical Park Cleanup Quest",
    description: "Embark on an enchanted journey to restore the beauty of Central Park! Will you answer the call of this epic quest?",
    location: "Central Park, New York",
    stakeAmount: 1000,
  };

  

  // UI button handling functions

  const handleSearch = async (newQuery) => {
    try {
      const response = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(newQuery)}.json?access_token=${mapboxgl.accessToken}`
      );
      const data = await response.json();
      const { center, place_name } = data.features[0];
      setCenter(center);
      setSearchPerformed(true);
      setQuery(place_name);
    } catch (error) {
      console.error("Error fetching location:", error);
    }
  };

  // Popup handling functions

  const handleMarkerClick = (task) => {
    console.debug("handleMarkerClick", task);
    setSelectedTask(task);
    console.log("opening task", task);
    setActivePopup("GamifiedTaskPopup");
    setIsPopupOpen(true);
  };


  const handleDropQuestClick = (coordinates) => {
    setActivePopup("DropTaskPopup");
    setIsPopupOpen(true);
    console.log(getAddressFromCoordinates(coordinates.lng, coordinates.lat));
    setTaskCoordinates(coordinates);
    setLongLat(coordinates); 
  };

  useEffect(() => {
    console.log("Popup state changed:", isPopupOpen);
  }, [isPopupOpen]);

  useEffect(() => {
      if (activePopup === "GamifiedTaskPopup") {
          console.log("GamifiedTaskPopup opened with task:", selectedTask);
      }
      if (activePopup === "DropTaskPopup") {
        console.log("DropTaskPopup opened");
    }
  }, [activePopup, selectedTask]);

  const handleDropTaskSuccess = (task) => {
    setDropTaskSuccess(task);
    setIsPopupOpen(false);

    if (task) {
      if (taskCoordinates && mapRef.current) {
        const marker = createMarker(taskCoordinates,task); // Create the marker

        setTaskMarkers(prevMarkers => [
          ...prevMarkers,
          {
            marker,
            task: {
              title: task.taskTitle,
              description: task.taskDescription,
              location: task.taskLocation,
            }
          }
        ]);
        setSelectedTask(task);
        handleMarkerClick(task);
        setTaskCoordinates(null);
        console.log("Drop task successful");
      }
    } else {
      setIsPopupOpen(false);
    }
  };

  const createMarker = (coordinates, task) => {
    const marker = new mapboxgl.Marker()
      .setLngLat(coordinates)
      .addTo(mapRef.current);

    // Disable map interaction when hovering over the marker
    marker.getElement().addEventListener('mouseenter', () => {
      mapRef.current.scrollZoom.disable();
      mapRef.current.dragPan.disable();
    });

    // Re-enable map interaction when not hovering
    marker.getElement().addEventListener('mouseleave', () => {
      mapRef.current.scrollZoom.enable();
      mapRef.current.dragPan.enable();
    });

    // Handle marker click to show the task popup
    marker.getElement().addEventListener('click', () => {
      handleMarkerClick({
        question_id: task.question_id,
        title: task.taskTitle,
        description: task.taskDescription,
        location: task.location_name,
        user_name: task.user_name,
        full_name: task.full_name,
        stakeAmount: task.stake_amount,
        share_url: task.share_url,
        navigation_url: task.navigation_url
      });
    });

    return marker;
  };

  const mapContainer = useRef(null);
  const mapRef = useRef(null);
  const navigationControlRef = useRef(null);

  const MIN_ZOOM = 1;
  const MAX_ZOOM = 20;
  const secondsPerRevolution = 240;
  let spinEnabled = true;
  let mouseHoldTimeout = null;
  let isMouseHeld = false;
  const getAddressFromCoordinates = async (lng, lat) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=${mapboxgl.accessToken}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      if (data.features && data.features.length > 0) {
        const address = data.features[0].place_name; // Get the most relevant address
        console.log('Address:', address);
        setVerbalAddress(address);
        return address;
      } else {
        console.log('No address found');
        return null;
      }
    } catch (error) {
      console.error('Error fetching address:', error);
      return null;
    }
  };
  
  useEffect(() => {
    if (mapContainer.current) {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/play2earn/cm1tnpmnd014d01pi7httawcp',
        projection: 'globe',
        zoom: 1,
        center: [0, 0],
        minZoom: MIN_ZOOM,
        maxZoom: MAX_ZOOM,
        scrollZoom: false,
        keyboard: false,
      });

      mapRef.current = map;

      let userInteracting = false;

      const spinGlobe = () => {
        if (spinEnabled && !userInteracting) {
          const distancePerSecond = 360 / secondsPerRevolution;
          const center = map.getCenter();
          center.lng -= distancePerSecond;
          map.easeTo({ center, duration: 1000, easing: (n) => n });
        }
      };

      const spinInterval = setInterval(spinGlobe, 1000);

      map.on('mousedown', () => {
        userInteracting = true;
        spinEnabled = false;
      });

      map.on('dragend', () => {
        userInteracting = false;
        map.scrollZoom.enable();
      });

      map.on('rotate', () => {
        map.scrollZoom.enable();
        map.keyboard.enable();
        spinEnabled = false;
      });

      // Mouse hold to create a task
      map.on('mousedown', (e) => {
        isMouseHeld = true;
        mouseHoldTimeout = setTimeout(() => {
          if (isMouseHeld) {
            console.log("Mouse held",  e.lngLat);
            handleDropQuestClick(e.lngLat);
          }
        }, 1000);
      });

      map.on('mouseup', () => {
        clearTimeout(mouseHoldTimeout);
        isMouseHeld = false;
      });

      return () => {
        clearInterval(spinInterval);
        map.remove();
      };
    }
  }, []);

  useEffect(() => {
    if (searchPerformed && center && mapRef.current) {
      mapRef.current.flyTo({
        center,
        zoom: 10,
        speed: 1.5,
        curve: 1.2,
        easing: (t) => t,
        essential: true,
      });
    }
  }, [center, searchPerformed]);

  useEffect(() => {
    if (mapRef.current) {
      if (navigationControlRef.current) {
        mapRef.current.removeControl(navigationControlRef.current);
      }

      if (showControls) {
        const navigationControl = new mapboxgl.NavigationControl();
        mapRef.current.addControl(navigationControl);
        navigationControlRef.current = navigationControl;
      }
    }
  }, [showControls]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (mapRef.current) {
        if (event.key === '-') {
          mapRef.current.zoomOut();
        } else if (event.key === '+' || event.key === '=' || event.key === 'NumpadAdd') {
          mapRef.current.zoomIn();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  const { lng, lat } = longLat || {};
  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <GamifiedTaskPopup
        task={selectedTask}
        isStaker={Math.random() > 0.5}
        isOpen={isPopupOpen && activePopup === "GamifiedTaskPopup"}
        onClose={() => setIsPopupOpen(false) && setActivePopup(null)}
      />
      <DropTaskPopup
        isOpen={isPopupOpen && activePopup === "DropTaskPopup"}
        onClose={() => {
          setIsPopupOpen(false);
          setActivePopup(null);
        }}
        onSuccess={handleDropTaskSuccess}
        lng={lng}
        lat={lat}
        verbalAddress={verbalAddress}
      />
      <div
        id="map-container"
        ref={mapContainer}
        style={{ width: '100%', height: '100vh', outline: 'none' }}
        tabIndex="0"
      />
    </div>
  );
};

export default MapboxMap;
