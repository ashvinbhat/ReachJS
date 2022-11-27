import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/sellers.css";

export default function Sellers() {
  const [Vendors, setVendors] = useState("");

  useEffect(() => {
    const fetchdata = async () => {
      const data = await axios.get("/sellers/get");
      setVendors(data);
      /*       console.log("data", data);
      console.log("vendors", Vendors);
      console.log("fname", data.data[0].fname); */
    };
    fetchdata();
  }, []);

  return (
    <div className="Sellers">
      <h1>Sellers</h1>
      {/* display all the details of all vendors one below the other in a box*/}
      {Vendors.data &&
        Vendors.data.map((vendor) => (
          <div className="vendorbox">
            <h3>First Name: {vendor.fname}</h3>
            <h3>Last Name: {vendor.lname}</h3>
            <h3>Phone Number: {vendor.phno}</h3>
            <h3>Address: {vendor.address}</h3>
            <h3>Products: {vendor.products}</h3>
            <h3>Categories: {vendor.categories}</h3>
          </div>
        ))}
    </div>
  );
}
