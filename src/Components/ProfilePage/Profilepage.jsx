import React, { useState, useEffect } from 'react'
import Fade from 'react-reveal/Fade'
import "./ProfilePage.scss"
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import DraftsIcon from '@material-ui/icons/Drafts';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import Employee from "../../images/employee.jpg"
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Grid, Paper, TextField, Button,Dialog,Slide,DialogContent,DialogActions} from '@material-ui/core';
import { useFormik } from "formik"
import * as yup from 'yup';
import Alert from '@material-ui/lab/Alert';
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
                borderColor: 'rgb(17, 17, 66)',
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

var strongRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{8,})");


const validationSchema = yup.object({
    oldPassword: yup.string().matches(strongRegex, "password must contain uppercase,lowercase with num & 8 characters").required(),
    newPassword: yup.string().matches(strongRegex, "password must contain uppercase,lowercase with num & 8 characters").required(),
    confirmNewPassword: yup.string().when("newPassword", {
        is: val => (val && val.length > 0 ? true : false),
        then: yup.string().oneOf([yup.ref("newPassword")], "password does not match")
    }),

});

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

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });



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
    const [UserCompanyRoles, setUserCompanyRoles] = useState([])
    const [ButtonClass, setButtonClass] = useState("EmployerButton")
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    const [open, setOpen] = useState(false)
    const [Companydata, setCompanydata] = useState([])


   






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
                setUserCompanyRoles(JSON.parse(response.data.data).userProfile)
            })
            .catch(e => console.log(e))
    }, [])

    useEffect(  async () => {
        axios.get("companies")
          .then(companydata => setCompanydata(companydata.data.data))
          .catch(e => console.log(e))
      }, [])

    const onSubmit = async (values) => {
        const { confirmNewPassword, ...rest } = values;
        axios.patch(`users/update/`, rest)
            .then(response => {
                if (response.data.status === "success") {
                    setSuccess(`${response.data.message}`)
                    setError("")
                };
                if (response.data.status === "error") {
                    setError(response.data.message)
                    setSuccess("")
                }
                formik.resetForm();
                // console.log(data.message)
            })

            .catch((error) => {
                setError(error.response.data.message)
                setSuccess("")
                // console.error('Error:', error);
            });
    }



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


    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

    let firstName = UserData.first_name;
    let lastName = UserData.last_name;

    const classes = useStyles();

    const formik = useFormik({
        initialValues: {
            oldPassword: "",
            newPassword: "",
            confirmNewPassword: "",

        },
        onSubmit,
        validateOnBlur: true,
        validationSchema: validationSchema,

    });




    return (
        <>
            <div>
                <Fade big duration={1000}>
                    <div className="Profile_container">
                        <h2>Profile</h2>
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
                                >Employers</Button>


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
                                        <div className="PR_no_of_days_worked_content"><span>{UserCompanyRoles.length}</span></div>
                                    </div>
                                    <div className="PR_no_of_days_worked_content_one"><span>Total Number of<br />Organistion you work<br />for</span></div>
                                </div>

                                <div className="profile_center">

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
                                                            {UserCompanyRoles.map((row) => (
                                                                <TableRow key={row.company_id}>
                                                                    <StyledTableCell component="th" scope="row">
                                                                        <div className="Table_cellhead_container" >
                                                                            {/* <img src={row.icon} alt="slideimage" className="PR_Table_cell" /> */}
                                                                            <div>{row.company_name}</div>
                                                                        </div>
                                                                    </StyledTableCell>
                                                                    <StyledTableCell>{row.user_role === null ? <div>None</div> : row.user_role}</StyledTableCell>
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
                                                <div className="account_details_container">
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
                                                    <div>
                                                        <Button variant="outlined" className="Add_account" onClick={handleClickOpen}>Add Account</Button>
                                                    </div>
                                                    <Dialog
                                                        open={open}
                                                        TransitionComponent={Transition}
                                                        keepMounted
                                                        onClose={handleClose}
                                                        aria-labelledby="alert-dialog-slide-title"
                                                        aria-describedby="alert-dialog-slide-description"
                                                        
                                                    >
                                                     <DialogContent style={{width:"300px",height:"auto"}}>
                                                        
                                                                {/* {error && <Alert severity="error">{error}</Alert>}
                                                                {success && <Alert severity="success">{success}</Alert>} */}
                                                                <form className={classes.root}>
                                                                <div className="account_select_input">
                                                                    <FormControl variant="outlined" className="account_select_textfield" size="small">
                                                                        <InputLabel htmlFor="outlined-age-native-simple">
                                                                        Select Your Bank
                                                                                            </InputLabel>
                                                                        <Select
                                                                        native
                                                                        label=" Select Your Bank"
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
                                                                    <div className="account_input">
                                                                        <TextField
                                                                            size="small"
                                                                            label="Account Number"
                                                                            placeholder="Account Number"
                                                                            name="accountnumber"
                                                                            type="phone"
                                                                            variant="outlined"
                                                                            className="account_textfield"
                                                                        />
                                                                    </div>
                                                                    <div className="account_input">
                                                                        <TextField
                                                                            size="small"
                                                                            label="Account Name"
                                                                            placeholder="Account Name"
                                                                            name="accountname"
                                                                            type="name"
                                                                            variant="outlined"
                                                                            className="account_textfield"
                                                                        />
                                                                    </div>
                                                                    <div className="account_Botton_container">
                                                                        <Button variant="outlined" className="account_password_Button" type="submit">Add Account</Button>
                                                                    </div>
                                                                </form>
                                                          
                                                        </DialogContent>
                                                        <DialogActions>
                                                            <Button onClick={handleClose} variant="outlined">
                                                                X
                                                            </Button>
                                                        </DialogActions>
                                                    </Dialog>

                                                </div>
                                            </Fade>


                                            :
                                            (ProfileInfo === "Security" ?
                                                <div>
                                                    <div className="PR_Employers">Reset Password</div>
                                                    <Fade big duration={1000}>
                                                        <Grid>
                                                            <Paper elevation={3} className="Reset_password_paper">
                                                                {error && <Alert severity="error">{error}</Alert>}
                                                                {success && <Alert severity="success">{success}</Alert>}
                                                                <form className={classes.root} onSubmit={formik.handleSubmit}>
                                                                    <div className="Reset_password_input">
                                                                        <TextField
                                                                            size="small"
                                                                            label="Old Password"
                                                                            placeholder="Old Password"
                                                                            name="oldPassword"
                                                                            type="password"
                                                                            variant="outlined"
                                                                            className="Reset_register_textfield"
                                                                            value={formik.values.oldPassword}
                                                                            onChange={formik.handleChange}
                                                                            onBlur={formik.handleBlur}
                                                                        />
                                                                    </div>
                                                                    <div className="Reset_Password_field_container">
                                                                        <span className="Reset_Password_field">
                                                                            {formik.touched.oldPassword && formik.errors.oldPassword ? formik.errors.oldPassword : ""}
                                                                        </span>
                                                                    </div>
                                                                    <div className="Reset_password_input">
                                                                        <TextField
                                                                            size="small"
                                                                            label="New Password"
                                                                            placeholder="New Password"
                                                                            name="newPassword"
                                                                            type="password"
                                                                            variant="outlined"
                                                                            className="Reset_register_textfield"
                                                                            value={formik.values.newPassword}
                                                                            onChange={formik.handleChange}
                                                                            onBlur={formik.handleBlur}
                                                                        />
                                                                    </div>

                                                                    <div className="Reset_Password_field_container">
                                                                        <span className="Reset_Password_field">
                                                                            {formik.touched.newPassword && formik.errors.newPassword ? formik.errors.newPassword : ""}
                                                                        </span>
                                                                    </div>
                                                                    <div className="Reset_password_input">
                                                                        <TextField
                                                                            size="small"
                                                                            label="Confirm New Password"
                                                                            placeholder="Confirm New Password"
                                                                            name="confirmNewPassword"
                                                                            type="password"
                                                                            variant="outlined"
                                                                            className="Reset_register_textfield"
                                                                            value={formik.values.confirmNewPassword}
                                                                            onChange={formik.handleChange}
                                                                            onBlur={formik.handleBlur}
                                                                        />
                                                                    </div>
                                                                    <div className="Reset_Password_field_container">
                                                                        <span className="Reset_Password_field">
                                                                            {formik.touched.confirmNewPassword && formik.errors.confirmNewPassword ? formik.errors.confirmNewPassword : ""}
                                                                        </span>
                                                                    </div>
                                                                    <div className="Reset_password_Botton_container">
                                                                        <Button variant="outlined" className="Reset_password_Button" disabled={!formik.isValid} type="submit">Save</Button>
                                                                    </div>
                                                                </form>
                                                            </Paper>
                                                        </Grid>
                                                    </Fade>

                                                </div>


                                                :
                                                <div></div>
                                            )
                                        )
                                    }

                                </div>
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
