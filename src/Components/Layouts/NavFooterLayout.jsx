import React from 'react'
import Navigation from "../Navigation/Navigation"
import Bodyfive from "../Bodyfive/Bodyfive"
import Footer from "../Footer/Footer"

export default function NavFooterLayout(props) {
    return (
        <>
          <div>
            <Navigation/>
                {props.children}
            <Bodyfive/>
            <Footer/>
          </div>
        </>
    )  
}
