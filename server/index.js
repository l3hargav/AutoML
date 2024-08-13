const express = require("express");

// const formidable = require("express-formidable");

const PORT = 9000;

const app = express();

app.use(express.json());
// app.use(formidable);

app.get("/test", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.post("/data/file", (req, res) => {
    res.json(req.body);
});

app.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}`);
});