/* eslint-disable array-callback-return */
import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {useQuery} from '@apollo/client';
import {LOAD_DATA} from '../graphql/queries';
import {Box, Button, Paper, TableRow, TableHead, TableContainer,TableCell, TableBody, Table, Typography} from '@mui/material';

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
            setData(data?.device)
        } 

    }, [data, loading])


    return (            
<Container>
{ !isLoading  ? (  
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
          <>
         {postData?.map((value: any, index:any) => (              
            <TableRow key={`row-${index}-${value?.id}`}>
                <TableCell component="th" scope="row">
                 {value?.id}
                </TableCell>
                <TableCell>{value?.serial_number}</TableCell>
                <TableCell>{value?.site?.name}</TableCell>
                <TableCell>{value?.device_type?.model_number}</TableCell>
                <TableCell>
                    <Typography variant="h6" component="div" style={{marginLeft:"20px", color:"#3C9EFF", textDecoration:"underline"}}>Configurations</Typography> 
                </TableCell>
                <TableCell>
                    <Typography variant="h6" component="div" style={{marginLeft:"20px", color:"#3C9EFF", textDecoration:"underline"}}>Operations</Typography>  
                </TableCell>
                <TableCell>
                    <Button variant="contained" style={{backgroundColor:"#3C9EFF"}}>Remove</Button>                    
                </TableCell>
            </TableRow>               
          ))}
          </>            
          </TableBody>
        </Table>
      </TableContainer>
      </Box>
        ):(
            <Typography variant="h2" component="div" style={{display:"flex", justifyContent:"center", color:"#3C9EFF", textDecoration:"underline"}} >Loading...</Typography>
        )}
    </Container>
    );
  }
  
  export default SelectMenu;