import React, { useState, useEffect } from 'react'
import "./Requestpage.scss"
import "../ProfilePage/ProfilePage.scss"
import Fade from 'react-reveal/Fade'
import { Grid, Paper, TextField, Button, Dialog, Slide, DialogContent, DialogActions } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { DataGrid } from '@material-ui/data-grid';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import PulseLoader from "react-spinners/ClipLoader"
import Alert from '@material-ui/lab/Alert';
import axios from "axios"


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
    formControl: {
        minWidth: 120,
    },

})



const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


export default function Requestpage() {

    const columns = [
        { field: 'id', headerName: 'No.', width: 75 },
        { field: 'requestId', headerName: 'Request ID', width: 125 },
        { field: 'amount', headerName: 'Amount', width: 120 },
        // {
        //     field: 'age',
        //     headerName: 'Age',
        //     type: 'number',
        //     width: 90,
        // },
        // {
        //     field: 'fullName',
        //     headerName: 'Full name',
        //     description: 'This column has a value getter and is not sortable.',
        //     sortable: false,
        //     width: 160,
        //     valueGetter: (params) =>
        //         `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
        // },
    ];

    const rows = [
        // { id: 1, requestId: 'none', amount: 'none'},
        // { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        // { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        // { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        // { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        // { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        // { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        // { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        // { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    ];

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

    const [UserProfile, setUserProfile] = useState([])
    const [LoaderUser, setLoaderUser] = useState(false)
    const [RequestOpen, setRequestOpen] = useState(false)
    const [RequestOpenMobile, setRequestOpenMobile] = useState(false)
    const [bankId, setbankId] = useState("")
    const [companyId, setcompanyId] = useState("")
    const [userId, setuserId] = useState("")
    const [amount, setamount] = useState("")
    const [UserData, setUserData] = useState([])
    const [RequestError, setRequestError] = useState("")
    const [RequestSuccess, setRequestSuccess] = useState("")
    const [UserCompanyList, setUserCompanyList] = useState([])
    const [UserBankList, setUserBankList] = useState([])
    const [RequestLoader, setRequestLoader] = useState(false)

    const d = new Date()
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]
    const month = months[d.getMonth()]
    const year = d.getFullYear()
    const displayTodaysDate = `${d.getDate()} ${month} ${d.getFullYear()}`



    let firstName = UserData.first_name;
    let lastName = UserData.last_name;


    let narration = `${firstName} ${lastName} requested at ${displayTodaysDate}`


    let userRequest = {
        bankId,
        amount,
        companyId,
        narration
    }

    useEffect(async () => {
        let usersgetdata = true
        setLoaderUser(true)
        axios.get("users/get/data")
            .then(response => {
                if (usersgetdata) {
                    setLoaderUser(false)
                    setUserProfile(JSON.parse(response.data.data).userProfile[0])
                    setuserId(JSON.parse(response.data.data).user["id"])
                    setUserData(JSON.parse(response.data.data).user)
                }
            })
            .catch(e => {
                if (usersgetdata) {
                    setLoaderUser(false)
                    console.log(e)
                }
            })
        return () => usersgetdata = false
    }, [])

    useEffect(async () => {
        let usersuseridcompanies = true
        axios.get(`users/${userId}/companies`)
            .then(response => { if (usersuseridcompanies) { setUserCompanyList(response.data.data) } })
            .catch(e => { if (usersuseridcompanies) { console.log(e) } })
        return () => usersuseridcompanies = false
    }, [userId])


    useEffect(async () => {
        let usersbankList = true
        axios.get("users/bank/details")
            .then(response => {
                if (usersbankList) {
                    setUserBankList(response.data.data)
                    // setBankDetails(response.data.data)
                }
            })
            .catch(e => { if (usersbankList) { console.log(e) } })
        return () => usersbankList = false
    }, [])


    const userRequestSubmit = async (e) => {
        e.preventDefault();
        setRequestLoader(true)
        axios.post("requests", userRequest)
            .then(response => {
                if (response.data.status === "success") {
                    setRequestSuccess(response.data.message)
                    setRequestError("")
                    setRequestLoader(false)
                    window.location.reload();
                };
                if (response.data.status === "error") {
                    setRequestError(response.data.message)
                    setRequestSuccess("")
                    setRequestLoader(false)
                }
            })
            .catch((error) => {
                setRequestError(error.response.data.message)
                setRequestSuccess("")
                setRequestLoader(false)
                // console.error('Error:', error);
            });

    }

    const handleRequestOPen = () => {
        setRequestOpen(true);
    };

    const handleRequestClose = () => {
        setRequestOpen(false);
    }

    const handleRequestOpenMobile = () => {
        setRequestOpenMobile(true)
    }

    const handleRequestCloseMobile = () => {
        setRequestOpenMobile(false)
    }


    const classes = useStyles();

    return (
        <>
            <Fade big duration={1000}>
                <div className="Request_container">
                    <h2>Request</h2>
                </div>
                <div className="RQ_Grid_container">
                    <div className="RQ_content_one">
                        <div className="RQ_Header">
                            <div className="RQ_Header_content">
                                <span className="RQ_Numbers">Numbers of <br /> request</span>
                                <span className="RQ_Numbers_one">
                                    {LoaderUser ? <div className="PR_Profile_progress_circular"><div><PulseLoader color={"white"} size={25} /></div></div>
                                        :
                                        UserProfile.loan_count}
                                </span>
                            </div>
                            <div className="RQ_Header_content_two">
                                <span className="RQ_Total">Total amount <br /> Requested</span>
                                <span className="RQ_Total_one">N&nbsp;
                                    {LoaderUser ? <PulseLoader color={"white"} size={25} />
                                        :
                                        UserProfile.amount_loaned}
                                </span>
                            </div>
                            <div className="RQ_Number_Days_container">
                                <div className="RQ_Days_container">
                                    <div className="RQ_Number_of_days"><span>Number of<br /> of Days worked</span></div>
                                    <CalendarTodayIcon className="RQ_Icon" /><br />
                                </div>
                                <div className="RQ_Days_container_two">
                                    <div className="RQ_Figures"><span>
                                        {LoaderUser ? <PulseLoader color={"white"} size={25} />
                                            :
                                            UserProfile.days_worked_for
                                        }
                                    </span></div>
                                    <div className="RQ_Date"><span>{month}<br />{year}</span></div>
                                </div>
                            </div>
                            <div className="RQ_Header_content_one">
                                <span className="RQ_Avaluable">Avaluable</span>
                                <span className="RQ_Avaluable_one">N
                                    {LoaderUser ? <PulseLoader color={"white"} size={10} />
                                        :
                                        UserProfile.loanable_amount}
                                </span>
                                {UserProfile.loanable_amount === "0.00" ?
                                    <Button variant="outlined" className="RQ_Header_Button">Unavailable</Button>
                                    :
                                    <Button variant="outlined" className="RQ_Header_Button" onClick={handleRequestOPen}>REQUEST PAYOUT</Button>
                                }
                            </div>
                            <Dialog
                                open={RequestOpen}
                                TransitionComponent={Transition}
                                keepMounted
                                onClose={handleRequestClose}
                                aria-labelledby="alert-dialog-slide-title"
                                aria-describedby="alert-dialog-slide-description"
                            >
                                <DialogContent style={{ width: "420px", height: "auto" }}>
                                    {RequestError && <Alert severity="error">{RequestError}</Alert>}
                                    {RequestSuccess && <Alert severity="success">{RequestSuccess}</Alert>}
                                    <form className={classes.root} onSubmit={userRequestSubmit}>
                                        <div className="account_select_input">
                                            <FormControl variant="outlined" className="account_select_textfield" size="small">
                                                <InputLabel htmlFor="outlined-age-native-simple">
                                                    Select Your Company
                                                </InputLabel>
                                                <Select
                                                    native
                                                    label=" Select Your Company"
                                                    inputProps={{
                                                        id: 'companylist',

                                                    }}
                                                    onChange={e => setcompanyId(e.target.value)}
                                                >
                                                    <option aria-label="None" value="" />

                                                    {UserCompanyList.map(({ company_name, id }, index) => (
                                                        <option key={index} value={id}>
                                                            {company_name}
                                                        </option>
                                                    ))}
                                                </Select>
                                            </FormControl>
                                        </div>
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
                                                    onChange={e => setbankId(e.target.value)}
                                                >
                                                    <option aria-label="None" value="" />

                                                    {UserBankList.map(({ account_number, bank_name, id }, index) => (
                                                        <option key={index} value={id}>
                                                            {`${account_number}, ${bank_name}`}
                                                        </option>
                                                    ))}
                                                </Select>
                                            </FormControl>
                                        </div>
                                        <div className="account_input">
                                            <TextField
                                                size="small"
                                                label="Amount"
                                                placeholder="Amount"
                                                id="amount"
                                                type="phone"
                                                variant="outlined"
                                                className="account_textfield"
                                                onChange={e => setamount(e.target.value)}
                                            />
                                        </div>
                                        {RequestLoader ? <div className="Profile_progress_circular"><div><PulseLoader color={"rgb(17, 17, 66)"} size={30} /></div></div>
                                            :
                                            <div className="account_Botton_container">
                                                <Button variant="outlined" className="account_password_Button" type="submit" disabled={!bankId || !companyId || !amount}>Send</Button>
                                            </div>
                                        }
                                    </form>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleRequestClose} variant="outlined" className="dialog_action_button">
                                        X
                                    </Button>
                                </DialogActions>
                            </Dialog>
                        </div>
                    </div>
                    <div className="RQ_content_two">
                        <div style={{ height: 320, width: '100%' }}>
                            <DataGrid rows={rows} columns={columns} pageSize={10} checkboxSelection />
                        </div>
                    </div>
                </div>
            </Fade>
            <div>
                <div className="RQ_Grid_container_mobile">
                    <div className="RQ_content_one_mobile">
                        <div className="RQ_Number_Days_container_mobile">
                            <div className="RQ_Days_container_mobile">
                                <div className="RQ_Number_of_days_mobile"><span>Number of<br /> of Days worked</span></div>
                                <div className="RQ_Icon_mobile_container">
                                    <CalendarTodayIcon className="RQ_Icon_mobile" /><br />
                                </div>
                            </div>
                            <div className="RQ_Days_container_two_mobile">
                                <div className="RQ_Figures_mobile"><span>
                                    {LoaderUser ? <PulseLoader color={"white"} size={25} />
                                        :
                                        UserProfile.days_worked_for
                                    }
                                </span></div>
                                <div className="RQ_Date_mobile"><span>{month}<br />{year}</span></div>
                            </div>
                        </div>
                    </div>
                    <div className="RQ_content_two_mobile">
                        <div className="RQ_Header_content_mobile">
                            <span className="RQ_Numbers_mobile">Numbers of <br /> request</span>
                            <span className="RQ_Numbers_one_mobile">
                                {LoaderUser ? <div className="PR_Profile_progress_circular_mobile"><div><PulseLoader color={"white"} size={10} /></div></div>
                                    :
                                    UserProfile.loan_count}
                            </span>
                        </div>
                    </div>
                    <div className="RQ_content_three_mobile">
                        <div className="RQ_Header_content_two_mobile">
                            <span className="RQ_Total_mobile">Total amount <br /> Requested</span>
                            <span className="RQ_Total_one_mobile">N&nbsp;
                                {LoaderUser ? <PulseLoader color={"white"} size={10} />
                                    :
                                    UserProfile.amount_loaned}
                            </span>
                        </div>
                    </div>
                    <div className="RQ_content_four_mobile">
                        <div className="RQ_Avaluable_mobile">Avaluable</div>
                        <div className="RQ_Avaluable_one_mobile">N
                            {LoaderUser ? <PulseLoader color={"white"} size={10} />
                                :
                                UserProfile.loanable_amount}
                        </div>
                        {UserProfile.loanable_amount === "0.00" ?
                            <Button variant="outlined" className="RQ_Header_Button_mobile">Unavailable</Button>
                            :
                            <Button variant="outlined" className="RQ_Header_Button_mobile" onClick={handleRequestOpenMobile}>REQUEST PAYOUT</Button>
                        }
                    </div>
                    <Dialog
                        open={RequestOpenMobile}
                        TransitionComponent={Transition}
                        keepMounted
                        onClose={handleRequestCloseMobile}
                        aria-labelledby="alert-dialog-slide-title"
                        aria-describedby="alert-dialog-slide-description"
                    >
                        <DialogContent style={{ width: "60vw", height: "auto" }}>
                            {RequestError && <Alert severity="error">{RequestError}</Alert>}
                            {RequestSuccess && <Alert severity="success">{RequestSuccess}</Alert>}
                            <form className={classes.root} onSubmit={userRequestSubmit}>
                                <div className="account_select_input_mobile">
                                    <FormControl variant="outlined" className="account_select_textfield_mobile" size="small">
                                        <InputLabel htmlFor="outlined-age-native-simple">
                                            Select Your Company
                                        </InputLabel>
                                        <Select
                                            native
                                            label=" Select Your Company"
                                            inputProps={{
                                                id: 'companylist',

                                            }}
                                            onChange={e => setcompanyId(e.target.value)}
                                        >
                                            <option aria-label="None" value="" />

                                            {UserCompanyList.map(({ company_name, id }, index) => (
                                                <option key={index} value={id}>
                                                    {company_name}
                                                </option>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </div>
                                <div className="account_select_input_mobile">
                                    <FormControl variant="outlined" className="account_select_textfield_mobile" size="small">
                                        <InputLabel htmlFor="outlined-age-native-simple">
                                            Select Your Bank
                                        </InputLabel>
                                        <Select
                                            native
                                            label=" Select Your Bank"
                                            inputProps={{
                                                id: 'bankInfo',

                                            }}
                                            onChange={e => setbankId(e.target.value)}
                                        >
                                            <option aria-label="None" value="" />

                                            {UserBankList.map(({ account_number, bank_name, id }, index) => (
                                                <option key={index} value={id}>
                                                    {`${account_number}, ${bank_name}`}
                                                </option>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </div>
                                <div className="account_input_mobile">
                                    <TextField
                                        size="small"
                                        label="Amount"
                                        placeholder="Amount"
                                        id="amount"
                                        type="phone"
                                        variant="outlined"
                                        className="account_textfield_mobile"
                                        onChange={e => setamount(e.target.value)}
                                    />
                                </div>
                                {RequestLoader ? <div className="Profile_progress_circular_mobile"><div><PulseLoader color={"rgb(17, 17, 66)"} size={30} /></div></div>
                                    :
                                    <div className="account_Botton_container_mobile">
                                        <Button variant="outlined" className="account_password_Button_mobile" type="submit" disabled={!bankId || !companyId || !amount}>Send</Button>
                                    </div>
                                }
                            </form>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleRequestCloseMobile} variant="outlined" className="dialog_action_button_mobile">
                                X
                            </Button>
                        </DialogActions>
                    </Dialog>
                    <div className="RQ_content_five_mobile">
                       <div style={{ height: 320, width: '100%' }}>
                            <DataGrid rows={rows} columns={columns} pageSize={10} checkboxSelection />
                        </div>
                   </div>
                </div>
            </div>
        </>
    )
}
