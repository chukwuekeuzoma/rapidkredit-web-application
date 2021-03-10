import React from 'react'
import "./Footer.scss"
import RapidTwo from "../../images/rapid2.png"
import {Twitter, Instagram, Facebook, LinkedIn, Drafts} from '@material-ui/icons';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';





// const CssTextField = withStyles({
//     root: {
//       '& label.Mui-focused': {
//         color: 'green',
//       },
//       '& .MuiInput-underline:after': {
//         borderBottomColor: 'green',
//       },
//     },
//   })(TextField);

const useStyles = makeStyles({
    root: {
            '& label.Mui-focused': {
                color: '#e3f2fd',
              },
              '& .MuiInputBase-root': {
                color: '#e3f2fd'
               },
               '&.MuiTextField-root label' :{
                top: 8,
                bottom: 8
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#e3f2fd',
                },
                '&:hover fieldset': {
                  borderColor: '#e3f2fd',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#e3f2fd',
                },
               
              },
    },
  })


export default function Footer() {
  const classes =  useStyles();
   
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
                    <div className="footer_textfield">
                        
                        <div className="subcribe">
                            <h3>Subcribe</h3>
                            <span className="subcribe_words">Lorem ipsum dolor sit amet, consectetur<br/>
                            adipiscing elit, sed do eiusmod tempor<br/>
                            incididunt ut labore et.<br/></span>
                        </div>

                        <form className={classes.root}>
                            <TextField
                                id="email"
                                label="Email"
                                placeholder="Email"
                                type="email"
                                variant="outlined"
                                className="footer_email_text"
                            />
                        </form>
                    </div>
                    <div className="footer_email">
                        <div className="footer_email_img"><Drafts/></div>
                        <div><span className="footer_email_link">Hello@rapidkredit.com</span></div>
                     
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
