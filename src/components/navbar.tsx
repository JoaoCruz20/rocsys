import React from "react";
import {AppBar , Box, Toolbar, Typography, Button} from '@mui/material';
import Logo from '../assets/imgs/rocsys-logo.svg';

 export const NavBar = () => {
  const url = window.location.origin;

    return (
        <Box style={{flexGrow:1}}>
        <AppBar position="static" sx={{backgroundColor:"#fff",height:"130px", display:"flex", flexDirection:"row", width:"100%"}}>
        <Box component="img" src={Logo} sx={{ width: "191px", height: "100px", display: "flex", justifyContent:"flex-start", margin:"10px 0 0 40px" }}  />
          <Toolbar sx={{ display: "flex", justifyContent:"flex-end" }}>
          <Button href={url + "/industries"} >
              <Typography variant="h6" component="div" style={{marginLeft:"20px", color:"#3C9EFF", textDecoration:"underline"}}>
                Industries
              </Typography>
            </Button>
            <Button href={url + "/products"} >
              <Typography variant="h6" component="div" style={{marginLeft:"20px", color:"#3C9EFF", textDecoration:"underline"}}>
                Products
              </Typography>
            </Button>
            <Button href={url + "/news"} >
              <Typography variant="h6" component="div" style={{marginLeft:"20px", color:"#3C9EFF", textDecoration:"underline"}} >
                News
              </Typography>
            </Button>
            <Button href={url + "/contact"} variant="contained" style={{backgroundColor:"#3C9EFF",marginLeft:"20px"}} >
              <Typography variant="h6" component="div" >
                Contact
              </Typography>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
  
  export default NavBar;