import React,{useState} from 'react'
// import "./Navigation.scss"
import {useStyles} from "./NavigationCss"
import RapidOne from "../../images/rapid.png"
import Aboutus from "../../images/aboutus.jpg"
import Fag from "../../images/faq.jpg"
import Contactus from "../../images/contactus.jpg"
import Earnbeforepayday from "../../images/earnbeforepayday.jpg"
import Employeewelness  from "../../images/employeewelness.jpg"
import {Link} from "react-router-dom"
import "./Navigation.css"
// import classnames from "classnames"
import {Menu, Clear } from '@material-ui/icons'


// import { Component } from 'react'

export default function Navigation () {
    
    const classes = useStyles();
    
      
    //  const nav = document.querySelector('nav');
    //  let prevScrollpos = window.pageYOffset;

    //  window.addEventListener('scroll', ()=>{
    //      let currentScrollPos = window.pageYOffset;

    //      if(prevScrollpos < currentScrollPos){
    //          nav.classList.add('hide');
    //      }else{
    //         nav.classList.remove('hide');
    //      }

    //      prevScrollpos=currentScrollPos;
    //  })

    // var nav = document.querySelector('nav');
    
    // const martins = () =>{
    //     if(window.pageYOffset > 100){
    //         nav.classList += 'small'
    //         } else{
    //             nav.classList ='nav'
    //         }
            
    // } 

    // window.addEventListener('scroll',martins)
   
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
       
            <nav>
                    <div className="nav_bar_Menu_icon">
                        <div onClick={Navchange}>
                            {Navbar ? <Clear className="icon_color--clear"/> : <Menu className="icon_color"/> }
                        </div>
                    </div>
                <div className="R_em_ep">
                    <div className="RapidOne"><img src={RapidOne} alt="tw" height="65px"/></div>        
                    <div className="Employee"><Link to="/Employee" className="links"><span>EMPLOYEE</span></Link></div>
                     <div className="Employer"><Link to="/Employer" className="links"><span>EMPLOYER</span></Link></div>        
                </div>
                <div className="Com_Fa_Lo_Re">
                    <div className="Company"><span>Company</span>
                        <div className="box">
                           <div className="img_box">
                             <img src={Aboutus} alt="tw"/>
                              <div className="overlay"></div>
                                <Link to="Aboutpage" className="drop_down_links">
                                    <div className="overlay_shade">
                                        <span className="overlay_shade_text">
                                            About<br/>
                                            us
                                        </span>
                                    </div>
                                </Link>
                           </div>
                           <div className="img_box" >
                             <img src={Employeewelness} alt="tw"/>
                                <div className="overlay"></div>
                                <div className="overlay_shade">
                                    <span className="overlay_shade_text">
                                        Privacy<br/>
                                        Policy
                                    </span>
                                </div>
                            </div>
                           <div className="img_box">
                             <img src={Fag} alt="tw"/>
                                <div className="overlay"></div>
                                <div className="overlay_shade">
                                    <span className="overlay_shade_text">
                                        Terms&<br/>
                                        Condition
                                    </span>
                                </div>
                           </div>
                           <div className="img_box">
                               <img src={Earnbeforepayday} alt="tw"/>
                               <div className="overlay"></div>
                                <div className="overlay_shade">
                                    <span className="overlay_shade_text">
                                        Legal<br/>
                                        <br/>
                                    </span>
                                </div>
                            </div>
                           <div className="img_box">
                             <img src={Contactus} alt="tw"/>
                             <div className="overlay"></div>
                                <div className="overlay_shade">
                                    <span className="overlay_shade_text">
                                        Contact<br/>
                                        us
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
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
            </nav>
        </>
    );

    // }
}
                
