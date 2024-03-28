import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Library from "./pages/Library";
import Project from "./pages/Project";
import LoginForm from "./pages/react-hook-form/LoginForm";
import ZustandMemo from "./pages/zustand-memo/ZustandMemo";
import ZustandTodo from "./pages/zustand-todo/ZustandTodo";
import ReactHookForm from "./pages/library/ReactHookForm";
import Zustand from "./pages/library/Zustand";
import Yup from "./pages/library/Yup";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/library" element={<Library />}></Route>
        <Route
          path="/library/react-hook-form"
          element={<ReactHookForm />}
        ></Route>
        <Route
          path="/library/zustand"
          element={<Zustand />}
        ></Route>
        <Route
          path="/library/swr"
          element={<Swr />}
        ></Route>
         <Route
          path="/library/yup"
          element={<Yup />}
        ></Route>
        <Route path="/project" element={<Project />}></Route>
        <Route path="/react-hook-form-login" element={<LoginForm />}></Route>
        <Route path="/zustand-memo" element={<ZustandMemo />}></Route>
        <Route path="/zustand-todo" element={<ZustandTodo />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
