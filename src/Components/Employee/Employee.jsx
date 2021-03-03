import React from 'react'
import "./Employee.scss"
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import ScheduleIcon from '@material-ui/icons/Schedule';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';

export default function Employee() {
    return (
        <>
        
            <div>
                <div className="Employee_container">
                    <div className="Employee_picture_container">
                         <div className="Employee_color_box_one"></div>
                         <div className="Employee_color_box_two"></div>
                         <div className="Employee_picture"></div>
                    </div>
                    <div className="Employee_Earn_before">
                        <h1>Earn Before<br/>payday</h1>
                        suspendisse ultri gravida.Risus commodo<br/> 
                        facilisis Lorem. suspendisse ultrices suspendisse ultri gravida.<br/>
                        Risus commodo maecenas accumsan lacus vel facilisis Lorem.<br/>
                        facilisis Lorem. suspendisse ultrices suspendisse ultri gravida.<br/>
                        Risus commodo maecenas accumsan lacus vel facilisis Lorem.<br/>
                        facilisis Lorem. suspendisse ultrices suspendisse ultri gravida.<br/>
                        Risus commodo maecenas accumsan lacus vel facilisis Lorem.<br/>
                    </div>
                </div>
                
            </div>
            <div className="Employee_Icon_container">
                <div>
                    <ScheduleIcon className="Employee_Icon_Classes"/>
                    <h1>Timely & <br/>
                        Convenient
                    </h1>
                    <span>
                        suspendisse ultri gravida.Risus commodo<br/> 
                        suspendisse ultri gravida.Risus commodo<br/>
                        suspendisse ultri gravida.Risus commodo<br/>
                        suspendisse ultri gravida.Risus commodo<br/>
                        suspendisse ultri gravida.Risus commodo<br/>
                        suspendisse ultri gravida.Risus commodo<br/>
                        suspendisse ultri gravida.Risus commodo<br/>
                        suspendisse ultri gravida.Risus commodo<br/>
                    </span>
                </div>


                <div>
                   <AttachMoneyIcon className="Employee_Icon_Classes"/> 
                   <h1>Instant & <br/>
                        Credit
                    </h1>
                    <span>
                        suspendisse ultri gravida.Risus commodo<br/> 
                        suspendisse ultri gravida.Risus commodo<br/>
                        suspendisse ultri gravida.Risus commodo<br/>
                        suspendisse ultri gravida.Risus commodo<br/>
                        suspendisse ultri gravida.Risus commodo<br/>
                        suspendisse ultri gravida.Risus commodo<br/>
                        suspendisse ultri gravida.Risus commodo<br/>
                        suspendisse ultri gravida.Risus commodo<br/>
                    </span>


                </div>
                <div>
                   <TrendingUpIcon className="Employee_Icon_Classes"/>
                   <h1>Interest & <br/>
                        Credit
                    </h1>
                    <span>
                        suspendisse ultri gravida.Risus commodo<br/> 
                        suspendisse ultri gravida.Risus commodo<br/>
                        suspendisse ultri gravida.Risus commodo<br/>
                        suspendisse ultri gravida.Risus commodo<br/>
                        suspendisse ultri gravida.Risus commodo<br/>
                        suspendisse ultri gravida.Risus commodo<br/>
                        suspendisse ultri gravida.Risus commodo<br/>
                        suspendisse ultri gravida.Risus commodo<br/>
                    </span>

                </div>
            </div>
        </>
    )
}
