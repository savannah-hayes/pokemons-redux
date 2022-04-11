import { createSlice } from "@reduxjs/toolkit";

const data = [
  {
    id: "ld3898sfaa",
    name: "Bulbasaur",
    isCaught: false
  },
  {
    id: "kld64f54rt",
    name: "Charmander",
    isCaught: false
  }
];

const pokemons = createSlice({
  name: "pokemons",
  initialState: {
    items: data,
  },
  reducers: {}
});

export default pokemons;