import React from 'react'
import "./BodyFour.scss"
import Bounce from 'react-reveal/Bounce';
import {Link} from "react-router-dom"


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
                                <ol>
                                    <li>J sdhbnihjn klm dh mdj m, dkmkm b h nljnmojnm df</li>
                                    <li>J sdhbnihjn klm dh mdj m, dkmkm b h nljnmojnm df</li>
                                    <li>J sdhbnihjn klm dh mdj m, dkmkm b h nljnmojnm df</li>
                                    <li>J sdhbnihjn klm dh mdj m, dkmkm b h nljnmojnm df</li>
                                    <li>J sdhbnihjn klm dh mdj m, dkmkm b h nljnmojnm df</li>
                                    <li>J sdhbnihjn klm dh mdj m, dkmkm b h nljnmojnm df</li>
                                </ol>
                            </Bounce>
                        </div>
                         <Bounce left delay={2000} duration={1000}>
                            <Link to={{pathname:"/Register"}} className="links">
                              <div className="Register_body"><span className="Register_body_two">Register</span></div>
                            </Link>
                        </Bounce>
                    </div>
                </div>
            </div>

        </>
    )
}
