/* eslint-disable array-callback-return */
import styled from "styled-components";
import React, {ReactFragment, useEffect, useState} from "react";
import {useQuery, gql} from '@apollo/client';
import {LOAD_USERS} from '../graphql/queries';
import { valueFromAST } from "graphql";

const Container = styled.div`
height: 500px;
border-style: solid;
margin: 4%;
`;


const Home = () => {

    const {loading, data} = useQuery(LOAD_USERS)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [postData, setData] = useState<Array<any>>([])

    useEffect(() => {
        setIsLoading(loading);
        if(data){
            console.log(data.user)
            setData(data.user)
        } 

    }, [data, loading])


    return (     
        <Container>
            <>
         {postData.map((value: any,index:any) => (              
                <li key={value.id}>{value.email}</li>                
          ))}
          </>
         </Container>
           
    );
  }
  
  export default Home;