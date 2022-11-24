import React from "react";
import "./SportsNews.css";
import { useState, useEffect } from "react";

function SportsNews() {
 const [data, setData] = useState([]);

  const getList = () => {
    fetch("http://127.0.0.1:8090/api/collections/sports_news/records")
      .then((response) => response.json())
      .then((json) => {
        setData(json.items);

      });
  



  }

  useEffect(() => {
    getList()
  }, []);

const baseUrl = "http://127.0.0.1:8090/api/files/sports_news"


  return (<div className="sportsnews_container">
    <h1>Sports News</h1>
{data.map(data=>(
  <div className="sportsnews_news">
  <img id="sportsnews_image" src={`${baseUrl}/${data.id}/${data.thumbnail}`} alt={data.headline}/>
  <div>
  <h1>{data.headline}</h1>
<p className="sports_description">{data.description}</p>
  </div>

</div>
))}


  </div>);
}

export default SportsNews;
