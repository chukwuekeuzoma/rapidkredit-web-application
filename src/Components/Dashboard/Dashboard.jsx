import React,{useState,useEffect} from 'react'
// import "./Dashboard.scss"
import "./Dashboard.css"
import {Button } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import {makeStyles} from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade'
import Select from '@material-ui/core/Select';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';



const useStyles = makeStyles({
    root: {
            '& label.Mui-focused': {
                color: 'rgb(17, 17, 66)',
              },
              '& .MuiInputBase-root': {
                color: 'rgb(17, 17, 66)'
               },
               '&.MuiTextField-root label' :{
                top: 8,
                bottom: 8
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'rgb(17, 17, 66) ',
                },
                '&:hover': {
                  borderColor: 'rgb(17, 17, 66)',
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'rgb(17, 17, 66)',
                },
               
              },
    },
    formControl: {
        minWidth: 120,
      },
    
  })


export default function Dashboard() {

    const classes =  useStyles();

    const [Companydata, setCompanydata] = useState([])
    useEffect(()=>{
      fetch("https://rapidkredit.herokuapp.com/api/companies")
      .then(response => response.json())
      .then(companydata => setCompanydata(companydata.data))
      .catch(e => console.log(e))
    },[])
    
     return (
        <>
           <Fade big duration={1000}>
                <div className="Dashboard_container">
                    <h2>Dashboard</h2>
                    
                        <form className={classes.root}>
                            <FormControl variant="outlined" className="Dashboard_select_textfield" size="small">
                                <InputLabel htmlFor="outlined-age-native-simple">
                                    Organization
                                </InputLabel>
                                <Select
                                native
                                // value={state.age}
                                // onChange={handleChange}
                                label="Organization"
                                inputProps={{
                                    name: 'age',
                                    id: 'outlined-age-native-simple',
                                }}
                                >
                                <option aria-label="None" value=""/>
                            
                                {Companydata.map(({id, company_name}, index) => (
                                    <option key={index} value={id}>
                                    {company_name}
                                    </option>
                                ))}
                                </Select>

                            </FormControl>
                        </form>
                   
                </div>
            
                <div className="DB_Grid_container">
                    <div className="DB_content_one">
                        <div className="DB_Header">
                            <div className="DB_Header_content">
                              <span className="Numbers">Numbers of <br/> request</span>
                              <span className="Numbers_one">2</span>
                            </div>
                            <div  className="DB_Header_content_two">
                              <span className="Total">Total amount <br/> Requested</span>
                              <span className="Total_one">N&nbsp;23,000</span>
                            </div>
                            <div  className="DB_Header_content_one">
                              <span className="Avaluable">Avaluable</span>
                              <span className="Avaluable_one">N36,250.00</span>
                              <Button variant="outlined" className="DB_Header_Button">REQUEST PAYOUT</Button>
                            </div>
                        </div>
                    </div>
                    <div className="DB_content_two">2</div>
                    <div className="DB_content_three">
                         <div className="circular">
                              <div className="inner"></div>
                              <div className="Numb">15<div className="Days">Days(s)</div></div>
                               <div className="circle">
                                  <div className="Bar Left">
                                      <div className="Progress"></div>
                                  </div>
                                  <div className="Bar Right">
                                      <div className="Progress"></div>
                                  </div>
                               </div>
                         </div>
                         <div className="Calander">
                             <div className="Calander_Number"><span>Number of days you've 
                             <br/>worked<br/>This month</span></div>
                             <div className="calander_icon">
                                  <CalendarTodayIcon/>
                                  <br/>
                                    Feb
                                   <br/>
                                   2021
                             </div>
                         </div>

                    </div>
                    <div className="DB_content_four">4</div>               
                </div>
            </Fade>    
        </>
    )
}
