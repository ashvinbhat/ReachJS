import express from "express";

const app = express();

app.get("/gg", (req, res) => { 
    res.send("Server is ready");
}); 
    
const port = process.env.PORT || 1000;
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});
