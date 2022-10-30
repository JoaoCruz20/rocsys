/* eslint-disable array-callback-return */
import styled from "styled-components";
import NavBar from "../components/navbar";
import SelectMenu from "../components/selectMenu";
import Footer from "../components/footer";

const Container = styled.div`
height: 100%;
background-color: #DAE1E7;
`;

const Home = () => {


    return (     
        <Container>
            <NavBar />
            <SelectMenu />
            <Footer />
        </Container>           
    );
  }
  
  export default Home;