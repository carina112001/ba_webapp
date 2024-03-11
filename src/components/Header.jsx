import React from "react";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Header() {
  return (
    <Container>
      <Logo to={"/"}>
        <span className="green">
          <GiForkKnifeSpoon />
        </span>
        <h1>Rezeptis</h1>
      </Logo>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1280px;
  width: 80%;
  margin: 0 auto;
`

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: black;

  span {
    font-size: 1.6rem;
  }

  h1 {
    font-weight: 600;
    font-size: 1.4rem;
  }
`;
