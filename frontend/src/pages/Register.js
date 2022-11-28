import React, { useState } from "react";
import axios from "axios";
import styles from "../css/regform.css";

export default function RegistrationForm() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [phno, setphno] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [address, setAddress] = useState("");
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [idproof, setIdproof] = useState("");

  function submitRegistration(event) {
    event.preventDefault();
    const details = {
      fname: fname,
      lname: lname,
      phno: phno,
      address: address,
      products: products,
      categories: categories,
      idproof: idproof,
      latitude: latitude,
      longitude: longitude,
    };

    //console.log("latlong", latlong)

    //console.log("details reg form", details)

    axios
      .post("/register", details)
      .then((res) => {
        console.log("posted", res.data);
        setCategories([]);
        setProducts([]);
      })
      .catch((err) => console.log(err));
  }

  return (
<div>
      <nav style={{ backgroundColor: " #282c34" }}>
        <br />
        <br />
      </nav>
      <div>
        <br />
        <form onSubmit={submitRegistration} encType="multiple/form-data">
          <div className="personaldetails formtile" style={styles.formtile}>
            <fieldset>
              <legend>OWNER DETAILS</legend>
              <label className="formlabel row">First Name</label>
              <input
                className="inputbox row"
                type="text"
                placeholder="First name"
                required
                onChange={(e) => setFname(e.target.value)}
              ></input>
              <br />
              <label className="formlabel">Last Name</label>
              <input
                className="inputbox"
                type="text"
                placeholder="Last name"
                required
                onChange={(e) => setLname(e.target.value)}
              ></input>
              <br />
              <label className="formlabel">Mobile Number</label>
              <input
                type="tel"
                className="inputbox"
                placeholder="Mobile number"
                required
                onChange={(e) => setphno(e.target.value)}
              ></input>
              <br />
              <label className="formlabel">ID Proof</label>
              <select
                className="inputbox blktext"
                name="idproof"
                placeholder="ID Proof"
                required
                onChange={(e) => setIdproof(e.target.value)}
              >
                <option
                  defaultValue="Select"
                  className="blktext"
                  value="Select ID Proof"
                >
                  Select ID Proof
                </option>
                <option className="blktext" value="Aadhar Card">
                  Aadhar Card
                </option>
                <option className="blktext" value="PAN Card">
                  PAN Card
                </option>
                <option className="blktext" value="Voter ID">
                  Voter ID
                </option>
              </select>
              <br />
              <input type="file" className="formlabel" name="idimg"></input>
              <br />
            </fieldset>
          </div>
          <br />
          <div className="shopdetails formtile">
            <fieldset>
              <legend>SHOP DETAILS</legend>
              <p className="formfield">
                <label className="formlabel row">Shop Location</label>
                <textarea
                  className="inputarea"
                  placeholder="Shop Location"
                  required
                  onChange={(e) => setAddress(e.target.value)}
                ></textarea>
              </p>
              <br />
              <p className="formfield">
                <label className="formlabel">Products</label>
                <textarea
                  className="inputarea"
                  placeholder="Products"
                  required
                  onChange={(e) =>
                    setProducts(() => e.target.value.split(", "))
                  }
                ></textarea>
              </p>
              <br />
              <p>link to coordinate website</p>
              <br/>
              <label className="formlabel">Latitude</label>
              <input className="inputbox" 
                type="text" 
                placeholder="Latitude" 
                onChange={(e)=>{setLatitude(e.target.value)}}
                required/>
              <br />
              <br />
              <label className="formlabel">Longitude</label>
              <input className="inputbox" 
                type="text" 
                placeholder="Longitude" 
                onChange={(e)=>{setLongitude(e.target.value)}}
                required/>
              <br />
              <br />
              <label className="formlabel">Category: </label>
              <input
                type="checkbox"
                value="Fruits"
                onClick={(e) =>
                  setCategories((old) => [...old, e.target.value])
                }
              />
              <label className="formlabel">Fruits</label>
              <input
                type="checkbox"
                value="Vegetables"
                onClick={(e) =>
                  setCategories((old) => [...old, e.target.value])
                }
              />
              <label className="formlabel">Vegetables</label>
              <input
                type="checkbox"
                value="Greens"
                onClick={(e) =>
                  setCategories((old) => [...old, e.target.value])
                }
              />
              <label className="formlabel">Greens</label>
              <input
                type="checkbox"
                value="Groceries"
                onClick={(e) =>
                  setCategories((old) => [...old, e.target.value])
                }
              />
              <label className="formlabel">Groceries</label>
              <input
                type="checkbox"
                value="Accessories"
                onClick={(e) =>
                  setCategories((old) => [...old, e.target.value])
                }
              />
              <label className="formlabel">Accessories</label>
              <input
                type="checkbox"
                value="HomeEssentials"
                onClick={(e) =>
                  setCategories((old) => [...old, e.target.value])
                }
              />
              <label className="formlabel">Home Essentials</label>
              <br />
            </fieldset>
          </div>
          <br />
          <input type="checkbox" name="t&c" value="consent" required />
          <label htmlFor="t&c">
            I agree to the{" "}
            <a href="termsandconditions.html">Terms and Conditions</a>
          </label>
          <br />
          <br />
          <button type="submit">REGISTER</button>
          <br />
          <br />
        </form>
      </div>
    </div>
  );
}
