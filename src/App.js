import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Elder from "./components/Elder/Elder";
import Gitt from "./components/Gitt/Gitt";
import About from "./components/home/About";
import Contact from "./components/home/Contact";
import Footer from "./components/home/Footer";
import Header from "./components/home/Header";
import Hero from "./components/home/Hero";
import Service from "./components/home/Service";
import Intern from "./components/Intern/Intern";
import IoT from "./components/IoT/IoT";
import JavaTodo from "./components/JavaTodo/JavaTodo";
import HomeButton from "./components/linuxx/HomeButton";
import Linux from "./components/linuxx/Linux";
import Scroll from "./components/linuxx/Scroll";
import OS from "./components/OS/OS";
import PHPIntro from "./components/PHP/PHPIntro";
import SNSAPP from "./components/SNSapp/SNSAPP";

function App() {
  return (
    <Router basename="/PortfolioReact">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Hero />
              <About />
              <Service />
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
        <Route
          path="/Gitt"
          element={
            <>
              <HomeButton />
              <Gitt />
              <Scroll />
            </>
          }
        />
        <Route
          path="/SNS"
          element={
            <>
              <HomeButton />
              <SNSAPP />
              <Scroll />
            </>
          }
        />
        <Route
          path="/Elder"
          element={
            <>
              <HomeButton />
              <Scroll />
              <Elder />
            </>
          }
        />
        <Route
          path="/IoT"
          element={
            <>
              <HomeButton />
              <IoT />
              <Scroll />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
