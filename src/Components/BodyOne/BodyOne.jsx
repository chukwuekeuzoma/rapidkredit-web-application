import React from 'react'
import "./BodyOne.scss"
import { Button } from '@material-ui/core'
import Bounce from 'react-reveal/Bounce';
import { Link } from "react-router-dom"


export default function BodyOne() {
    return (
        <>
            <div className="container_two">
                <div className="W_A_S">
                    <Bounce right delay={1000} duration={1000}>
                        <div className="With_D">
                            <span className="Withdraw">Withdraw your Salary</span>
                        </div>
                    </Bounce>
                    <Bounce right delay={2000} duration={1000}>
                        <div>
                            <span className="As">Before payday</span>
                        </div>
                    </Bounce>
                    <Bounce right delay={3000} duration={1000}>
                        <div className="With_D_two">
                            <span className="Withdraw_two"> Rapidkredit gives employees access to their pay and tips when they need it,<br/>
                                and the ability to plan — before payday arrives.<br />We reduce financial stress and increase financial stability.
                            </span>
                        </div>
                        <div className="With_D_two_mobile">
                            <span className="Withdraw_two_mobile"> Rapidkredit gives employees access to their pay and tips when they need it,
                                and the ability to plan — before payday arrives.We reduce financial stress and increase financial stability.
                            </span>
                        </div>
                    </Bounce>
                    <Bounce right delay={4000} duration={1000}>
                        <div>
                            <Link to={{ pathname: "/Register" }} className="links">
                                <Button variant="outlined" className="Botton--one">Get Started</Button>
                            </Link>
                        </div>
                    </Bounce>

                </div>
            </div>
        </>
    )

}
