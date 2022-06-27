import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();
  const [inpval, setInpval] = useState({
    email: "",
    password: "",
  });

  const getdata = (e) => {
    // console.log(e.target.value);
    const { value, name } = e.target;
    // console.log(value,name);

    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };
  const addData = (e) => {
    e.preventDefault();

    const getuserArr = localStorage.getItem("values");
    console.log(getuserArr);

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
    } else {
      if (getuserArr && getuserArr.length) {
        const userData = JSON.parse(getuserArr);
        const userLogin = userData.filter((el, k) => {
          return el.email === email && el.password === password;
        });

        if (userLogin.length === 0) {
          toast.error("please enter correct password", {
            position: "top-center",
          });
        } else {
          navigate("/dashboard");
        }
      }
    }
  };

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
            style={{ background: "rgb(67, 185, 127)" }}
            type="submit"
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

export default Login;
