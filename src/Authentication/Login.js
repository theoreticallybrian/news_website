import React,{useState, useEffect} from "react";
import "./Auth.css";
import { Link } from "react-router-dom";
import PocketBase from 'pocketbase';

function Login() {

  const client = new PocketBase('http://127.0.0.1:8090');
 
  const [data, setData] = useState({
    email: "",
    password: ""
  });

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
  }
 const email = data.email;
 const password = data.password;


const Login = async (e) =>{
  e.preventDefault();
    const userAuthData1 = await client.users.authViaEmail(email, password)

.then((userAuthData1) => {
      if (userAuthData1) { 
        localStorage.setItem("user",JSON.stringify(userAuthData1));
        window.location.href = "/";

      }
    })
      
      

  } 


  return (
    <div className="login">
      <form onSubmit={Login}>
        <br />
        <span>Or</span>
        <br /><br/>
        <input onChange={(e) => handle(e)} id="email" type="email" placeholder="Email" />
        <input onChange={(e) => handle(e)} id="password" type="password" placeholder="Password" />
        <button>Login</button>
        <div>
          Don't have an account? <Link to="/signup">Signup</Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
