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
      <h1>VENDORS</h1>
      {/* display all the details of all vendors one below the other in a box*/}
      {Vendors.data &&
        Vendors.data.map((vendor) => (
          <div>
            <table className="vendorbox">
            <tr><td>First Name:</td><td>{vendor.fname}</td></tr>
            <tr><td>Last Name: </td><td>{vendor.lname}</td></tr>
            <tr><td>Phone Number: </td><td>{vendor.phno}</td></tr>
            <tr><td>Address: </td><td>{vendor.address}</td></tr>
            <tr><td>Products: </td><td>{vendor.products}</td></tr>
            <tr><td>Categories: </td><td>{vendor.categories.toString()}</td></tr>
            </table>
          </div>
        ))}
    </div>
  );
}
