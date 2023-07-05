import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./main.css";

const Main = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <div>
      <div className="container">
        <h1>Online Store</h1>
        <input
          type="search"
          name="src"
          placeholder="Search Products"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="content">
        {data
          .filter((row) => {
            if (search == "") {
              return row;
            } else if (row.title.toLowerCase().includes(search.toLowerCase())) {
              return row;
            }
          })
          .map((row, i) => {
            return (
              <div className="card" key={i}>
                <div className="image">
                  <img src={row.image} alt={row.title} />
                </div>
                <div className="title">
                  <h2>{row.title.substring(0, 20)}</h2>
                  <p>Price of product: {row.price}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Main;
