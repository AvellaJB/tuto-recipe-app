import { useEffect, useState } from "react";
import styled from "styled-components";
//on va utiliser useParams pour récuperer l'id dans le lien et fetch
import { useParams } from "react-router-dom";
import React from "react";

function Recipe() {
  let params = useParams();

  const [details, setDetails] = useState({});
  //Mise en place de la fonctionnalité sur les boutons.
  //Ici on met instructions dans le useState car ce sera l'état par défaut.
  const [activeTab, setActiveTab] = useState("instructions");

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const detailData = await data.json();

    setDetails(detailData);
  };

  useEffect(() => {
    fetchDetails();
  }, [params.name]);

  return (
    <DetailWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt="" />
      </div>
      <Info>
        <Button
          /*  On ajoute une class qui vérifie si l'active tab est instructions, si c'est le cas
       cela ajoute la classe active, sinon rien  */
          className={activeTab === "instructions" ? "active" : ""}
          onClick={() => setActiveTab("instructions")}
        >
          Instructions
        </Button>
        <Button
          className={activeTab === "ingredients" ? "active" : ""}
          onClick={() => setActiveTab("ingredients")}
        >
          Ingredients
        </Button>
        {/* Ici on fait en sorte de render que dans notre boutton est sur instruction.
        Si activeTab est sur instruction et que le div existe ça render. */}
        {activeTab === "instructions" && (
          <div>
            {/* Ici on transforme du code HTML stored sous format string dans l'API en code HTML */}
            <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
            <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
          </div>
        )}
        {activeTab === "ingredients" && (
          /* Ici on map sur tous les ingrédients renvoyé par l'api sur l'id qu'on a. */

          <ul>
            {details.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
        )}
        ;
      </Info>
    </DetailWrapper>
  );
}

const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  //On ajoute une classe active pour pouvoir ajouter en suite 2 bouttons qui montrerons
  //les instructions puis les ingrédients.
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }

  h2 {
    margin-bottom: 2rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }

  ul {
    margin-top: 2rem;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
`;

const Info = styled.div`
  margin-left: 10rem;
`;

export default Recipe;
