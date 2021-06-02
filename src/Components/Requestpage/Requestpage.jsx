import * as React from 'react';
import "./Requestpage.scss"
import "../ProfilePage/ProfilePage.scss"
import Fade from 'react-reveal/Fade'
import {Button } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';


export default function Requestpage() {
   
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'firstName', headerName: 'First name', width: 130 },
        { field: 'lastName', headerName: 'Last name', width: 130 },
        {
          field: 'age',
          headerName: 'Age',
          type: 'number',
          width: 90,
        },
        {
          field: 'fullName',
          headerName: 'Full name',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 160,
          valueGetter: (params) =>
            `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
        },
      ];
      
      const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null},
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
      ];


    return (
        <> 
           <Fade big  duration={1000}>
                <div className="Request_container">
                    <h2>Request</h2>
                </div>
                <div className="RQ_Grid_container">
                    <div className="RQ_content_one">
                        <div className="RQ_Header">
                            <div className="RQ_Header_content">
                                <span className="RQ_Numbers">Numbers of <br/> request</span>
                                <span className="RQ_Numbers_one">0</span>
                            </div>
                            <div  className="RQ_Header_content_two">
                                <span className="RQ_Total">Total amount <br/> Requested</span>
                                <span className="RQ_Total_one">N&nbsp;0.00</span>
                            </div>
                            <div className="RQ_Number_Days_container">
                                <div className="RQ_Days_container">
                                    <div className="RQ_Number_of_days"><span>Number of<br/> of Days worked</span></div>
                                    <CalendarTodayIcon className ="RQ_Icon"/><br/> 
                                </div>
                                <div className="RQ_Days_container_two">
                                    <div className="RQ_Figures"><span>0</span></div>
                                    <div className="RQ_Date"><span>Feb<br/>2021</span></div>  
                                </div>
                            </div>
                            <div  className="RQ_Header_content_one">
                                <span className="RQ_Avaluable">Avaluable</span>
                                <span className="RQ_Avaluable_one">N0.00</span>
                                <Button variant="outlined" className="RQ_Header_Button">REQUEST PAYOUT</Button>
                            </div>
                        </div>
                    </div>
                    <div className="RQ_content_two">
                        <div style={{ height: 320, width: '100%' }}>
                            <DataGrid rows={rows} columns={columns} pageSize={10} checkboxSelection />
                        </div>
                    </div>               
                </div>
            </Fade>
        </>
     )
}
