import React from 'react'
import { Grid,Paper,TextField,Button } from '@material-ui/core';
import Fade from 'react-reveal/Fade'
import "./Register.scss"
import RapidOne from "../../images/rapid.png"
import {makeStyles} from '@material-ui/core/styles';
import {Link} from "react-router-dom"
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
import countries from "./data"




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
    formControl: {
        minWidth: 120,
      },
    
  })


  export default function Register() {
      
    const classes =  useStyles();

    return (
        <>
            <div>
            <Fade right duration={300}>
              <Grid>
                 <Paper elevation={8} className="paper">
                    <div className="Register_logo">
                       <Link to="/" className="links"><img src={RapidOne} alt="tw" height="50px" /></Link>
                    </div>
                     <form className={classes.root}>
                          <div className="select_input_email">
                            <FormControl variant="outlined" className="select_textfield" size="small">
                                    <InputLabel htmlFor="outlined-age-native-simple">
                                        Select your organization
                                    </InputLabel>
                                    <Select
                                    native
                                    // value={state.age}
                                    // onChange={handleChange}
                                    label=" Select your organization"
                                    inputProps={{
                                        name: 'age',
                                        id: 'outlined-age-native-simple',
                                    }}
                                    >
                                    <option aria-label="None" value="" />
                                   
                                    {countries.map(({code, name}, index) => (
                                        <option key={index} value={code}>
                                        {name}
                                        </option>
                                    ))}
                                    </Select>

                            </FormControl>

                          </div>
                          <div className="register_input_email">
                                <TextField
                                    size="small"
                                    id="email"
                                    label="Email"
                                    placeholder="Email"
                                    type="email"
                                    variant="outlined"
                                    className="register_textfield"
                                />
                           </div>
                           <div className="register_password">
                                <TextField
                                    size="small"
                                    id="password"
                                    label="Password"
                                    placeholder="Password"
                                    type="password"
                                    variant="outlined"
                                    className="register_textfield"
                                />
                           </div>
                           <div className="register_password">
                                <TextField
                                    size="small"
                                    id="ConfirmPassword"
                                    label="ConfirmPassword"
                                    placeholder="Password"
                                    type="password"
                                    variant="outlined"
                                    className="register_textfield"
                                />
                           </div>
                           <div className="register_Botton_container">
                              <Button variant="outlined" className="register_Button">Register</Button>
                           </div>
                    </form>
                          <div className="login_register">
                             <div>
                                <span className="dont_have">Have an account?</span>
                                <Link to="Login" className="links"><span className="login_register">Login here</span></Link>
                             </div> 
                          </div>

                 </Paper>
                 

              </Grid>
               </Fade> 
            </div>
        </>
    )
}

// https://stackoverflow.com/questions/50530294/reactjs-validateform-onsubmit-requires-a-few-clicks
