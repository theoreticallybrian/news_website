import React from "react";
import "./Highlights.css";
import { Link } from "react-router-dom";


import { useState, useEffect } from "react";

function Higlights() {
 const [data, setData] = useState([]);

  const getList = () => {
    fetch("http://127.0.0.1:8090/api/collections/highlights/records")
      .then((response) => response.json())
      .then((json) => {
        setData(json.items);
      });
  



  }

  useEffect(() => {
    getList()
  }, []);

const baseUrl = "http://127.0.0.1:8090/api/files/highlights"


  return (<div className="highlights_container">
    <h1>Highlights</h1>
{data.map(data=>(
  <div className="highlights" key={data.i}>
  <img id="highlights_image" src={`${baseUrl}/${data.id}/${data.thumbnail}`} alt={data.headline}/>
<h1>{data.headline}</h1>
<p className="description">{data.description}</p>
<Link to={data.id}>Read More</Link>
</div>
))}


  </div>);
}

export default Higlights;
