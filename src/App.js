import React from "react";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import pokemons from "reducers/pokemons";

const reducer = combineReducers({
  pokemons: pokemons.reducer
});

const store = configureStore({
  reducer,
});

export const App = () => {
  return (
    <Provider store={store}>
      <div>Hello</div>
    </Provider>
  );
};
