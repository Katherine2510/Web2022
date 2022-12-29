import React, { useState } from "react";
import { useEffect } from "react";
//import "../css/table.css";
//import "../css/style.css";
//import Popup from "reactjs-popup";
//import Aproducts from "./Aproducts";
import axios from "axios";
import { set } from "react-hook-form";

export default function WarrantyProduct() {
  const [WarrantyProduct, setWarrantyProduct] = useState([]);
  var idb = localStorage.getItem("place_code");
  useEffect(() => {
    refreshWarrantyProduct();
  }, []);

  function refreshWarrantyProduct() {
    const ProjectAPI = axios
      .get(
        `http://localhost/web2223(1)/ProductionMove/public/api/warranty/view_products/${idb}`
      )
      .then((res) => setWarrantyProduct(res.data))
      .catch((err) => console.log(err));
  }
  const [post, setPost] = useState([]);

  return (
    <div col-md-9 col-sm-8 col-xs-12>
      <h3>PRODUCT LIST</h3>
      <table id="product-table">
        <thead>
          <tr>
            <th scope="col">product_code</th>
            <th scope="col">product_line</th>
            <th scope="col">product_name</th>
            <th scope="col">brand</th>
            <th scope="col">status</th>
          </tr>
        </thead>

        <tbody>
          {WarrantyProduct.map((e, i) => (
            <tr key={i}>
              <td>{e.product_code}</td>
              <td>{e.product_line}</td>
              <td>{e.product_name}</td>
              <td>{e.brand}</td>
              <td>{e.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
