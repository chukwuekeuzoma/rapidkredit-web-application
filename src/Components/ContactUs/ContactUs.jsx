import React, { useState } from 'react'
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
        color: '#392fff',
      },
      '& .MuiInputBase-root': {
        color: '#392fff'
      },
      '&.MuiTextField-root label': {
        top: 8,
        bottom: 8
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: '#392fff',
        },
        '&:hover': {
          borderColor: '#392fff',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#392fff',
        },
  
      },
    },
    formControl: {
      minWidth: 120,
    },
  
  });


export default function ContactUs() {
    const classes = useStyles();

    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [subject, setsubject] = useState("")
    const [message, setmessage] = useState("")

    const onSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <div>
                <Fade delay={1000} duration={1000}>
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
                </Fade>
                <div className="contactus_icon_container">
                    <Bounce left delay={1000} duration={1000}>
                        <div className="contactus_info">
                            <DraftsIcon className="contactus_icon" /><br />
                            <h3>Email</h3>
                            <span className="contactus_text">info@rapidkredit.com<br />
                        support@rapidkredit.com</span>
                        </div>
                    </Bounce>
                    <Fade delay={1000} duration={1000}>
                        <div className="contactus_info">
                            <LocalPhoneIcon className="contactus_icon" /><br />
                            <h3>Phone</h3>
                            <span className="contactus_text">+234 12345679<br />
                        +234 01234567</span>
                        </div>
                    </Fade>
                    <Bounce right delay={1000} duration={1000}>
                        <div className="contactus_info">
                            <LocationOnIcon className="contactus_icon" /><br />
                            <h3>Location</h3>
                            <span className="contactus_text">8 providence, street<br />
                        Lekki phase 1, Lagos NG</span>
                        </div>
                    </Bounce>
                </div>

                <div className="contactus_log_container">
                    <div className="contactus_picture_container">
                        <Bounce left delay={1000} duration={1000}><div className="contactus_picture"></div></Bounce>
                        <Bounce left delay={2000} duration={1000}><div className="contactus_color_box_one"></div></Bounce>
                        <Bounce left delay={3000} duration={1000}><div className="contactus_color_box_two"></div></Bounce>
                    </div>
                    <Bounce right delay={1000} duration={1000}>
                        <div className="contactus_Earn_before">
                            <Grid>
                                <Paper elevation={3} className="register_paper">
                                    <div>
                                        <h2>Leave us <br/>A message</h2>
                                    </div>
                                    <form className={classes.root} onSubmit={onSubmit}>
                                        <div className="contact_field">
                                            <TextField
                                                size="small"
                                                label="Name"
                                                placeholder="Name"
                                                name="Name"
                                                type="name"
                                                variant="outlined"
                                                className="contact_textfield"
                                                onChange={e => setname(e.target.value)}
                                            />
                                        </div>
                                        <div className="contact_field">
                                            <TextField
                                                size="small"
                                                label="Email"
                                                placeholder="Email"
                                                name="email"
                                                type="email"
                                                variant="outlined"
                                                className="contact_textfield"
                                                onChange={e => setemail(e.target.value)}
                                            />
                                        </div>
                                        <div className="contact_field">
                                            <TextField
                                                size="small"
                                                label="Subject"
                                                placeholder="Subject"
                                                name="Subject"
                                                type="name"
                                                variant="outlined"
                                                className="contact_textfield"
                                                onChange={e => setsubject(e.target.value)}
                                            />
                                        </div>
                                        <div className="contact_field">
                                            <TextField
                                                size="small"
                                                label="Massage"
                                                placeholder="Massage"
                                                multiline
                                                rows={4}
                                                variant="outlined"
                                                className="contact_textfield"
                                                onChange={e => setmessage(e.target.value)}
                                            />
                                        </div>
                                        <div className="contact_Botton_container">
                                            <Button variant="outlined" className="contact_Button" type="submit"  disabled={!name || !email || !subject || !message}>
                                            Send
                                            </Button>
                                        </div>
                                    </form>
                                </Paper>
                            </Grid>

                        </div>
                    </Bounce>
                </div>



            </div>
        </>
    )
}
