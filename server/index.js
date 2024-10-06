import express from "express";
import multer from "multer";
import path from "path";
import fetch from "node-fetch";

// const formidable = require("express-formidable");

const PORT = 9000;
const app = express();

const upload = multer({ storage: multer.memoryStorage() });

app.use(express.json());
// app.use(formidable);

let data = null;

app.get("/test", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.post("/data/file", upload.single('file'), (req, res) => {
    if(!req.file) {
        res.status(400).json({ message: "No file uploaded" });
        return;
    }
    //console.log(req.file);
    try {
        fetch('http://localhost:8000/get_data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(req.file)
        })
            .then((res) => {res.json(); console.log(res)})
            .then((data) => {
                // console.log(data);
                // data = data;
                //console.log("Data received successfully");
                res.status(200).json({ message: "File uploaded successfully" });
            })
    }
    catch(err) {
        res.status(500).json({ message: "Error uploading file" });
    }
});

app.get("/data",  (req,res) => {
    fetch("http://localhost:8000/send_data")
    .then((res) => res.json())
    .then((data) => {
        console.log("Data received from flask: ", data);
        res.json(data);
    });
})


// app.get("/data/file/print", (req, res) => {
//     res.json({ "file": data });
// })

app.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}`);
});