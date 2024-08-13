import { useState } from "react";

function FileUpload() {
    let [file, setFile] = useState();

    const handleFileChange = (e) => {
        if(e.target.file) {
            setFile(e.target.file);
            console.log(file);
        }
    };

    const handleUpload = () => {
        alert("Sending data to server.")
    
        fetch("/data/file", {
            data: file
        })
        
    }

    return (
        <div>
            <input type="file" onChange={handleFileChange} />

            <div>{file && `${file.name} - ${file.type}`}</div>

            <button onClick={handleUpload}>Upload</button>
        </div>
    )
}


export default FileUpload;

