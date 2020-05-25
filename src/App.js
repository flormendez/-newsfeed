import React from "react";
import Header from "./containers/Header";
import Main from "./containers/Main";
import { BrowserRouter } from "react-router-dom";
import Nav from "./containers/exNav";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Nav />
        <Main />
      </BrowserRouter>
    </div>
  );
};

export default App;
