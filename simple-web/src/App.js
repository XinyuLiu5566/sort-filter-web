import * as React from 'react';
import './App.css';
import { Element } from './component/Element';
import { Dropdown } from './component/Dropdown';
import mockdata from './mockdata.json';
import { useState } from 'react';
import { PriceFilter } from './component/PriceFilter';
import { TimeFilter } from './component/TimeFilter';

function App() {
  const [data, setData] = useState(mockdata)
  const [original, setOriginal] = useState(mockdata)
  return (
    <div>
      <Dropdown original = {original} setOriginal = {setOriginal} data = {data} setData = {setData}/>
      <PriceFilter original = {original} setOriginal = {setOriginal} data = {data} setData = {setData}/>   
      <TimeFilter original = {original} setOriginal = {setOriginal} data = {data} setData = {setData}/>   
     <div className="container">
        <div className="row row-cols-5">
          {data.map(element => (
            <Element key={element.id} element={element} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App;



