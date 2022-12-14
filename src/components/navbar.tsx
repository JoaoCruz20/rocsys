import React from "react";
import {AppBar , Box, Toolbar, Typography, Button} from '@mui/material';
import Logo from '../assets/imgs/rocsys-logo.svg';

 export const NavBar = () => {
  const url = window.location.origin;

    return (
        <Box style={{flexGrow:1}} data-testid='parent-box'>
        <AppBar data-testid='appbar' position="static" sx={{backgroundColor:"#fff",height:"130px", display:"flex", flexDirection:"row", width:"100%"}}>
        <Box data-testid='child-box' component="img" src={Logo} sx={{ width: "191px", height: "100px", display: "flex", justifyContent:"flex-start", margin:"10px 0 0 40px" }}  />
          <Toolbar data-testid='toolbar' sx={{ display: "flex", justifyContent:"flex-end", float:"right"}}>
          <Button data-testid='button-link' href={url + "/industries"} >
              <Typography data-testid='typography-link' variant="h6" component="div" style={{fontSize:"18px", fontWeight:"bold", marginLeft:"20px", color:"#3C9EFF", textDecoration:"underline"}}>
                Industries
              </Typography>
            </Button>
            <Button data-testid='button-link' href={url + "/products"} >
              <Typography data-testid='typography-link' variant="h6" component="div" style={{fontSize:"18px", fontWeight:"bold", marginLeft:"20px", color:"#3C9EFF", textDecoration:"underline"}}>
                Products
              </Typography>
            </Button>
            <Button data-testid='button-link' href={url + "/news"} >
              <Typography data-testid='typography-link' variant="h6" component="div" style={{fontSize:"18px", fontWeight:"bold", marginLeft:"20px", color:"#3C9EFF", textDecoration:"underline"}} >
                News
              </Typography>
            </Button>
            <Button data-testid='button-link' href={url + "/contact"} variant="contained" style={{backgroundColor:"#3C9EFF",marginLeft:"20px"}} >
              <Typography data-testid='typography-link' variant="h6" component="div" style={{fontSize:"18px"}} >
                Contact
              </Typography>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
  
  export default NavBar;