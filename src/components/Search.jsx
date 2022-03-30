import styled from "styled-components";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
// Pour pouvoir naviguer sans utiliser de liens on a useNavigate
//ici on s'en sert pour aller sur une autre page quand on appuie sur entrer dans la searchbar
import { useNavigate } from "react-router-dom";

function Search() {
  //On utilise useState pour récupérer la value de l'input.
  const [input, setInput] = useState("");
  //Ajout de la fonction Navigate
  const navigate = useNavigate();

  //On cherche à récupérer le enter pour créer une nouvelle page.
  const submitHandler = (e) => {
    //On empêche le refresh de la page on submit
    e.preventDefault();
    //Du coup onSubmit on navigate vers la page searched + input
    //Gâce à l'ajout de useNavigate
    navigate("/searched/" + input);
  };

  return (
    <FormStyle onSubmit={submitHandler}>
      <div>
        <FaSearch></FaSearch>
        {/* On met l'input de useState pour récupérer la value saisie.
        Comme useState est un empty string, il faut ajouter le onChange
        pour permettre de récupérer la value dans setInput */}
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          value={input}
        />
      </div>
    </FormStyle>
  );
}

const FormStyle = styled.form`
  margin: 0rem 20rem;

  div {
    width: 100%;
    position: relative;
  }
  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    border: none;
    border-radius: 1rem;
    outline: none;
    width: 100%;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
  }
`;

export default Search;
