import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from './Pages/Main'
import Repositorio from "./Pages/Repositorio";

const Routte = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Main />} />
      <Route  path="/repository:repositorio" element={<Repositorio />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routte;
