import React from "react";
import bg from "../../../assets/images/hero-bg.png";
import NavBar from '../../Navbar';

const HeroSection = () => {
    return ( 
        <div className="relative h-screen w-screen overflow-hidden px-10">
            <div className="absolute inset-0 w-full h-full bg-cover bg-center z-0" style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-gray-900 to-transparent opacity-75 z-10"></div>
            </div>
            <div className="absolute h-full flex justify-center items-center z-20 mx-10 w-1/2">
                <div>
                    <div className="text-white">
                        <h1 className="text-5xl font-bold my-5"><span className="text-yellow-500"> Optimize</span> your Revenue with <span className="text-blue-500">Kimipay</span></h1>
                        <p>Streamline your financial success. Kimipay Ltd offers tailored revenue management for corporates and government collections. Experience transparent commission 
                            tracking, real-time reports, and effortless bill payments. Your financial efficiency starts here</p>
                    </div>
                    <button className=" bg-transparent border-2 border-white hover:bg-white text-blue-500 rounded-full w-40 h-10 transition-colors duration-350 font-semibold mx-20 my-5 shadow-lg">
                        Get Started
                    </button>
                    <button className="bg-transparent border-2 border-blue-500 hover:bg-blue-500 text-white font-semibold rounded-full w-40 h-10 transition-colors duration-350 shadow-lg">
                        Login
                    </button>
                </div>
            </div>
            <NavBar />
            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2">
                <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 46 46" fill="none">
                    <path d="M34.5 12.2855L31.7975 9.58301L23 18.3613L14.2025 9.58301L11.5 12.2855L23 23.7855L34.5 12.2855Z" fill="#FBFBFB"/>
                    <path d="M34.5 24.9164L31.7975 22.2139L23 30.9922L14.2025 22.2139L11.5 24.9164L23 36.4164L34.5 24.9164Z" fill="#FBFBFB"/>
                </svg>
            </div>
        </div>
    );
}

export default HeroSection;