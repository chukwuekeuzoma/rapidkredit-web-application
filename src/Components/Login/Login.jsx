import React from 'react'
import { Grid,Paper,TextField, Checkbox,Typography,Button } from '@material-ui/core';
import Fade from 'react-reveal/Fade'
import "./Login.scss"
import RapidOne from "../../images/rapid.png"
import {makeStyles} from '@material-ui/core/styles';
import {Link} from "react-router-dom"
import FormControlLabel from '@material-ui/core/FormControlLabel';


const useStyles = makeStyles({
    root: {
            '& label.Mui-focused': {
                color: 'rgb(94, 94, 170)',
              },
              '& .MuiInputBase-root': {
                color: 'rgb(94, 94, 170)'
               },
               '&.MuiTextField-root label' :{
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
  })

 

export default function Login() {
      
    const classes =  useStyles();

    return (
        <>
            <div>
            <Fade left duration={300}>
              <Grid>
                 <Paper elevation={8} className="paper">
                    <div className="login_logo">
                    <Link to="/" className="links"><img src={RapidOne} alt="tw" height="50px" /></Link>
                    </div>
                     <form className={classes.root}>
                          <div className="login_input_email">
                                <TextField
                                    size="small"
                                    id="email"
                                    label="Email"
                                    placeholder="Email"
                                    type="email"
                                    variant="outlined"
                                    className="login_textfield"
                                />
                           </div>
                           <div className="login_input_password">
                                <TextField
                                    size="small"
                                    id="password"
                                    label="Password"
                                    placeholder="Password"
                                    type="password"
                                    variant="outlined"
                                    className="login_textfield"
                                />
                           </div>
                            <div className="login_Botton_container">
                                    <Button variant="outlined" className="login_Button">Login</Button>
                            </div> 
                    </form>
                          
                          <div className="login_register">
                             <div>
                                <span className="dont_have">Don't have an account?</span>
                                <Link to="Register" className="links"><span className="login_register">Register here</span></Link>
                             </div> 
                          </div>

                 </Paper>
                 

              </Grid>
               </Fade> 
            </div>
        </>
    )
}
