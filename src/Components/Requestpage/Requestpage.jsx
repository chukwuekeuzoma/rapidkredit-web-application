import React from 'react'
import "./Requestpage.scss"
import Fade from 'react-reveal/Fade'

export default function Requestpage() {
    return (
        <> 
           <Fade big  duration={1000}>
                <div className="Request_container">
                    <h2>Request</h2>
                    <h2>
                        input will be place here
                    </h2>
                </div>
                <div className="RQ_Grid_container">
                    <div className="RQ_content_one">1</div>
                    <div className="RQ_content_two">2</div>               
                </div>
            </Fade>
        </>
     )
}
