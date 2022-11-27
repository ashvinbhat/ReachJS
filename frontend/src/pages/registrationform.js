import React, { useState } from 'react';
import axios from 'axios';
import styles from "../css/regform.css"

export default function RegistrationForm(){

        const [fname, setFname] = useState('');
        const [lname, setLname] = useState('');
        const [phno, setphno] = useState('');
        const [address, setAddress] = useState('');
        const [products, setProducts] = useState([]);
        const [categories, setCategories] = useState([]);
        const [idproof, setIdproof] = useState('');

        function submitRegistration(event){
            event.preventDefault();
            const details =
            {
                fname:fname,
                lname:lname,
                phno:phno,
                address:address,
                products:products,
                categories: categories,
                idproof:idproof,
            }
            
            //console.log("details reg form", details)

            axios.post("/register", details)
                .then((res)=>{
                    console.log("posted", res.data)
                    setCategories([]);
                    setProducts([]);
                })
                .catch(err=>console.log(err));
        }

        return(
            <div>
                <nav style={{backgroundColor:" #282c34"}}><br/><br/></nav>
                <div>
                    <br/>
                    <form onSubmit={submitRegistration} encType="multiple/form-data">
                        <div class="personaldetails formtile" style={styles.formtile}>
                            <fieldset>
                            <legend>OWNER DETAILS</legend>
                            <label class="formlabel row">First Name</label>
                            <input class="inputbox row" type="text" placeholder='First name' required
                            onChange={(e)=>setFname(e.target.value)}></input>
                            <br/>
                            <label class="formlabel">Last Name</label>
                            <input class="inputbox" type="text" placeholder='Last name' required
                            onChange={(e)=>setLname(e.target.value)}></input>
                            <br/>
                            <label class="formlabel">Mobile Number</label>
                            <input type="tel" class="inputbox" required 
                            onChange={(e)=>setphno(e.target.value)}></input>
                            <br/>
                            <label class="formlabel">ID Proof</label>
                            <select class="inputbox blktext" name="idproof"  required onChange={(e)=>setIdproof(e.target.value)}>
                                <option selected class="blktext" value="Select ID Proof">Select ID Proof</option>
                                <option class="blktext" value="Aadhar Card">Aadhar Card</option>
                                <option class="blktext" value="PAN Card">PAN Card</option>
                                <option class="blktext" value="Voter ID">Voter ID</option>
                            </select>
                            <br/>
                            <input type="file" name="idimg" ></input>
                            <br/>
                            </fieldset>
                        </div>
                        <br/>
                        <div class="shopdetails formtile">
                            <fieldset>
                            <legend>SHOP DETAILS</legend>
                            <label class="formlabel row">Shop Location</label>
                            <textarea class="inputarea"  required onChange={(e)=>setAddress(e.target.value)}></textarea>
                            <br/>
                            <label class="formlabel">Products</label>
                            <textarea class="inputarea"  required onChange={(e)=>setProducts(()=>e.target.value.split(", "))}></textarea>
                            <br/>
                            <label class="formlabel">Photos of shop and products</label>
                            <br/>
                            <label class = "formlabel">Category: </label>
                            <input type="checkbox" value="Fruits" onClick={(e)=>setCategories((old)=>[...old, e.target.value])}/>
                            <label class = "formlabel">Fruits</label>
                            <input type="checkbox" value="Vegetables" onClick={(e)=>setCategories((old)=>[...old, e.target.value])}/>
                            <label class = "formlabel">Vegetables</label>
                            <input type="checkbox" value="Greens" onClick={(e)=>setCategories((old)=>[...old, e.target.value])}/>
                            <label class = "formlabel">Greens</label>
                            <input type="checkbox" value="Accessories" onClick={(e)=>setCategories((old)=>[...old, e.target.value])}/>
                            <label class = "formlabel">Accessories</label>
                            <input type="checkbox" value="Groceries" onClick={(e)=>setCategories((old)=>[...old, e.target.value])}/>
                            <label class = "formlabel">Groceries</label>
                            <br/>
                            <input type="file" name="idimg"></input> 
                            <br/>
                            <input type="file" name="idimg"></input>
                            <br/>
                            <input type="file" name="idimg"></input>
                            </fieldset>
                        </div>
                        <br/>
                        <input type="checkbox" name="t&c" value="consent" required/>
                        <label for="t&c">I agree to the <a href="termsandconditions.html">Terms and Conditions</a></label>
                        <br/>
                        <br/>
                        <button type="submit">REGISTER</button>
                        <br/>
                        <br/>
                    </form>
                </div>            
            </div>
        )
}