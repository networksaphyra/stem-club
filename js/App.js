import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Content from "./Content";
import Team from "./Team";
import styles from "../css/App.module.css";

const App = () => {
  return (
    <main>
      <Header />
      <Hero />
      <Content />
      <Team />
    </main>
  );
};

export default App;
