import React from 'react'
import { motion } from 'framer-motion'

import Carousel from "./Carousel"
import Opportunities from "./Opportunities"

import classes from "./classes"

const Home = () => {

    return (
        <div>
            <div className="sm:text-center lg:text-left container mx-auto flex py-10 md:flex-row flex-col items-center">
                <motion.div
                    initial={{opacity: 0, y: 4}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.2, delay: 0.15}}
                    class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
                >
                    <h1 class="title-font sm:text-4xl text-3xl mb-2 font-medium font-semibold text-gray-900">
                        HSE High School
                        <br class="hidden lg:inline-block" />
                        <h1 class="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Computer Science</h1>
                    </h1>

                    <motion.div
                        initial={{opacity: 0, y: 4}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.2, delay: 0.3}}
                    >
                        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                            Learn all about how you can get more involved in commputer science at HSE. There is info on our computer science courses, coding clubs, and more!
                        </p>
                    </motion.div>

                    <div className="mt-4 flex">
                        <motion.div
                            initial={{opacity: 0, y: 4}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.2, delay: 0.45}}
                        >
                            <button 
                                class={classes.primaryButton}
                                style={{marginRight: "10px"}}
                            >
                                    Courses
                            </button>
                        </motion.div>
                        <motion.div
                            initial={{opacity: 0, y: 4}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.2, delay: 0.6}}
                        >
                            <button class={classes.secondaryButton}>Clubs</button>
                        </motion.div>
                    </div>

                </motion.div>

                <motion.div 
                    class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
                    initial={{opacity: 0, x: 10}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 0.2, delay: 0.75}}
                >
                    <motion.div
                        class="p-1 bg-gradient-to-br from-blue-600 to-blue-400 rounded-xl shadow-xl"
                        whileHover={{x: 5}}
                    >
                        <img class="object-cover object-center rounded-lg" alt="hero" src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80" />
                    </motion.div>
                </motion.div>

            </div>

            <Opportunities />

            <Carousel />
        </div>
    )
}

export default Home
