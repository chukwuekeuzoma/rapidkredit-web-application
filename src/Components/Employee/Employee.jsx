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
                            <div>
                                <h1>Earn Before payday</h1>
                                Money in the right place at the right time —<br/>
                                our product enables employees to view,<br/>
                                access and use 100% of their money as they earn it,<br/> 
                                with no changes to the way you run payroll. Fully accessible,<br/>
                                accurate and compliant.
                            </div>
                        </div>
                    </Bounce>
                </div>

            </div>
            <div className="Employee_Icon_container">
                <Bounce left delay={2000} duration={1000}>
                    <div className="text_aling_center_scheduleIcon">
                        <ScheduleIcon className="Employee_Icon_Classes"/>
                        <h1>Timely & 
                                Convenient
                            </h1>

                            Rapidkredit endeavours to increase financial stability<br/> 
                            for you by creating platforms that will enable you to <br/>
                            view, access and use 100% of your money as you earn it.<br/>
                            We have a  highly responsive, simple,<br/>
                            and a swift process which makes the overall<br/>
                            experience seamless for our clients. No delays,<br/>
                             no system changes- very convenient.
                    </div>
                </Bounce>
                <Fade delay={1000} duration={1000}>
                    <div className="text_aling_center_AttachMoneyIcon">
                        <AttachMoneyIcon className="Employee_Icon_Classes" />
                        <h1>Instant Credit</h1>
                        Rapidkredit gives you instant access to your earned pay.<br/> 
                        This means that you choose when you want to get paid.<br/> 
                        You can get instant access to your earned income or<br/>
                        receive it on the next business day<br/>
                         when you choose to use Rapidkredit
                    </div>
                </Fade>
                <Bounce right delay={2000} duration={1000}>
                    <div className="text_aling_center_TrendingUpIcon">
                        <TrendingUpIcon className="Employee_Icon_Classes" />
                        <h1>Interest Free  </h1>
                          Our platform enables you to be fully compliant while<br/> 
                          providing a hassle free, efficient and<br/>
                           cost effective experience. We change the way money moves with<br/>
                            no interest rate and with no changes to your payroll process

                    </div>
                </Bounce>
            </div>
        </>
    )
}
