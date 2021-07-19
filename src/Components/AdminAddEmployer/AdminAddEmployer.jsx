import React, { useState, useEffect } from 'react'
import "./AdminAddEmployer.scss"
import { Grid, Paper, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


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
  })
  

export default function AdminAddEmployer(props) {
   
    const classes = useStyles();

    return (
        <>
            <div>
                <div className="AAE_container">
                    <h2>Add Employer</h2>
                </div>
                <div className="AAE_Grid_container">
                    <div className="AAE_content_one">
                    <div className="AAE_Password">New Employer</div>
                         <Grid>
                             <Paper elevation={3} className="AAE_Paper">
                                 <form className={classes.root}>
                                   <div className="AAE_input_email">
                                        <TextField
                                            size="small"
                                            label="Employer Name"
                                            placeholder="UEmployer Name"
                                            // name="username"
                                            type="name"
                                            variant="outlined"
                                            className="AAE_textfield"
                                            // onChange={}
                                        />
                                    </div>
                                    <div className="AAE_input_email">
                                        <TextField
                                            size="small"
                                            label="Logo"
                                            placeholder="Logo"
                                            // name="username"
                                            type="name"
                                            variant="outlined"
                                            className="AAE_textfield"
                                            // onChange={}
                                        />
                                    </div>
                                    <div className="AAE_input_email">
                                        <TextField
                                            size="small"
                                            label="HR Email"
                                            placeholder="HR Email"
                                            // name="username"
                                            type="name"
                                            variant="outlined"
                                            className="AAE_textfield"
                                            // onChange={}
                                        />
                                    </div>
                                    <div className="AAE_Botton_container">
                                           <Button variant="outlined" className="AAE_Button">Add Employer</Button>
                                    </div>
                                 </form>

                             </Paper>
                         </Grid>
                        
                    </div>
                </div>
            </div>
        </>
    );
}

