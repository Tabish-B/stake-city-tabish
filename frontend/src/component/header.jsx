import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import mainlogo from '/mainLogo.png'; // Importing the logo image

import SignUpPopUp from "./popups/signUpPopUp"; // Importing the SignUp pop-up component
import LogInPopUp from "./popups/logInPopUp"; // Importing the LogIn pop-up component
import ForgetPasswordPopup from "./popups/forgetPasswordPopup"; // Importing the Forget Password pop-up component
import profilePic from '../images/profileIcon.png'; // Importing the profile icon image
import { HiOutlineMenuAlt4, HiX } from "react-icons/hi";  // Importing icons for burger menu
import Tilt from 'react-parallax-tilt';

const Header = () => {
    // State to control the visibility of the SignUp pop-up
    const [signUpPopUp, setsSignUpPopUp] = useState(false);

    // State to control the visibility of the LogIn pop-up
    const [logInPopUp, setlogInPopUp] = useState(false);

    // State to control the visibility of the Forget Password pop-up
    const [forgetPass, setforgetPass] = useState(false);

    // State to track if the user is logged in (using JWT token)
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // State to track if the mobile menu is open (for burger menu functionality)
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // useEffect hook to check if there's a JWT token stored in session storage to determine if the user is logged in
    useEffect(() => {
        const token = sessionStorage.getItem("jwtToken");
        if (token) {
            setIsLoggedIn(true); // If a token exists, set user as logged in
        } else {
            setIsLoggedIn(false); // If no token, set user as logged out
        }
    }, []);

    // useEffect to close the menu on scroll
    useEffect(() => {
        const handleScroll = () => {
            if (isMenuOpen) {
                setIsMenuOpen(false); // Close the menu when the user scrolls
            }
        };

        // Add event listener
        window.addEventListener("scroll", handleScroll);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isMenuOpen]);

    // Function to toggle the burger menu (open/close)
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Function to open the SignUp pop-up
    const signUpPopUpOpen = () => {
        setsSignUpPopUp(true);
    };

    // Function to close the SignUp pop-up
    const onCloseSignUp = () => {
        setsSignUpPopUp(false);
    };

    // Function to open the LogIn pop-up
    const logInPopUpOpen = () => {
        setlogInPopUp(true);
    };

    // Function to close the LogIn pop-up
    const OnCloselogInPopUp = () => {
        setlogInPopUp(false);
    };

    // Function that is triggered after a successful login
    const handleLoginSuccess = () => {
        setIsLoggedIn(true); // Set user as logged in
        OnCloselogInPopUp(); // Close the login popup
    };

    // Function to switch from SignUp to LogIn when "Already User?" is clicked
    const AlreadyUserClick = () => {
        setlogInPopUp(true); // Open LogIn pop-up
        setsSignUpPopUp(false); // Close SignUp pop-up
    };

    // Function to switch from LogIn to SignUp when "New to Game?" is clicked
    const NewToGame = () => {
        setlogInPopUp(false); // Close LogIn pop-up
        setsSignUpPopUp(true); // Open SignUp pop-up
    };

    // Function to open the Forget Password pop-up
    const forgetPassOpen = () => {
        setforgetPass(true);
        setlogInPopUp(false); // Close LogIn pop-up when Forget Password is opened
    };

    // Function to close the Forget Password pop-up
    const forgetPassClose = () => {
        setforgetPass(false);
    };

    return (
        <>
            <nav className="py-4 mx-6 flex justify-between items-center">
                {/* Logo */}
                <div className="hover:cursor-pointer">
                    <img src={mainlogo} alt="Stake_city" className="w-20" /> {/* Displaying the logo */}
                </div>

                {/* Burger menu button (shown on mobile and tablet screens) */}
                <div className="lg:hidden flex items-center space-x-2">
                    {/* Sign Up and Log In buttons on mobile */}
                    {!isLoggedIn && (
                        <>
                            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05} transitionSpeed={250}>
                                <button onClick={signUpPopUpOpen} className="rounded-3xl px-2 py-1 border border-emerald-400 text-emerald-400 shadow-lg shadow-emerald-800 hover:bg-emerald-400 hover:text-white transition-colors">
                                    Sign Up
                                </button>
                            </Tilt>
                            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05} transitionSpeed={250}>
                                <button onClick={logInPopUpOpen} className="rounded-3xl px-2 py-1 border border-emerald-400 text-emerald-400 shadow-lg shadow-emerald-800 hover:bg-emerald-400 hover:text-white transition-colors">
                                    Log In
                                </button>
                            </Tilt>
                        </>
                    )}
                    <button onClick={toggleMenu}> {/* Toggles the mobile/tablet menu */}
                        {isMenuOpen ? <HiX className="text-white w-8 h-8" /> : <HiOutlineMenuAlt4 className="text-white w-8 h-8" />}
                    </button>
                </div>

                {/* Full menu on larger screens */}
                <div className="hidden lg:flex space-x-6">
                    <Link to="/" className="text-white transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 hover:border-cyan-100 delay-20">Home</Link>
                    <Link to="/" className="text-white transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 hover:border-cyan-100 delay-20">Leaderboard</Link>
                    <Link to="/userdashboard" className="text-white transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 hover:border-cyan-100 delay-20">User Dashboard</Link>
                    <Link to="/" className="text-white transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 hover:border-cyan-100 delay-20">About Us</Link>
                    <Link to="/" className="text-white transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 hover:border-cyan-100 delay-20">Contact Us</Link>
                </div>

                {/* Sign Up / Log In or Profile section for larger screens */}
                <div className="hidden lg:flex space-x-2">
                    {isLoggedIn ? (
                        <Link to="/profile">
                            <img src={profilePic} alt="Profile" className="w-15 h-9 rounded-full" /> {/* Displaying profile picture if user is logged in */}
                        </Link>
                    ) : (
                        <>
                            <Tilt tiltMaxAngleX={20} tiltMaxAngleY={20} scale={1.05} transitionSpeed={250}>
                                <button onClick={signUpPopUpOpen} className="rounded-3xl px-3 py-1 border border-emerald-400 text-emerald-400 shadow-lg shadow-emerald-800 hover:bg-emerald-400 hover:text-white transition-colors">
                                    Sign Up
                                </button>
                            </Tilt>
                            <Tilt tiltMaxAngleX={20} tiltMaxAngleY={20} scale={1.05} transitionSpeed={250}>
                                <button onClick={logInPopUpOpen} className="rounded-3xl px-3 py-1 border border-emerald-400 text-emerald-400 shadow-lg shadow-emerald-800 hover:bg-emerald-400 hover:text-white transition-colors">
                                    Log In
                                </button>
                            </Tilt>
                        </>
                    )}
                </div>

                {/* Mobile/Tablet Menu (only shown when the burger menu is open) */}
                {isMenuOpen && (
                    <div
                        className="lg:hidden fixed top-20 right-4 w-48 text-white flex flex-col items-center space-y-2 py-2 z-50 rounded-lg"
                        style={{
                            backgroundColor: 'rgba(23, 36, 53, 0.8)', // Transparent background
                            border: '2px solid #34D399', // Glowing border
                            boxShadow: '0px 0px 10px 2px #34D399', // Border glow effect
                        }}
                    >
                        {/* Navigation links for mobile/tablet with compact spacing */}
                        <Link
                            to="/"
                            className="text-white px-3 py-1 rounded-md transition ease-in-out duration-200 active:bg-[#34D399] focus:bg-[#34D399]"
                            onClick={toggleMenu} // Close the menu after clicking the link
                        >
                            Home
                        </Link>
                        <Link
                            to="/"
                            className="text-white px-3 py-1 rounded-md transition ease-in-out duration-200 active:bg-[#34D399] focus:bg-[#34D399]"
                            onClick={toggleMenu}
                        >
                            Leaderboard
                        </Link>
                        <Link
                            to="/userdashboard"
                            className="text-white px-3 py-1 rounded-md transition ease-in-out duration-200 active:bg-[#34D399] focus:bg-[#34D399]"
                            onClick={toggleMenu}
                        >
                            User Dashboard
                        </Link>
                        <Link
                            to="/"
                            className="text-white px-3 py-1 rounded-md transition ease-in-out duration-200 active:bg-[#34D399] focus:bg-[#34D399]"
                            onClick={toggleMenu}
                        >
                            About Us
                        </Link>
                        <Link
                            to="/"
                            className="text-white px-3 py-1 rounded-md transition ease-in-out duration-200 active:bg-[#34D399] focus:bg-[#34D399]"
                            onClick={toggleMenu}
                        >
                            Contact Us
                        </Link>

                        {/* If user is logged in, show profile icon */}
                        {isLoggedIn && (
                            <Link
                                to="/profile"
                                className="text-white px-3 py-1 rounded-md transition ease-in-out duration-200 active:bg-[#34D399] focus:bg-[#34D399]"
                                onClick={toggleMenu}
                            >
                                <img src={profilePic} alt="Profile" className="w-10 h-10 rounded-full" />
                            </Link>
                        )}
                    </div>
                )}
            </nav>

            {/* Popups for SignUp, LogIn, and Forget Password */}
            <SignUpPopUp signUpPopUpOpen={signUpPopUpOpen} onClose={onCloseSignUp} isOpen={signUpPopUp} AlreadyUserClick={AlreadyUserClick} onRegisterSuccess={logInPopUpOpen} />
            <LogInPopUp logInPopUpOpen={logInPopUpOpen} isOpen={logInPopUp} onClose={OnCloselogInPopUp} NewToGame={NewToGame} forgetPassOpen={forgetPassOpen} onLoginSuccess={handleLoginSuccess} />
            <ForgetPasswordPopup isOpen={forgetPass} onClose={forgetPassClose} />
        </>
    );
};

export default Header;