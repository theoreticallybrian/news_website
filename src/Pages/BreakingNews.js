import React from 'react';
import "./BreakingNews.css";

function BreakingNews() {
const user = JSON.parse(localStorage.getItem("user"));

if (user){
  return (
    <div className='breakingNews'>BreakingNews</div>
  )
}

else{
  window.location.href = "/login";
}
}

export default BreakingNews