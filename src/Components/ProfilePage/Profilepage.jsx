import React from 'react'
import Fade from 'react-reveal/Fade'
import "./ProfilePage.scss"
import {Button } from '@material-ui/core';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';

export default function Profilepage() {
    return (
        <>
            <div>
                <Fade big  duration={1000}>
                    <div className="Profile_container">
                        <h2>Profile</h2>
                    </div>
                    <div className="PR_Grid_container">
                        <div className="PR_content_one">
                            <div className="PR_Header">
                                <div className="PR_Header_content">
                                    <span className="PR_Numbers">Numbers of <br/> request</span>
                                    <span className="PR_Numbers_one">2</span>
                                </div>
                                <div  className="PR_Header_content_two">
                                    <span className="PR_Total">Total amount <br/> Requested</span>
                                    <span className="PR_Total_one">N&nbsp;23,000</span>
                                </div>
                                <div className="PR_Number_Days_container">
                                    <div className="PR_Days_container">
                                        <div className="PR_Number_of_days"><span>Number of<br/> of Days worked</span></div>
                                        <CalendarTodayIcon className ="PR_Icon"/><br/> 
                                    </div>
                                    <div className="PR_Days_container_two">
                                        <div className="PR_Figures"><span>15</span></div>
                                        <div className="PR_Date"><span>Feb<br/>2021</span></div>  
                                    </div>
                                </div>
                                <div  className="PR_Header_content_one">
                                    <span className="PR_Avaluable">Avaluable</span>
                                    <span className="PR_Avaluable_one">N36,250.00</span>
                                    <Button variant="outlined" className="PR_Header_Button">REQUEST PAYOUT</Button>
                                </div>
                            </div>
                        </div>
                        <div className="PR_content_two">2</div>               
                    </div>
                </Fade>
            </div>
        </>
    )
}
