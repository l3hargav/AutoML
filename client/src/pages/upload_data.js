import { useState } from "react";

function FileUpload() {
    let [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        if(e.target.files[0]) {
            setFile(e.target.files[0]);
            console.log(file);
        }
    };

    const handleUpload = (e) => {
        e.preventDefault();
        if(!file) {
            return;
        }
        const formData = new FormData();
        formData.append('file', file);
        console.log("Sent data to server");
        
    
        fetch("/data/file", {
            method: 'POST',
            body: formData
        })
        console.log(formData);
    }

    return (
        <form onSubmit={handleUpload}>
            <div>
                <input type="file" onChange={handleFileChange} />
            </div>
            <button type="submit">Upload</button>
        </form>
    )
}


export default FileUpload;

