//Import des icons depuis https://react-icons.github.io/react-icons/

import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from "styled-components";
//Il existe Link et NavLink, on utilise navlink parce que cela donne la possibilité
//d'ajouter une class active, ce qui va permettre de gérer le style.
import { NavLink } from "react-router-dom";

function Category() {
  return (
    <List>
      <NavLink to={"/cuisine/italian"}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </NavLink>
      <NavLink to={"/cuisine/American"}>
        <FaHamburger />
        <h4>American</h4>
      </NavLink>
      <NavLink to={"/cuisine/Thai"}>
        <GiNoodles />
        <h4>Thai</h4>
      </NavLink>
      <NavLink to={"/cuisine/Japanese"}>
        <GiChopsticks />
        <h4>Japanese</h4>
      </NavLink>
    </List>
  );
}

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
`;

export default Category;
