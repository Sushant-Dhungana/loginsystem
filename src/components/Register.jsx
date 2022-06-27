import { Formik, Form } from "formik";
import React,{ useState} from "react";
import TextField from "./TextField";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';



const Register = () => {
    const navigate = useNavigate();
    const [data, setData]= useState([])
  const validate = Yup.object({
    userName: Yup.string()
      .max(15, "must be 4 to 10 characters")
      .required("username is required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .max(10, "Password must be at most 10 characters")
      .required("password is required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-10])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
    confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'password must match')
    .required('Confirm password is Required'),
  });
  return (
    <div className="registerform">
      <Formik
        initialValues={{
          userName: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema = {validate}
        onSubmit = {values => {
            console.log(values);
            localStorage.setItem('values', JSON.stringify([...data,values]));
            toast.success(" success",{
                position: "top-center",
            })
            navigate('/login');
        }}
      >
        {(formik) => (
          <div>
            <h1> Sign Up</h1>
            <Form>
              <TextField label="User Name:" name="userName" type="text" placeholder="Enter user name" />
              <TextField label="Email:" name="email" type="email" placeholder="Enter your email" />
              <TextField label="Password:" name="password" type="password" placeholder="Enter password"/>
              <TextField
                label="Confirm Password:"
                name="confirmPassword"
                type="password"
                placeholder="re-enter your password"
              />
              <Button type="submit" className="reg" endIcon={<SendIcon />} >Register</Button>
              <Button type="reset" className="reset" startIcon={<DeleteIcon />}>Reset</Button>
            </Form>
            <p style={{marginTop:"20px"}}>Already have an account?
            <Link to="/login" >Login</Link>
            </p>

          </div>
        )}
      </Formik>
    </div>
  );
};

export default Register;
