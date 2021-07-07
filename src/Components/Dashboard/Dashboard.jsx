import React, { useState, useEffect } from 'react'
// import "./Dashboard.scss"
import "./Dashboard.css"
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade'
import Select from '@material-ui/core/Select';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Grid, Paper, TextField, Button, Dialog, Slide, DialogContent, DialogActions } from '@material-ui/core';
// import PicThree from "../../images/carowhite4.png"
import Alert from '@material-ui/lab/Alert';
import axios from "axios"
import PulseLoader from "react-spinners/ClipLoader"




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
        borderColor: '#392fff ',
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

  Table: {
    minWidth: 50,
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

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});



export default function Dashboard() {


  // const [UserData, setUserData] = useState([])
  const [UserProfile, setUserProfile] = useState([])
  const [UserData, setUserData] = useState([])
  const [UserCompanyRoles, setUserCompanyRoles] = useState([])
  const [UserCompanyList, setUserCompanyList] = useState([])
  const [UserBankList, setUserBankList] = useState([])
  const [LoaderUser, setLoaderUser] = useState(false)
  const [RequestLoader, setRequestLoader] = useState(false)
  const [RequestOpen, setRequestOpen] = useState(false)
  const [RequestError, setRequestError] = useState("")
  const [RequestSuccess, setRequestSuccess] = useState("")
  const [bankId, setbankId] = useState("")
  const [companyId, setcompanyId] = useState("")
  const [amount, setamount] = useState("")
  const [userId, setuserId] = useState("")
  const [RequestOpenMobile, setRequestOpenMobile] = useState(false)

  let store = JSON.parse(localStorage.getItem("token"))

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


  useEffect(async () => {


    setLoaderUser(true)
    let usersgetdata = true
    axios.get("users/get/data")
      .then(response => {
        if (usersgetdata) {
          setUserData(JSON.parse(response.data.data).user)
          setUserProfile(JSON.parse(response.data.data).userProfile[0])
          setuserId(JSON.parse(response.data.data).user["id"])
          setUserCompanyRoles(JSON.parse(response.data.data).userProfile)
          setLoaderUser(false)
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


  const classes = useStyles();

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



  return (
    <>
      <Fade big duration={1000}>
        <div className="Dashboard_container">
          <h2>Dashboard</h2>

          {/* <form className={classes.root}>
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
                            
                                    {UserCompanyRoles.map((row, index) => (
                                    <option key={index} value={row.company_name}>
                                      {row.company_name}
                                    </option>
                                ))}
                                </Select>

                            </FormControl>
                        </form>
                    */}
        </div>

        <div className="DB_Grid_container">
          <div className="DB_content_one">
            <div className="DB_Header">
              <div className="DB_Header_content">
                <span className="Numbers">Numbers of <br /> request</span>
                <span className="Numbers_one">{LoaderUser ? <div className="DB_Profile_progress_circular"><div><PulseLoader color={"white"} size={25} /></div></div>
                  :
                  UserProfile.loan_count}</span>
              </div>
              <div className="DB_Header_content_two">
                <span className="Total">Total amount <br /> Requested</span>
                <span className="Total_one">N&nbsp;{LoaderUser ? <PulseLoader color={"white"} size={25} /> : UserProfile.amount_loaned}</span>
              </div>
              <div className="DB_Header_content_one">
                <span className="Avaluable">Available</span>
                <span className="Avaluable_one">N{LoaderUser ? <PulseLoader color={"white"} size={10} /> : UserProfile.loanable_amount}</span>
                {UserProfile.loanable_amount === "0.00" ?
                  <Button variant="outlined" className="DB_Header_Button">Unavailable</Button>
                  :
                  <Button variant="outlined" className="DB_Header_Button" onClick={handleRequestOPen}>REQUEST PAYOUT</Button>
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
          <div className="DB_content_two">
            <div className="Portfolio">
              <span className="Portfolio_one">Portfolio</span><br />
              <span className="Total_num">Total Number of Organisation<br />you work for</span>
            </div>
            <br />
            <div className="Portfolio_circular">
              <div className="Portfolio_inner">
                <div className="Portfolio_Numb"><span>{UserCompanyRoles.length}</span></div>
              </div>
            </div>
            <div style={{ marginTop: "20px" }}>
              <TableContainer className={classes.table}>
                <Table className={classes.table}>
                  <TableHead >
                    <TableRow>
                      <StyledTableCell>Organisation</StyledTableCell>
                      <StyledTableCell align="right">Number of days worked</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {UserCompanyRoles.map((row) => (
                      <TableRow key={row.company_name}>
                        <StyledTableCell component="th" scope="row">
                          <div className="Table_cellhead_container" >
                            {/* <img src={row.icon} alt="slideimage" className="Table_cell" /> */}
                            <div>{row.company_name}</div>
                          </div>
                        </StyledTableCell>
                        <StyledTableCell align="right">{row.days_worked_for}</StyledTableCell>
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
              <div className="Numb">
                {LoaderUser ? <PulseLoader color={"rgb(17, 17, 66)"} size={20} /> : UserProfile.days_worked_for}
                <div className="Days">Days(s)</div></div>
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
                <br />worked<br />This month</span></div>
              <div className="calander_icon">
                <CalendarTodayIcon />
                <br />
                {month}
                <br />
                {year}
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
                    <StyledTableCell>Role</StyledTableCell>
                    {/* <StyledTableCell>Employer&nbsp;ID</StyledTableCell> */}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {UserCompanyRoles.map((row) => (
                    <TableRow key={row.company_id}>
                      <StyledTableCell component="th" scope="row">
                        <div className="Table_cellhead_container" >
                          {/* <img src={row.icon} alt="slideimage" className="Table_cell" /> */}
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
        </div>
      </Fade>
      {/* mobile */}
      <div>
        <Fade big duration={1000}>
          <div className="DB_Grid_container_mobile">
            <div className="DB_content_one_mobile">
              <div className="DB_Header_content_mobile">
                <span className="Numbers_mobile">Numbers of <br /> request</span>
                <span className="Numbers_one_mobile">{LoaderUser ? <div className="DB_Profile_progress_circular_mobile"><div><PulseLoader color={"white"} size={10} /></div></div>
                  :
                  UserProfile.loan_count}</span>
              </div>

            </div>
            <div className="DB_content_two_mobile">
              <div className="DB_Header_content_two_mobile">
                <span className="Total_mobile">Total amount <br /> Requested</span>
                <span className="Total_one_mobile">N&nbsp;{LoaderUser ? <PulseLoader color={"white"} size={10} /> : UserProfile.amount_loaned}</span>
              </div>

            </div>
            <div className="DB_content_three_mobile">
              <div className="Avaluable_mobile">Available</div>
              <div className="Avaluable_one_mobile">N{LoaderUser ? <PulseLoader color={"white"} size={10} /> : UserProfile.loanable_amount}</div>
              {UserProfile.loanable_amount === "0.00" ?
                <Button variant="outlined" className="DB_Header_Button_mobile">Unavailable</Button>
                :
                <Button variant="outlined" className="DB_Header_Button_mobile" onClick={handleRequestOpenMobile}>REQUEST PAYOUT</Button>
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

            <div className="DB_content_four_mobile">
              <div className="circular_mobile">
                <div className="inner_mobile"></div>
                <div className="Numb_mobile">
                  {LoaderUser ? <PulseLoader color={"rgb(17, 17, 66)"} size={10} /> : UserProfile.days_worked_for}
                  <div className="Days_mobile">Days(s)</div></div>
                <div className="circle_mobile">
                  <div className="Bar_mobile Left_mobile">
                    <div className="Progress_mobile"></div>
                  </div>
                  <div className="Bar_mobile Right_mobile">
                    <div className="Progress_mobile"></div>
                  </div>
                </div>
              </div>
              <div className="Calander_mobile">
                <div className="Calander_Number_mobile"><span>Number of days you've
                  <br />worked<br />This month</span></div>
                <div className="calander_icon_mobile">
                  <CalendarTodayIcon />
                  <br />
                  {month}
                  <br />
                  {year}
                </div>
              </div>


            </div>
            <div className="DB_content_five_mobile">
              <div className="Portfolio_mobile">
                <span className="Portfolio_one_mobile">Portfolio</span><br />
                <span className="Total_num_mobile">Total Number of Organisation you work for</span>
              </div>
              <br />
              <div className="Portfolio_circular_mobile">
                <div className="Portfolio_inner_mobile">
                  <div className="Portfolio_Numb_mobile"><span>{UserCompanyRoles.length}</span></div>
                </div>
              </div>
              <div style={{ marginTop: "20px" }}>
                <TableContainer className={classes.table}>
                  <Table className={classes.table}>
                    <TableHead >
                      <TableRow>
                        <StyledTableCell>Organisation</StyledTableCell>
                        <StyledTableCell align="right">Number of days worked</StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {UserCompanyRoles.map((row) => (
                        <TableRow key={row.company_name}>
                          <StyledTableCell component="th" scope="row">
                            <div className="Table_cellhead_container_mobile" >
                              {/* <img src={row.icon} alt="slideimage" className="Table_cell" /> */}
                              <div>{row.company_name}</div>
                            </div>
                          </StyledTableCell>
                          <StyledTableCell align="right">{row.days_worked_for}</StyledTableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>

            </div>
            <div className="DB_content_six_mobile">
              <div className="Position_mobile"><span>Positions(s)</span></div>
              <div>
              <TableContainer className={classes.table}>
                <Table className={classes.table}>
                  <TableHead >
                    <TableRow>
                      <StyledTableCell>Organisation</StyledTableCell>
                      <StyledTableCell>Role</StyledTableCell>
                      {/* <StyledTableCell>Employer&nbsp;ID</StyledTableCell> */}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {UserCompanyRoles.map((row) => (
                      <TableRow key={row.company_id}>
                        <StyledTableCell component="th" scope="row">
                          <div className="Table_cellhead_container_mobile" >
                            {/* <img src={row.icon} alt="slideimage" className="Table_cell" /> */}
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


            </div>
          </div>
        </Fade>
      </div>
    </>
  )
}
