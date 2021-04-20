import React, { useState, useEffect } from 'react'
import Fade from 'react-reveal/Fade'
import "./ForgotPasswordone.scss"
import { Grid, Paper, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import RapidOne from "../../images/rapid.png"
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
    email: yup.string().email("Pls enter a valid email address").required(),
    companyId: yup.string().required("Pls select a company"),
});

export default function ForgotPasswordone() {


    const classes = useStyles();

    const [Companydata, setCompanydata] = useState([])
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    

    useEffect(() => {
        axios.get("companies")
            .then(companydata => setCompanydata(companydata.data.data))
            .catch(e => console.log(e))
    }, [])

    
    const onSubmit = async (values) =>{
        axios.post('auth/password/reset', values)
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
            email: "",
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
                        <Paper elevation={3} className="FPWO_paper">
                            <div className="FPWO_logo">
                                <img src={RapidOne} alt="tw" height="50px" />
                            </div>
                            <div>
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
                                                <option key={index} value={id}>
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
                                <div className="register_Botton_container">
                                    <Button variant="outlined" className="register_Button" type="submit" disabled={!formik.isValid}>Submit</Button>
                                </div>

                            </form>

                        </Paper>
                    </Grid>
                </Fade>

            </div>
        </>
    )
}
