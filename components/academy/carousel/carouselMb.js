'use client'

import Image from 'next/image'

//Logos
import benzignaLogo from "../assets/benzigna.svg"
import bloombergLogo from "../assets/bloomberg.svg"
import digitalLogo from "../assets/digital.svg"
import fxproLogo from "../assets/fxpro.svg"
import yahooLogo from "../assets/yahoo.svg"


//To keep images from warning 
const imageStyle = {
    width: "auto",
    height: "auto",
    maxWidth: "100%",
    maxHeight: "100%"
}


import "./styles.css"

import React, { useEffect } from "react"

function CarouselMb() {

    useEffect(() => {
        // This code will run on the client side after the component is mounted
        var copy = document.querySelector(".logos-slide").cloneNode(true);

    }, []);

    return (
        <div>
            <div className="hide">
                <div className="logos-slide ">
                    <Image src={benzignaLogo} width={100} height={94} alt="benzigna_logo" style={imageStyle} />
                    <Image src={bloombergLogo} width={100} height={94} alt="bloomber_logo" style={imageStyle} />
                    <Image src={digitalLogo} width={80} height={94} alt="digital_logo" style={imageStyle} />
                    <Image src={fxproLogo} width={100} height={94} alt="fxpro_logo" style={imageStyle} />
                    <Image src={yahooLogo} width={100} height={94} alt="yahoo-logo" style={imageStyle} />
                </div>
            </div>
        </div>
    )
}

export default CarouselMb