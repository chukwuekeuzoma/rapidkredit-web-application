import React from 'react'
import "./Employer.scss"
import Employerpicture from "../../images/employer.jpg";

export default function Employer() {
    return (
        <>
           <div className="Emp_container_three">
                <div className="Emp_manwithphone_container">
                     <div className="Emp_color_box_one"></div>
                     <div className="Emp_color_box_two"></div>
                   <div className="Emp_Man">
                       <img src={Employerpicture} alt="tw"/>
                    </div>
                </div>
                <div className="Emp_H_P_Loerm_contanier">
                    <div className="Emp_H_P_Loerm">
                      <h2 className="Emp_Lorem_H">Lorem Ipsum</h2>
                        <p className="Emp_Lorem_p">
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing<br/>elit,sed do eiusmod tempor
                            incididunt ut<br/>labore et dolore magna
                            aliqua. Quis <br/> ipsum suspendisse ultrices
                            gravida.Risus commodo viverra <br/>maecenas
                            accumsan lacus vel facilisis
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
