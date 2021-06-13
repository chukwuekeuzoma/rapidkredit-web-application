import React, { useState } from 'react'
import "./Faqpage.scss"
import AddIcon from '@material-ui/icons/Add';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';


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
                            <h1>Getting Started</h1>
                            <b>What is Rapidkredit?</b><br />
                            Rapidkredit is the gold standard in on-demand pay with software<br />
                            that easily integrates with a company’s payroll and time management systems.<br />
                            Rapidkredit provides employees of our Partner companies early access to their earned pay.<br />
                            This means that you choose when you want to get paid.<br />
                            You can get instant access to your earned income or<br />
                            receive it on the next business day when you choose to use Rapidkredit.<br />
                        </div>
                    </Bounce>
                </div>
                <Fade delay={200} duration={1000}>
                    <div className="AddIcon_container">
                        <div className="AddIcon"><AddIcon className="Icon_S" onClick={AddIconLetterChange} /><b className="Icon_L">Is Rapidkredit a loan?</b>
                        </div>
                    </div>
                    <div className={AddIconLetter === "AddIconLetter" ? "AddIcon_letter_container" : "AddIcon_letter_container_none"}>
                        <span className="AddIcon_letter">
                            No, this is not a loan. We are here to stop you from needing to take out a loan. By using Rapidkredit,
                            you are simply transferring your own earned income into your bank account or card.
                            You can only transfer money that you have already earned, but that has not yet been paid to you.
                        </span>
                    </div>

                    <div className="AddIcon_container">
                        <div className="AddIcon"><AddIcon className="Icon_S" onClick={AddIconLetterChangeOne} /><b className="Icon_L">How safe is it to use Rapidkredit?</b></div>
                    </div>
                    <div className={AddIconLetter === "AddIconLetterOne" ? "AddIcon_letter_container" : "AddIcon_letter_container_none"}>
                        <span className="AddIcon_letter">
                            We use bank-level security to encrypt and secure all of your personal information.
                            We also have the highest security certifications in the industry to ensure that your information is protected.
                        </span>
                    </div>

                    <div className="AddIcon_container">
                        <div className="AddIcon"><AddIcon className="Icon_S" onClick={AddIconLetterChangeTwo} /><b className="Icon_L">Why should I sign up for Rapidkredit?</b></div>
                    </div>
                    <div className={AddIconLetter === "AddIconLetterTwo" ? "AddIcon_letter_container" : "AddIcon_letter_container_none"}>
                        <span className="AddIcon_letter">
                            Rapidkredit can provide you with many benefits. They include, but are not limited to:<br />
                            Access to your earned pay so you can pay bills on time<br />
                            The ability to save your earned pay in a savings account of your choosing<br />
                            Access to your own money in case of an emergency<br />
                            Seeing how much you earn each day, which makes it easier for you to budget.
                        </span>
                    </div>

                    <div className="AddIcon_container">
                        <div className="AddIcon"><AddIcon className="Icon_S" onClick={AddIconLetterChangeThree} /><b className="Icon_L">What do I need to sign up with Rapidkredit?</b></div>
                    </div>
                    <div className={AddIconLetter === "AddIconLetterThree" ? "AddIcon_letter_container" : "AddIcon_letter_container_none"}>
                        <span className="AddIcon_letter">
                            Once your employer launches their partnership with us to offer Rapidkredit, 
                            you need a bank account, prepaid debit card or payroll card so that Rapidkredit knows where to send your earned pay. Rapidkredit’s software 
                            requires you to have direct deposit for your paychecks. This allows us to transfer your earned pay into your account of choice whenever you request a transfer.
                            To get started, sign up here today!
                        </span>
                    </div>
                </Fade>
            </div>
        </>
    )
}
