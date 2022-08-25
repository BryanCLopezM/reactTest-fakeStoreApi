import React from "react";
import Products from "./Products";

const Home = () => {
  return (
    <>
      <div className="container px-0" style={{ marginTop: "100px" }}>
        <Products /> {/* Llamado de componente productos */}
      </div>
    </>
  );
};

export default Home;
