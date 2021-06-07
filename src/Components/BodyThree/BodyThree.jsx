import React from 'react'
import Employeewelness from "../../images/employeewelness.jpg";
import "../BodyTwo/BodyTwo.scss";


export default function BodyThree() {
    return (
       <>
         <div className="container_three">
                
                <div className="H_P_Loerm_contanier">
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
                    <div className="learn_more_C">
                        <div className="learn_more">
                            <span className="learn_more_two">learn more</span>
                        </div>
                    </div>
                </div>
                <div className="manwithphone_container">
                     <div className="color_box_one"></div>
                     <div className="color_box_two"></div>
                   <div className="Man">
                       <img src={Employeewelness} alt="tw"/>
                    </div>
                </div>
            </div>

       </>
    )
}
