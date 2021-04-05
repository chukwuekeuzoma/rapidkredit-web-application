import React from 'react'
import Fade from 'react-reveal/Fade'
import "./SettlementPage.scss"
import {Button } from '@material-ui/core';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';

export default function SettlementPage() {
    return (
        <>
            <div>
                <Fade big  duration={1000}>
                    <div className="settelment_container">
                        <h2>Settlement</h2>
                    </div>
                    <div className="ST_Grid_container">
                        <div className="ST_content_one">
                            <div className="ST_Header">
                                <div className="ST_Header_content">
                                    <span className="ST_Numbers">Numbers of <br/>Settlement</span>
                                    <span className="ST_Numbers_one">2</span>
                                </div>
                                <div  className="ST_Header_content_two">
                                    <span className="ST_Total">Total<br/>Commissions</span>
                                    <span className="ST_Total_one">N&nbsp;23,000</span>
                                </div>
                                <div className="ST_Number_Days_container">
                                    <div className="ST_Days_container">
                                        <div className="ST_Number_of_days"><span>Pending<br/>Settlement</span></div>
                                    </div>
                                    <div className="ST_Days_container_two">
                                        <div className="ST_Figures"><span>1</span></div>
                                    </div>
                                </div>
                                <div className="ST_Icon_Container">
                                     <CalendarTodayIcon className ="ST_Icon"/><br/> 
                                     <div className="ST_Date"><span>Feb<br/>2021</span></div>  
                                </div>
                            </div>

                        </div>
                        <div className="ST_content_two">2</div>               
                    </div>
                </Fade>
            </div>
        </>
    )
}
