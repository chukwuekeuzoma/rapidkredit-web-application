import React from 'react'
import "./Employer.scss"
import VideoPlayer from "react-video-js-player"
import watch from "../../Videos/Javascript.mp4"
import Employerpicture from "../../images/employer.jpg";

export default function Employer() {
    return (
        <>
           <div className="Emp_container_three">
                <div className="Emp_manwithphone_container">
                     <div className="Emp_color_box_one"></div>
                     <div className="Emp_color_box_two"></div>
                   <div className="Emp_Man">
                       {/* <img src={Employerpicture} alt="tw"/> */}
                    </div>
                </div>
                <div className="Emp_H_P_Loerm_contanier">
                    <div className="Emp_H_P_Loerm">
                      <h2 className="Emp_Lorem_H">Lorem Ipsum</h2>
                        <p className="Emp_Lorem_p">
                            Lorem ipsum dolor sit amet, consectetur
                            <br/>elit,sed do eiusmod tempor
                            incididunt ut<br/>labore et dolore magna
                            aliqua. Quis ipsum<br/> suspendisse ultrices
                            gravida.Risus commodo<br/>maecenas
                            accumsan lacus vel facilisis Lorem.
                            <br/>consectetur elit,sed do eiusmod
                            adipiscing<br/> tempor
                            incididunt ut labore et dolore magna<br/>
                            aliqua.Quis ipsum suspendisse ultrices<br/>
                            gravida.Risus commodo viverra <br/>maecenas
                            accumsan lacus vel facilisis.
                        </p>
                    </div>
                </div>
            </div>
            <div className="video_container">
                <div>
                    <h2 className="Ve_Lorem_H">Lorem Ipsum</h2>
                        <p className="ve_Lorem_p">
                                Lorem ipsum dolor sit amet, consectetur
                                <br/>elit,sed do eiusmod tempor
                                incididunt ut<br/>labore et dolore magna
                                aliqua. Quis ipsum<br/> suspendisse ultrices
                                gravida.Risus commodo<br/>maecenas
                                accumsan lacus vel facilisis Lorem.
                        </p>
                </div>
                <div>
                    <VideoPlayer 
                        src={watch}
                        poster={Employerpicture}
                        width="500px"
                        height="300px"
                    />
                </div>
            </div>
            <div className="kredit_container">
                <div className="kredit">
                    <span>
                        Kredit
                    </span>
                </div>
            </div>
            <div className="time_convenient">
               <h1>Time & Convenient</h1>
               <br/> suspendisse ultrices
                gravida.Risus commodo maecenas
                accumsan lacus vel facilisis Lorem.<br/>
                suspendisse ultrices
                gravida.Risus commodo 
                accumsan lacus vel facilisis Lorem.<br/>
                suspendisse ultrices
                gravida.Risus
                accumsan lacus vel facilisis Lorem.<br/>
                Lorem ipsum dolor sit amet, consectetur
                <br/>elit,sed do eiusmod tempor
                incididunt ut<br/>labore et dolore magna
                aliqua. Quis ipsum
            </div>
            <div className="Emp_Register">
               <span className="Emp_Register_two">Register</span>
            </div>

           
        </>
    )
}
