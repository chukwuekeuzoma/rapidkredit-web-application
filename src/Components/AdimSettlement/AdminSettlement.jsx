import React, { useState, useEffect } from 'react'
import "./AdminSettlement.scss"
import { DataGrid } from '@material-ui/data-grid';



export default function AdminSettlement(props) {
   
    const columns = [
        { field: 'id', headerName: 'ID', width: 75 },
        { field: 'userName', headerName: 'User Name', width: 130 },
        { field: 'email', headerName: 'Email', width: 95 },
        { field: 'phone', headerName: 'Phone', width: 100 },
        { field: 'company', headerName: 'Company', width: 135 },
        { field: 'settlementAmount', headerName: 'Settlement Amount', width: 175 },
        { field: 'date', headerName: 'Date', width: 90 },
        { field: 'commission', headerName: 'Commission', width: 135 },
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


    return (
        <>
            <div>
                <div className="AST_container">
                    <h2>Settlements</h2>
                </div>
                <div className="AST_Grid_container">
                    <div className="AST_content_one">
                        
                    </div>
                    <div className="AST_content_two">
                        <div style={{ height: 320, width: '100%' }}>
                            <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

