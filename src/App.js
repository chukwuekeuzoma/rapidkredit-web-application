// import logo from './logo.svg';
// import './App.css';
import React, { useState, useEffect } from 'react'
import NavFooterLayout from "./Components/Layouts/NavFooterLayout"
import OrdinaryLayout from "./Components/Layouts/OrdinaryLayout"
import Homepage from "./Components/HomePage/Homapage"
import Employerpage from "./Components/Employer/Employer"
import Aboutpage from "./Components/AboutPage/Aboutpage"
import Employee from "./Components/Employee/Employee"
import Faqpage from "./Components/Faqpage/Faqpage"
import ContactUs from "./Components/ContactUs/ContactUs"
import Login from "./Components/Login/Login"
import Register from "./Components/Register/Register"
import Dashboard from "./Components/Dashboard/Dashboard"
import RequestPage from "./Components/Requestpage/Requestpage"
import SettlementPage from "./Components/SettelmentPage/SettlementPage"
import ProfilePage from "./Components/ProfilePage/Profilepage"
import DashboardLayout from "./Components/Layouts/DashBoardLayout/DashboardLayout"
import { HashRouter, Route, Switch } from "react-router-dom"
import ForgotPasswordone from "./Components/ForgotPasswordPageOne/ForgotPasswordone"
import ForgotPasswordTwo from "./Components/ForgotPasswordTwo/ForgotPasswordTwo"
import Loading from "./Components/LoadingPage/Loading"
import Password from "./Components/PasswordPage/Password"
import AdminHome from "./Components/AdminHome/AdminHome"
import AdminEmployers from "./Components/AdminEmployers/AdminEmployers"
import AdminSettlement from './Components/AdimSettlement/AdminSettlement'
import AdminRequest from './Components/AdminRequest/AdminRequest'
import AdminLayout from "./Components/Layouts/AdminLayout"
import AdminAddEmployer from "./Components/AdminAddEmployer/AdminAddEmployer"






function RouteWithLayout({ Layout, Component, ...rest }) {
  return (
    <Route {...rest} >
      <Layout {...rest} >
        <Component {...rest} />
      </Layout>
    </Route>

  )
}



function App() {



  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }, [])


  return (
    <>{isLoading ? <Loading /> :
      <HashRouter>
        <div>
          <Switch>
            <RouteWithLayout Layout={OrdinaryLayout} exact path="/" Component={Homepage} />
            <RouteWithLayout Layout={NavFooterLayout} path="/Employer" Component={Employerpage} />
            <RouteWithLayout Layout={NavFooterLayout} path="/Aboutpage" Component={Aboutpage} />
            <RouteWithLayout Layout={NavFooterLayout} path="/Employee" Component={Employee} />
            <RouteWithLayout Layout={NavFooterLayout} path="/Faqpage" Component={Faqpage} />
            <RouteWithLayout Layout={NavFooterLayout} path="/ContactUs" Component={ContactUs} />
            <RouteWithLayout Layout={OrdinaryLayout} path="/Login" Component={Login} />
            <RouteWithLayout Layout={OrdinaryLayout} path="/Register" Component={Register} />
            <RouteWithLayout Layout={OrdinaryLayout} path="/Recoverpassword" Component={ForgotPasswordone} />
            <RouteWithLayout Layout={DashboardLayout} path="/Dashboard" Component={Dashboard} />
            <RouteWithLayout Layout={DashboardLayout} path="/Request" Component={RequestPage} />
            <RouteWithLayout Layout={DashboardLayout} path="/Settlement" Component={SettlementPage} />
            <RouteWithLayout Layout={DashboardLayout} path="/Profile" Component={ProfilePage} />
            <RouteWithLayout Layout={OrdinaryLayout} path="/Passwordreset/:token" Component={ForgotPasswordTwo} />
            <RouteWithLayout Layout={OrdinaryLayout} path="/Password/:token" Component={Password} />
            <RouteWithLayout Layout={AdminLayout} path="/Adminhome" Component={AdminHome} />
            <RouteWithLayout Layout={AdminLayout} path="/Adminemployers" Component={AdminEmployers} />
            <RouteWithLayout Layout={AdminLayout} path="/Adminsettlement" Component={AdminSettlement} />
            <RouteWithLayout Layout={AdminLayout} path="/Adminrequest" Component={AdminRequest} />
            <RouteWithLayout Layout={AdminLayout} path="/Adminaddemployer" Component={AdminAddEmployer} />
          </Switch>
        </div>
      </HashRouter>

    }
    </>

  );
}

export default App;
