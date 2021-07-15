import * as React from 'react';
import Fade from 'react-reveal/Fade'
import "./SettlementPage.scss"
import { DataGrid } from '@material-ui/data-grid';
// import {Button } from '@material-ui/core';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';

export default function SettlementPage() {
    const columns = [
        { field: 'id', headerName: 'No.', width: 75 },
        { field: 'requestId', headerName: 'Request ID', width: 125 },
        { field: 'amount', headerName: 'Amount', width: 120 },
        // {
        //   field: 'age',
        //   headerName: 'Age',
        //   type: 'number',
        //   width: 90,
        // },
        // {
        //   field: 'fullName',
        //   headerName: 'Full name',
        //   description: 'This column has a value getter and is not sortable.',
        //   sortable: false,
        //   width: 160,
        //   valueGetter: (params) =>
        //     `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
        // },
      ];
      
      const rows = [
        // { id: 1, requestId: 'none', amount: 'none'},
      ];


      const d = new Date()
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]
      const month = months[d.getMonth()]
      const year = d.getFullYear()

    return (
        <>
            <div>
                <Fade big  duration={1000}>
                    <div className="settelment_container">
                        <h2>Settlement</h2>
                    </div>
                    <div className="ST_Grid_container">
                        <div className="ST_content_one">
                            <div className="ST_Header">
                                <div className="ST_Header_content">
                                    <span className="ST_Numbers">Numbers of <br/>Settlement</span>
                                    <span className="ST_Numbers_one">0</span>
                                </div>
                                <div  className="ST_Header_content_two">
                                    <span className="ST_Total">Total<br/>Commissions</span>
                                    <span className="ST_Total_one">N&nbsp;0.00</span>
                                </div>
                                <div className="ST_Number_Days_container">
                                    <div className="ST_Days_container">
                                        <div className="ST_Number_of_days"><span>Pending<br/>Settlement</span></div>
                                    </div>
                                    <div className="ST_Days_container_two">
                                        <div className="ST_Figures"><span>0</span></div>
                                    </div>
                                </div>
                                <div className="ST_Icon_Container">
                                     <CalendarTodayIcon className ="ST_Icon"/><br/> 
                                     <div className="ST_Date"><span>{month}<br/>{year}</span></div>  
                                </div>
                            </div>

                        </div>
                        <div className="ST_content_two">
                            <div style={{ height: 320, width: '100%' }}>
                               <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
                            </div>
                        </div>               
                    </div>
                </Fade>
            </div>
            {/* mobile */}
            <div>
                <Fade big  duration={1000}>
                    <div className="ST_Grid_container_mobile">
                        <div className="ST_content_one_mobile">
                            <div className="ST_Number_Days_container_mobile">
                                <div className="ST_Days_container_mobile">
                                    <div className="ST_Number_of_days_mobile"><span>Pending<br/>Settlement</span></div>
                                </div>
                                <div className="ST_Days_container_two_mobile">
                                    <div className="ST_Figures_mobile"><span>0</span></div>
                                </div>
                            </div>
                            <div className="ST_Icon_Container_mobile">
                                     <CalendarTodayIcon className ="ST_Icon_mobile"/><br/> 
                                     <div className="ST_Date_mobile"><span>{month}<br/>{year}</span></div>  
                            </div>
                        </div>
                        <div className="ST_content_two_mobile">
                            <div className="ST_Header_content_mobile">
                                <span className="ST_Numbers_mobile">Numbers of <br/>Settlement</span>
                                <span className="ST_Numbers_one_mobile">0</span>
                            </div>
                        </div>
                        <div className="ST_content_three_mobile"> 
                                <div  className="ST_Header_content_two_mobile">
                                    <span className="ST_Total_mobile">Total<br/>Commissions</span>
                                    <span className="ST_Total_one_mobile">N&nbsp;0.00</span>
                                </div>

                        </div>
                        <div className="ST_content_four_mobile">
                            <div style={{ height: 320, width: '100%' }}>
                               <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
                            </div>
                        </div>
                        
                    </div>
                </Fade>
            </div>

        </>
    )
}
