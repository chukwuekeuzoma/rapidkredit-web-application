import React from 'react';
import "./AdminEmployers.scss"
import { DataGrid } from '@material-ui/data-grid';

export default function AdminEmployers(props) {
    
    const columns = [
        { field: 'id', headerName: 'ID', width: 75 },
        { field: 'companyName', headerName: 'Company Name', width: 155 },
        { field: 'number_of_staff', headerName: 'Number of Staff', width: 180 },
        { field: 'view', headerName: 'View', width: 100 },
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
           <div className="AEP_container">
             <h2>Employers</h2>
           </div>
            <div className="AEP_Grid_container">
                <div className="AEP_content_one">
                    <div className="AEP_Employer"><h2>Numbers of Employers</h2></div>
                    <div className="AEP_Num"><h2>0</h2></div>
                </div>
                <div className="AEP_content_two">
                    <div style={{ height: 320, width: '100%' }}>
                        <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
                    </div>
                </div>
                
            </div>
        </>
    );
}

