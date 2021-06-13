import React from 'react'
import "./Aboutpage.scss"
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';



export default function Aboutpage() {
    return (
        <>
            <div>
                <Fade delay={1000} duration={1000}>
                    <div className="Aboutus_container">
                        <h1>About us</h1>
                        At Rapidkredit, we’ve created a platform that does so much more than give employees<br/>
                        access to their earnings in real-time. Our platform forever changes the way money<br/>
                        moves between employer and employee, between merchant and shopper,<br/> 
                        between financial institution and customer. Now money moves faster and smoother,<br/>
                        and benefits each participant equally.<br/>
                        Our mission is to change the financial system by rewriting the invisible rules of money.<br/>
                        We are not just creating a platform that transforms payday, we are creating one that levels<br/>
                        the playing field and treats each and every participant equally. One that is fluid,<br/>
                        efficient and delivers a better experience for everyone.
                    </div>
                </Fade>
                <div className="Culture_container">
                    <div className="Culture_picture_container">
                        <Bounce left delay={1000} duration={1000}><div className="culture_picture"></div></Bounce>
                        <Bounce left delay={2000} duration={1000}><div className="Culture_color_box_one"></div></Bounce>
                        <Bounce left delay={3000} duration={1000}><div className="Culture_color_box_two"></div></Bounce>
                    </div> 
                    <Bounce right delay={1000} duration={1000}>
                        <div className="culture">
                            <h1>Culture</h1>
                            We are building a generational company,<br/>
                            one that we expect to be here for decades to come. Importantly,<br/>
                            each of us believes that the long-term success of our<br/>
                            company is 100% dependent on the success of our people,<br/>
                            a collection of high-performing individuals who bring diverse experiences,<br/>
                            perspectives and backgrounds to carry out our mission.<br/>
                        </div>
                    </Bounce>
                </div>
            </div>
        </>
    )
}



