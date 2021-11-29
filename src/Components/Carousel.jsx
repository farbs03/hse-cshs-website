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
            Quote: "The combination of CS and CSHS has masterfully prepared me for a future that is increasingly dependent upon technology.",
            Image: AnishProfile,
            Grade: 12
        }
    ]

    const mobile = useMediaQuery('(max-width: 900px)')

    return (
        <div style={{maxWidth: "1200px", margin: "10px auto"}}>
            <OwlCarousel className='owl-theme' loop margin={mobile ? 0 : 10} slideBy autoplay autoplaySpeed={2000} dots={false} style={{margin: "10px auto"}} items={mobile ? 1 : 3}>
                {quotes.map((quote, idx) => (
                    <Paper style={{borderRadius: "15px", maxWidth: "400px", padding: "20px", margin: mobile ? "25px auto" : "25px 20px", boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"}} className="item">
                        <div style={{marginBottom: "10px", textAlign: "left"}}>
                            <Typography style={{color: "rgba(0, 0, 0, 0.7)", fontSize: "14px"}}>
                                <span style={{fontSize: "20px", fontWeight: "bold", color: "#1890ff", marginRight: "2px"}}>"</span>
                                {quote.Quote}
                                <span style={{fontSize: "20px", fontWeight: "bold", color: "#1890ff", marginLeft: "2px"}}>"</span>
                            </Typography>
                        </div>
                        <div style={{display: "flex", alignItems: "center", flexWrap: "flex"}}>
                            <div style={{width: "40px", height: "40px", background: "#ccc", borderRadius: "50%", marginRight: "10px"}}>
                                <img src={quote.Image} style={{width: "100%", height: "100%", borderRadius: "50%"}} alt="profile" />
                            </div>
                            <div style={{textAlign: "left"}}>
                                <Typography style={{fontSize: '14px', color: "rgba(0, 0, 0, 0.85)"}}>{quote.Name}</Typography>
                                <Typography style={{fontSize: '12px', color: "rgba(0, 0, 0, 0.7)"}}>Grade {quote.Grade}</Typography>
                            </div>
                        </div>
                    </Paper>
                ))}
            </OwlCarousel>
        </div>
    )
}

export default Carousel
