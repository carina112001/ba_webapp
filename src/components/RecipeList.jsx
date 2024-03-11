import React from "react";
import styled from "styled-components";
import recipes from "../data/rezeptData.jsx";
import { NavLink } from "react-router-dom";

function RecipeList() {
  return (
    <Container>
      {recipes.map((recipe) => (
        <Card key={recipe.id} to={`/Rezept/${recipe.id}`}>
          <ImageWrapper>
            <img src={recipe.img} alt={recipe.title} />
          </ImageWrapper>
          <Disc>
            <h1>{recipe.title}</h1>
            <p>{recipe.id}</p>
          </Disc>
        </Card>
      ))}
    </Container>
  );
}

export default RecipeList;

const Card = styled(NavLink)`
  background-color: #2a2b2e;
  margin: 0.5rem;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.8);
  text-decoration: none;
`;

const Container = styled.div`
  padding: 100px;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`;

const ImageWrapper = styled.div`
  img {
    width: 100%;
    height: 100%;
  }
`;

const Disc = styled.div`
  color: white;
  h1,
  p {
    font-size: 1rem;
  }
`;
