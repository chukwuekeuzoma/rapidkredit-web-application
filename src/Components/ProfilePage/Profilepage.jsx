import React from 'react'
import Fade from 'react-reveal/Fade'
import "./ProfilePage.scss"
import {Button } from '@material-ui/core';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import DraftsIcon from '@material-ui/icons/Drafts';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import Employee from "../../images/employee.jpg"
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Select from '@material-ui/core/Select';
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
        width:400,
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



export default function Profilepage() {
    
    const classes =  useStyles();

    return (
        <>
            <div>
                <Fade big  duration={1000}>
                    <div className="Profile_container">
                        <h2>Profile</h2>

                        <form className={classes.root}>
                            <FormControl variant="outlined" className="PR_select_textfield" size="small">
                                <InputLabel htmlFor="outlined-age-native-simple">
                                    Profile Info
                                </InputLabel>
                                <Select
                                native
                                // value={state.age}
                                // onChange={handleChange}
                                label="Profile Info"
                                inputProps={{
                                    name: 'age',
                                    id: 'outlined-age-native-simple',
                                }}
                                >

                                    <option aria-label="None" value=""/>
                            
                                    
                                    <option value="Employers">
                                       Employers
                                    </option>
                                    <option value="Accountinfo">
                                       Account Info
                                    </option>
                                    <option value="Security">
                                       Security
                                    </option>
                            
                                </Select>

                            </FormControl>
                        </form>
                    </div>
                    <div className="PR_Grid_container">
                        <div className="PR_content_one">
                            <div className="PR_Header">
                                <div className="PR_Header_content">
                                    <span className="PR_Numbers">Numbers of <br/> request</span>
                                    <span className="PR_Numbers_one">2</span>
                                </div>
                                <div  className="PR_Header_content_two">
                                    <span className="PR_Total">Total amount <br/> Requested</span>
                                    <span className="PR_Total_one">N&nbsp;23,000</span>
                                </div>
                                <div className="PR_Number_Days_container">
                                    <div className="PR_Days_container">
                                        <div className="PR_Number_of_days"><span>Number of<br/> of Days worked</span></div>
                                        <CalendarTodayIcon className ="PR_Icon"/><br/> 
                                    </div>
                                    <div className="PR_Days_container_two">
                                        <div className="PR_Figures"><span>15</span></div>
                                        <div className="PR_Date"><span>Feb<br/>2021</span></div>  
                                    </div>
                                </div>
                                <div  className="PR_Header_content_one">
                                    <span className="PR_Avaluable">Avaluable</span>
                                    <span className="PR_Avaluable_one">N36,250.00</span>
                                    <Button variant="outlined" className="PR_Header_Button">REQUEST PAYOUT</Button>
                                </div>
                            </div>
                        </div>
                        <div className="PR_content_two">
                            <div className="profile_content_container">
                                <div className="profile_content">
                                      <img src={Employee} alt="slideimage" className="PR_profile_image"/>
                                      <div><span className="Profile_name">John Doe</span><br/><span className="Profile_name_content">Lorem ipsum dolor sit amet<br/>consectetu</span></div>
                                </div>
                                <div className="Profile_draft"><DraftsIcon/><br/>Email<br/>info@rapidkredit.com</div>
                                <div className="profile_phone"><LocalPhoneIcon/><br/>Phone<br/>+234 12345679</div>
                            </div>
                            <div className="PR_Profile_details_container">
                                <div className="PR_no_of_days_worked_container">
                                    <div className="PR_no_of_days_worked">
                                        <div className="PR_no_of_days_worked_content"><span>3</span></div>
                                    </div>
                                    <div className="PR_no_of_days_worked_content_one"><span>Total Number of<br/>Organistion you work<br/>for</span></div>
                                </div>
                                   <div>
                                        <div className="PR_Employers">
                                            <span>Employers</span>
                                        </div>
                                        <TableContainer className="PR_Table">
                                            <Table > 
                                                <TableHead>
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
                                                            <img src={row.icon} alt="slideimage" className="PR_Table_cell" />
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
                                    <div className="PR_input_container">
                                        <div>
                                            <input type="file" id="file"/>
                                            <label htmlFor="file">
                                                <AddCircleOutlineIcon className="AddCircleOutlineIcon"/>
                                            </label>
                                        </div>
                                        <div className="AddCircleOutlineIcon_text">
                                            <span>Add New<br/>Employer</span>
                                        </div>
                                    </div>
                            </div>
                        </div>               
                    </div>
                </Fade>
            </div>
        </>
    )
}
