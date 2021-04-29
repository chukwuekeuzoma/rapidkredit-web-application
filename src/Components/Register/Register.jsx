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
import { useFormik } from "formik"
import * as yup from 'yup';
import axios from "axios"
import Alert from '@material-ui/lab/Alert';






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


const validationSchema = yup.object({
  firstName: yup.string().min(4, "Pls enter your real name").required("First name required"),
  lastName: yup.string().min(4, "Pls enter your real name").required("Last name required"),
  email: yup.string().email("Pls enter a valid email address").required(),
  username: yup.string().min(4, "Pls enter your username").required("username required"),
  companyId: yup.string().required("Pls select a company"),
  country: yup.string().required("Pls select your country"),
  phone: yup.string().min(11, "Pls enter a valid phone number").required("Phone number required")
});

export default function Register() {


  const classes = useStyles();
  const [Companydata, setCompanydata] = useState([])
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")


  useEffect(  async () => {
    axios.get("companies")
      .then(companydata => setCompanydata(companydata.data.data))
      .catch(e => console.log(e))
  }, [])
 

  const onSubmit = async (values) =>{
    axios.post('auth/register/', values)
    .then(response => {
            if(response.data.status === "success"){
              setSuccess(response.data.message)
              setError("")
              };
              if(response.data.status === "error"){
                setError(response.data.message)
                setSuccess("")
              }
              formik.resetForm();
              // console.log(data.data.message)
          })
          .catch((error) => {
                  setError(error.response.data.message)
                  setSuccess("")
                  // console.error('Error:', error);
            });
  }





  const formik = useFormik({
    initialValues: {
      companyId: "",
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      phone: "",
      country: "",
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
            <Paper elevation={3} className="register_paper">
              <div className="Register_logo">
                <Link to="/" className="links"><img src={RapidOne} alt="tw" height="50px" /></Link>
              </div>
              <div className="Alert">
                {error && <Alert severity="error">{error}</Alert>}
                {success && <Alert severity="success">{success}</Alert>}
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
                      onBlur={formik.handleBlur}
                      label=" Select your organization"
                      inputProps={{
                        name: 'companyId',

                      }}
                    >
                      <option aria-label="None" value="" />

                      {Companydata.map(({ id, company_name }, index) => (
                        <option key={index} value={id} >
                          {company_name}
                        </option>
                      ))}
                    </Select>
                  </FormControl>
                </div>
                <div className="field_container">
                  <span className="field">
                    {formik.touched.companyId && formik.errors.companyId ? formik.errors.companyId : ""}
                  </span>
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
                      onBlur={formik.handleBlur}
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
                <div className="field_container">
                  <span className="field">
                    {formik.touched.country && formik.errors.country ? formik.errors.country : ""}
                  </span>
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
                    onBlur={formik.handleBlur}
                  />
                </div>
                <div className="field_container">
                  <span className="field">
                   {formik.touched.firstName && formik.errors.firstName ? formik.errors.firstName : ""}
                  </span>
                </div>
                <div className="register_input_email">
                  <TextField
                    size="small"
                    label="Lastname"
                    placeholder="Lastname"
                    name="lastName"
                    type="name"
                    variant="outlined"
                    className="register_textfield"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                <div className="field_container">
                  <span className="field">
                    {formik.touched.lastName && formik.errors.lastName ? formik.errors.lastName : ""}
                  </span>
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
                    onBlur={formik.handleBlur}
                  />
                </div>
                <div className="field_container">
                  <span className="field">
                    {formik.touched.email && formik.errors.email ? formik.errors.email : ""}
                  </span>
                </div>
                <div className="register_password">
                  <TextField
                    size="small"
                    label="Username"
                    placeholder="Username"
                    name="username"
                    type="name"
                    variant="outlined"
                    className="register_textfield"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                <div className="field_container">
                  <span className="field">
                    {formik.touched.username && formik.errors.username ? formik.errors.username : ""}
                  </span>
                </div>
                <div className="register_password">
                  <TextField
                    size="small"
                    label="Phone"
                    name="phone"
                    placeholder="Phone"
                    type="phone"
                    variant="outlined"
                    className="register_textfield"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                <div className="field_container">
                  <span className="field">
                   {formik.touched.phone && formik.errors.phone ? formik.errors.phone : ""}
                  </span>
                </div>
                <div className="register_Botton_container">
                  <Button variant="outlined" className="register_Button" type="submit" disabled={!formik.isValid}>Register</Button>
                </div>
              </form>
              <div className="login_register">
                <div>
                  <span className="dont_have">Have an account?</span>
                  <Link to={{pathname:"/Login"}} className="links"><span className="login_register">Login here</span></Link>
                </div>
              </div>

            </Paper>


          </Grid>
        </Fade>
      </div>
    </>
  )
}


