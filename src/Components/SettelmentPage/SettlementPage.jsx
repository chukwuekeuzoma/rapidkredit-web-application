import * as React from 'react';
import Fade from 'react-reveal/Fade'
import "./SettlementPage.scss"
import { DataGrid } from '@material-ui/data-grid';
import {Button } from '@material-ui/core';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';

export default function SettlementPage() {
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
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
      ];

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
                                    <span className="ST_Numbers_one">2</span>
                                </div>
                                <div  className="ST_Header_content_two">
                                    <span className="ST_Total">Total<br/>Commissions</span>
                                    <span className="ST_Total_one">N&nbsp;23,000</span>
                                </div>
                                <div className="ST_Number_Days_container">
                                    <div className="ST_Days_container">
                                        <div className="ST_Number_of_days"><span>Pending<br/>Settlement</span></div>
                                    </div>
                                    <div className="ST_Days_container_two">
                                        <div className="ST_Figures"><span>1</span></div>
                                    </div>
                                </div>
                                <div className="ST_Icon_Container">
                                     <CalendarTodayIcon className ="ST_Icon"/><br/> 
                                     <div className="ST_Date"><span>Feb<br/>2021</span></div>  
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
        </>
    )
}
