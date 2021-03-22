import React from 'react'
import "./Requestpage.scss"
import Grid from '@material-ui/core/Grid';
import Fade from 'react-reveal/Fade'

export default function Requestpage() {
    return (
        <> 
           <Fade big  duration={1000} className="fade">
                <div className="Request_container">
                    <h2>Request</h2>
                    <h2>
                        input will be place here
                    </h2>
                </div>
                <div>
                    <Grid container spacing={1}>
                        <Grid item xs={12} className="Request_page_grid_one">
                        </Grid>
                        <Grid item xs={12} className="Request_page_grid_two">
                        </Grid>
                    </Grid>
                </div>
            </Fade>
        </>
     )
}
