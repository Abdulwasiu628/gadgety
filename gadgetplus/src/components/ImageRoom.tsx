import React from 'react'
import imageStyles from '../styles/imgDisplay.module.css'
import { useState, useEffect } from 'react'


function ImageRoom() {
    const images = ['phone1.jpeg', 'phone2.jpeg', 'phone3.jpeg', 'phone4.jpeg', 'phone5.jpeg']
    const [imgDisplay, imgDisplayHandler] = useState(0)

    useEffect(() =>{
        const imager = setInterval( ()=> {
            imgDisplayHandler((imgDisplay) => (imgDisplay+1) % images.length)
        }, 4000)
        return () => clearInterval(imager)
    }, [])
    

    return (
        <div className={imageStyles.container}>
            
            <img src={`../images/${images[imgDisplay]}`} alt="" id='img'/>
            <div className={imageStyles.dimmer}></div>
            <div className={imageStyles.coverage}></div>
        </div>
    )
}

export default ImageRoom