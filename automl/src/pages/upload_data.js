import { ChangeEvent, useState } from 'react';

function FileUpload() {
    const [file, setFile] = useState();

    const handleFileChange = (e) => {
        if(e.file) {
            setFile(e.file);
        }
    }

    const handleUploadClick = () => {
        if(!file) {
            return;
        }
    }

    // Send file to the server
    // fetch(, {
    //     method: 'POST',
    //     body: file,
    //     header: {

    //     }
    // })
    // .then ((res) => res.json())
    // .then((data) => console.log(data))
    // .catch((err) => console.log(err))

    return(
        <div>
        <input type="file" onChange={handleFileChange} />

        <div>{file && `${file.name} - ${file.type}`}</div>

        <button onClick={handleUploadClick}>Upload</button>
        </div>
    )
}

