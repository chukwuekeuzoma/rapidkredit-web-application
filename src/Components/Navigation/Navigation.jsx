import React from 'react'
import "./Navigation.scss"
import RapidOne from "../../images/rapid.png"

export default function Navigation() {
    return (
        <>
            <div className="container_one">
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
            </div>
        </>
    )
}
                
