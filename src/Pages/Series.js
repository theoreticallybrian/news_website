import React from 'react';
import "./Series.css";

function Series() {
const user = JSON.parse(localStorage.getItem("user"));


if (user){
  return (
    <div className='series'>Series</div>
  )
}
else{
  window.location.href = "/login";
}
}

export default Series