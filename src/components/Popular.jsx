//Pour info : ajout d'une extension avec des snippet
//rfce + tab crée desuite un petit composant.

import { useEffect, useState } from "react";
import styled from "styled-components";
//Splide sera le component et splideSlide sera chaque item à l'intérieur.
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

function Popular() {
  //setPopular contient les données qu'on lui envoie,
  //popular est ce qu'il se passe quand des données sont envoyées ou modifiées.
  //Usestate([]) indique que les données sont un array
  const [popular, setPopular] = useState([]);

  //Ici le useEffect lance la fonction getPopular quand le composant est monté.
  //Dans l'array on peux ajouter une autre chose de trigger le useEffect
  //Par exemple on peux mettre "search" pour que ça rendez on search.
  useEffect(() => {
    getPopular();
  }, []);

  //Ajoue de la fonction qui va récupérer les recettes populaires random sur l'API
  const getPopular = async () => {
    //POur éviter d'avoir à faire des call API inutile on va store dans le localStorage les éléments.

    const check = localStorage.getItem("popular");
    //Si dans check il y a quelque chose on récupère l'object parsé, sinon on fait un call api
    //On parse parce que on a forcément une string dans le local storage.
    if (check) {
      setPopular(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
        //Le &number nous donne le nombre de recettes qu'on souhaite récup.
      );

      //Formate la data dans un json pour qu'on puisse l'utiliser en suite.
      const data = await api.json();
      //On envoie les données dans le local storage avec le stringify car le storage ne prends pas d'objets
      localStorage.setItem("popular", JSON.stringify(data.recipes));
      //On envoie les données des recettes dans setPopular
      setPopular(data.recipes);
    }
  };

  //On envoie du JSX et on utilise popular.map pour parcourir l'array et display ce qu'on veux en fonction.
  //Quand on map React souhaite qu'on ai un id unique pour chaque élément pour savoir quoi mettre à jour en cas de changement du DOM
  //ici on utilise un id donné par l'API.
  return (
    <div>
      <Wrapper>
        <h3>Popular Picks</h3>
        <Splide
          options={{
            perPage: 4,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "5rem",
          }}
        >
          {popular.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card>
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title} />
                  <Gradient />
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Gradient = styled.div`
z-index: 3; 
position: absolute;
width : 100%;
height: 100%;
background: linear-gradient(rgba (0,0,0,0), rgba (0,0,0,0.5));
`;

export default Popular;
