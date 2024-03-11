import React from 'react'
import RecipeList from '../components/RecipeList'
import styled from "styled-components";

function HomePage() {
  return (
    <Container>
      <RecipeList/>
    </Container>
    
  )
}

export default HomePage

const Container = styled.div`
width: 80%;
max-width: 1280px;
margin: 0 auto;
height: 88.5vh;
gap: 2rem;
h2 {
  font-size: 1.8rem; 
}
`;