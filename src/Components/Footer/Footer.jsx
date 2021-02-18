import React from 'react'
import "./Footer.scss"
import RapidTwo from "../../images/rapid2.png"
import SocialMedia from "../../images/SocialMedia.png"
import Email from "../../images/Email.png"
import LocationIcon from "../../images/LocationIcon.png"

export default function Footer() {
    return (
       <>
          <div className="footer_container">
                <div>
                    <div><img src={RapidTwo} alt="tw" height="65px"/></div>
                    <div>
                        <span>
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna
                            aliqua. Quis ipsum suspendisse
                        </span>
                    </div>
                    <div>@Rapidkredit 2021. All rights Reserved</div>

                </div>
                <div>
                    <ul>
                        <li>Company</li>
                        <li>About</li>
                        <li>Blog</li>
                        <li>Careers</li>
                        <li>Partners</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>Help</li>
                        <li>Faq</li>
                        <li>Contact us</li>
                        <li>Forum</li>
                    </ul>
                </div>
                <div>
                    <div>
                        <div><img src={LocationIcon} alt="tw" height="30px"/></div>
                        <div><span>Lorem ipsum dolor sit amet, consectetur</span></div>
                 

                    </div>
                    <div>
                        <div><img src={Email} alt="tw" height="30px"/></div>
                        <div><span>rapidkredit@ghdbgbjhbjhd.com</span></div>
                        <div><img src={SocialMedia} alt="tw" height="30px"/></div>
                    </div>
                </div>
          </div>
        </>
    )
}
