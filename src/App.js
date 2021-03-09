// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import NavFooterLayout from "./Components/Layouts/NavFooterLayout"
import OrdinaryLayout from "./Components/Layouts/OrdinaryLayout"
import Homepage from "./Components/HomePage/Homapage"
import Employerpage  from "./Components/Employer/Employer"
import  Aboutpage  from "./Components/AboutPage/Aboutpage"
import Employee from "./Components/Employee/Employee"
import Faqpage from "./Components/Faqpage/Faqpage"
import ContactUs from "./Components/ContactUs/ContactUs"
import Login from "./Components/Login/Login"
import {BrowserRouter, Route, Switch} from "react-router-dom"





function RouteWithLayout({Layout, Component, ...rest}){
  return (
    <Route {...rest} >
      <Layout {...rest} >
        <Component {...rest} />
      </Layout>
    </Route>
   
  )
}



function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

 <>
    <BrowserRouter>
      <div>
        <Switch>
           <RouteWithLayout Layout={OrdinaryLayout} exact path="/" Component={Homepage}/>
           <RouteWithLayout Layout={NavFooterLayout}  path="/Employer" Component={Employerpage}/>
           <RouteWithLayout Layout={NavFooterLayout}  path="/Aboutpage" Component={Aboutpage}/>
           <RouteWithLayout Layout={NavFooterLayout}  path="/Employee" Component={Employee}/>
           <RouteWithLayout Layout={NavFooterLayout}  path="/Faqpage" Component={Faqpage}/>
           <RouteWithLayout Layout={NavFooterLayout}  path="/ContactUs" Component={ContactUs}/>
           <RouteWithLayout Layout={OrdinaryLayout}  path="/Login" Component={Login}/>
        </Switch>
      </div>
    </BrowserRouter>


   </>

  );
}

export default App;
