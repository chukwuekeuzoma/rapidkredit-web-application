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
import { Grid, Paper, TextField, Button, Dialog, Slide, DialogContent, DialogActions } from '@material-ui/core';
import { useFormik } from "formik"
import * as yup from 'yup';
import Alert from '@material-ui/lab/Alert';
import PicThree from "../../images/carowhite4.png"
import axios from "axios"
import PulseLoader from "react-spinners/ClipLoader"
import useForceUpdate from 'use-force-update';




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


export default function Profilepage() {

    const [ProfileInfo, setProfileInfo] = useState("Employers")
    const [UserData, setUserData] = useState([])
    const [UserProfile, setUserProfile] = useState([])
    const [UserCompanyRoles, setUserCompanyRoles] = useState([])
    const [ButtonClass, setButtonClass] = useState("EmployerButton")
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    const [ErrorBankSent, setErrorBankSent] = useState("")
    const [ErrorBankSentOne, setErrorBankSentOne] = useState("")
    const [SuccessBankSent, setSucessBankSent] = useState("")
    const [bankInfo, setbankInfo] = useState("")
    const [accountNumber, setaccountNumber] = useState("")
    const [open, setOpen] = useState(false)
    const [accountName, setaccountName] = useState("")
    const [bankName, setbankName] = useState("")
    const [BankList, setBankList] = useState([])
    const [bankCode, setbankCode] = useState("")
    const [BankDetails, setBankDetails] = useState([])
    const [Loader, setLoader] = useState(false)
    const [LoaderTwo, setLoaderTwo] = useState(false)
    const [LoaderUser, setLoaderUser] = useState(false)
    

    const d = new Date ()
    const months =["Jan","Feb","Mar","Apr","May","Jun","July","Aug","Sept","Oct","Nov","Dec"]
    const month = months[d.getMonth()]
    const year = d.getFullYear()

  
    // const forceUpdate = useForceUpdate();

    let bankValues = {
        bankInfo,
        accountNumber
    }

    let bankData = {
        accountName,
        bankName,
        accountNumber,
        bankCode
    }



    // const updateFunc = () => {
    //     setUpdateNow(!updateNow)
    //   }


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

        // let mountUser = true
        setLoaderUser(true)
        axios.get("users/get/data")
            .then(response => {
                setLoaderUser(false)
                setUserData(JSON.parse(response.data.data).user)
                setUserProfile(JSON.parse(response.data.data).userProfile[0])
                setUserCompanyRoles(JSON.parse(response.data.data).userProfile)
            })
            .catch(e => {
                setLoaderUser(false)
                console.log(e)
            })

        // return () => {
        //     mountUser = false
        // }

    }, [])

    useEffect(async () => {

        // let mountBank = true

        axios.get("users/bank/details")
            .then(response => {
                setBankDetails(response.data.data)
            })
            .catch(e => {
                console.log(e)
            })

        // return () => {
        //     mountBank = false
        // }
    }, [])

    useEffect(async () => {

        // let mountBankDetails = true

        axios.post("bank-details/banks")
            .then(response => setBankList(response.data.data))
            .catch(e => console.log(e))

        // return () => {
        //     mountBankDetails = false
        // }
    }, [])




    const keyUp = () => {
        setLoader(true)
        if (accountNumber != "") {
            axios.post("bank-details/account-enquire", bankValues)
                .then(response => {
                    setaccountName(response.data.data.AccountName)
                    setErrorBankSent("")
                    setLoader(false)
                    setbankCode(response.data.data.BankCode)
                    setbankName(response.data.BankName)
                    if (response.data.status === "error") {
                        setErrorBankSent(response.data.message)
                        setaccountName("")
                        setLoader(false)
                    }
                })
                .catch((error) => {
                    setErrorBankSent(error.response.data.message)
                    setaccountName("")
                    setLoader(false)
                    // console.error('Error:', error);
                });
        }

    }



    const bankSubmit = (e) => {
        e.preventDefault();
        axios.post("bank-details/save", bankData)
            .then(response => {
                if (response.data.status === "success") {
                    setSucessBankSent(response.data.message)
                    setErrorBankSentOne("")
                    setOpen(false)
                    window.location.reload();
                };
                if (response.data.status === "error") {
                    setErrorBankSentOne(response.data.message)
                    setSucessBankSent("")
                    setOpen(true)
                }
            })
            .catch((error) => {
                setErrorBankSentOne(error.response.data.message)
                setSucessBankSent("")
                setOpen(true)
                // console.error('Error:', error);
            });
    }

    const onSubmit = async (values) => {
        setLoaderTwo(true)
        const { confirmNewPassword, ...rest } = values;
        axios.patch(`users/update/`, rest)
            .then(response => {
                if (response.data.status === "success") {
                    setSuccess(`${response.data.message}`)
                    setError("")
                    setLoaderTwo(false)
                };
                if (response.data.status === "error") {
                    setError(response.data.message)
                    setSuccess("")
                    setLoaderTwo(false)
                }
                formik.resetForm();
                // console.log(data.message)
            })

            .catch((error) => {
                setError(error.response.data.message)
                setSuccess("")
                setLoaderTwo(false)
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
    let Employer = UserData.is_employer;

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
                                    <span className="PR_Numbers_one">{LoaderUser ? <div className="PR_Profile_progress_circular"><div><PulseLoader color={"white"} size={25} /></div></div>
                                        :
                                        UserProfile.loan_count}</span>
                                </div>
                                <div className="PR_Header_content_two">
                                    <span className="PR_Total">Total amount <br /> Requested</span>
                                    <span className="PR_Total_one">N&nbsp;{LoaderUser ? <PulseLoader color={"white"} size={25} />
                                        :
                                        UserProfile.amount_loaned}</span>
                                </div>
                                <div className="PR_Number_Days_container">
                                    <div className="PR_Days_container">
                                        <div className="PR_Number_of_days"><span>Number of<br /> of Days worked</span></div>
                                        <CalendarTodayIcon className="PR_Icon" /><br />
                                    </div>
                                    <div className="PR_Days_container_two">
                                        <div className="PR_Figures"><span>{LoaderUser ? <PulseLoader color={"white"} size={25} />
                                            :
                                            UserProfile.days_worked_for
                                        }</span></div>
                                        <div className="PR_Date"><span>{month}<br />{year}</span></div>
                                    </div>
                                </div>
                                <div className="PR_Header_content_one">
                                    <span className="PR_Avaluable">Available</span>
                                    <span className="PR_Avaluable_one">N{LoaderUser ? <PulseLoader color={"white"} size={10} />
                                        :
                                        UserProfile.monthly_balance}</span>
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
                                    <div><span className="Profile_name">
                                        {LoaderUser ? <PulseLoader color={"black"} size={20} /> : firstName}
                                        &nbsp;
                                        {LoaderUser ? <PulseLoader color={"black"} size={20} /> : lastName}
                                    </span>
                                      <br />
                                      {
                                        Employer === false?<span className="Profile_name_content">None Staff</span>
                                        :
                                         <span className="Profile_name_content">Employer</span>
                                      }
                                    </div>
                                </div>
                                <div className="Profile_draft"><DraftsIcon /><br />Email<br />
                                  {LoaderUser ? <PulseLoader color={"rgb(17, 17, 66)"} size={10} /> : UserProfile.user_email}
                                </div>
                                <div className="profile_phone"><LocalPhoneIcon /><br />Phone<br />
                                  {LoaderUser ? <PulseLoader color={"rgb(17, 17, 66)"} size={10} /> : UserProfile.phone}
                                </div>
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
                                                                {BankDetails.map(({ bank_name, account_name, account_number }, index) => (
                                                                    <TableRow key={index}>
                                                                        <StyledTableCell component="th" scope="row">

                                                                            <div className="Table_cellhead_container" >
                                                                                {/* <img src={row.icon} alt="slideimage" className="PR_Table_cell" /> */}
                                                                                <div>{bank_name}</div>
                                                                            </div>
                                                                        </StyledTableCell>
                                                                        <StyledTableCell>{account_name}</StyledTableCell>
                                                                        <StyledTableCell>{account_number}</StyledTableCell>
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
                                                        <DialogContent style={{ width: "420px", height: "auto" }}>
                                                            {ErrorBankSentOne && <Alert severity="error">{ErrorBankSentOne}</Alert>}
                                                            {SuccessBankSent && <Alert severity="success">{SuccessBankSent}</Alert>}
                                                            <form className={classes.root} onKeyUp={keyUp} onSubmit={bankSubmit}>
                                                                <div className="account_select_input">
                                                                    <FormControl variant="outlined" className="account_select_textfield" size="small">
                                                                        <InputLabel htmlFor="outlined-age-native-simple">
                                                                            Select Your Bank
                                                                                                </InputLabel>
                                                                        <Select
                                                                            native
                                                                            label=" Select Your Bank"
                                                                            inputProps={{
                                                                                id: 'bankInfo',

                                                                            }}
                                                                            onChange={e => setbankInfo(e.target.value)}
                                                                        >
                                                                            <option aria-label="None" value="" />

                                                                            {BankList.map(({ BankName, BankCode }, index) => (
                                                                                <option key={index} value={`${BankCode},${BankName}`}>
                                                                                    {BankName}
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
                                                                        id="accountNumber"
                                                                        type="phone"
                                                                        variant="outlined"
                                                                        className="account_textfield"
                                                                        onChange={e => setaccountNumber(e.target.value)}
                                                                    />
                                                                </div>
                                                                {Loader ? <div className="Profile_progress_circular"><div><PulseLoader color={"rgb(17, 17, 66)"} size={30} /></div></div>
                                                                    :
                                                                    <div className="alert">
                                                                        {ErrorBankSent && <Alert severity="error">{ErrorBankSent}</Alert>}
                                                                        {accountName && <Alert severity="info"><div>Account Name: {accountName}</div></Alert>}
                                                                    </div>
                                                                }
                                                                <div className="account_Botton_container">
                                                                    <Button variant="outlined" className="account_password_Button" type="submit" disabled={!accountName}>Send</Button>
                                                                </div>
                                                            </form>
                                                        </DialogContent>
                                                        <DialogActions>
                                                            <Button onClick={handleClose} variant="outlined" className="dialog_action_button"  >
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
                                                                    {LoaderTwo ? <div className="Profile_progress_circular"><div><PulseLoader color={"rgb(17, 17, 66)"} size={30} /></div></div>
                                                                        :
                                                                        <div className="Reset_password_Botton_container">
                                                                            <Button variant="outlined" className="Reset_password_Button" disabled={!formik.isValid} type="submit">Save</Button>
                                                                        </div>
                                                                    }
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

 
