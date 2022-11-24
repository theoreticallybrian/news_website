import React, { useState, useEffect } from "react";
import "./Podcasts.css";

function Podcasts() {
const user = JSON.parse(localStorage.getItem("user"));


  const [data, setData] = useState([]);

  const getList = () => {
    fetch("http://127.0.0.1:8090/api/collections/podcasts/records")
      .then((response) => response.json())
      .then((json) => {
        setData(json.items);
      });
  };

  useEffect(() => {
    getList();
  }, []);

  const baseUrl = "http://127.0.0.1:8090/api/files/podcasts";

  console.log("podcasts", data);

  if (user){

  return (
    <div className="podcast_container">
      {data.map((data) => (
        
          <div className="podcast_wrapper">
            <img
              id="podcast_image"
              src={`${baseUrl}/${data.id}/${data.thumbnail}`}
              alt={data.title}
            />
            <h1>{data.title}</h1>
            <audio
              preload="none"
              controlsList="nodownload"
              src={`${baseUrl}/${data.id}/${data.podcastaudio}`}
              controls
            >
              New Podcast
            </audio>
          </div>
      ))}
    </div>
  );
      }
      else{
        window.location.href = "/login";
      }
}

export default Podcasts;
