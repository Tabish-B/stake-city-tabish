import React, { useEffect} from "react";
import '../component/styles/home.css'
import { Link } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import Globe from "./Globe";
import chainImage from "/public/assets/chain_horizontal.png";
import mainlogo from '/mainLogo.png';
const isDevelopment = true; // production only
import Tilt from 'react-parallax-tilt';


const Home = () => {

    const handleStart = () => {
        if (isDevelopment || sessionStorage.getItem("jwtToken")) {
            window.location.href = "/explore";
        } else {
            alert("Please login first");
        }
    }

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const chainElements = document.querySelectorAll('.chain-container');

            chainElements.forEach((element, index) => {
                // Set different speeds for each chain
                const speedMultiplier = index === 0 ? 1 : 0.5;
                element.style.backgroundPositionX = `${scrollPosition * speedMultiplier}px`;
            });

            const marqueeContainer = document.querySelector('.marquee');

            if (marqueeContainer) {
                marqueeContainer.style.transform = `translateX(${-scrollPosition * 0.5}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
                <Header />

            <div className="glob_area relative flex justify-center items-center h-screen">
                <Globe />

                {/* Responsive positioning for the text and button */}
                <div className="absolute inset-y-[35%] sm:inset-y-[35%] md:inset-y-[35%] lg:inset-y-[48%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    {/* Adjust text size for smaller screens */}
                    <h1 className="drop-shadow-xl text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white whitespace-nowrap">
                        Are you ready to explore?
                    </h1>
                    <Tilt tiltMaxAngleX={20} tiltMaxAngleY={20} scale={1.1} transitionSpeed={250}>
                        <Link
                            onClick={handleStart}
                            className="rounded-3xl px-12 sm:px-16 md:px-20 py-3 mt-4 bg-emerald-400 shadow-lg shadow-emerald-800 hover:bg-emerald-300 hover:text-grey hover:shadow-sm hover:shadow-emerald-500 transition-shadow duration-200 ease-in-out inline-block"
                            style={{ minWidth: '120px' }}
                        >
                            Start Game
                        </Link>
                    </Tilt>
                </div>
            </div>

            <div className="second_ele bg-transparent mt-10 px-4 sm:px-0">
                <div className="flex flex-col sm:flex-row justify-end sm:mr-10">
                    <div className="sm:text-right">
                        <h1 className="text-center sm:text-right text-2xl sm:text-3xl">Follow Us on Socials</h1>
                        <p className="mt-2 text-center sm:text-right text-wrap custom-paragraph">
                            Stay connected and never miss an update! Follow us on our social media channels for the latest news, exclusive content, and behind-the-scenes sneak peeks. Join the conversation and be part of our community!
                        </p>
                    </div>
                </div>

                <div className="flex justify-center sm:justify-end sm:mr-14 mt-6">
                    <Tilt tiltMaxAngleX={20} tiltMaxAngleY={20} scale={1.05} transitionSpeed={250}>
                        <button className="rounded-3xl mr-4 px-6 py-2 bg-emerald-400 shadow-lg shadow-emerald-800 hover:bg-emerald-300 hover:text-grey hover:shadow-sm hover:shadow-emerald-500 transition-shadow transition-2 ease-in-out">
                            Whitepaper
                        </button>
                    </Tilt>

                    <Tilt tiltMaxAngleX={20} tiltMaxAngleY={20} scale={1.05} transitionSpeed={250}>
                        <button className="rounded-3xl px-6 py-2 bg-emerald-400 shadow-lg shadow-emerald-800 hover:bg-emerald-300 hover:text-grey hover:shadow-sm hover:shadow-emerald-500 transition-shadow transition-2 ease-in-out">
                            FAQ's
                        </button>
                    </Tilt>
                </div>
            </div>

            <div className="third_element mt-10 px-4 sm:px-0 relative overflow-hidden h-auto">
                <div className="flex flex-col sm:flex-row sm:justify-end sm:mr-10">
                    <div className="text-center sm:text-right">
                        <h1 className="mt-8 text-4xl sm:text-6xl px-0 sm:px-14">
                            <span className="mr-0 sm:mr-20">EXPLORE</span><br />
                            <span>COMPLETE</span><br />
                            <span className="earn">EARN.</span>
                        </h1>
                        <p className="mt-6 text-center sm:text-right custom-paragraph_sec">
                            Stake City is an interactive, immersive platform that blends gaming with exploration. Users can search for cities on a 3D Earth model, target landmarks, and ask questions related to specific locations. Other users respond to these questions, and the best answer, selected by the inquirer, earns rewards. This collaborative experience fosters community engagement, learning, and fun, combining elements of discovery and competition. Stake City stands out by turning global exploration into a rewarding game, making it both educational and entertaining.
                        </p>
                    </div>
                </div>


    {/* Spacer for separating content and chains */}
    <div className="spacer h-16 md:h-20 lg:h-24"></div>

                {/* Chains as a background */}
                <div
                    className="chain-container w-full h-16"
                    style={{
                        backgroundImage: `url(${chainImage})`,
                        backgroundRepeat: 'repeat-x',
                        backgroundSize: 'contain',
                        transform: 'rotate(10deg)',
                        backgroundPositionY: 'center',
                    }}
                ></div>
                {/* Chains as a background */}
                <div
                    className="chain-container w-full h-16 mt-20"
                    style={{
                        backgroundImage: `url(${chainImage})`,
                        backgroundRepeat: 'repeat-x',
                        backgroundSize: 'contain',
                        transform: 'rotate(15deg)',
                        backgroundPositionY: 'center',
                    }}
                ></div>

            </div>


            <div className="featured-section mt-20 text-center overflow-hidden">
                <h2 className="text-2xl sm:text-4xl font-bold text-emerald-400">FEATURED IN</h2>
                <div className="featured-logos mt-6 sm:mt-10 flex items-center">
                    <div className="marquee flex space-x-6 w-full">
                        {[...Array(2)].map((_, idx) => (
                            <React.Fragment key={idx}>
                                <div className="featured-logo text-gray-300 text-2xl sm:text-4xl lg:text-5xl opacity-20 font-bold">STAKE CITY</div>
                                <img src={mainlogo} alt="Stake City Logo" className="h-8 sm:h-12 lg:h-16 opacity-20 mx-2 sm:mx-4" />
                                <div className="featured-logo text-gray-300 text-2xl sm:text-4xl lg:text-5xl opacity-20 font-bold">STAKE CITY</div>
                                <img src={mainlogo} alt="Stake City Logo" className="h-8 sm:h-12 lg:h-16 opacity-20 mx-2 sm:mx-4" />
                                <div className="featured-logo text-gray-300 text-2xl sm:text-4xl lg:text-5xl opacity-20 font-bold">STAKE CITY</div>
                                <img src={mainlogo} alt="Stake City Logo" className="h-8 sm:h-12 lg:h-16 opacity-20 mx-2 sm:mx-4" />
                                <div className="featured-logo text-gray-300 text-2xl sm:text-4xl lg:text-5xl opacity-20 font-bold">STAKE CITY</div>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
         

            <div className="last_element mt-10 px-4 sm:px-0">
                <div className="flex flex-col mt-20 items-center">
                    <h1 className="text-3xl sm:text-6xl text-center">Connect To Keep <br /> Building With Us.</h1>
                    <p className="text-center mt-8 px-4 sm:px-0">Enter your email to subscribe to our newsletter and receive updates directly from us</p>
                    <div className="flex flex-col items-center mt-10 space-y-6">
                        <input
                            type="text"
                            placeholder="Email address"
                            className="h-10 w-80 px-3 rounded-xl"
                        />

                        <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.05} transitionSpeed={250}>
                            <Link
                                to="/explore"
                                className="w-48 px-6 py-3 bg-emerald-400 rounded-3xl shadow-lg shadow-emerald-800 hover:bg-emerald-300 hover:text-grey hover:shadow-sm hover:shadow-emerald-500 transition-shadow transition-2 ease-in-out text-center"
                            >
                                Submit
                            </Link>
                        </Tilt>
                    </div></div>
            </div>

            <Footer />
        </>
    )
}

export default Home;