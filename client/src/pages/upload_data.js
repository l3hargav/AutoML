import { useEffect, useState } from "react";
import DataTable from "../functions/DataTable";

function FileUpload() {
    let [file, setFile] = useState(null);
    let [df, setDf] = useState(null);
    let [showTable, setShowTable] = useState(false);


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
        // fetch("/data")
        // .then((res) => res.json())
        // .then((data) => {
        //     console.log(data);
        // })
    }

    const handlePrint = (e) => {
        //e.preventDefault();

        fetch("http://localhost:9000/data")
        .then((res) => res.json())
        .then((data) => {
            let dataList = JSON.parse(data);
            setDf(dataList);
            console.log(typeof(dataList));

            console.log("Fetched Data: ", dataList);
            setShowTable(true);
        })
        
        console.log(`Dataframe is ${df}`)

    }
    

    return (
        <div>
            <form onSubmit={handleUpload}>
                <div>
                    <input type="file" onChange={handleFileChange} />
                </div>
                <button type="submit">Upload</button>
            </form>

            <input type="button" value={showTable ? "Hide Table": "Show Table"} placeholder="Print" onClick={handlePrint} />
            {showTable && <DataTable data={df} />}
        </div>
    );

}


export default FileUpload;

