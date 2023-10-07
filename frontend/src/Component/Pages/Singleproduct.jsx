import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import { useNavigate } from 'react-router-dom';
import "./Gallery.css";
import axios from 'axios';


export default function Singleproduct() {

    const [state, setState] = useState({});
    const {id} = useParams();
    console.log(id);

    const navigate = useNavigate();


    useEffect(() =>{
        ShowProduct();
    },[]);



    // let url = `https://rentcar-5a8v.onrender.com/paint/${id}`;

    const ShowProduct = async() =>{
        axios.get(`http://localhost:8080/paint/${id}`).then((res) =>{
            setState(res.data);
        })
    }


console.log(state);


  return (
   
    <div className="display-card1" >
        {
           
            <div key={state.id} className="card">
                <img src={state.image} alt={state.title} width="450px" height="450px"/>
                {/* <h1>{e.id}</h1> */}

                <div className="details">
                    <h2><PersonIcon className="icon"/>Nombre: {state.name}</h2>
                    <hr/>

                    <div className="detail2">
                    <h3><ColorLensIcon className="icon"/>Técnica:{state.technique}</h3>
                    <h3><ColorLensIcon className="icon"/>Técnica:{state.technique}</h3>
                    <h4><CalendarMonthIcon className="icon"/>{state.dateofpaint}</h4>
                    <h4><CalendarMonthIcon className="icon"/>{state.dateofpaint}</h4>
                   </div>

                </div>

                <div className='buttonDiv'>
                <button onClick={()=> navigate(`/gallery`)} className="showmore1">Back To Gallery</button>
           </div>
            </div>
           
        }


</div>

  )
}
