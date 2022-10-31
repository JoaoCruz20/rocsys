/* eslint-disable no-useless-concat */
/* eslint-disable array-callback-return */
import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {useQuery} from '@apollo/client';
import {LOAD_DATA} from '../graphql/queries';
import {Box, Button, Paper, TableRow, TableHead, TableContainer,TableCell, TableBody, Table, Typography} from '@mui/material';

const Container = styled.div`
margin: 5% 10% 0 10%;
`;

 export const SelectMenu = () => {
  const url = window.location.origin;

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
<Container data-testid="container">
{!isLoading ? (  
    <Box data-testid="box" sx={{width:"100%", display:"flex", justifyContent:"center", flexDirection:"column" , borderRadius: "5px"}}>
        <TableContainer data-testid="table-container" component={Paper}>
        <Table data-testid="table" aria-label="a dense table">
          <TableHead data-testid="table-head">
            <TableRow data-testid="table-row">
              <TableCell data-testid="table-cell">ID</TableCell>
              <TableCell data-testid="table-cell">Serial Number</TableCell>
              <TableCell data-testid="table-cell">Site</TableCell>
              <TableCell data-testid="table-cell">Type</TableCell>
              <TableCell data-testid="table-cell">Configurations</TableCell>
              <TableCell data-testid="table-cell">Operations</TableCell>
              <TableCell data-testid="table-cell">Remove</TableCell>
            </TableRow>
          </TableHead>
          <TableBody> 
          <>
         {postData?.map((value: any, index:any) => (              
            <TableRow data-testid="table-row" key={`row-${index}-${value?.id}`}>
                <TableCell data-testid="table-cell" component="th" scope="row">
                 {value?.id}
                </TableCell>
                <TableCell data-testid="table-cell">{value?.serial_number}</TableCell>
                <TableCell data-testid="table-cell">{value?.site?.name}</TableCell>
                <TableCell data-testid="table-cell">{value?.device_type?.model_number}</TableCell>
                <TableCell data-testid="table-cell">
                  <Button data-testid="table-button" href={url + '/configurations' + `/${value?.id}`}>
                    <Typography data-testid="table-typography" variant="h6" component="div" style={{fontSize:"14px", fontWeight:"bold", color:"#3C9EFF", textDecoration:"underline"}}>Configurations</Typography> 
                  </Button>
                </TableCell>
                <TableCell data-testid="table-cell">
                  <Button data-testid="table-button" href={url + '/Operations' + `/${value?.id}`}>
                    <Typography data-testid="table-typography" variant="h6" component="div" style={{fontSize:"14px", fontWeight:"bold",color:"#3C9EFF", textDecoration:"underline"}}>Operations</Typography>  
                  </Button>
                </TableCell>
                <TableCell data-testid="table-cell">
                    <Button data-testid="table-button" variant="contained" style={{backgroundColor:"#3C9EFF"}}>Remove</Button>                    
                </TableCell>
            </TableRow>               
          ))}
          </>            
          </TableBody>
        </Table>
      </TableContainer>
      </Box>
        ):(
            <Typography data-testid="typography" variant="h2" component="div" style={{display:"flex", justifyContent:"center", color:"#3C9EFF", textDecoration:"underline"}} >Loading...</Typography>
        )}
    </Container>
    );
  }
  
  export default SelectMenu;