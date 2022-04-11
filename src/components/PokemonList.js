import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

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
  const pokemonList = useSelector((store) => store.pokemons.items)

  return (
    <section>
      {pokemonList.map((pokemon) => (
        <PokemonItem key={pokemon.id}>
          <h2>{pokemon.name}</h2>
          <label>
            Is caught:
            <input type="checkbox" checked={pokemon.isCaught} /> 
          </label>
          <DeleteButton><span role="img" aria-label="delete">❌</span></DeleteButton>
        </PokemonItem>
      ))}
    </section>
  )
};

export default PokemonList;