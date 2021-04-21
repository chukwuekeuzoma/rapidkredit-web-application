import React,{useState,useEffect} from 'react'
// import "./Dashboard.scss"
import "./Dashboard.css"
import {Button } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade'
import Select from '@material-ui/core/Select';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import PicThree from "../../images/carowhite4.png"
import PicFour from "../../images/carowhite5.png"
import PicFive from "../../images/carowhite6.png"




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

      Table: {
        minWidth:50,
      },
    
  })


  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.action.hover,
      color: theme.palette.common.black,
     
    },
    body: {
      fontSize: 14,
      padding:15,
      paddingBottom:0,
    },
  }))(TableCell);
  

  
  function createData(icon,name, calories, fat) {
    return {icon,name, calories,fat};
  }
  
  const rows = [
    createData(PicThree,'Eclair', 262, 16.0),
    createData(PicFour,'Cupcake', 305, 3.7),
    createData(PicFive,'Gingerbread', 356, 16.0),
  ];


export default function Dashboard() {

    const classes =  useStyles();

    // const [Companydata, setCompanydata] = useState([])
    // useEffect(()=>{
    //   fetch("https://rapidkredit.herokuapp.com/api/companies")
    //   .then(response => response.json())
    //   .then(companydata => setCompanydata(companydata.data))
    //   .catch(e => console.log(e))
    // },[])
    
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
                                {/* <option aria-label="None" value=""/>
                            
                                {Companydata.map(({id, company_name}, index) => (
                                    <option key={index} value={id}>
                                    {company_name}
                                    </option> */}

                                    <option aria-label="None" value=""/>
                            
                                    {rows.map((row, index) => (
                                    <option key={index} value={row.name}>
                                       {row.name}
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
                              <span className="Numbers_one">0</span>
                            </div>
                            <div  className="DB_Header_content_two">
                              <span className="Total">Total amount <br/> Requested</span>
                              <span className="Total_one">N&nbsp;0.00</span>
                            </div>
                            <div  className="DB_Header_content_one">
                              <span className="Avaluable">Avaluable</span>
                              <span className="Avaluable_one">N0.00</span>
                              <Button variant="outlined" className="DB_Header_Button">REQUEST PAYOUT</Button>
                            </div>
                        </div>
                    </div>
                    <div className="DB_content_two">
                        <div className="Portfolio">
                            <span className="Portfolio_one">Portfolio</span><br/>
                            <span className="Total_num">Total Number of Organisation<br/>you work for</span>
                        </div>
                        <br/>
                         <div className="Portfolio_circular">
                           <div className="Portfolio_inner">
                               <div className="Portfolio_Numb"><span>0</span></div>
                            </div>
                         </div>
                        <div style={{marginTop:"20px"}}>
                          <TableContainer className={classes.table}>
                              <Table className={classes.table}>
                                <TableHead >
                                  <TableRow>
                                    <StyledTableCell>Organisation</StyledTableCell>
                                    <StyledTableCell  align="right">Number of days worked</StyledTableCell>
                                  </TableRow>
                                </TableHead>
                                <TableBody>
                                  {rows.map((row) => (
                                    <TableRow key={row.name}>
                                      <StyledTableCell component="th" scope="row">
                                      <div className="Table_cellhead_container" >
                                          <img src={row.icon} alt="slideimage" className="Table_cell" />
                                          <div>{row.name}</div>
                                      </div>
                                      </StyledTableCell>
                                      <StyledTableCell  align="right">{row.calories}</StyledTableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                              </Table>
                            </TableContainer>
                        </div>
                    </div>
                    <div className="DB_content_three">
                         <div className="circular">
                              <div className="inner"></div>
                              <div className="Numb">0<div className="Days">Days(s)</div></div>
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
                    <div className="DB_content_four">
                          <div className="Position"><span>Positions(s)</span></div>
                          <TableContainer className={classes.table}>
                            <Table className={classes.table}>
                              <TableHead >
                                <TableRow>
                                  <StyledTableCell>Organisation</StyledTableCell>
                                  <StyledTableCell>Position</StyledTableCell>
                                  <StyledTableCell>Employer&nbsp;ID</StyledTableCell>
                                </TableRow>
                              </TableHead>
                              <TableBody>
                                {rows.map((row) => (
                                  <TableRow key={row.name}>
                                    <StyledTableCell component="th" scope="row">
                                     <div className="Table_cellhead_container" >
                                        <img src={row.icon} alt="slideimage" className="Table_cell" />
                                        <div>{row.name}</div>
                                     </div>
                                     </StyledTableCell>
                                    <StyledTableCell>{row.calories}</StyledTableCell>
                                    <StyledTableCell>{row.fat}</StyledTableCell>
                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                          </TableContainer>
                      </div>               
                </div>
            </Fade>    
        </>
    )
}
