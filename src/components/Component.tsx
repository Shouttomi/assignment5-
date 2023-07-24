import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useState, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { addusertolocalstorage } from "../localstorage/local";
import React from "react";

// Define a type for the form values
interface FormValues {
  name: string;
  email: string;
  phone: string;
}

const Component: React.FC = () => {
  const navigate = useNavigate();

  const initialValues: FormValues = { name: "", email: "", phone: "" };
  const [values, setValues] = useState<FormValues>(initialValues);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, phone, name } = values;

    addusertolocalstorage(values);

    if (!email || !phone || !name) {
      toast.error("Please fill out all fields");
      return;
    }
    navigate("/page");

    console.log(values);
  };

  return (
    <>
      <main className="registerform">
        <div className="formout">
          <div>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
              className="centerform"
              onSubmit={onSubmit} // Add the onSubmit handler to the form element
            >
              <TextField
                id="outlined-name"
                label="Name"
                variant="outlined"
                name="name"
                value={values.name}
                onChange={handleChange}
              />
              <TextField
                id="outlined-phone"
                label="Phone no"
                variant="outlined"
                name="phone"
                value={values.phone}
                onChange={handleChange}
              />
              <TextField
                id="outlined-email"
                label="Email"
                variant="outlined"
                name="email"
                value={values.email}
                onChange={handleChange}
              />

              <Stack spacing={2} direction="row" className="justifybutton">
                <Button variant="contained" type="submit" className="centerform">
                  Button
                </Button>
              </Stack>
            </Box>
          </div>
        </div>
      </main>
    </>
  );
};

export default Component;
