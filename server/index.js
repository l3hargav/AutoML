const express = require("express");
const multer = require("multer");
const path = require("path");

// const formidable = require("express-formidable");

const PORT = 9000;
const app = express();

const upload = multer({ storage: multer.memoryStorage() });

app.use(express.json());
// app.use(formidable);

data = null;

app.get("/test", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.post("/data/file", upload.single('file'), (req, res) => {
    if(!req.file) {
        res.status(400).json({ message: "No file uploaded" });
        return;
    }
    console.log(req.file);
    try {
        fetch('http://localhost:8000/get_data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(req.file)
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                data = data;
                res.json({ message: "File uploaded successfully" });
            })
    }
    catch(err) {
        res.status(500).json({ message: "Error uploading file" });
    }
});



// app.get("/data/file/print", (req, res) => {
//     res.json({ "file": data });
// })

app.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}`);
});