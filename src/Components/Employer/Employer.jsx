import React from 'react'
import "./Employer.scss"
import VideoPlayer from "react-video-js-player"
import watch from "../../Videos/Javascript.mp4"
import Employerpicture from "../../images/aboutustwo.jpg";
import Bounce from 'react-reveal/Bounce';
import { Link} from "react-router-dom"

export default function Employer() {
    return (
        <>
            <div className="Emp_container_three">
                <div className="Emp_manwithphone_container">
                    <Bounce left delay={1000} duration={1000}><div className="Emp_Man"></div></Bounce>
                    <Bounce left delay={2000} duration={1000}><div className="Emp_color_box_one"></div></Bounce>
                    <Bounce left delay={3000} duration={1000}><div className="Emp_color_box_two"></div></Bounce>
                </div>
                <Bounce right delay={1000} duration={1000}>
                    <div className="Emp_H_P_Loerm_contanier">
                        <div className="Emp_H_P_Loerm">
                            <h2 className="Emp_Lorem_H">Employee Financial Flexibility</h2>
                            <p className="Emp_Lorem_p">
                                Employees can opt-in to receive automatic balance<br/>
                                alerts every time earnings are reported<br/>
                                and their balance goes up.<br/>
                                For your employees, the RapidKredit solution means<br/>
                                they can see how much money they’ve earned from any<br/>
                                 device, at any time.<br/>
                                The information they see is 100% accurate.<br/>
                                Our continuous flow of capital allows us to fund all<br/>
                                payments for your employees.<br/>
                                For your company this means that we can seamlessly<br/>
                                offer you all our services without any<br/>
                                changes to your existing processes.
                            </p>
                        </div>
                    </div>
                </Bounce>
            </div>
            <div className="video_container">
                <Bounce left delay={1000} duration={1000}>
                    <div>
                        <h2 className="Ve_Lorem_H">Employee Financial Flexibility</h2>
                        <p className="ve_Lorem_p">
                                The Rapidkredit platform changes the way money moves <br/>
                                between employer and employee — literally transforming <br/> 
                                the way employee compensation system works in Nigeria.<br/>
                                For your employees, the RapidKredit solution means they<br/>
                                 can see how much money they’ve earned from any device, at any time.<br/>
                                  The information they see is 100% accurate.<br/>
                                Our open connectivity into the banking system gives your<br/>
                                 employees instant access to their money, where they want, when they want.<br/>
                                Finally, our continuous flow of capital allows us to fund all payments.<br/>
                                 For your company this means that we can seamlessly offer you all our<br/>
                                  services without any changes to your existing processes. Or headaches for you.<br/>
                            </p>
                    </div>
                </Bounce>
                <Bounce right delay={1000} duration={1000}>
                    <div>
                        <VideoPlayer
                            src={watch}
                            poster={Employerpicture}
                            width="500px"
                            height="300px"
                        />
                    </div>
                </Bounce>
            </div>
            <div className="kredit_container">
                <div className="kredit">
                    <span>
                        Kredit
                    </span>
                </div>
            </div>
            <Bounce left delay={1000} duration={1000}>
                <div className="time_convenient">
                    <h1>Time & Convenient</h1>
                    <br /> suspendisse ultrices
                    gravida.Risus commodo maecenas
                    accumsan lacus vel facilisis Lorem.<br />
                    suspendisse ultrices
                    gravida.Risus commodo
                    accumsan lacus vel facilisis Lorem.<br />
                    suspendisse ultrices
                    gravida.Risus
                    accumsan lacus vel facilisis Lorem.<br />
                    Lorem ipsum dolor sit amet, consectetur
                    <br />elit,sed do eiusmod tempor
                    incididunt ut<br />labore et dolore magna
                    aliqua. Quis ipsum
                </div>
                <Link to={{ pathname: "/Register" }} className="links">
                    <div className="Emp_Register">
                        <span className="Emp_Register_two">Register</span>
                    </div>
                </Link>
            </Bounce>

        </>
    )
}
