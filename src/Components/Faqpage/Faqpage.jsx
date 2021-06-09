import React, { useState } from 'react'
import "./Faqpage.scss"
import AddIcon from '@material-ui/icons/Add';
import Bounce from 'react-reveal/Bounce';


export default function Fagepage() {

    const [AddIconLetter, setAddIconLetter] = useState("")



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
                        <Bounce left delay={1000} duration={1000}><div className="Faq_picture"></div></Bounce>
                        <Bounce left delay={2000} duration={1000}><div className="Faq_color_box_one"></div></Bounce>
                        <Bounce left delay={3000} duration={1000}><div className="Faq_color_box_two"></div></Bounce>
                    </div>
                    <Bounce right delay={1000} duration={1000}>
                        <div className="Faq">
                            <h1>FAQ</h1>
                        Lorem ipsum dolor sit amet, consectetur<br />
                        Lorem ipsum dolor sit amet, consectetur<br />
                        Lorem ipsum dolor sit amet, consectetur<br />
                        </div>
                    </Bounce>
                </div>
                <Bounce right delay={1000} duration={1000}>
                    <div className="AddIcon_container">
                        <div className="AddIcon"><AddIcon className="Icon_S" onClick={AddIconLetterChange} /><span className="Icon_L">Lorem ipsum dolor sit amet,consectetur Lorem ipsum dolor sit amet,consectetur</span></div>
                    </div>
                    <div className={AddIconLetter === "AddIconLetter" ? "AddIcon_letter_container" : "AddIcon_letter_container_none"}>
                        <span className="AddIcon_letter">
                            Lorem ipsum dolor sit amet,kkkk ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur<br />
                            Lorem ipsum dolor sit amet,kkkk ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur<br />
                            Lorem ipsum dolor sit amet,kkkk ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur<br />
                            Lorem ipsum dolor sit amet,kkkk ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur<br />
                        </span>
                    </div>
                </Bounce>
                <Bounce left delay={2000} duration={1000}>
                    <div className="AddIcon_container">
                        <div className="AddIcon"><AddIcon className="Icon_S" onClick={AddIconLetterChangeOne} /><span className="Icon_L">Lorem ipsum dolor sit amet,consectetur Lorem ipsum dolor sit amet,consectetur</span></div>
                    </div>
                    <div className={AddIconLetter === "AddIconLetterOne" ? "AddIcon_letter_container" : "AddIcon_letter_container_none"}>
                        <span className="AddIcon_letter">
                            Lorem ipsum dolor sit amet,kkkk ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur<br />
                        Lorem ipsum dolor sit amet,kkkk ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur<br />
                        Lorem ipsum dolor sit amet,kkkk ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur<br />
                        Lorem ipsum dolor sit amet,kkkk ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur<br />
                        </span>
                    </div>
                </Bounce>
                <Bounce right delay={3000} duration={1000}>
                    <div className="AddIcon_container">
                        <div className="AddIcon"><AddIcon className="Icon_S" onClick={AddIconLetterChangeTwo} /><span className="Icon_L">Lorem ipsum dolor sit amet,consectetur Lorem ipsum dolor sit amet,consectetur</span></div>
                    </div>
                    <div className={AddIconLetter === "AddIconLetterTwo" ? "AddIcon_letter_container" : "AddIcon_letter_container_none"}>
                        <span className="AddIcon_letter">
                            Lorem ipsum dolor sit amet,kkkk ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur<br />
                        Lorem ipsum dolor sit amet,kkkk ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur<br />
                        Lorem ipsum dolor sit amet,kkkk ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur<br />
                        Lorem ipsum dolor sit amet,kkkk ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur<br />
                        </span>
                    </div>
                </Bounce>
                <Bounce left delay={4000} duration={1000}>
                    <div className="AddIcon_container">
                        <div className="AddIcon"><AddIcon className="Icon_S" onClick={AddIconLetterChangeThree} /><span className="Icon_L">Lorem ipsum dolor sit amet,consectetur Lorem ipsum dolor sit amet,consectetur</span></div>
                    </div>
                    <div className={AddIconLetter === "AddIconLetterThree" ? "AddIcon_letter_container" : "AddIcon_letter_container_none"}>
                        <span className="AddIcon_letter">
                            Lorem ipsum dolor sit amet,kkkk ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur<br />
                        Lorem ipsum dolor sit amet,kkkk ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur<br />
                        Lorem ipsum dolor sit amet,kkkk ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur<br />
                        Lorem ipsum dolor sit amet,kkkk ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur<br />
                        </span>
                    </div>
                </Bounce>
            </div>
        </>
    )
}
