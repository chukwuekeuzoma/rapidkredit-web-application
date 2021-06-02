import React,{useState,useEffect} from 'react'
// import "./Navigation.scss"
import {useStyles} from "./NavigationCss"
import RapidOne from "../../images/rapid.png"
import {Link} from "react-router-dom"
import "./Navigation.css"
// import classnames from "classnames"
import {Menu, Clear } from '@material-ui/icons'




export default function Navigation () {

    const [Navbar, setNavbar] = useState(false)
    // const [ScroolPos, setScroolPos] = useState(0)
    // const [Show, setShow] = useState(true)

    // console.log(ScroolPos)
    // console.log(Show)

   const classes = useStyles();
   


   useEffect(() => {
        window.addEventListener("scroll", handleScroll)
    return()=>{
        window.removeEventListener("scroll", handleScroll)
      }
    }, [])



   const handleScroll = () => {
         var lastScrollTop = 100; 
         const navBar = document.getElementById("navBar")
         var scroolTop = window.pageYOffset || document.documentElement.scrollTop;
         if(scroolTop > lastScrollTop){
              navBar.style.top="-120px";
         }else {
            navBar.style.top="0"
         }

         lastScrollTop = scroolTop;

        // console.log(document.body.getBoundingClientRect());
        // setScroolPos(document.body.getBoundingClientRect().top);
        // setShow(document.body.getBoundingClientRect().top > 0)
   } 


  
    

    const Navchange = () => {
        setNavbar(!Navbar)
    }
         
    return (
        <>
            <nav id="navBar">
                    <div className="nav_bar_Menu_icon">
                        <div onClick={Navchange}>
                            {Navbar ? <Clear className="icon_color--clear"/> : <Menu className="icon_color"/> }
                        </div>
                    </div>
                <div className="R_em_ep">
                    <div className="RapidOne"><Link to="/" className="links"><img src={RapidOne} alt="tw" height="65px"/></Link></div>        
                    <div className="Employee"><Link to="/Employee" className="links"><span>EMPLOYEE</span></Link></div>
                     <div className="Employer"><Link to="/Employer" className="links"><span>EMPLOYER</span></Link></div>        
                </div>
                <div className="Com_Fa_Lo_Re">
                    <div className="Company"><span>Company</span>
                        <div className="box">
                           <div className="img_box">
                              <div className="about_picture"></div>
                              <div className="overlay"></div>
                                <Link to="Aboutpage" className="links">
                                    <div className="overlay_shade">
                                        <span className="overlay_shade_text">
                                            About<br/>
                                            us
                                        </span>
                                    </div>
                                </Link>
                           </div>
                           <div className="img_box" >
                                <div className="privacy_picture"></div>
                                <div className="overlay"></div>
                                <div className="overlay_shade">
                                    <span className="overlay_shade_text">
                                        Privacy<br/>
                                        Policy
                                    </span>
                                </div>
                            </div>
                           <div className="img_box">
                                <div className="Fag_picture"></div>
                                <div className="overlay"></div>
                                <div className="overlay_shade">
                                    <span className="overlay_shade_text">
                                        Terms&<br/>
                                        Condition
                                    </span>
                                </div>
                           </div>
                           <div className="img_box">
                               <div className="Lagal_picture"></div>
                               <div className="overlay"></div>
                                <div className="overlay_shade">
                                    <span className="overlay_shade_text">
                                        Legal<br/>
                                        <br/>
                                    </span>
                                </div>
                            </div>
                           <div className="img_box">
                             <div className="contact_picture"></div>
                             <div className="overlay"></div>
                               <Link to="ContactUs" className="links">
                                    <div className="overlay_shade">
                                        <span className="overlay_shade_text">
                                            Contact<br/>
                                            us
                                        </span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="Faq"><Link to="/Faqpage" className="links"><span>FAQ</span></Link></div>
                    <div className="Login"> <Link to="Login" className="links"><span className="Login_two">Login</span></Link></div>
                    <div className="Register"> <Link to="Register" className="links"><span className="Register_two ">Register</span></Link></div>
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
                
