import React,{useState,useEffect} from 'react'
import "./Dashboard.scss"
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import {makeStyles} from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade'
import Select from '@material-ui/core/Select';



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
                        <div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div className="DB_content_two">2</div>
                    <div className="DB_content_three">3</div>
                    <div className="DB_content_four">4</div>               
                </div>
            </Fade>    
        </>
    )
}
