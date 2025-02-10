import React from "react";
import { Routes, Route } from "react-router-dom";
import "./styles/global.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Quote from "./components/Quote/Quote";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import AboutMe from "./components/AboutMe/AboutMe";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import Experience from "./components/Experience/Experience";
import ExperiencePage from "./pages/ExperiencePage/ExperiencePage";
import AboutMePage from "./pages/AboutMePage/AboutMePage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Quote />
              <Projects />
              <Skills />
              <Experience />
              <AboutMe />
              <Contacts />
            </>
          }
        />

        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/about" element={<AboutMePage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
