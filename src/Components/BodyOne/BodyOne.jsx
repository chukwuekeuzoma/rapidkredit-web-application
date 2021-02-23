import React from 'react'
import "./BodyOne.scss"
import { Button } from '@material-ui/core'
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
                        <span className="As">Before payday</span>
                    </div>
                    {/* <div>
                        <span className="Access">
                            Access your pay to cover bills
                        </span>
                    </div> */}
                    {/* <div className="App_c">
                      <span className="App"><img src={App} alt="tw" height="50px"/></span> 
                    </div> */}
                    
                    <div className="With_D_two">
                        <span className="Withdraw_two">   Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit,<br/>sed do eiusmod tempor
                            incididunt ut labore<br/>et dolore</span>
                    </div>
                    <div>
                        <Button variant="outlined" className="Botton--one">Get Started</Button>
                    </div>

               </div>
            </div>
        </>
    )
                       
}
