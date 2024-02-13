import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/pages/Home";
import LoginForm from "./components/pages/react-hook-form/LoginForm";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Library from "./components/pages/Library";
import Project from "./components/pages/Project";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/library" element={<Library />}></Route>
        <Route path="/project" element={<Project />}></Route>
        <Route path="/react-hook-form-login" element={<LoginForm />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
