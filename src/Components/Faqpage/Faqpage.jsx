import React,{useState} from 'react'
import "./Faqpage.scss"
import AddIcon from '@material-ui/icons/Add';

export default function Fagepage() {
   
    const [AddIconLetter, setAddIconLetter] = useState(false)
    const [AddIconLetterOne, setAddIconLetterOne] = useState(false)
    const [AddIconLetterTwo, setAddIconLetterTwo] = useState(false)
    const [AddIconLetterThree, setAddIconLetterThree] = useState(false)



    const AddIconLetterChange = () => {
        setAddIconLetter(!AddIconLetter)
    }

    const AddIconLetterChangeOne = () => {
        setAddIconLetterOne(!AddIconLetterOne)
    }

    const AddIconLetterChangeTwo = () => {
        setAddIconLetterTwo(!AddIconLetterTwo)
    }

    const AddIconLetterChangeThree = () => {
        setAddIconLetterThree(!AddIconLetterThree)
    }
     


    return (
        <>
            <div className="Faq_main_container">
               <div className="Faq_container">
                    <div className="Faq_picture_container">
                         <div className="Faq_color_box_one"></div>
                         <div className="Faq_color_box_two"></div>
                         <div className="Faq_picture"></div>
                    </div>
                    <div className="Faq">
                      <h1>FAQ</h1>
                        Lorem ipsum dolor sit amet, consectetur<br/>
                        Lorem ipsum dolor sit amet, consectetur<br/>
                        Lorem ipsum dolor sit amet, consectetur<br/>
                    </div>
               </div>
               <div className="AddIcon_container">
                  <div className="AddIcon"><AddIcon className="Icon_S" onClick={AddIconLetterChange}/><span className="Icon_L">Lorem ipsum dolor sit amet,consectetur Lorem ipsum dolor sit amet,consectetur</span></div>
               </div>
               <div className={AddIconLetter?"AddIcon_letter_container":"AddIcon_letter_container_none"}>
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
               <div className={AddIconLetterOne?"AddIcon_letter_container":"AddIcon_letter_container_none"}>
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
               <div className={AddIconLetterTwo?"AddIcon_letter_container":"AddIcon_letter_container_none"}>
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
               <div className={AddIconLetterThree?"AddIcon_letter_container":"AddIcon_letter_container_none"}>
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
