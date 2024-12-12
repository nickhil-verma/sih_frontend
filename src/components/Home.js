import React from 'react';
import { FaExternalLinkAlt } from "react-icons/fa";
import HERO from "../img/Education.gif";
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { GoArrowRight } from "react-icons/go";

import PATTERN from "../img/Pattern.png"

const Home = () => {
    return (
        <>
            <div id="Home" className='relative flex flex-col md:flex-row mt-12 max-sm:p-10 p-6 items-center w-full justify-center min-h-screen bg-gradient-to-r from-orange-100 via-white to-green-100'>
                
                <div className="hero-background">
                    
                    <motion.div 
                        className="circle circle-1" 
                        initial={{ scale: 1, y: 0 }} 
                        animate={{ scale: [1, 1.05, 1], y: [0, -10, 0] }} 
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} 
                    />
                    <motion.div 
                        className="circle circle-2" 
                        initial={{ scale: 1, y: 0 }} 
                        animate={{ scale: [1, 1.05, 1], y: [0, -15, 0] }} 
                        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }} 
                    />
                    <motion.div 
                        className="circle circle-3" 
                        initial={{ scale: 1, y: 0 }} 
                        animate={{ scale: [1, 1.05, 1], y: [0, -12, 0] }} 
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} 
                    />
                    <motion.div 
                        className="circle circle-4" 
                        initial={{ scale: 1, y: 0 }} 
                        animate={{ scale: [1, 1.05, 1], y: [0, -8, 0] }} 
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }} 
                    />
                    <motion.div 
                        className="circle circle-5" 
                        initial={{ scale: 1, y: 0 }} 
                        animate={{ scale: [1, 1.05, 1], y: [0, -10, 0] }} 
                        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }} 
                    />
                    <motion.div 
                        className="circle circle-6" 
                        initial={{ scale: 1, y: 0 }} 
                        animate={{ scale: [1, 1.05, 1], y: [0, -5, 0] }} 
                        transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }} 
                    />

                    {/* Dot Pattern */}
                    <div className="dot-pattern"></div>
                </div>

                {/* Image Section */}
                <div className='w-full md:w-2/5 p-4 order-1 md:order-1'>
                    <img src={HERO} alt="Hero" className='rounded-[10rem] mix-blend-multiply w-full h-auto' />
                </div>

                {/* Text Section */}
                <div className='w-full md:w-3/5 p-4 order-2 md:order-2 flex flex-col items-center'>
                    <h1 className="text-4xl min-h-24 max-sm:text-xl duration-700 font-bold mb-4 text-center">
                        <TypeAnimation
                            sequence={[
                                '✨ Empowering Lives, Transforming Communities!',
                                2000,
                                '🚀 Ensuring Equality for Every Citizen!',
                                2000,
                                '🌍 Building an Inclusive Nation!',
                                2000,
                                '💡 Promoting Social Justice for All!',
                                2000,
                                '🔥 Advancing Welfare and Dignity!',
                                2000,
                                'Say no to disablities',
                                2000,
                            ]}
                            wrapper="span"
                            cursor={true}
                            repeat={Infinity}
                            style={{ fontSize: '1em', backgroundColor: 'transparent', duration:'700', display:'inline-block', color:'inherit' }}
                        />
                    </h1>
                    <p className='mt-1 text-center text-[1rem] max-sm:text-sm text-gray-400 leading-tight overflow-hidden max-w-[80%]'>
                        The Ministry of Social Justice and Empowerment is dedicated to ensuring the welfare of marginalized communities and promoting social equality. Through innovative programs and initiatives, we aim to uplift the underprivileged, provide equal opportunities, and foster an inclusive society.  
                    </p>
                    
                    <div className='flex max-md:flex-col items-center m-5 space-x-7 space-y-4'>
                        <a href='https://socialjustice.nic.in'>
                            <button className='max-sm:text-sm border-[0.5px] text-gray-500 flex items-center hover:text-black gap-2 duration-100 hover:gap-3 hover:bg-gray-100 px-4 py-2 rounded-3xl w-full max-w-xs text-center'>
                            About Us ✨   <span  ><GoArrowRight />
                                </span>
                            </button>
                        </a>
                         
                        <img src={PATTERN} className='max-sm:h-36 max-md:h-40 absolute mix-blend-multiply rotate-90 h-64 -bottom-10 -z-10 right-0' />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
