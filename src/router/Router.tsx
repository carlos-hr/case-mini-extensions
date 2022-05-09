import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Classes, Home } from "../pages";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/classes" element={<Classes />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
