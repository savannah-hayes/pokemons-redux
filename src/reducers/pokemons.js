import { createSlice } from "@reduxjs/toolkit";

const pokemons = createSlice({
  name: "pokemons",
  initialState: {
    items: []
  },
  reducers: {}
});

export default pokemons;