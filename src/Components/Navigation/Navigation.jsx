import React,{useState} from 'react'
import "./Navigation.scss"
import RapidOne from "../../images/rapid.png"
// import classnames from "classnames"
import {Menu, Clear } from '@material-ui/icons'

// import { Component } from 'react'

export default function Navigation () {
      
    // var  lastScrollTop = 0;
    // var Nav = document.getElementsByTagName("nav");
    // window.addEventListener("scroll",function() {
    //     var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    //     if (scrollTop > lastScrollTop) {
    //         Nav.style.top="-120px";
    //     } else {
    //         Nav.style.top="0px";
    //     }

    //     lastScrollTop = scrollTop;
    // })
   
    // constructor(props){
    //    super(props);

    //    this.state ={
    //        prevScrollpos:window.pageYOffset,
    //        visible:true
    //    };
    // }
    
    

    //  handleScroll = () =>{
    //    const {prevScrollpos} =this.state;

    //    const currentScrollPos = window.pageYOffset;
    //    const visible = prevScrollpos > currentScrollPos

    //    this.setState({
    //        prevScrollpos:currentScrollPos,
    //        visible
    //    });

    //  }

    //  componentDidMount (){
    //     window.addEventListener("scroll",this.handleScroll);
    // }

    // componentWillUnmount (){
    //     window.removeEventListener("scroll",this.handleScroll)
    // }

//    render() {

    const [Navbar, setNavbar] = useState(false)

    const Navchange = () => {
        setNavbar(!Navbar)
    }
         
    return (
        <>
            {/* <div className={classnames("container_one",{"nav--hidden":!this.state.visible})}> */}
            <div className="container_one">
                    <div className="nav_bar_Menu_icon">
                        <div onClick={Navchange}>
                            {Navbar ? <Clear className="icon_color--clear"/> : <Menu className="icon_color"/> }
                        </div>
                    </div>
                <div className="R_em_ep">
                    <div className="RapidOne"><img src={RapidOne} alt="tw" height="65px"/></div>        
                    <div className="Employee"><span>EMPLOYEE</span></div>
                    <div className="Employer"><span>EMPLOYER</span></div>        
                </div>
                <div className="Com_Fa_Lo_Re">
                    <div className="Company"><span>Company</span></div>
                    <div className="Faq"><span>FAQ</span></div>
                    <div className="Login"><span className="Login_two">Login</span></div>
                    <div className="Register"><span className="Register_two ">Register</span></div>
                </div>
                
                {/* mobile-screen */}
                <div className="RapidOne--mobile"><img src={RapidOne} alt="tw" height="65px"/></div>  
                <div className={Navbar?"R_em_ep--mobile":"R_em_ep--mobile-none"}>
                    <div className="Employee--mobile"><span>EMPLOYEE</span></div>
                    <div className="Employer--mobile"><span>EMPLOYER</span></div>        
                    <div className="Company--mobile"><span>Company</span></div>
                    <div className="Faq--mobile"><span>FAQ</span></div>
                    <div className="Login--mobile"><span className="Login_two--mobile">Login</span></div>
                    <div className="Register--mobile"><span className="Register_two--mobile">Register</span></div>
                </div>
            </div>
        </>
    );

    // }
}
                
