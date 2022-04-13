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
  reducers: {
    toggleItem: (store, action) => {
      store.items.forEach(item => {
        if(item.id === action.payload) {
          item.isCaught = !item.isCaught;
        }
      })
    },
    deleteItem: (store, action) => {
      store.items.splice(action.payload, 1);
    },
  },
});

export default pokemons;