import React, { useState } from "react";
import "./Email.css"
import axios from "axios";


function Email() {

  const url="http://127.0.0.1:8090/api/collections/email_collector/records"




  const [data, setData] = useState({
    email:"",
  });

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  }


  function submit(e) {
    e.preventDefault();
    axios
      .post(url,{
        email: data.email,
        
      })
      .then((res) => {
        console.log(res.data);
      });


  }





  return (
    <div className='email'>
        <h1>Get Notified Of Any News In Realtime</h1>
        <p>Get all the news and current events within the school by joining our realtime mailing list</p>
        <form onSubmit={(e) => submit(e)} className="form">
          
        <input onChange={(e) => handle(e)} value={data.email} id="email_cont" type="email" placeholder="Email Address" />
          <button>Notify Me</button>
        </form>
    </div>
  )
}

export default Email