import React from "react";
import "./Pokecard.css";

const BASE_URL = (
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
  );

/**
 * Given id, name, type, and base_experience of pokemon, render a card showing
 * a single pokemon with name image, type and base experience.
 */

function Pokecard({id, name, type, baseExperience}){
  const pokeImg = `${BASE_URL}${id}.png`

  return (
    <div className="Pokecard">
      <div className="Pokecard-title">{name}</div>
      <img className="Pokecard-image" src={pokeImg} alt={name}/>
      <div className="Pokecard-type">Type: {type}</div>
      <div className="Pokecard-exp">EXP: {baseExperience}</div>
    </div>
  );
}

export default Pokecard;