import React from 'react'
import Fade from 'react-reveal/Fade'
import "./ProfilePage.scss"

export default function Profilepage() {
    return (
        <>
            <div>
                <Fade big  duration={1000}>
                    <div className="Profile_container">
                        <h2>Profile</h2>
                        <h2>
                            input will be place here
                        </h2>
                    </div>
                    <div className="PR_Grid_container">
                        <div className="PR_content_one">1</div>
                        <div className="PR_content_two">2</div>               
                    </div>
                </Fade>
            </div>
        </>
    )
}
