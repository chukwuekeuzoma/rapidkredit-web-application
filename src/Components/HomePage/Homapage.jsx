import React from 'react'
import Navigation from "../Navigation/Navigation"
import BodyOne from "../BodyOne/BodyOne"
import BodyTwo from "../BodyTwo/BodyTwo"
import BodyThree from "../BodyThree/BodyThree"
import BodyFour from "../BodyFour/BodyFour"
import ImageSlider from "../ImageSlider/ImageSlider"
import Bodyfive from "../Bodyfive/Bodyfive"
import Footer from "../Footer/Footer"

export default function Homapage() {
    return (
        <>
            <Navigation/>
             <BodyOne/> 
            <BodyTwo/>
            <BodyThree/>
            <BodyFour/>
            {/* <ImageSlider/> */}
            <Bodyfive/>
            <Footer/>  
        </>
    )
}


        
