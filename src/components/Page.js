import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import Data from '../data/Data';
import Checkbox from './Checkbox';
import Checknew from './Checknew';
import Changecheck from './Changecheck';

const Page = () => {

    const h = JSON.stringify(Data);
    console.log(JSON.parse(h));
    
const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'userId',
      headerName: 'UserId',
      width: 150,
      editable: true,
    },
    {
      field: 'title',
      headerName: 'Title',
      width: 150,
      editable: true,
    },
    {
      field: 'body',
      headerName: 'Body',
      type: 'number',
      width: 110,
      editable: true,
    },
    
  ];
  
  
  return (
   
   <>
   
  

    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={JSON.parse(h)}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>

    <Changecheck/>

    </>





  );

  
}
export default Page