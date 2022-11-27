import React from "react";
import axios from "axios";
import styles from "../css/categories.css";

export default function Categories(){

    function showVendors(category){
        console.log("clicked")
        axios.get("/categories", category)
        .then((res)=>{console.log("get sent", res.data)})
        .catch((err)=>console.log("get error", err))
        ;
    }

    return(
        <>
        <div className="container">
        <div className="categoryCard" onClick={showVendors("Fruits")}>
            <h3>FRUITS</h3>
        </div>
        <div className="categoryCard" onClick={showVendors("Vegetables")}>
            VEGETABLES
        </div>
        <div className="categoryCard" onClick={showVendors("Greens")}>
            GREENS
        </div>
        <div className="categoryCard" onClick={showVendors("Groceries")}>
            GROCERIES
        </div>
        <div className="categoryCard" onClick={showVendors("Accessories")}>
            ACEESORIES
        </div>
        </div>
        </>
    )
}