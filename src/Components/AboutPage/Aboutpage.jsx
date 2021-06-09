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
                        suspendisse ultri gravida Risus commodo maecenas accumsan lacus vel facilisis Lorem.
                        suspendisse ultrices<br />
                        suspendisse ultri gravida.Risus commodo maecenas accumsan lacus vel facilisis Lorem.
                        suspendisse ultrices<br />
                        suspendisse ultri gravida.Risus commodo maecenas accumsan lacus vel facilisis Lorem.
                        suspendisse ultrices<br />
                        suspendisse ultri gravida.Risus commodo maecenas accumsan lacus vel facilisis Lorem.
                        suspendisse ultrices<br />
                        suspendisse ultri gravida.Risus commodo maecenas accumsan lacus vel facilisis Lorem.
                        suspendisse ultrices<br />
                        suspendisse ultri gravida.Risus commodo maecenas accumsan lacus vel facilisis Lorem.
                        suspendisse ultrices<br />
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
                            <h2>suspendisse ultri gravida.<br />Risus commodo maecenas accumsan</h2>
                            suspendisse ultri gravida.Risus commodo<br />
                            facilisis Lorem. suspendisse ultrices suspendisse ultri gravida.<br />
                            Risus commodo maecenas accumsan lacus vel facilisis Lorem.<br />
                            facilisis Lorem. suspendisse ultrices suspendisse ultri gravida.<br />
                            Risus commodo maecenas accumsan lacus vel facilisis Lorem.<br />
                            facilisis Lorem. suspendisse ultrices suspendisse ultri gravida.<br />
                            Risus commodo maecenas accumsan lacus vel facilisis Lorem.<br />
                        </div>
                    </Bounce>
                </div>
            </div>
        </>
    )
}



