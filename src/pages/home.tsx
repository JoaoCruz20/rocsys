/* eslint-disable array-callback-return */
import styled from "styled-components";
import NavBar from "../components/navbar";
import SelectMenu from "../components/selectMenu";

const Container = styled.div`
height: 3000px;
background-color: #DAE1E7;
`;

const Home = () => {


    return (     
        <Container>
            <NavBar />
            <SelectMenu />
        </Container>           
    );
  }
  
  export default Home;