import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import MapBoxMap from './explore/MapboxMap'
import DropTaskPopup from "./explore/droptask";
import ControlOverlay from './controlOverlay';

const isDevelopment = true; 

const Explore = () => {
    const { q_id } = useParams(); 
    const [center, setCenter] = useState(null);

    useEffect(() => {
        if (!isDevelopment && !sessionStorage.getItem("jwtToken")){
            alert("Please login first");
            window.location.href = `/${q_id}`;
            return;
        }

        if (q_id) {
            console.log(`Received q_id: ${q_id}`);
            
        }
    }, [q_id]);
    return (
        <div>
        <MapBoxMap
            showControls={false}
            q_id={q_id}
            />

            <ControlOverlay /> 
        </div>
    );
};

export default Explore;