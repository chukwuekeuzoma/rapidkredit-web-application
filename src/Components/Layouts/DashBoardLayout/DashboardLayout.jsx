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
            <div className ="DBN_container">
                <div className="DBN_options_container">
                    <div className="DBN_Rapidone">
                        <img src={RapidOne} alt="tw" height="50px"/>
                    </div>
                    <div className="DBN_icon_container">
                       <div className="DBN_icon_container_select">
                          <div className="DBN_c">
                                <DashboardIcon className="DashboardIcon"/>
                                <span>Dashboard</span>
                          </div>
                       </div>
                       <div className="DBN_icon_container_select">
                          <div className="DBN_c">
                                <CallReceivedIcon className="CallReceivedIcon"/>
                                <span className="Requests">Requests<span style={{opacity:"0"}}>....</span></span>
                           </div>
                        </div>
                        <div className="DBN_icon_container_select">
                          <div className="DBN_c">
                                <RedeemIcon className="RedeemIcon"/>
                                <span>Settlements</span>
                           </div>
                        </div>
                        <div className="DBN_icon_container_select">
                          <div className="DBN_c">
                                <PersonIcon className="PersonIcon"/>
                                <span className="Profile">Profile<span style={{opacity:"0"}}>...........</span></span>
                           </div>
                        </div>
                    </div>

                    <div className="DBN_logout_container">
                      <div>
                        <div className="DBN_HelpOutline_container">
                            <div className="DBN_HelpOutlineIcon_container">
                                <HelpOutlineIcon className="HelpOutlineIcon"/>
                                <span>Support<span style={{opacity:"0"}}>...............</span></span>
                            </div>
                        </div>
                        <div className="DBN_ExitToApp_container">
                            <div className="DBN_ExitToAppIcon_container">
                                <ExitToAppIcon className="ExitToAppIcon"/>
                                <span>Logout<span style={{opacity:"0"}}>..................</span></span>
                            </div>
                        </div>
                      </div>
                   </div>
                </div>
            </div>
        </>
    )
}
