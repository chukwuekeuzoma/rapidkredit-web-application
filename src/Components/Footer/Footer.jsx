import React from 'react'
import "./Footer.scss"
import RapidTwo from "../../images/rapid2.png"
import Email from "../../images/Email.png"
import {Twitter, Instagram, Facebook, LinkedIn} from '@material-ui/icons';
import TextField from '@material-ui/core/TextField';
// import InstagramIcon from '@material-ui/icons/Instagram';
// import FacebookIcon from '@material-ui/icons/Facebook';
// import LinkedInIcon from '@material-ui/icons/LinkedIn';

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
                    <div>
                        <form>
                            <TextField
                                id="email"
                                label="Email"
                                placeholder="Email"
                                color="secondary"
                                type="email"
                                variant="outlined"
                                // className="footer_email_text"
                            />
                        </form>


                        {/* <span>Subcribe</span>
                    </div>
                    <div className="footer_location_icon">
                        <div className="footer_img_location"><img src={LocationIcon} alt="tw" height="20px"/></div>
                        <div><span className="footer_img_lorem">Lorem ipsum dolor sit amet, consectetur</span></div> */}
                    </div>
                    <div className="footer_email">
                        <div className="footer_email_img"><img src={Email} alt="tw" height="15px"/></div>
                        <div><span className="footer_email_link">rapidkredit@ghdbgbjhbjhd.com</span></div>
                     
                    </div>
                     <div className="footer_social_media">
                          <div className="footer_social_container">
                               <Twitter className="footer_social"/>
                          </div>
                          <div className="footer_social_container">
                               <Instagram className="footer_social"/>
                          </div>
                          <div className="footer_social_container">
                               <Facebook className="footer_social"/>
                          </div>
                          <div className="footer_social_container">
                                <LinkedIn className ="footer_social"/>
                          </div>
                        </div>
                </div>
          </div>
        </>
    )
}
