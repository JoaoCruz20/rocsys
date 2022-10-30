/* eslint-disable array-callback-return */
import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {useQuery} from '@apollo/client';
import {LOAD_DATA} from '../graphql/queries';
import {Box, Button, Paper, TableRow, TableHead, TableContainer,TableCell, TableBody, Table} from '@mui/material';

const Container = styled.div`
margin: 10%;
`;

 export const SelectMenu = () => {

    const {loading, data} = useQuery(LOAD_DATA)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [postData, setData] = useState<Array<any>>([])

    useEffect(() => {
        setIsLoading(loading);
        if(data){
            console.log(data)
            setData(data)
        } 

    }, [data, loading])


    return (
        
<Container>
<Box sx={{width:"100%", display:"flex", justifyContent:"center", flexDirection:"column" , borderRadius: "10px"}}>
        <TableContainer sx={{ border: "2px solid #5C9BEB"}} component={Paper}>
        <Table aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Serial Number</TableCell>
              <TableCell>Site</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Configurations</TableCell>
              <TableCell>Operations</TableCell>
              <TableCell>Remove</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>          
             <TableRow>
                <TableCell component="th" scope="row">
                 Hello
                </TableCell>
                <TableCell>Hello</TableCell>
                <TableCell>Hello</TableCell>
                <TableCell>Hello</TableCell>
                <TableCell>Hello</TableCell>
                <TableCell>Hello</TableCell>
                <TableCell>
                    <Button variant="contained" style={{backgroundColor:"#3C9EFF"}}>Remove</Button>                    
                </TableCell>
              </TableRow>
            
          </TableBody>
        </Table>
      </TableContainer>
      </Box>
    </Container>
    );
  }
  
  export default SelectMenu;