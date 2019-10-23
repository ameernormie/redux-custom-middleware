import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import Todos from "./Todos";
import { store } from "../store";

function App() {
  return (
    <Provider store={store}>
      <Todos />
    </Provider>
  );
}

export default App;
