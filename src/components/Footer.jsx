import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <Copyright>
        <div className="copyright">
          <p>
            &copy; {new Date().getFullYear()} Rezeptis. All Rights Reserved.
          </p>
        </div>
      </Copyright>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  margin-top: 2rem;
  position: relative;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const Copyright = styled.div`
  .copyright {
    h1 {
      font-size: 1.2rem;
    }
  }
`;
