import React from "react";
import { Link } from "react-router-dom";
//import axios from "axios";

export default function Categories() {
  return (
    <>
      <Link to="/Fruits">
        <div className="categoryCard fruit">FRUITS</div>
      </Link>

      <Link to="/categories/Vegetables">
        <div className="categoryCard vegetable">VEGETABLES</div>
      </Link>

      <Link to="/categories/Greens">
        <div className="categoryCard greens">GREENS</div>
      </Link>

      <Link to="/categories/Groceries">
        <div className="categoryCard grocery">GROCERIES</div>
      </Link>

      <Link to="/categories/Accessories">
        <div className="categoryCard accessory">ACCESSORIES</div>
      </Link>

      <Link to="/categories/HomeEssentials">
        <div className="categoryCard homessentials">HOME ESSENTIALS</div>
      </Link>
    </>
  );
}
