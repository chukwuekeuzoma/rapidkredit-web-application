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
              
                <div className="footer_Rapid">
                    <div className="footer_Rapid_logo"><img src={RapidTwo} alt="tw" height="65px"/></div>
                    <div className="footer_Lorem">
                        <span className="footer_Lorem_second">
                            Lorem ipsum dolor sit amet, consectetur<br/>
                            adipiscing elit, sed do eiusmod tempor<br/>
                            incididunt ut labore et dolore magna<br/>
                            aliqua. Quis ipsum suspendisse
                        </span>
                    </div>
                    <div className="footer_All_right">
                       <span className="footer_All_right_seond">@Rapidkredit 2021. All rights Reserved</span> 
                    </div>

                </div>
                <div className="footer_list_tag_one">
                    <ul>
                        <li>Company</li>
                        <li>About</li>
                        <li>Blog</li>
                        <li>Careers</li>
                        <li>Partners</li>
                    </ul>
                </div>
                <div className="footer_list_tag_two">
                    <ul>
                        <li>Help</li>
                        <li>Faq</li>
                        <li>Contact us</li>
                        <li>Forum</li>
                    </ul>
                </div>
                <div className="footer_location">
                    <div className="footer_location_icon">
                        <div className="footer_img_location"><img src={LocationIcon} alt="tw" height="20px"/></div>
                        <div><span className="footer_img_lorem">Lorem ipsum dolor sit amet, consectetur</span></div>
                    </div>
                    <div className="footer_email">
                        <div className="footer_email_img"><img src={Email} alt="tw" height="15px"/></div>
                        <div><span className="footer_email_link">rapidkredit@ghdbgbjhbjhd.com</span></div>
                     
                    </div>
                     <div className="footer_social_media">
                    
                          <img src={SocialMedia} alt="tw" height="20px" className="footer_social_media_img"/>
                    
                     </div>
                </div>
          </div>
        </>
    )
}
