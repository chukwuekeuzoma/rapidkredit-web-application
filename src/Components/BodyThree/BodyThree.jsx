import React from 'react'
import Employeewelness from "../../images/employeewelness.jpg";
import "../BodyTwo/BodyTwo.scss";
import Bounce from 'react-reveal/Bounce';
import { Link } from "react-router-dom"


export default function BodyThree() {
    return (
        <>
            <div className="container_three">

                <div className="H_P_Loerm_contanier">
                    <Bounce left delay={1000} duration={1000}>
                        <div className="H_P_Loerm">
                            <h2 className="Lorem_H">Employee Financial Wellness<br/>
                               Rapidkredit helps your<br/> employees to budget<br/>smarter
                            </h2>
                            <p className="Lorem_p">
                                Employees who enroll can view and track<br/>
                                their earnings as they work throughout the week,<br/> helping them to 
                                plan for upcoming expenses and determine whether<br/> they need to pick up additional shifts.
                                <br/>
                                Employees can also opt-in to receive automatic
                                  <br/>
                                balance alerts every time earnings are <br/>
                                 reported and their balance goes up.
                                 <br/>
                                 With Rapidkredit, workers have access to<br/>
                                 a better budgeting tool,within the Rapidkredit app<br/>
                                  to show funds that are coming in and going out.<br/> 
                                 Employees will find this to be extremely useful,<br/>especially around the holidays.
                            </p>
                        </div>
                    </Bounce>
                    <Bounce left delay={2000} duration={1000}>
                       <Link to={{ pathname: "/Employee" }} className="links">
                            <div className="learn_more_C">
                                <div className="learn_more">
                                    <span className="learn_more_two">LEARN MORE</span>
                                </div>
                            </div>
                        </Link>
                    </Bounce>
                </div>
                <div className="manwithphone_container">
                    <Bounce right delay={1000} duration={1000}>
                        <div className="Man">
                            <img src={Employeewelness} alt="tw" />
                        </div>
                    </Bounce>
                    <Bounce right delay={2000} duration={1000}><div className="color_box_one"></div></Bounce>
                    <Bounce right delay={3000} duration={1000}><div className="color_box_two"></div></Bounce>
                </div>
            </div>

        </>
    )
}
