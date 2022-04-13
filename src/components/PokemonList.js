import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import pokemons from "reducers/pokemons";

const PokemonItem = styled.article`
  border: 1px solid #dcdcdc;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 5px;
  position: relative;
`;

const DeleteButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
`

const PokemonList = () => {
  const pokemonList = useSelector((store) => store.pokemons.items);
  
  const dispatch = useDispatch();

  const onPokemonToggle = (pokemonId) => {
    dispatch(pokemons.actions.toggleItem(pokemonId))
  };

  const onPokemonDelete = (index) => {
    dispatch(pokemons.actions.deleteItem(index))
  };

  return (
    <section>
      {pokemonList.map((pokemon, index) => (
        <PokemonItem key={pokemon.id}>
          <h2>{pokemon.name}</h2>
          <label>
            Is caught:
            <input 
              type="checkbox" 
              checked={pokemon.isCaught} 
              onChange={() => onPokemonToggle(pokemon.id)} 
            /> 
          </label>
          <DeleteButton onClick={() => onPokemonDelete(index)}>
            <span role="img" aria-label="delete">❌</span>
          </DeleteButton>
        </PokemonItem>
      ))}
    </section>
  )
};

export default PokemonList;