import React, { useEffect, useState } from "react";
import "./Auth.css";
import { Link, Navigate } from "react-router-dom";
import PocketBase from 'pocketbase';


function Login() {

  const client = new PocketBase('http://127.0.0.1:8090');

  const [navigate, setNavigate] = useState(false);


  const [data, setData] = useState({
    email: "",
    password: "",
    passwordConfirm: ""
  });


  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
  }




  const Signup = async (e) =>{
    e.preventDefault();
      const user = await client.users.create({
        email:data.email,
        password:data.password,
        passwordConfirm:data.passwordConfirm
        
        
        });
        setNavigate(true);
      console.log(user)
    } 
  


    if (navigate) {
      return <Navigate to="/success" />;
    }


  return (
    <div className="login">
      <form onSubmit={Signup}>
        <span>Or</span>
        <br />
        <input onChange={(e) => handle(e)} id="email" type="email" placeholder="Email" />
        <input onChange={(e) => handle(e)} id="password" type="password" placeholder="Password" />
        <input onChange={(e) => handle(e)} id="passwordConfirm" type="password" placeholder="Confirm Password" />

        <button>Signup</button>
        <div>
          Already have an account? <Link to="/login">Login</Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
