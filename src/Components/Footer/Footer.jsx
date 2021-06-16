import React, { useState } from 'react'
import "./Footer.scss"
import RapidTwo from "../../images/rapid2.png"
import { Twitter, Instagram, Facebook, LinkedIn, Drafts, ArrowForward } from '@material-ui/icons';
// import {Button, Dialog, DialogContent, DialogActions } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Bounce from 'react-reveal/Bounce';
import { Link } from "react-router-dom"
import axios from "axios"




const useStyles = makeStyles({
  root: {
    '& label.Mui-focused': {
      color: '#e3f2fd',
    },
    '& .MuiInputBase-root': {
      color: '#e3f2fd'
    },
    '&.MuiTextField-root label': {
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
   
   const [email, setemail] = useState("")
  //  const [open, setOpen] = useState(false)

   const value ={
    email
   }

   const onSubmit = (e) => {
    e.preventDefault();
     axios.post("subscribe/save",value)
     .then(response => {
      if (response.data.status === "success") {
         alert(response.data.message)
      };
     }).catch((error) => {
        alert(error.response.data.message)
     
    });
  }


  const classes = useStyles();

  return (
    <>
      <div className="footer_container">
        <Bounce right delay={1000} duration={1000}>
          <div className="footer_Rapid">
            <div className="footer_Rapid_logo"><img src={RapidTwo} alt="tw" height="65px" /></div>
            <div className="footer_Lorem">
              <span className="footer_Lorem_second">
              At Rapidkredit, we’ve built a best-in-class, trusted,<br/>
              first-of-its-kind technology platform that dynamically<br/>
               changes how money moves — changing pay,<br/> 
              for good. We have one singular objective – to build<br/>
              a better financial system, one paycheck at a time.
                            </span>
            </div>
            <div className="footer_All_right">
              <span className="footer_All_right_seond">@Rapidkredit 2021. All rights Reserved</span>
            </div>

          </div>
        </Bounce>
        <Bounce right delay={2000} duration={1000}>
          <div className="footer_list_tag_one">
            <ul>
              <Link to={{ pathname: "/Aboutpage" }} className="links"><li>About</li></Link>
              <li>Blog</li>
              <li>Careers</li>
              <li>Partners</li>
            </ul>
          </div>

          <div className="footer_list_tag_two">
            <ul>
              <li>Help</li>
              <Link to={{ pathname: "/Faqpage" }} className="links"><li>Faq</li></Link>
              <Link to={{ pathname: "/ContactUs" }} className="links"><li>Contact us</li></Link>
              <li>Forum</li>
            </ul>
          </div>
          <div className="footer_location">
            <div className="footer_textfield">

              <div className="subcribe">
                <h3>Subcribe</h3>
                <span className="subcribe_words">Keep up on our always evolving<br/> 
                product features and technology.<br/> Enter your e-mail and subscribe<br/>
                to our newsletter for information on our<br/>
                latest products and promo.</span>
              </div>
              <div className="Footer_form">
                  <form className={classes.root} onSubmit={onSubmit}>
                    <TextField
                      size="small"
                      id="email"
                      label="Email"
                      placeholder="Email"
                      type="email"
                      variant="outlined"
                      className="footer_email_text"
                      onChange={e => setemail(e.target.value)}
                    />
                  </form>
                  <div onClick={onSubmit}>
                     <ArrowForward className="arrow_forward"/> 
                  </div>
              </div>
            </div>
            <div className="footer_email">
              <div className="footer_email_img"><Drafts /></div>
              <div><span className="footer_email_link">Hello@rapidkredit.com</span></div>

            </div>
            <div className="footer_social_media">
              <div className="footer_social_container">
                <Twitter className="footer_social" />
              </div>
              <div className="footer_social_container">
                <Instagram className="footer_social" />
              </div>
              <div className="footer_social_container">
                <Facebook className="footer_social" />
              </div>
              <div className="footer_social_container">
                <LinkedIn className="footer_social" />
              </div>
            </div>
          </div>
        </Bounce>
      </div>
    </>
  )
}
