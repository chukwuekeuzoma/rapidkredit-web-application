import React from 'react'
import Fade from 'react-reveal/Fade'
import "./SettlementPage.scss"

export default function SettlementPage() {
    return (
        <>
            <div>
                <Fade big  duration={1000}>
                    <div className="settelment_container">
                        <h2>Settlement</h2>
                        <h2>
                            input will be place here
                        </h2>
                    </div>
                    <div className="ST_Grid_container">
                        <div className="ST_content_one">1</div>
                        <div className="ST_content_two">2</div>               
                    </div>
                </Fade>
            </div>
        </>
    )
}
