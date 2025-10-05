import ReactDOM from "react-dom/client";
import { Routes, Route } from "react-router";
import "./App.css";
import Rootleyout from "./Components/Rootleyout";
import Home from "./Components/Page/Home";
import Shop from "./Components/Page/Shop";
import Product from "./Components/Leyout/Product";
import About from "./Components/Page/About";
import Contact from "./Components/Page/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Rootleyout />}>
          <Route path="/" element={<Home />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/About" element={<About />} />         
          <Route path="/Contact" element={<Contact />} />         
        </Route>
      </Routes>
    </>
  );
}

export default App;
