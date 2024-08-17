import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from "./components/home/About";
import Contact from "./components/home/Contact";
import Footer from "./components/home/Footer";
import Header from "./components/home/Header";
import Hero from "./components/home/Hero";
import Portfolio from "./components/home/Portfolio";
import Service from "./components/home/Service";
import Intern from "./components/Intern/Intern";
import JavaTodo from "./components/JavaTodo/JavaTodo";
import HomeButton from "./components/linuxx/HomeButton";
import Linux from "./components/linuxx/Linux";
import Scroll from "./components/linuxx/Scroll";
import OS from "./components/OS/OS";
import PHPIntro from "./components/PHP/PHPIntro";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Hero />
              <About />
              <Service />
              <Portfolio />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route
          path="/Intern"
          element={
            <>
              <HomeButton />
              <Intern />
              <Scroll />
            </>
          }
        />
        <Route
          path="/linux"
          element={
            <>
              <HomeButton />
              <Scroll />
              <Linux />
            </>
          }
        />
        <Route
          path="/PHP"
          element={
            <>
              <HomeButton />
              <PHPIntro />
              <Scroll />
            </>
          }
        />
        <Route
          path="/OS"
          element={
            <>
              <HomeButton />
              <Scroll />
              <OS />
            </>
          }
        />
        <Route
          path="/JavaTodo"
          element={
            <>
              <HomeButton />
              <Scroll />
              <JavaTodo />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
