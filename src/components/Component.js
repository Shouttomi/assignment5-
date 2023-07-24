import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";



import {
  addusertolocalstorage,
  getuserfromlocalstorage,
  removeuserfromlocalstorage,
} from "../localstorage/local";


const Component = () => {

    const navigate = useNavigate();

    let initialvalue = { name: "", email: "", phone: "" };
    const [values, setvalues] = useState(initialvalue);
  
    const handlechange = (e) => {
      const name = e.target.name;
      const value = e.target.value;
  
      setvalues({ ...values, [name]: value });
      // console.log(`${name}, ${value}`)
    };
  
    const onsubmit = (e) => {
      e.preventDefault();
      const {email,phone,name} = values

       addusertolocalstorage(values)

      if (!email || !phone || !name) {
        toast.error(" fill out all fields");
        return;
      }
       navigate('/page')
  
      console.log(values);
    };
  
    return (

        <>
        
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        className="centerform"
      >
        <TextField
          id="outlined-name"
          label="Name"
          variant="outlined"
          name="name"
          value={values.name}
          onChange={handlechange}
        />
        <TextField
          id="outlined-phone"
          label="Phone no"
          variant="outlined"
          name="phone"
          value={values.phone}
          onChange={handlechange}
        />
        <TextField
          id="outlined-email"
          label="Email"
          variant="outlined"
          name="email"
          value={values.email}
          onChange={handlechange}
        />
  
        <Stack spacing={2} direction="row">
          <Button
            variant="contained"
            type="submit"
            className="centerform"
            onClick={onsubmit}
          >
            Button
          </Button>
        </Stack>
      </Box>
      </>
    );
}
export default Component