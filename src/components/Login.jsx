import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SendIcon from '@mui/icons-material/Send';

const Login = () => {
  const navigate = useNavigate();

  //initial states
  const [inpval, setInpval] = useState({
    email: "",
    password: "",
  });

  const getdata = (e) => {
    // console.log(e.target.value);
    const { value, name } = e.target;
    // console.log(value,name);



    setInpval(() => {
      return { //returns name and email form inpval
        ...inpval,
        [name]: value,
      };
    });
  };

  //get data from localstorage
  const addData = (e) => {
    e.preventDefault();

    const getuserArr = localStorage.getItem("values");
    console.log(getuserArr);

    //checks if returned array is null or has an account
    if(getuserArr === null){
        toast.error("Doesnot have an account register",{
            position: "bottom-center"
        })
    }

    //checks if returned value and entered value matches the condition

    const { email, password } = inpval; 
    if (email === "") {
      toast.error("email field is requred", {
        position: "top-center",
      });
    } else if (!email.includes("@")) {
      toast.error(" @ in email field is requred", {
        position: "top-center",
      });
    } else if (password === "") {
      toast.error("password field is requred", {
        position: "top-center",
      });
    } else if (password.length < 8) {
      toast.error("password must contain atleast 8 characters", {
        position: "top-center",
      });
    }else {
      if (getuserArr && getuserArr.length) {
        const userData = JSON.parse(getuserArr); //to get an array in object format from local storage
        const userLogin = userData.filter((data, k) => {
          return data.email === email && data.password === password;
        })

        if (userLogin.length === 0) {
          toast.error("please enter correct details", {
            position: "top-center",
          });
        } else {
          navigate("/dashboard"); //navigates to dashboard on successful login
         
  }}}};

  return (
    <>
      <div className="loginform">
        <h3>Login</h3>
        <form>
          <label>
            Email: <br />
            <input
              type="email"
              name="email"
              onChange={getdata}
              placeholder="Enter email"
              required
            />
          </label>
          <br />

          <label>
            Password:
            <br />
            <input
              type="password"
              name="password"
              onChange={getdata}
              placeholder="Password"
              required
            />
          </label>
          <br />
          <Button
            variant="primary"
            className="loginbtn"
            onClick={addData}
                        
       
            type="submit"
            endIcon={<SendIcon />}
          >
            Submit
          </Button>
          <ToastContainer />
        </form>
        <p className="logintog">
          Dont Have an Account{" "}
          <span>
            <Link to="/">Sign Up</Link>
          </span>{" "}
        </p>
      </div>
    </>
  );
};

export default Login
