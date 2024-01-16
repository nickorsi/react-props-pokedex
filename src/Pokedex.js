import React from 'react';
import Pokecard from './Pokecard';

/**Takes an array of objects "manyPokemon" and renders a sequence of Pokecard
 * components */

function Pokedex ({ manyPokemon }) {
  return (
    <div>
      {manyPokemon.map(onePokemon => {
        < Pokecard
          id={onePokemon.id}
          name={onePokemon.name}
          type={onePokemon.type}
          baseExperience={onePokemon.base_experience}
        />
      })}
    </div>
  )
}