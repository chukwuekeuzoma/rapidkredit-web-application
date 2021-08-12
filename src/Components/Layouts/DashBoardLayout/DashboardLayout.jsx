import React, {useState} from 'react'
import DashBoardNav from "../../DashBoardNav/DashBoardNav"
import "./DashBoardLayout.scss"
import Fade from 'react-reveal/Fade'
import { Link } from "react-router-dom"
import { Grid,Paper,Button } from '@material-ui/core';
import RapidOne from "../../../images/rapid.png"
// import useForceUpdate from 'use-force-update';



export default function DashboardLayout(props) {

    const Oneminute = 60000;
    let time = 10 * Oneminute;

    const [updateNow, setUpdateNow] = useState(true); 
    // const forceUpdate = useForceUpdate();

    const updateFunc = () => {
        setUpdateNow(!updateNow)
      }

    const remove = () => {
        localStorage.removeItem("token")
        window.location.reload();
        // updateFunc();
        // forceUpdate();
        
    }

    setTimeout(remove, time);

    let store = JSON.parse(localStorage.getItem("token"))



    return (
        <>
            {
                store && store.token ?
                    <div className="dashboardlayout_container">
                        <Fade left duration={1000}>
                            <div className="DBL_dashboardnav_container">
                                <DashBoardNav />
                            </div>
                        </Fade>
                        <div className="DBL_children_container">
                            {props.children}
                        </div>
                    </div>
                    :
                    <Fade right duration={300}>
                        <Grid>
                            <Paper elevation={3} className="DBL_paper">
                                <div className="DBL_logo">
                                    <Link to="/" className="links"><img src={RapidOne} alt="tw" height="50px" /></Link>
                                </div>
                                <div className="session">
                                    <h1>Session Expired</h1>
                                </div>
                                <div className="DBL_Botton_container">
                                    <Link to={{pathname:"/Login"}} className="links"><Button variant="outlined" className="DBL_Button">Please login</Button></Link>
                                </div>
                            </Paper>
                        </Grid>
                    </Fade>
            }
        </>
    )

}




