import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Content from "./Content";
import Team from "./Team";
import Footer from "./Footer";
import styles from "../css/App.module.css";

const App = () => {
  return (
    <main>
      <Header />
      <Hero />
      <Content />
      <Team />
      <Footer />
    </main>
  );
};

export default App;
