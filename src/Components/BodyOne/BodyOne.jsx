import React from 'react'
import "./BodyOne.scss"
import App from "../../images/appicon.png"


export default function BodyOne() {
    return (
        <>
            <div className="container_two">
               <div className="W_A_S">
                    <div className="With_D">
                        <span className="Withdraw">Withdraw your Salary</span>
                    </div>
                    <div>
                        <span className="As">as you work</span>
                    </div>
                    <div>
                        <span className="Access">
                            Access your pay to cover bills
                        </span>
                    </div>
                    <div className="App_c">
                      <span className="App"><img src={App} alt="tw" height="50px"/></span> 
                    </div>
               </div>
            </div>
        </>
    )
                       
}
