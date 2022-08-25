import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";
import Product from "./components/Product";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar /> {/* Llamado de componente Navbar */}
      <Routes> {/* Lamado de route para mostrar url y componente */}
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/product/:id" element={<Product />} />
      </Routes>
      <Footer /> {/* Llamado de componente footer */}
    </>
  );
}

export default App;
