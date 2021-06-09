import React from 'react'
import Employeewelness from "../../images/employeewelness.jpg";
import "../BodyTwo/BodyTwo.scss";
import Bounce from 'react-reveal/Bounce';


export default function BodyThree() {
    return (
        <>
            <div className="container_three">

                <div className="H_P_Loerm_contanier">
                    <Bounce left delay={1000} duration={1000}>
                        <div className="H_P_Loerm">
                            <h2 className="Lorem_H">Lorem Ipsum</h2>
                            <p className="Lorem_p">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing<br />elit,sed do eiusmod tempor
                                incididunt ut<br />labore et dolore magna
                                aliqua. Quis <br /> ipsum suspendisse ultrices
                                gravida.Risus commodo viverra <br />maecenas
                                accumsan lacus vel facilisis
                            </p>
                        </div>
                    </Bounce>
                    <Bounce left delay={2000} duration={1000}>
                        <div className="learn_more_C">
                            <div className="learn_more">
                                <span className="learn_more_two">LEARN MORE</span>
                            </div>
                        </div>
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
