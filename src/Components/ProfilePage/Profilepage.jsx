import React, { useState, useEffect } from 'react'
import Fade from 'react-reveal/Fade'
import "./ProfilePage.scss"
import { Button } from '@material-ui/core';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import DraftsIcon from '@material-ui/icons/Drafts';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import Employee from "../../images/employee.jpg"
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles, withStyles } from '@material-ui/core/styles';
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
import axios from "axios"




const useStyles = makeStyles({
    root: {
        '& label.Mui-focused': {
            color: 'rgb(17, 17, 66)',
        },
        '& .MuiInputBase-root': {
            color: 'rgb(17, 17, 66)'
        },
        '&.MuiTextField-root label': {
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
        width: 400,
    },

})

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.action.hover,
        color: theme.palette.common.black,

    },
    body: {
        fontSize: 14,
        padding: 15,
        paddingBottom: 0,
    },
}))(TableCell);



function createData(icon, name, calories, fat) {
    return { icon, name, calories, fat };
}

const rows = [
    createData(PicThree, 'Eclair', 262, 16.0),
    // createData(PicFour, 'Cupcake', 305, 3.7),
    // createData(PicFive, 'Gingerbread', 356, 16.0),
];



export default function Profilepage() {

    const [ProfileInfo, setProfileInfo] = useState("Employers")
    const [UserData, setUserData] = useState([])
    const [UserProfile, setUserProfile] = useState([])
    const [ButtonClass, setButtonClass] = useState("EmployerButton")






    let store = JSON.parse(localStorage.getItem("token"))


    axios.interceptors.request.use(
        config => {
            config.headers.authorization = `Bearer ${store.token}`
            return config;
        },
        err => {
            return Promise.reject(err)
        }
    )

    useEffect(async () => {
        axios.get("users/get/data")
            .then(response => {
                setUserData(JSON.parse(response.data.data).user)
                setUserProfile(JSON.parse(response.data.data).userProfile[0])
            })
            .catch(e => console.log(e))
    }, [])





    // const handleChange = (e) => {
    //     setProfileInfo(e.target.value)
    // }

    const EmployerchangeInfo = () => {
        setProfileInfo("Employers")
        setButtonClass("EmployerButton")

    }

    const AccountinfochangeInfo = () => {
        setProfileInfo("Accountinfo")
        setButtonClass("AccountinfoButton")
    }

    const SecuritychangeInfo = () => {
        setProfileInfo("Security")
        setButtonClass("SecurityButton")
    }

    let firstName = UserData.first_name
    let lastName = UserData.last_name;

    const classes = useStyles();




    return (
        <>
            <div>
                <Fade big duration={1000}>
                    <div className="Profile_container">
                        <h2>Profile</h2>
                        {/* 
                        <form className={classes.root}>
                            <FormControl variant="outlined" className="PR_select_textfield" size="small">
                                <InputLabel htmlFor="outlined-age-native-simple">
                                    Profile Info
                                </InputLabel>
                                <Select
                                    native
                                    // value={state.age}
                                    onChange={handleChange}
                                    label="Profile Info"
                                    inputProps={{
                                        name: 'age',
                                        id: 'outlined-age-native-simple',
                                    }}
                                >

                                    <option aria-label="None" value="" />


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
                        </form> */}
                    </div>
                    <div className="PR_Grid_container">
                        <div className="PR_content_one">
                            <div className="PR_Header">
                                <div className="PR_Header_content">
                                    <span className="PR_Numbers">Numbers of <br /> request</span>
                                    <span className="PR_Numbers_one">{UserProfile.loan_count}</span>
                                </div>
                                <div className="PR_Header_content_two">
                                    <span className="PR_Total">Total amount <br /> Requested</span>
                                    <span className="PR_Total_one">N&nbsp;{UserProfile.amount_loaned}</span>
                                </div>
                                <div className="PR_Number_Days_container">
                                    <div className="PR_Days_container">
                                        <div className="PR_Number_of_days"><span>Number of<br /> of Days worked</span></div>
                                        <CalendarTodayIcon className="PR_Icon" /><br />
                                    </div>
                                    <div className="PR_Days_container_two">
                                        <div className="PR_Figures"><span>{UserProfile.days_worked_for}</span></div>
                                        <div className="PR_Date"><span>Feb<br />2021</span></div>
                                    </div>
                                </div>
                                <div className="PR_Header_content_one">
                                    <span className="PR_Avaluable">Available</span>
                                    <span className="PR_Avaluable_one">N{UserProfile.monthly_balance}</span>
                                    {UserProfile.monthly_balance === "0.00" ?
                                        <Button variant="outlined" className="PR_Header_Button">Unavailable</Button>
                                        :
                                        <Button variant="outlined" className="PR_Header_Button">REQUEST PAYOUT</Button>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="PR_content_two">

                            <div className="profile_content_container">
                                <img src={Employee} alt="slideimage" className="PR_profile_image" />
                                <div className="profile_content">
                                    <div><span className="Profile_name">{firstName} {lastName}</span><br /><span className="Profile_name_content">Employer</span></div>
                                </div>
                                <div className="Profile_draft"><DraftsIcon /><br />Email<br />{UserProfile.user_email}</div>
                                <div className="profile_phone"><LocalPhoneIcon /><br />Phone<br />{UserProfile.phone}</div>
                            </div>
                            <div className="Pr_profile_button_container" >

                                <Button variant="outlined" className={ButtonClass === "EmployerButton" ? "Employer_button_one" : "Employer_button"}
                                    onClick={EmployerchangeInfo}
                                >Employer</Button>


                                <Button variant="outlined" className={ButtonClass === "AccountinfoButton" ? "Employer_button_one" : "Employer_button"}
                                    onClick={AccountinfochangeInfo}
                                >Account info</Button>


                                <Button variant="outlined" className={ButtonClass === "SecurityButton" ? "Employer_button_one" : "Employer_button"}
                                    onClick={SecuritychangeInfo}
                                >Security</Button>

                            </div>
                            <div className="line_container">
                                <div className="line"></div>
                            </div>




                            <div className="PR_Profile_details_container">
                                <div className="PR_no_of_days_worked_container">
                                    <div className="PR_no_of_days_worked">
                                        <div className="PR_no_of_days_worked_content"><span>0</span></div>
                                    </div>
                                    <div className="PR_no_of_days_worked_content_one"><span>Total Number of<br />Organistion you work<br />for</span></div>
                                </div>


                                {ProfileInfo === "Employers" ?
                                    <Fade big duration={1000}>
                                        <div>
                                            <div className="PR_Employers">
                                                <span>Employers</span>
                                            </div>
                                            <TableContainer className="PR_Table">
                                                <Table >
                                                    <TableHead>
                                                        <TableRow>
                                                            <StyledTableCell>Organisation</StyledTableCell>
                                                            <StyledTableCell>Role</StyledTableCell>
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
                                                                {/* <StyledTableCell>{row.fat}</StyledTableCell> */}
                                                            </TableRow>
                                                        ))}
                                                    </TableBody>
                                                </Table>
                                            </TableContainer>
                                        </div>
                                    </Fade>
                                    :
                                    (ProfileInfo === "Accountinfo" ? 
                                    <Fade big duration={1000}>
                                       <div>
                                           <div className="PR_Employers">Account Details</div>

                                           <TableContainer className="PR_Table">
                                                <Table >
                                                    <TableHead>
                                                        <TableRow>
                                                            <StyledTableCell>Bank</StyledTableCell>
                                                            <StyledTableCell>Account name</StyledTableCell>
                                                            <StyledTableCell>Account No.</StyledTableCell>
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
                                       </Fade>
                                           

                                        :
                                        (ProfileInfo === "Security" ?
                                          <div className="PR_Employers">Securityinfo</div>
                                            :
                                            <div></div>
                                        )
                                    )
                                }
                                {/* <div className="PR_input_container">
                                        <div>
                                            <input type="file" id="file"/>
                                            <label htmlFor="file">
                                                <AddCircleOutlineIcon className="AddCircleOutlineIcon"/>
                                            </label>
                                        </div>
                                        <div className="AddCircleOutlineIcon_text">
                                            <span>Add New<br/>Employer</span>
                                        </div>
                                    </div> */}
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>
        </>
    )
}
