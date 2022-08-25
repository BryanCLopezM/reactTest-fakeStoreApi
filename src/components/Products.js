import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom";

function Products() {
  //Declaracion de variables de estado
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState(data);

  //usamos el hook useEffect para renderizar y la promise async para obtener datos del api
  useEffect(() => {
    let componentMounted = true;
    const getProdcuts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        const data = await response.json();
        setData(data);
        setFilter(data);
        setLoading(false);
      }
      return () => {
        componentMounted = false;
      };
    };
    // Llamamos al servicio de productos
    getProdcuts();
  }, []);

  //Se inclulle el patron de carga de la app con el react-loading-skeleto
  const Loading = () => {
    return (
      <>
        <div className="col-md-9 py-md-3">
          <div className="row">
            <div className="col-6 col-md-6 col-lg-4 mb-3">
              <Skeleton height={400} width={"100%"} />
            </div>
            <div className="col-6 col-md-6 col-lg-4 mb-3">
              <Skeleton height={400} width={"100%"} />
            </div>
            <div className="col-6 col-md-6 col-lg-4 mb-3">
              <Skeleton height={400} width={"100%"} />
            </div>
            <div className="col-6 col-md-6 col-lg-4 mb-3">
              <Skeleton height={400} width={"100%"} />
            </div>
            <div className="col-6 col-md-6 col-lg-4 mb-3">
              <Skeleton height={400} width={"100%"} />
            </div>
            <div className="col-6 col-md-6 col-lg-4 mb-3">
              <Skeleton height={400} width={"100%"} />
            </div>
            <div className="col-6 col-md-6 col-lg-4 mb-3">
              <Skeleton height={400} width={"100%"} />
            </div>
          </div>
        </div>
      </>
    );
  };

  // constante para guardar los valores de la categoria seleccionada
  const filterProduct = (category) => {
    const updateList = data.filter((x) => x.category === category);
    setFilter(updateList);
  };

  //Mostramos las categorias y la funcion para filtrar
  const ShowProducts = () => {
    return (
      <>
        <div className="col-md-3 my-3">
          <div className="position-sticky" style={{ top: "100px" }}>
            <button
              className="btn btn-outline-primary m-1 btn-sm"
              onClick={() => setFilter(data)}
            >
              All
            </button>
            <button
              className="btn btn-outline-primary m-1 btn-sm"
              onClick={() => filterProduct("women's clothing")}
            >
              Women's Clothing
            </button>
            <button
              className="btn btn-outline-primary m-1 btn-sm"
              onClick={() => filterProduct("men's clothing")}
            >
              Men's Clothing
            </button>
            <button
              className="btn btn-outline-primary m-1 btn-sm"
              onClick={() => filterProduct("jewelery")}
            >
              Jewelery
            </button>
            <button
              className="btn btn-outline-primary m-1 btn-sm"
              onClick={() => filterProduct("electronics")}
            >
              Electronics
            </button>
          </div>
        </div>

        {/* Mostramos las cards de los productos */}
        <div className="col-md-9 py-md-3">
          <div className="row">
            {/* Colocamos los valores al arreglo product */}
            {filter.map((product) => {
              return (
                <div className="col-5 col-md-5 col-lg-3 mb-3 btn btn-light" key={product.id}>
                  <div className="card h-100">
                    <img
                      src={product.image}
                      className="m-3"
                      style={{
                        height: "300px",
                        width: "auto",
                        objectFit: "contain",
                      }}
                      alt={product.title}
                    />
                    <div className="m-3 mb-0">
                      <small className="card-title">
                        {/* Colocamos una logitud al titulo */}
                        {product.title.substring(0, 50)}...
                      </small>
                    </div>
                    <div style={{ marginTop: "auto" }}>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="m-3">
                          <b>${product.price}</b>
                        </div>
                        {/* Mandamos la url con el respectivo id del producto */}
                        <NavLink
                          className="stretched-link"
                          to={`/product/${product.id}`}
                        ></NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="container">
      <div className="row">{loading ? <Loading /> : <ShowProducts />}</div>
    </div>
  );
}

export default Products;
