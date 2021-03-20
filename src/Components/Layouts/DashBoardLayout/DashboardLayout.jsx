import React from 'react'
import DashBoardNav from "../../DashBoardNav/DashBoardNav"
import "./DashBoardLayout.scss"
import Fade from 'react-reveal/Fade'


export default function DashboardLayout (props) {
    return (
        <>
        
            <div className ="dashboardlayout_container">
               <Fade left duration={1000}>
                    <div className="DBL_dashboardnav_container">
                        <DashBoardNav/>
                    </div>
                </Fade>
                 <div className="DBL_children_container">
                    {props.children}
                </div>
            </div>
        
        </>
    )
}
