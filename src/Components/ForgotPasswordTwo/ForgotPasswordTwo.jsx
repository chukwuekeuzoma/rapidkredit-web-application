import React, { useState } from 'react'
import "../PasswordPage/Password.scss"
import { Grid, Paper, TextField, Button } from '@material-ui/core';
import { useFormik } from "formik"
import * as yup from 'yup';
import Fade from 'react-reveal/Fade'
import { makeStyles } from '@material-ui/core/styles';
import RapidOne from "../../images/rapid.png"
import Alert from '@material-ui/lab/Alert';
import { Link } from "react-router-dom"
import {useParams} from "react-router-dom"
import axios from "axios"


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

})

var strongRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{8,})");


const validationSchema = yup.object({
    password: yup.string().matches(strongRegex, "password must contain uppercase,lowercase with num & 8 characters").required(),
    confirmPassword: yup.string().when("password", {
        is: val => (val && val.length > 0 ? true : false),
        then: yup.string().oneOf([yup.ref("password")], "password does not match")
    }),

});

export default function ForgotPasswordTwo() {

    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    const [button, setButton] = useState(false)


    const classes = useStyles();
    
    const {token} = useParams();


    const onSubmit = async (values) => {
        const { confirmPassword, ...rest } = values;
        axios.patch(`auth/reset/password/${token}`, rest)
            .then(response => {
                if (response.data.status === "success") {
                    setSuccess(`${response.data.message} you can Login`)
                    setError("")
                    setButton(true)
                };
                if (response.data.status === "error") {
                    setError(response.data.message)
                    setSuccess("")
                }
                formik.resetForm();
                // console.log(data.message)
            })

            .catch((error) => {
                setError(error.response.data.message)
                setSuccess("")
                // console.error('Error:', error);
            });
    }

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
                        <Paper elevation={3} className="password_paper">
                            <div className="password_logo">
                                <img src={RapidOne} alt="tw" height="50px" />
                            </div>
                            {error && <Alert severity="error">{error}</Alert>}
                            {success && <Alert severity="success">{success}</Alert>}
                            {button ? <div className="password_Botton_container">
                                <Link  to={{pathname:"/Login"}} className="links"><Button variant="outlined" className="password_Button" >Login</Button></Link>
                            </div>
                                : <form className={classes.root} onSubmit={formik.handleSubmit}>
                                    <div className="password_input">
                                        <TextField
                                            size="small"
                                            label="New Password"
                                            placeholder="New Password"
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
                                            {formik.touched.confirmPassword && formik.errors.confirmPassword ? formik.errors.confirmPassword : ""}
                                        </span>
                                    </div>
                                    <div className="password_Botton_container">
                                        <Button variant="outlined" className="password_Button" disabled={!formik.isValid} type="submit">Submit</Button>
                                    </div>
                                </form>}
                            {/* <div className="login_register_pas">
                                <div>
                                    <span className="dont_have_pas">click here to...</span>
                                    <Link to={{pathname:"/Login"}} className="links"><span className="login_register_pas">Login</span></Link>
                                </div>
                            </div> */}

                        </Paper>
                    </Grid>
                </Fade>


            </div>
        </>
    )
}
