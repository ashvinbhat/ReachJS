import axios from "axios";
import React, { useEffect, useState } from "react";
import "../css/categorypage.css";

export default function Category(props) {
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
  var flag = 0;
  return (
    <div>
      <h1>Vendors who sell {props.name}</h1>
      {/* display vendor if Vendor.category === props.name */}

      {Vendors.data &&
        Vendors.data.map((vendor) => {
          //   check if each category in vendor.categories === props.name
          //   if yes, display the vendor
          //   else, don't display the vendor

          if (vendor.categories.includes(props.name)) {
            flag = 1;
            return (
              <div className="vendorbox">
                <h3>First Name: {vendor.fname}</h3>
                <h3>Last Name: {vendor.lname}</h3>
                <h3>Phone Number: {vendor.phno}</h3>
                <h3>Address: {vendor.address}</h3>
                <h3>Products: {vendor.products}</h3>
                <h3>Categories: {vendor.categories}</h3>
              </div>
            );
          } else {
            return null;
          }
        })}
      {flag === 0 && (
        <div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <h3>No Vendors found</h3>
        </div>
      )}
    </div>
  );
}
