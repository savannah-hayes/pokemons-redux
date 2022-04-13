import React, { useState } from "react"
import { useDispatch } from "react-redux";
import uniqid from "uniqid";

import pokemons from "reducers/pokemons";

const AddPokemon = () => {
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();

    const newPokemon = {
      id: uniqid(),
      name: inputValue,
      isCaught: false
    };

    dispatch(pokemons.actions.addItem(newPokemon));

    setInputValue("");
  };

  return (
    <form onSubmit={onFormSubmit}>
      <label>
        New Pokemon: &nbsp;
        <input
          type="text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddPokemon;