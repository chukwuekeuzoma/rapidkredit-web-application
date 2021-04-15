import React,{useState, Component} from 'react'
import { Grid,Paper,TextField, Checkbox,Typography,Button } from '@material-ui/core';
import Fade from 'react-reveal/Fade'
import "./Login.scss"
import RapidOne from "../../images/rapid.png"
import {makeStyles} from '@material-ui/core/styles';
import {Link,useHistory} from "react-router-dom"
import Alert from '@material-ui/lab/Alert';
import axios from "axios"
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

 

export default function () {
    
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("") 
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")

    const history = useHistory();

    const values = {
      username,
      password
    }

    
    const onSubmit = (e) => {
      e.preventDefault();
      axios.post('auth/login/', values)
        .then( data => {console.log(data);
              localStorage.setItem("token", JSON.stringify({
              token:data.data.data.token
            }))
            if(data.data.status === "success"){
              setSuccess(data.data.message)
              setError("")
              };
            if(data.data.status === "error"){
                setError(data.data.message)
                setSuccess("")
              }
            console.log(data.message)
            history.push("/Dashboard")
          }).catch((error) => {
            setError(error.data.message)
            setSuccess("")
            console.error('Error:', error);
          });
              

    }


    const classes =  useStyles();

    return (
        <>
            <div>
            <Fade left duration={300}>
              <Grid>
                 <Paper elevation={8} className="paper">
                    <div className="login_logo">
                    <img src={RapidOne} alt="tw" height="50px"/>
                    </div>
                    <div>
                      {error && <Alert severity="error">{error}</Alert>}
                      {success && <Alert severity="success">{success}</Alert>}
                    </div>
                     <form className={classes.root} onSubmit={onSubmit}>
                          <div className="login_input_email">
                                <TextField
                                    size="small"
                                    label="Username"
                                    placeholder="Username"
                                    name="username"
                                    type="name"
                                    variant="outlined"
                                    className="login_textfield"
                                    onChange={e =>  setUsername(e.target.value)}
                                />
                           </div>
                           <div className="login_input_password">
                                <TextField
                                    size="small"
                                    label="Password"
                                    placeholder="Password"
                                    type="password"
                                    variant="outlined"
                                    className="login_textfield"
                                    onChange={e => setPassword(e.target.value)}
                                />
                           </div>
                            <div className="login_Botton_container">
                            {/* <Link to="Dashboard" className="links"> */}
                               <Button variant="outlined" className="login_Button"  type="submit">Login</Button>
                            {/* </Link> */}
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
