import React, { useState, useEffect } from 'react'
import "./AdminHome.scss"

export default function AdminHome(props) {
    return (
      <>
        <div className="ADH_container">
            <h2>Home</h2>
        </div>
        <div className="ADH_Grid_container">
             <div className="ADH_content_one">
                 <div className="ADH_box_container">
                     <div className="ADH_box_one">
                         <div>
                              <span>
                                
                                  <span className="ADH_box_num"> 5 </span>
                                    <br/>
                                    <span className="ADH_box_text"> Employers </span>

                              </span>
                          </div>
                     </div>
                     <div className="ADH_box_two">
                           <div>
                              <span>
                                
                                  <span className="ADH_box_num"> 352 </span>
                                    <br/>
                                    <span className="ADH_box_text"> Employees </span>

                              </span>
                          </div>

                     </div>
                 </div>
                 <div className="ADH_box_container_two">
                      <div className="ADH_box_three">
                        <div>
                                <span>
                                  
                                    <span className="ADH_box_num"> 0 </span>
                                      <br/>
                                      <span className="ADH_box_text"> Request  </span>

                                </span>
                            </div>

                      </div>
                      <div className="ADH_box_four">
                         <div>
                                <span>
                                  
                                    <span className="ADH_box_num"> 0 </span>
                                      <br/>
                                      <span className="ADH_box_text"> settlement </span>

                                </span>
                            </div>

                     </div>
                 </div>
                
             </div>
            
        </div>
      </>
    );
}

