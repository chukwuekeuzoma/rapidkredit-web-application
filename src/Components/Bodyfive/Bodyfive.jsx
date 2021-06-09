import React from 'react'
import Appicon from "../../images/appicon.png"
import "./Bodyfive.scss"
import Bounce from 'react-reveal/Bounce';


export default function Bodyfive() {
    return (
        <>
            <div className="Download_container">
                <Bounce left delay={1000} duration={1000}>
                    <div className="Download_for"><span>DOWNLOAD FOR MOBILE</span></div>
                </Bounce>
                <Bounce right delay={1000} duration={1000}>
                    <div>
                        <img src={Appicon} alt="tw" height="50px" />
                    </div>
                </Bounce>

            </div>
        </>
    )
}
