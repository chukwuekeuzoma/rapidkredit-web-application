import React, { useState} from 'react'
import "./Password.scss"
import { Grid, Paper, TextField, Button } from '@material-ui/core';
import { useFormik } from "formik"
import * as yup from 'yup';
import Fade from 'react-reveal/Fade'
import { makeStyles } from '@material-ui/core/styles';
import RapidOne from "../../images/rapid.png"
import Alert from '@material-ui/lab/Alert';
import {useParams} from "react-router-dom"



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

  var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");


  const validationSchema = yup.object({
    password: yup.string().matches(strongRegex, "please enter a strong password").required(),
    confirmPassword:yup.string().when("password", {
       is: val => (val && val.length > 0 ? true:false),
       then: yup.string().oneOf([yup.ref("password")], "password does not match")
    }),
    
  });


export default function Password() {

  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
       
    const classes = useStyles();

    const {token} = useParams();
    
    const onSubmit = async (values) => {
         const {confirmPassword, password} = values;

        fetch(`https://rapidkredit.herokuapp.com/api/auth/register/accept/${token}`, {
          method: 'post',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(password),
        }).then(response => response.json())
          .then(data => {
            if(data.status === "success"){
            setSuccess(data.message)
            setError("")
            };
            if(data.status === "error"){
              setError(data.message)
              setSuccess("")
            }
            formik.resetForm();
            console.log(data.message)
          })
          
          .catch((error) => {
            setError(error.data.message)
            setSuccess("")
            console.error('Error:', error);
          });
      };


    const formik = useFormik({
        initialValues: {
          password: "",
          confirmPassword: "",
          
        },
        onSubmit,
        validateOnBlur: true,
        validationSchema: validationSchema,
        
      });

 

    return (
        <>
            <div>
              <Fade right duration={300}>
                <Grid>
                    <Paper elevation={8} className="password_paper">
                        <div className="password_logo">
                        <img src={RapidOne} alt="tw" height="50px" />
                        </div>
                        {error && <Alert severity="error">{error}</Alert>}
                        {success && <Alert severity="success">{success}</Alert>}
                        <form className={classes.root}  onSubmit={formik.handleSubmit}>
                            <div className="password_input">
                                <TextField
                                    size="small"
                                    label="password"
                                    placeholder="password"
                                    name="password"
                                    type="password"
                                    variant="outlined"
                                    className="register_textfield"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                            </div>
                            <div className="Password_field_container">
                                <span className="Password_field">
                                    {formik.touched.password && formik.errors.password ? formik.errors.password : ""}
                                </span>
                            </div>
                            <div className="password_input">
                                <TextField
                                    size="small"
                                    label="Confirm Password"
                                    placeholder="Confirm Password"
                                    name="confirmPassword"
                                    type="password"
                                    variant="outlined"
                                    className="register_textfield"
                                    value={formik.values.confirmPassword}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                            </div>
                            <div className="Password_field_container">
                                <span className="Password_field">
                                    {formik.touched.confirmPassword && formik.errors.confirmPassword? formik.errors.confirmPassword : ""}
                                </span>
                            </div>
                            <div className="password_Botton_container">
                               <Button variant="outlined" className="password_Button" disabled={!formik.isValid} type="submit">Register</Button>
                            </div>
                        </form>

                    </Paper>
                </Grid>
              </Fade>
                
            </div>
        </>
    )
}
