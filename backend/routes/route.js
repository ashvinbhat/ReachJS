const express = require("express");
const router = express.Router();
const Vendor = require("../models/vendorModel");

console.log(process.env.PORT)

router.post("/register", (req, res)=>{
    const newVendor = new Vendor({
        fname: req.body.fname,
        lname: req.body.lname,
        phno: req.body.phno,
        address: req.body.address,
        products: req.body.products,
        categories: req.body.categories,
        idproof: req.body.idproof
    })
    newVendor.save()
    .then(details => {
        res.json(details);
    })
    .catch(error => console.log(error));
});

module.exports = router;