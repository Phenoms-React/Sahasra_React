import { useState } from "react";
import ToDo from "./Components/ToDo";
import Header from "./Components/Header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <ToDo />
    </div>
  );
}

export default App;
