import React,{useState} from 'react'
import "./Faqpage.scss"
import AddIcon from '@material-ui/icons/Add';
import Fade from 'react-reveal/Fade'


export default function Fagepage() {
   
    const [AddIconLetter, setAddIconLetter] = useState("")
    // const [AddIconLetterOne, setAddIconLetterOne] = useState(false)
    // const [AddIconLetterTwo, setAddIconLetterTwo] = useState(false)
    // const [AddIconLetterThree, setAddIconLetterThree] = useState(false)



    const AddIconLetterChange = () => {
        setAddIconLetter("AddIconLetter")
    }

    const AddIconLetterChangeOne = () => {
        setAddIconLetter("AddIconLetterOne")
    }

    const AddIconLetterChangeTwo = () => {
        setAddIconLetter("AddIconLetterTwo")
    }

    const AddIconLetterChangeThree = () => {
        setAddIconLetter("AddIconLetterThree")
    }
     


    return (
        <>
            <div className="Faq_main_container">
               <div className="Faq_container">
                    <div className="Faq_picture_container">
                    <Fade left delay={500} duration={500}><div className="Faq_picture"></div></Fade>
                    <Fade left delay={1000} duration={500}><div className="Faq_color_box_one"></div></Fade>
                    <Fade left delay={2000} duration={500}><div className="Faq_color_box_two"></div></Fade>
                    </div>
                    <Fade right delay={500} duration={500}>    
                    <div className="Faq">
                      <h1>FAQ</h1>
                        Lorem ipsum dolor sit amet, consectetur<br/>
                        Lorem ipsum dolor sit amet, consectetur<br/>
                        Lorem ipsum dolor sit amet, consectetur<br/>
                    </div>
                    </Fade>
               </div>
               <div className="AddIcon_container">
                  <div className="AddIcon"><AddIcon className="Icon_S" onClick={AddIconLetterChange}/><span className="Icon_L">Lorem ipsum dolor sit amet,consectetur Lorem ipsum dolor sit amet,consectetur</span></div>
               </div>
               <div className={AddIconLetter === "AddIconLetter"?"AddIcon_letter_container":"AddIcon_letter_container_none"}>
                   <span className="AddIcon_letter">
                      Lorem ipsum dolor sit amet,kkkk ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur<br/>
                      Lorem ipsum dolor sit amet,kkkk ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur<br/>
                      Lorem ipsum dolor sit amet,kkkk ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur<br/>
                      Lorem ipsum dolor sit amet,kkkk ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur<br/>
                   </span>
               </div>
               <div className="AddIcon_container">
                  <div className="AddIcon"><AddIcon className="Icon_S" onClick={AddIconLetterChangeOne}/><span className="Icon_L">Lorem ipsum dolor sit amet,consectetur Lorem ipsum dolor sit amet,consectetur</span></div>
               </div>
               <div className={AddIconLetter === "AddIconLetterOne"?"AddIcon_letter_container":"AddIcon_letter_container_none"}>
                   <span className="AddIcon_letter">
                      Lorem ipsum dolor sit amet,kkkk ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur<br/>
                      Lorem ipsum dolor sit amet,kkkk ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur<br/>
                      Lorem ipsum dolor sit amet,kkkk ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur<br/>
                      Lorem ipsum dolor sit amet,kkkk ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur<br/>
                   </span>
               </div>
               <div className="AddIcon_container">
                  <div className="AddIcon"><AddIcon className="Icon_S" onClick={AddIconLetterChangeTwo}/><span className="Icon_L">Lorem ipsum dolor sit amet,consectetur Lorem ipsum dolor sit amet,consectetur</span></div>
               </div>
               <div className={AddIconLetter === "AddIconLetterTwo"?"AddIcon_letter_container":"AddIcon_letter_container_none"}>
                   <span className="AddIcon_letter">
                      Lorem ipsum dolor sit amet,kkkk ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur<br/>
                      Lorem ipsum dolor sit amet,kkkk ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur<br/>
                      Lorem ipsum dolor sit amet,kkkk ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur<br/>
                      Lorem ipsum dolor sit amet,kkkk ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur<br/>
                   </span>
               </div>  
               <div className="AddIcon_container">
                  <div className="AddIcon"><AddIcon className="Icon_S" onClick={AddIconLetterChangeThree}/><span className="Icon_L">Lorem ipsum dolor sit amet,consectetur Lorem ipsum dolor sit amet,consectetur</span></div>
               </div>
               <div className={AddIconLetter === "AddIconLetterThree"?"AddIcon_letter_container":"AddIcon_letter_container_none"}>
                   <span className="AddIcon_letter">
                      Lorem ipsum dolor sit amet,kkkk ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur<br/>
                      Lorem ipsum dolor sit amet,kkkk ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur<br/>
                      Lorem ipsum dolor sit amet,kkkk ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur<br/>
                      Lorem ipsum dolor sit amet,kkkk ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur<br/>
                   </span>
               </div>            
                  
            </div>
        </>
    )
}
