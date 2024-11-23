import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Content from "./Content";
import styles from "../css/App.module.css";

const App = () => {
  return (
    <main>
      <Header />
      <Hero />
      <Content />
    </main>
  );
};

export default App;
