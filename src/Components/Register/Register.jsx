import React, { useState, useEffect } from 'react'
import { Grid, Paper, TextField, Button } from '@material-ui/core';
import Fade from 'react-reveal/Fade'
import "./Register.scss"
import RapidOne from "../../images/rapid.png"
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom"
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import {useFormik } from "formik"
import * as Yup from 'yup';
import axios from "axios"






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

})


export default function Register() {


  const classes = useStyles();
  const [Companydata, setCompanydata] = useState([])
  useEffect(() => {
    fetch("https://rapidkredit.herokuapp.com/api/companies")
      .then(response => response.json())
      .then(companydata => setCompanydata(companydata.data))
      .catch(e => console.log(e))
  }, [])

  const onSubmit=(values) =>{
    fetch('https://rapidkredit.herokuapp.com/api/auth/register', {
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body:JSON.stringify(values),
    }).then(response =>response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };
        
    


  const formik = useFormik({
    initialValues:{
        companyId:"",
        firstName:"",
        lastName:"",
        email:"",
        username:"",
        phone:"",
        country:"",
    },
    onSubmit,
    
  
  });
  return (
    <>
      <div>
        <Fade right duration={300}>
          <Grid>
            <Paper elevation={8} className="paper">
              <div className="Register_logo">
                <Link to="/" className="links"><img src={RapidOne} alt="tw" height="50px" /></Link>
              </div>
                 <form className={classes.root} onSubmit={formik.handleSubmit}>
                    <div className="select_input_email">
                      <FormControl variant="outlined" className="select_textfield" size="small">
                        <InputLabel htmlFor="outlined-age-native-simple">
                          Select your organization
                                        </InputLabel>
                        <Select
                          native
                          value={formik.values.companyId}
                          onChange={formik.handleChange}
                          label=" Select your organization"
                          inputProps={{
                            name: 'companyId',
                            
                          }}
                        >
                          <option aria-label="None" value="" />

                          {Companydata.map(({id, company_name }, index) => (
                            <option key={index} value={id}>
                              {company_name}
                            </option>
                          ))}
                        </Select>
                      </FormControl>
                    </div>
                    <div className="select_input_email">
                      <FormControl variant="outlined" className="select_textfield" size="small">
                        <InputLabel htmlFor="outlined-age-native-simple">
                          Select Country
                                        </InputLabel>
                        <Select
                          native
                          value={formik.values.country}
                          onChange={formik.handleChange}
                          label="Select Country"
                          inputProps={{
                            name: 'country',
                          }}
                        >
                          <option aria-label="None" value="" />
                          <option value="Nigeria">
                            Nigeria
                                          </option>
                          <option value="Ghana">
                            Ghana
                                          </option>
                          <option value="SouthAfrica">
                            SouthAfrica
                                          </option>
                        </Select>
                      </FormControl>
                    </div>
                    <div className="register_input_email">
                      <TextField
                        size="small"
                        label="Firstname"
                        placeholder="Firstname"
                        name="firstName"
                        type="name"
                        variant="outlined"
                        className="register_textfield"
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                      />
                    </div>
                    <div className="register_input_email">
                      <TextField
                        size="small"
                        label="Lastname"
                        placeholder="Lastname"
                        name ="lastName"
                        type="name"
                        variant="outlined"
                        className="register_textfield"
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                      />
                    </div>
                    <div className="register_input_email">
                      <TextField
                        size="small"
                        label="Email"
                        placeholder="Email"
                        name="email"
                        type="email"
                        variant="outlined"
                        className="register_textfield"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                      />
                    </div>
                    <div className="register_password">
                      <TextField
                        size="small"
                        label="Username"
                        placeholder="Username"
                        name ="username"
                        type="name"
                        variant="outlined"
                        className="register_textfield"
                        value={formik.values.userName}
                        onChange={formik.handleChange}
                      />
                    </div>
                    <div className="register_password">
                      <TextField
                        size="small"
                        label="Phone"
                        name ="phone"
                        placeholder="Phone"
                        type="phone"
                        variant="outlined"
                        className="register_textfield"
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                      />
                    </div>
                    <div className="register_Botton_container">
                      <Button variant="outlined" className="register_Button" type="submit">Register</Button>
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
