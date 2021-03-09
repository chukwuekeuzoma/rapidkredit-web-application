import React from 'react'
import { ImageSliderData } from "./ImageSliderData"
import "./ImageSlider.scss"
import Carousel from 'react-elastic-carousel'

export default function ImageSlider() {

    const breakpoints = [
       {width:1, itemsToShow:1},
       {width:500, itemsToShow:1},
       {width:750, itemsToShow:2},
       {width:1200, itemsToShow:3},
    ]

    return (
        <>
          <div className="main_container">
             <div className="Testimonies_container">
                 <div className="Testimonies">
                     <span>TESTIMONIALS</span>
                 </div>
             </div>

            <div className="Imageslide_container">
                <Carousel breakPoints={breakpoints}>
                    {ImageSliderData.map((slide, index) => {

                        return (
                            <div className="slideimage_one" key={index}>
                                <div className="Slideimage_two">
                                    <img src={slide.image} alt="slideimage" className="Slideimage_two" />
                                </div>
                                <div className="slide_text">
                                      {slide.text}
                                </div>
                            </div>

                        )

                    })}
                </Carousel>
            </div>
         </div>
        </>
    )
}
