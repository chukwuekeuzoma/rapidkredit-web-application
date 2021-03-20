import React from 'react'
import "./Dashboard.scss"
import Fade from 'react-reveal/Fade'


export default function Dashboard() {
    return (
        <>
           <Fade right duration={1000} className="fade">
                <div className="Dashboard_container">
                <h2>Dashboard</h2>
                <h2>
                    input will be place here
                </h2>
                </div>
            
             <div className="DB_Grid_container">
                 <div className="DB_content_one">1</div>
                 <div className="DB_content_two">2</div>
                 <div className="DB_content_three">3</div>
                 <div className="DB_content_four">4</div>               
            </div>
            </Fade>    
        </>
    )
}
