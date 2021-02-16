import React from 'react'
import "./BodyTwo.scss"
import {ArrowDropDown} from '@material-ui/icons';
import Manwithphone from "../../images/manwithphone.png"

export default function BodyTwo() {
    return (
        <>
            <div className="container_three">
                <div className="Man"><span><img src={Manwithphone} alt="tw" height="500px"/></span> </div>
                <div className="H_P_Loerm_contanier">
                    <div className="H_P_Loerm">
                      <h2 className="Lorem_H">Lorem Ipsum</h2>
                        <p className="Lorem_p">
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing<br/>elit,sed do eiusmod tempor
                            incididunt ut<br/>labore et dolore magna
                            aliqua. Quis <br/> ipsum suspendisse ultrices
                            gravida.Risus commodo viverra <br/>maecenas
                            accumsan lacus vel facilisis
                        </p>
                    </div>
                    <div className="learn_more_C">
                        <div className="learn_more">
                            <span className="learn_more_two">learn more <ArrowDropDown className="Arrow_D"/></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

