import React from 'react'
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import DraftsIcon from '@material-ui/icons/Drafts';
import "./ContactUs.scss"
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, TextField, Button } from '@material-ui/core';



const useStyles = makeStyles({
    root: {
      '& label.Mui-focused': {
        color: 'rgb(94, 94, 170)',
      },
      '& .MuiInputBase-root': {
        color: 'rgb(94, 94, 170)'
      },
      '&.MuiTextField-root label': {
        top: 8,
        bottom: 8
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'rgb(94, 94, 170)',
        },
        '&:hover': {
          borderColor: 'rgb(94, 94, 170))',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'rgb(94, 94, 170)',
        },
  
      },
    },
    formControl: {
      minWidth: 120,
    },
  
  });


export default function ContactUs() {
    const classes = useStyles();


    return (
        <>
            <div>
                <div className="Contactus_container">
                    <h1>Contact us</h1>
                        suspendisse ultri gravida Risus commodo maecenas accumsan lacus vel facilisis Lorem.
                        suspendisse ultrices<br />
                        suspendisse ultri gravida.Risus commodo maecenas accumsan lacus vel facilisis Lorem.
                        <br />
                        suspendisse ultri gravida.Risus commodo maecenas accumsan lacus vel facilisis Lorem.
                        <br />
                        suspendisse ultri gravida.Risus commodo maecenas accumsan lacus vel.<br />
                </div>
                <div className="contactus_icon_container">
                    <div className="contactus_info">
                        <DraftsIcon className="contactus_icon" /><br />
                        <h3>Email</h3>
                        <span className="contactus_text">info@rapidkredit.com<br />
                       support@rapidkredit.com</span>
                    </div>
                    <div className="contactus_info">
                        <LocalPhoneIcon className="contactus_icon" /><br />
                        <h3>Phone</h3>
                        <span className="contactus_text">+234 12345679<br />
                      +234 01234567</span>
                    </div>
                    <div className="contactus_info">
                        <LocationOnIcon className="contactus_icon" /><br />
                        <h3>Location</h3>
                        <span className="contactus_text">8 providence, street<br />
                      Lekki phase 1, Lagos NG</span>
                    </div>

                </div>

                <div className="contactus_log_container">
                    <div className="contactus_picture_container">
                        <div className="contactus_color_box_one"></div>
                        <div className="contactus_color_box_two"></div>
                        <div className="contactus_picture"></div>
                    </div>
                    <div className="contactus_Earn_before">
                        <Grid>
                            <Paper elevation={3} className="register_paper">
                                <div>
                                    <h2>Leave us <br/>A message</h2>
                                </div>
                                
                            </Paper>
                        </Grid>

                    </div>
                </div>



            </div>
        </>
    )
}
