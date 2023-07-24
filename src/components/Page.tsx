import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";


import Firstcheck from "./Firstcheck";
import { useNavigate } from "react-router-dom";
import { getuserfromlocalstorage } from "../localstorage/local";
import { useEffect } from "react";
import { toast } from "react-toastify";


interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

interface User {
  email: string;
  name: string;
  phone: string;
}


const Page = () => {


  const navigate = useNavigate();

  console.log(getuserfromlocalstorage());

  const [loading, setLoading] = React.useState(true);
  const [fetcheddata, setfetcheddata] = React.useState<Post[]>([]);

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
    const obj:User | null = getuserfromlocalstorage();
    if (
      obj?.name === "" ||
      obj?.email === "" ||
      obj?.phone === "" ||
      getuserfromlocalstorage() === null
    ) {
      toast.error("You need to register");
      navigate("/");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
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

