import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import Data from "../data/Data";
import Checkbox from "./Checkbox";
import Checknew from "./Checknew";
import Changecheck from "./Changecheck";
import Firstcheck from "./Firstcheck";
import { useNavigate } from "react-router-dom";
import { getuserfromlocalstorage } from "../localstorage/local";
import { useEffect } from "react";

const Page = () => {
  const h = JSON.stringify(Data);
  console.log(JSON.parse(h));

  const navigate = useNavigate();

  console.log(getuserfromlocalstorage());

  const [loading, setLoading] = React.useState(true);
  const [fetcheddata, setfetcheddata] = React.useState([]);

  async function Fetch() {
    const url = "https://jsonplaceholder.typicode.com/posts";

    try {
      setLoading(true);
      const data = await fetch(url);
      const response = await data.json();

      console.log(response);
      setLoading(false);
      setfetcheddata(response);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    Fetch();
  }, []);

  useEffect(() => {
    if (getuserfromlocalstorage() === null) {
      navigate("/");
    }
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "userId",
      headerName: "UserId",
      width: 90,
      editable: true,
    },
    {
      field: "title",
      headerName: "Title",
      width: 500,
      editable: true,
    },
    {
      field: "body",
      headerName: "Body",
      width: 500,
      editable: true,
    },
  ];

  if (loading) {
    return (
      <div className="loadingclass">
        <h1>Loading...</h1>;
      </div>
    );
  }

  return (
    <>
    <h1>Table</h1>
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={fetcheddata}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>

      <main className="checkboxcontainer">
        <Firstcheck ind={0} lab={"customer"} />
        <Firstcheck ind={1} lab={"design"} />
      </main>
    </>
  );
};
export default Page;

/* import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import Data from '../data/Data';
import { Fetch } from '../functions';
import Checkbox from './Checkbox';
import Checknew from './Checknew';
import Changecheck from './Changecheck';
import Firstcheck from './Firstcheck';
import Secondcheck from './Secondcheck';
import { getuserfromlocalstorage } from '../localstorage/local';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from 'react';


const Page = async () => {

    const h = JSON.stringify(Data);
   const data = JSON.parse(h)


    const navigate = useNavigate()

    console.log(getuserfromlocalstorage())



  

    useEffect(()=>{
        if(getuserfromlocalstorage() === null){

            

            navigate('/');
        }
    },[])

  




 
      




   
    
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

  if(getuserfromlocalstorage() === null){
    toast('give details to access page')
    return (
        null
    )
  }


  
   
    return (
   
   <>
   
  

    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={data}
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

{/*    // <Changecheck/> */
/*  <Firstcheck ind={0} lab={'customer'}/>
    <Firstcheck ind={1} lab={'design'}/>

    </>





  );
    

  
}
export default Page */
