import React from 'react'
import "./Employee.scss"
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import ScheduleIcon from '@material-ui/icons/Schedule';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';

export default function Employee() {
    return (
        <>

            <div>
                <div className="Employee_container">
                    <div className="Employee_picture_container">
                        <Bounce left delay={1000} duration={1000}><div className="Employee_picture"></div></Bounce>
                        <Bounce left delay={2000} duration={1000}><div className="Employee_color_box_one"></div></Bounce>
                        <Bounce left delay={3000} duration={1000}><div className="Employee_color_box_two"></div></Bounce>
                    </div>
                    <Bounce right delay={1000} duration={1000}>
                        <div className="Employee_Earn_before">
                            <h1>Earn Before<br />payday</h1>
                            Money in the right place at the right time —<br/>
                            our product enables employees to view,<br/>
                            access and use 100% of their money as they earn it,<br/> 
                            with no changes to the way you run payroll. Fully accessible,<br/>
                            accurate and compliant.
                        </div>
                    </Bounce>
                </div>

            </div>
            <div className="Employee_Icon_container">
                <Bounce left delay={2000} duration={1000}>
                    <div>
                        <ScheduleIcon className="Employee_Icon_Classes" />
                        <h1>Timely & <br />
                                Convenient
                            </h1>
                        <span>
                            suspendisse ultri gravida.Risus commodo<br />
                                suspendisse ultri gravida.Risus commodo<br />
                                suspendisse ultri gravida.Risus commodo<br />
                                suspendisse ultri gravida.Risus commodo<br />
                                suspendisse ultri gravida.Risus commodo<br />
                                suspendisse ultri gravida.Risus commodo<br />
                                suspendisse ultri gravida.Risus commodo<br />
                                suspendisse ultri gravida.Risus commodo<br />
                        </span>
                    </div>
                </Bounce>
                <Fade delay={1000} duration={1000}>
                    <div>
                        <AttachMoneyIcon className="Employee_Icon_Classes" />
                        <h1>Instant & <br />
                            Credit
                        </h1>
                        <span>
                            suspendisse ultri gravida.Risus commodo<br />
                            suspendisse ultri gravida.Risus commodo<br />
                            suspendisse ultri gravida.Risus commodo<br />
                            suspendisse ultri gravida.Risus commodo<br />
                            suspendisse ultri gravida.Risus commodo<br />
                            suspendisse ultri gravida.Risus commodo<br />
                            suspendisse ultri gravida.Risus commodo<br />
                            suspendisse ultri gravida.Risus commodo<br />
                        </span>
                    </div>
                </Fade>
                <Bounce right delay={2000} duration={1000}>
                    <div>
                        <TrendingUpIcon className="Employee_Icon_Classes" />
                        <h1>Interest & <br />
                        Credit
                    </h1>
                        <span>
                            suspendisse ultri gravida.Risus commodo<br />
                        suspendisse ultri gravida.Risus commodo<br />
                        suspendisse ultri gravida.Risus commodo<br />
                        suspendisse ultri gravida.Risus commodo<br />
                        suspendisse ultri gravida.Risus commodo<br />
                        suspendisse ultri gravida.Risus commodo<br />
                        suspendisse ultri gravida.Risus commodo<br />
                        suspendisse ultri gravida.Risus commodo<br />
                        </span>
                    </div>
                </Bounce>
            </div>
        </>
    )
}
