import { useState } from 'react'

export default function CsvReader({callback}){
    const [csvFile, setCsvFile] = useState();

    const processCSV = (str, delim=',') => {
        var lines=str.split("\n");
        var result = [];
        var headers=lines[0].split(",");
      
        for(var i=1;i<lines.length;i++){
      
            var obj = {};
            var currentline=lines[i].split(",");
      
            for(var j=0;j<headers.length;j++){
                obj[headers[j]] = currentline[j];
            }
      
            result.push(obj);
      
        }


        callback(result);
        return result; //JSON
    }

    const submit = () => {
        const file = csvFile;
        const reader = new FileReader();

        reader.onload = function(e) {
            const text = e.target.result;
            processCSV(text);
        }

        reader.readAsText(file);
    }


    return(
        <form id='csv-form'>
            <input
                type='file'
                accept='.csv'
                id='csvFile'
                onChange={(e) => {
                    setCsvFile(e.target.files[0])
                }}
            >
            </input>
            <br/>
            <button
                onClick={(e) => {
                    e.preventDefault()
                    if(csvFile)submit()
                }}
            >
                Submit
            </button>
            <br/>
            <br/>
        </form>
    );

}