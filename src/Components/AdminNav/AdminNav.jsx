// this adim page is just the duplicate of the dashboardnav but different write up

import React, { useState } from 'react'
import "../DashBoardNav/DashBoardNav.scss"
import RapidOne from "../../images/rapid.png"
import DashboardIcon from '@material-ui/icons/Dashboard';
import { Menu, Clear } from '@material-ui/icons'
import CallReceivedIcon from '@material-ui/icons/CallReceived';
import RedeemIcon from '@material-ui/icons/Redeem';
import PersonIcon from '@material-ui/icons/Person';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Link, useHistory } from "react-router-dom"


export default function AdminNav() {

    const [Active, setActive] = useState("");
    const [Navbar, setNavbar] = useState(false)

    const history = useHistory();

    const reloadLogout = () => {
        localStorage.removeItem("token")
        history.push("/Login")
        window.location.reload();

    }

    const Navchange = () => {
        setNavbar(!Navbar)
    }


    return (
        <>
            <div className="DBN_container">
                <div className="DBN_options_container">
                    <div className="DBN_Rapidone">
                        <img src={RapidOne} alt="tw" height="50px" />
                    </div>
                    <div className="DBN_icon_container">
                        <Link to="Adminhome" className="links">
                            <div onClick={() => setActive("DashboardIcon")} className={Active === "DashboardIcon" ? "DBN_icon_container_select_active" : "DBN_icon_container_select"}>
                                <div className="DBN_c">
                                    <DashboardIcon className="DashboardIcon" />
                                    <span>Home<span style={{ opacity: "0" }}>.............</span></span>
                                </div>
                            </div>
                        </Link>
                        <Link to="Adminemployers" className="links">
                            <div onClick={() => setActive("CallReceivedIcon")} className={Active === "CallReceivedIcon" ? "DBN_icon_container_select_active" : "DBN_icon_container_select"}>
                                <div className="DBN_c">
                                    <CallReceivedIcon className="CallReceivedIcon" />
                                    <span className="Requests">Employers<span style={{ opacity: "0" }}>.....</span></span>
                                </div>
                            </div>
                        </Link>
                        <Link to="Adminrequest" className="links">
                            <div onClick={() => setActive("RedeemIcon")} className={Active === "RedeemIcon" ? "DBN_icon_container_select_active" : "DBN_icon_container_select"}>
                                <div className="DBN_c">
                                    <RedeemIcon className="RedeemIcon" />
                                    <span>Request<span style={{ opacity: "0" }}>........</span></span>
                                </div>
                            </div>
                        </Link>
                        <Link to="Adminsettlement" className="links">
                            <div onClick={() => setActive("PersonIcon")} className={Active === "PersonIcon" ? "DBN_icon_container_select_active" : "DBN_icon_container_select"}>
                                <div className="DBN_c">
                                    <PersonIcon className="PersonIcon" />
                                    <span className="Profile">Settlements</span>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="DBN_logout_container">
                        <div>
                            <div className="DBN_HelpOutline_container">
                                <div className="DBN_HelpOutlineIcon_container">
                                    <HelpOutlineIcon className="HelpOutlineIcon" />
                                    <span>Support<span style={{ opacity: "0" }}>...............</span></span>
                                </div>
                            </div>
                            <div className="DBN_ExitToApp_container" onClick={reloadLogout}>
                                <div className="DBN_ExitToAppIcon_container">
                                    <ExitToAppIcon className="ExitToAppIcon" />
                                    <span>Logout<span style={{ opacity: "0" }}>..................</span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* mobile */}
            <div className="DBN_navigation">
                <div className="DBN_Rapidone_mobile">

                    <img src={RapidOne} alt="tw" height="65px" />
                </div>
                <div className="nav_bar_Menu_icon_mobile">
                    <div onClick={Navchange}>
                        {Navbar ? <Clear className="icon_color--clear_mobile" /> : <Menu className="icon_color_mobile" />}
                    </div>
                </div>
                <div className={Navbar ? "DBN_nav_bar_mobile" : "DBN_nav_bar_mobile-none"}>
                    <div className="DBN_icon_container_mobile">
                        <Link to="Adminhome" className="links">
                            <div onClick={() => setActive("DashboardIcon")} className={Active === "DashboardIcon" ? "DBN_icon_container_select_active_mobile" : "DBN_icon_container_select_mobile"}>
                                <div className="DBN_c_mobile">
                                    <DashboardIcon className="DashboardIcon_mobile" />
                                    <span>Home<span style={{ opacity: "0" }}>.............</span></span>
                                </div>
                            </div>
                        </Link>
                        <Link  to="Adminemployers" className="links">
                            <div onClick={() => setActive("CallReceivedIcon")} className={Active === "CallReceivedIcon" ? "DBN_icon_container_select_active_mobile" : "DBN_icon_container_select_mobile"}>
                                <div className="DBN_c_mobile">
                                    <CallReceivedIcon className="CallReceivedIcon_mobile"/>
                                    <span className="Requests">Employers<span style={{ opacity: "0" }}>.....</span></span>
                                </div>
                            </div>
                        </Link>
                        <Link  to="Adminrequest" className="links">
                            <div onClick={() => setActive("RedeemIcon")} className={Active === "RedeemIcon" ? "DBN_icon_container_select_active_mobile" : "DBN_icon_container_select_mobile"}>
                                <div className="DBN_c_mobile">
                                    <RedeemIcon className="RedeemIcon_mobile" />
                                    <span>Request<span style={{ opacity: "0" }}>........</span></span>
                                </div>
                            </div>
                        </Link>
                        <Link  to="Adminsettlement" className="links">
                            <div onClick={() => setActive("PersonIcon")} className={Active === "PersonIcon" ? "DBN_icon_container_select_active_mobile" : "DBN_icon_container_select_mobile"}>
                                    <div className="DBN_c_mobile">
                                        <PersonIcon className="PersonIcon_mobile" />
                                        <span className="Profile">Settlements</span>
                                    </div>
                            </div>
                        </Link>
                    </div>
                    <div className="DBN_logout_container_mobile">
                        <div>
                            <div className="DBN_HelpOutline_container_mobile">
                                <div className="DBN_HelpOutlineIcon_container_mobile">
                                    <HelpOutlineIcon className="HelpOutlineIcon_mobile"/>
                                    <span>Support<span style={{ opacity: "0" }}>...............</span></span>
                                </div>
                            </div>
                            <div className="DBN_ExitToApp_container_mobile" onClick={reloadLogout}>
                                <div className="DBN_ExitToAppIcon_container_mobile">
                                    <ExitToAppIcon className="ExitToAppIcon_mobile" />
                                    <span>Logout<span style={{ opacity: "0" }}>................</span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

