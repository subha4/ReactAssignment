import PopulationCard from "../src/components/PopulationCard";
import { useState } from 'react';
import CsvReader from '../src/components/CsvReader';
import "./App.css"



function App() {

  const [jsonObject,setJsonObject] = useState();

  return (
    <>
    <CsvReader callback={(data)=>{setJsonObject(data)}}/>
    {
    jsonObject && 
      <div className="card-container">

    <PopulationCard sorting="highest" data={jsonObject}></PopulationCard>
    <PopulationCard sorting="lowest" data={jsonObject}></PopulationCard>
    </div>
    }
    {!jsonObject && <h2>Please wait, while the results are being calculated!</h2>}
    </>
  );
    
}

export default App;
