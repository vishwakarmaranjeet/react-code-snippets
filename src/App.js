import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Views/Home";
import Dashboard from "./Views/Dashboard";
import PageNotFound from "./Views/PageNotFound";
import Login from "./Views/Login";
import List from "./Views/List";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route exact path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/list" element={<List />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
