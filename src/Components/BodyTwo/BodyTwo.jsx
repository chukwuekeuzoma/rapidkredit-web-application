import React from 'react'
import "./BodyTwo.scss"
import Earnbeforepayday from "../../images/earnbeforepayday.jpg"
import Bounce from 'react-reveal/Bounce';
import { Link } from "react-router-dom"


export default function BodyTwo() {
    return (
        <>
            <div className="container_three">
                <div className="manwithphone_container">
                    <Bounce left delay={1000} duration={1000}>
                        <div className="Man">
                            <img src={Earnbeforepayday} alt="tw"/>
                        </div>
                    </Bounce>
                     <Bounce left delay={2000} duration={1000}><div className="color_box_one"></div></Bounce>
                     <Bounce left delay={3000} duration={1000}><div className="color_box_two"></div></Bounce>
                </div>
                <div className="H_P_Loerm_contanier">
                   <Bounce right delay={1000} duration={1000}>
                        <div className="H_P_Loerm">
                        <h2 className="Lorem_H">Earn Before Payday</h2>
                            <p className="Lorem_p">
                                Rapidkredit gives your employees 100%<br/>access to their earned pay on any device,<br/>
                                at any time.
                                <br/>
                                The lowest fees. No subscriptions. No confusion.<br/>
                                Employees can instantly access their earned pay
                                <br/>
                                Or employees can receive funds on the next business day
                                <br/>
                                You choose who pays the fee: you, your employees<br/> or a combination of the two.
                            </p>
                        </div>
                    </Bounce>
                    <Bounce right delay={2000} duration={1000}>
                        <div className="learn_more_C">
                            <Link to={{ pathname: "/Employer" }} className="links">
                                <div className="learn_more">
                                    <span className="learn_more_two">LEARN MORE</span>
                                </div>
                            </Link>
                        </div>
                    </Bounce>
                </div>
            </div>
        </>
    )
}

