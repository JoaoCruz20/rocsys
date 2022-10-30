/* eslint-disable array-callback-return */
import React from "react";
import styled from "styled-components";
import {Typography} from '@mui/material';


const Container = styled.div`
margin: 5% 0 0 0;
padding: 1% 0 0 0;
background-color: #fff;
height: 100px;
display: flex;
flex-direction: row;
justify-content:center;
width: 100%;
box-shadow: 0px -3px 4px #888;
`;

const Footer = () => {


    return (     
        <Container>         
            <Typography variant="h6" component="div" style={{marginLeft:"20px", color:"#3C9EFF", textDecoration:"underline"}}>
                Link
              </Typography>
              <Typography variant="h6" component="div" style={{marginLeft:"20px", color:"#3C9EFF", textDecoration:"underline"}}>
                Link
              </Typography>
              <Typography variant="h6" component="div" style={{marginLeft:"20px", color:"#3C9EFF", textDecoration:"underline"}}>
                Link
              </Typography>       
        </Container>           
    );
  }
  
  export default Footer;