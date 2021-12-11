import React from 'react'

import { motion } from 'framer-motion'

const Opportunities = () => {

    const opportunitySections = [
        {
            title: "Courses", 
            description: "See all of our computer science courses and the potential paths you can take with them throguhout high school.",
            icon: "fas fa-book"
        },
        {
            title: "Clubs", 
            description: "Our coding clubs meet every wednesday after school to learn how to code, primarily through website development.",
            icon: "fas fa-laptop-code"
        },
        {
            title: "CSHS", 
            description: "Volunteer for local computer science events and work on community outreach projects with other members.",
            icon: "far fa-handshake"
        },
    ]

    return (
        <motion.div
            initial={{opacity: 0, y: 4}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.2, delay: 0.9}}
        >
            <section class="text-gray-700 body-font">
                <div class="container py-20 mx-auto">
                    <div class="flex flex-col text-center w-full mb-8">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 font-bold">Opportunities</h1>
                    </div>
                    <div class="flex flex-wrap -m-4">

                        {opportunitySections.map((opportunity, idx) => (
                            <motion.div 
                                class="p-4 md:w-1/3"
                                initial={{opacity: 0, y: 2}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.2, delay: 1.05 + 0.15 * idx}}
                            >

                                <div class="flex rounded-lg h-full bg-gray-200 p-8 flex-col">

                                    <div class="flex items-center mb-3">
                                        <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                                            <span><i class={opportunity.icon} /></span>
                                        </div>
                                        <h2 class="text-gray-900 text-lg title-font font-medium">{opportunity.title}</h2>
                                    </div>

                                    <div class="flex-grow">
                                        <p class="leading-relaxed text-base text-gray-500">{opportunity.description}</p>
                                        <a href="#" class="mt-3 text-blue-500 inline-flex items-center">Learn More &nbsp;
                                            <span><i class="fas fa-arrow-right" /></span>
                                        </a>
                                    </div>

                                </div>
                            </motion.div>
                        ))}

                    </div>
                </div>
            </section>
        </motion.div>
    )
}

export default Opportunities
