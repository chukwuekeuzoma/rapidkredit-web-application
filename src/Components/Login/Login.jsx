import React,{useState} from 'react'
import { Grid,Paper,TextField,Button } from '@material-ui/core';
import Fade from 'react-reveal/Fade'
import "./Login.scss"
import RapidOne from "../../images/rapid.png"
import {makeStyles} from '@material-ui/core/styles';
import {Link,useHistory} from "react-router-dom"
import Loading from "../LoadingPage/Loading"
import Alert from '@material-ui/lab/Alert';
import axios from "axios"




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
    // const [Loader, setLoader] = useState(false)


    const history = useHistory();

    const values = {
      username,
      password
    }

    
    const onSubmit = (e) => {
      e.preventDefault();
      axios.post('auth/login/', values)
        .then( response =>{
              localStorage.setItem("token", JSON.stringify({
              token:response.data.data.token
            }))
            if(response.data.status === "success"){
              setSuccess(response.data.message)
              setError("")
              };
            if(response.data.status === "error"){
                setError(response.data.message)
                setSuccess("")
                
              }
            // console.log(response)
            history.push("/Dashboard")
          }).catch((error) => {
            setError(error.response.data.message)
            setSuccess("")
            // console.log('Error:', error);
          });
              

    }

   

    const classes =  useStyles();

    return (
        <>
        
            <div>
            <Fade left duration={300}>
              <Grid>
                 <Paper elevation={3} className="paper">
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
                               <Button variant="outlined" className="login_Button"  type="submit">Login</Button>
                            </div> 
                    </form>
                          
                          <div className="login_register">
                             <div>
                                <span className="dont_have">Don't have an account?</span>
                                <Link to={{pathname:"/Register"}} className="links"><span className="login_register">Register here</span></Link>
                                <Link to="Recoverpassword" className="links"><div className="forgotpassword"><span>Forgot password?</span></div></Link>
                             </div> 
                          </div>

                 </Paper>
                 

              </Grid>
               </Fade> 
            </div>
         
        </>
    )
}
