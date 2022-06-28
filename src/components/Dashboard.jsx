import React, { useEffect } from "react";
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router";
import LogoutIcon from '@mui/icons-material/Logout';

const Dashboard = () => {
    const navigate = useNavigate();
    // modal style
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const [logindata, setLoginData] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true); //for opening of model
  const handleClose = () => setOpen(false); //for closing of model
  const UserData = () => {
    const getUser = localStorage.getItem("values");
    if (getUser && getUser.length) {
      const user = JSON.parse(getUser);
      //console.log(user)
      setLoginData(user);
    }

    const userData = logindata.map((el, k) => {
      return el.userName;
    });

    if (userData) {
      setTimeout(() => {
        handleOpen();
      }, 3000);
    }
  };
  useEffect(() => {
    UserData();
  }, []);

  const userLogout = () =>{
    localStorage.removeItem('values');
    navigate('/')
  }

  return (
    <>
      {logindata.length === 0 ? (
        <div className="error">Not found</div>
      ) : (
        <>
        <div className="dash">
          <h6>User Name = {logindata[0].userName}</h6>
          <h6>User Name = {logindata[0].email}</h6>
          <h6>User Name = {logindata[0].userName}</h6>
          <h6>User Name = {logindata[0].email}</h6>
          <Button onClick={userLogout} className="logoutbtn" >Logout  <LogoutIcon/></Button>
          </div>
          {
            logindata[0].userName !== ""  ?
            <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <Box sx={style}>
                <Typography
                  id="transition-modal-title"
                  variant="h6"
                  component="h2"
                >
                  {logindata[0].userName}
                </Typography>
                <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                 Welcome to this page
                </Typography>
              </Box>
            </Fade>
          </Modal> : ""
        } 
         
        </>
      )}
    </>
  );
};

export default Dashboard;
