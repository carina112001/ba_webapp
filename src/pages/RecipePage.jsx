import React from 'react'
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useState } from "react";
import recipes from "../data/rezeptData.jsx";

function RecipePage() {
  
  let params = useParams();

  const [details, setDetails] = useState(
    recipes.find((recipe) => recipe.id === parseInt(params.item, 10))
  );

  const [activeTab, setActiveTab] = useState("instructions");

  return (
    <Container>
    <TitleImageSection>
        <h2>{details.title}</h2>
      <ImageWrapper>
        <img src={details.img} alt={details.title} />
      </ImageWrapper>
    </TitleImageSection>
    <InstructionsIngredientsSection>
      <ButtonSection>
        <Button
          className={activeTab === "instructions" ? "active" : ""}
          onClick={() => {
            setActiveTab("instructions");
          }}
        >
          Anleitung
        </Button>
        <Button
          className={activeTab === "ingredients" ? "active" : ""}
          onClick={() => {
            setActiveTab("ingredients");
          }}
        >
          Zutaten
        </Button>
        </ButtonSection>
        {activeTab === "instructions" && (
          <div>
            <h3>{details.instructions} </h3>
          </div>
        )}
        {activeTab === "ingredients" && (
          <ul>
            {details.ingredients.map((ingredient) => (
              <li>{ingredient}</li>
            ))}
          </ul>
        )}
    </InstructionsIngredientsSection>
  </Container>
);
}

export default RecipePage;

const TitleImageSection = styled.div`
padding-top: 2rem;
`;

const ButtonSection = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
`;
const Button = styled.div`
margin-right: 2rem;
border-radius: 10px;
padding: 1rem;
color: #01be96;
background: white;
border: 2px solid black;
font-weight: 600;
`;

const InstructionsIngredientsSection = styled.div`
padding-top: 6rem;
padding-left: 3rem;
h2 {
  margin-bottom: 2rem;
}
h3 {
  font-size: 1.2rem;
  line-height: 2.5rem;
  margin-top: 2rem;
}
li {
  font-size: 1.2rem;
  line-height: 2.5rem;
}
ul {
  margin-top: 2rem;
}
`;

const Container = styled.div`
width: 80%;
max-width: 1280px;
margin: 0 auto;
display: flex;
height: 88.5vh;
gap: 2rem;
.active {
  background: #01be96;
  color: white;
}

h2 {
  font-size: 1.8rem; /* Slightly reduced font size for mobile users */
}
`;

const ImageWrapper = styled.div`
img {
  margin: 2rem 0 2rem;
  width: 300px;
  object-fit: contain;
  border-radius: 10px;
  filter: drop-shadow(0px 10px 10px #01be9570);
}
`;


