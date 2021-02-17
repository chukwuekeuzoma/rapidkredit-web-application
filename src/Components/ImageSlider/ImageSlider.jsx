import React from 'react'
import {ImageSliderData} from "./ImageSliderData"
import "./ImageSlider.scss"

export default function ImageSlider() {
    return (
        <>
            <div className="Imageslide_container">
               {ImageSliderData.map((slide, index) => {
                    return(
                       <div className = "slideimage_one">
                           <div className= "Slideimage_two">
                              <img src={slide.image} alt="slideimage"/>;
                           </div>
                           {/* <div className="slide_text">
                               {slide.text}
                           </div> */}
                       </div>
                    
                    )

               })} 
            </div>
        </>
    )
}
