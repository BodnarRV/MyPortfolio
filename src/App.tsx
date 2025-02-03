import React from "react";
import "./styles/global.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Quote from "./components/Quote/Quote";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Quote />
      <Projects />
    </div>
  );
}

export default App;
