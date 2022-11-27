import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Category(props)
{
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
        <div>
            <h1>Needs to display all {props.name} vendors from database</h1>
            {/* display all the vendors with the same prop name */}
            {Vendors.map((vendor) => (
                <div key={vendor._id}>
                    <h1>{vendor.fname}</h1>
                </div>
            ))}
                
        </div>
    )
}