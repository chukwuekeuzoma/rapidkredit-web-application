import React from 'react'
import "./DashBoardLayout.scss"
import RapidOne from "../../../images/rapid.png"
import DashboardIcon from '@material-ui/icons/Dashboard';
import CallReceivedIcon from '@material-ui/icons/CallReceived';
import RedeemIcon from '@material-ui/icons/Redeem';
import PersonIcon from '@material-ui/icons/Person';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

export default function DashboardLayout() {
    return (
        <>
            <div className ="DBL_container">
                <div className="DBl_options_container">
                    <div className="DBl_Rapidone">
                        <img src={RapidOne} alt="tw" height="50px"/>
                    </div>
                    <div className="DBl_icon_container">
                       <div className="DBl_icon_container_select">
                          <div className="DBl_c">
                                <DashboardIcon className="DashboardIcon"/>
                                <span>Dashboard</span>
                          </div>
                       </div>
                       <div className="DBl_icon_container_select">
                          <div className="DBl_c">
                                <CallReceivedIcon className="CallReceivedIcon"/>
                                <span className="Requests">Requests<span style={{opacity:"0"}}>....</span></span>
                           </div>
                        </div>
                        <div className="DBl_icon_container_select">
                          <div className="DBl_c">
                                <RedeemIcon className="RedeemIcon"/>
                                <span>Settlements</span>
                           </div>
                        </div>
                        <div className="DBl_icon_container_select">
                          <div className="DBl_c">
                                <PersonIcon className="PersonIcon"/>
                                <span className="Profile">Profile<span style={{opacity:"0"}}>...........</span></span>
                           </div>
                        </div>
                    </div>

                    <div className="DBl_logout_container">
                       <div><HelpOutlineIcon/></div>
                       <div><ExitToAppIcon/></div>
                   </div>
                </div>
            </div>
        </>
    )
}
