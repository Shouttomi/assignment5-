import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getuserfromlocalstorage } from "../localstorage/local";
import { toast } from "react-toastify";

const Protectedroutes = () => {
  const Navigate = useNavigate();
  const user = getuserfromlocalstorage();

  useEffect(() => {
    console.log("protected");
    console.log(user);

    if (user === null) {
      toast('First enter the values');
     return Navigate('/'); // Redirect to the home page if the user is not authenticated
    } else {
     return Navigate('/page'); // Redirect to the '/page' path if the user is authenticated
    }
  },[]);

  // The component doesn't need to return anything, as the navigation will be handled inside the useEffect.
  return null;
};

export default Protectedroutes;
