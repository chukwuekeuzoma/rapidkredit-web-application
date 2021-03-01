// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import NavFooterLayout from "./Components/Layouts/NavFooterLayout"
import OrdinaryLayout from "./Components/Layouts/OrdinaryLayout"
import Homepage from "./Components/HomePage/Homapage"
// import Navigation from "./Components/Navigation/Navigation"
// import BodyOne from "./Components/BodyOne/BodyOne"
// import BodyTwo from "./Components/BodyTwo/BodyTwo"
// import BodyThree from "./Components/BodyThree/BodyThree"
// import BodyFour from "./Components/BodyFour/BodyFour"
// import ImageSlider from "./Components/ImageSlider/ImageSlider"
// import Bodyfive from "./Components/Bodyfive/Bodyfive"
// import Footer from "./Components/Footer/Footer"
import Employerpage  from "./Components/Employer/Employer"
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
      {/* <Navigation/>
      <BodyOne/>
      <BodyTwo/>
      <BodyThree/>
      <BodyFour/>
      <ImageSlider/>
      <Bodyfive/>
      <Footer/> */}


      <BrowserRouter>
      <div>
        <Switch>
           <RouteWithLayout Layout={OrdinaryLayout} exact path="/" Component={Homepage}/>
           <RouteWithLayout Layout={NavFooterLayout} exact path="/Employer" Component={Employerpage}/>
          {/* <RouteWithLayout Layout={homeLayout} exact path="/" Component={Home}/>
          <RouteWithLayout Layout={homeLayout}  path="/about" Component={About}/>
          <RouteWithLayout Layout={dashBoardLayout}  path="/Dashboard" Component={Dashboard}/>
          <RouteWithLayout  Layout={SideBarLayout} exact path="/SideBarDash" Component={SideBarDashBoardTwo}/>
          <RouteWithLayout  Layout={SideBarLayout} path="/SideBarProps" Component={SideBarPropertiesTwo}/>
          <RouteWithLayout  Layout={SideBarLayout} path="/AddProps" Component={AddPropertiesTwo}/> */}
          {/* <RouteWithLayout Layout={dashBoardLayout}  path="/register" Component={ Register}/> */}
        </Switch>
      </div>
    </BrowserRouter>


   </>

  );
}

export default App;
