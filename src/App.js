import "./styles/App.css";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Structure from "./pages/Structure";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Container>
          <HeaderContainer>
            <Header />
          </HeaderContainer>
          <Structure />
          <FooterContainer>
            <Footer />
          </FooterContainer>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;

const FooterContainer = styled.div`
  background-color: aliceblue;
`;
const HeaderContainer = styled.div`
  background-color: aliceblue;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

