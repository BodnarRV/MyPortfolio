import React from "react";
import "./styles/global.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Quote from "./components/Quote/Quote";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import AboutMe from "./components/AboutMe/AboutMe";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Quote />
      <Projects />
      <Skills />
      <AboutMe />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
