import * as React from 'react'
import { useState,useEffect } from 'react'

import "./PopulationCard.css";



export default function PopulationCard({sorting,data}) {
  // const [jsonObject,setJsonObject] = useState();
  const [minMax,setMinMax] = useState();

    useEffect(() => {
      populationLogic(sorting,data);
    },[]);
 
    const populationLogic = (sorting ="highest", jsonObject) => {
      if (jsonObject){
          const filteredFemaleEntities = jsonObject.filter(element => element.gender === 'female');
          // console.log(filteredEntities);
          const sortedFemaleObj = filteredFemaleEntities.sort((a, b) => {
              return a.population - b.population;
          });

          const filteredMaleEntities = jsonObject.filter(element => element.gender === 'male');
          // console.log(filteredEntities);
          const sortedMaleObj = filteredMaleEntities.sort((a, b) => {
              return a.population - b.population;
          });
          setMinMax(sorting==='lowest' ? [sortedMaleObj[0],sortedFemaleObj[0]] : [sortedMaleObj.slice(-1)[0],sortedFemaleObj.slice(-1)[0]]);
      }
  }


  return (
    <>
    
    <div className="container">

    <div className="card">

    <h2 className="heading">{sorting === "highest" ? 'Highest':'Lowest'} Population</h2>

      <table className="table">
        <tbody>

        <tr>
          <th>Entity</th>
          <th>Zip Code</th>
          <th>Population</th>
        </tr>
        <tr>
          <td>Male</td>
          <td>{minMax?.[0].zipcode}</td>
          <td>{minMax?.[0].population}</td>
        </tr>
        <tr>
          <td>Female</td>
          <td>{minMax?.[1].zipcode}</td>
          <td>{minMax?.[1].population}</td>
        </tr>
        </tbody>
        
      </table>
    </div>
    
    </div>


    </>
  );
}
