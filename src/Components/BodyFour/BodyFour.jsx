import React from 'react'
import "./BodyFour.scss"
import Bounce from 'react-reveal/Bounce';
import { Link } from "react-router-dom"


export default function BodyFour() {
    return (
        <>

            <div className="container_Four">
                <Bounce left delay={1000} duration={1000}>
                    <div className="How_c">
                        <div className="How_c_sub"><span className="How">HOW TO ACCESS PAY</span></div>
                    </div>
                </Bounce>
                <div className="order_container">
                    <div className="order_list_container">

                        <div>
                            <Bounce right delay={2000} duration={1000}>
                                <ul>
                                    <li>An employee uses the Rapidkredit app to access their earned pay.</li>
                                    <li>The employee chooses when they want to get paid on-demand — instant pay or on the next business day.</li>
                                    <li>Rapidkredit funds and pays the employee, to whatever bank account or pay card they choose.</li>
                                </ul>
                            </Bounce>
                        </div>

                        <Bounce left delay={2000} duration={1000}>
                            <Link to={{ pathname: "/Register" }} className="links">
                                <div className="Register_body"><span className="Register_body_two">Register</span></div>
                            </Link>
                        </Bounce>
                    </div>
                </div>
            </div>

        </>
    )
}
