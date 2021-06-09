import React from 'react'
import "./BodyTwo.scss"
import Earnbeforepayday from "../../images/earnbeforepayday.jpg"
import Bounce from 'react-reveal/Bounce';


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
                        <h2 className="Lorem_H">Lorem Ipsum</h2>
                            <p className="Lorem_p">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing<br/>elit,sed do eiusmod tempor
                                incididunt ut<br/>labore et dolore magna
                                aliqua. Quis <br/> ipsum suspendisse ultrices
                                gravida.Risus commodo viverra <br/>maecenas
                                accumsan lacus vel facilisis
                            </p>
                        </div>
                    </Bounce>
                    <Bounce right delay={2000} duration={1000}>
                        <div className="learn_more_C">
                            <div className="learn_more">
                                <span className="learn_more_two">LEARN MORE</span>
                            </div>
                        </div>
                    </Bounce>
                </div>
            </div>
        </>
    )
}

