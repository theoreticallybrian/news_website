import React,{useState, useEffect} from 'react'
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import {AiOutlineArrowLeft} from 'react-icons/ai'
import axios from 'axios';
import "./Details.css";


function Details() {

    let {id} = useParams();

    const [data, setData] = useState({});

    const baseUrl = "http://127.0.0.1:8090/api/files/highlights"



    useEffect(() => {
        if (id) {
          axios
            .get(`http://127.0.0.1:8090/api/collections/highlights/records/${id}`)
            .then((response) => {
                setData(response.data);
                }
            );
            console.log("data", data);

           
        }
    
        // Fetch tool using the name
      }, [id]);
    



  return (
    <div className='details'>
<img className='details_image'  src={`${baseUrl}/${data.id}/${data.thumbnail}`} alt={data.headline}/>

<div><Link to="/"><AiOutlineArrowLeft/></Link>
</div>
<h1>{data.headline}</h1>

<p>{data.description}</p>


    </div>
  )
}

export default Details