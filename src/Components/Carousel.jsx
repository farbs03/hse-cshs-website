import React from 'react'
import {Paper, Typography, useMediaQuery} from "@mui/material"

import ChrisProfile from "../Assets/chrisfarber.jpg"
import AlexProfile from "../Assets/alexprofile.jpg"
import AnishProfile from "../Assets/anishprofile.jpg"

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Carousel = () => {

    const quotes = [
        {
            Name: "Chris Farber", 
            Quote: "CSHS and the CS classes at HSE have allowed me to expand my knowledge on a field I'm passionate about pursuing down the line.",
            Image: ChrisProfile,
            Grade: 12
        },
        {
            Name: "Alex Jurkovich", 
            Quote: "CS classes and CSHS at HSE have allowed me to greatly develop my problem solving skills, which are vital for everyone to have.",
            Image: AlexProfile,
            Grade: 12
        },
        {
            Name: "Anish Kambhampati", 
            Quote: "The combination of CS and CSHS has masterfully prepared me for a future that is increasingly dependent upon technological aptitude.",
            Image: AnishProfile,
            Grade: 12
        }
    ]

    const mobile = useMediaQuery('(max-width: 900px)')

    return (
        <div class="container py-10" style={{margin: "10px auto"}}>
            <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 font-bold text-center">Testimonials</h1>
            <OwlCarousel className='owl-theme' loop margin={mobile ? 0 : 8} slideBy autoplay autoplaySpeed={2000} dots={false} style={{margin: "0px auto", padding: "10px"}} items={mobile ? 1 : 3}>
                {quotes.map((quote, idx) => (
                    <div key={idx} style={{margin: mobile ? "25px auto" : "25px 10px", maxWidth: "500px"}} class="rounded-xl bg-white px-8 py-6">
                        <div style={{marginBottom: "10px", textAlign: "left"}}>
                            <p class="leading-relaxed text-base text-gray-500">
                                <span style={{fontSize: "20px", fontWeight: "bold", color: "#1890ff", marginRight: "2px"}}>"</span>
                                {quote.Quote}
                                <span style={{fontSize: "20px", fontWeight: "bold", color: "#1890ff", marginLeft: "2px"}}>"</span>
                            </p>
                        </div>
                        <div style={{display: "flex", alignItems: "center", flexWrap: "flex"}}>
                            <div style={{width: "40px", height: "40px", background: "#ccc", borderRadius: "50%", marginRight: "10px"}}>
                                <img src={quote.Image} style={{width: "100%", height: "100%", borderRadius: "50%"}} alt="profile" />
                            </div>
                            <div style={{textAlign: "left"}}>
                                <p style={{fontSize: '14px', color: "rgba(0, 0, 0, 0.85)"}}>{quote.Name}</p>
                                <p style={{fontSize: '12px', color: "rgba(0, 0, 0, 0.7)"}}>Grade {quote.Grade}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </OwlCarousel>
        </div>
    )
}

export default Carousel
