import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


const Navbar = () => {

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 400,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            UserRegistration
          </Typography>

                  <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 400,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            UserRegistration
          </Typography>
          
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
