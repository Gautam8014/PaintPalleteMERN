import React, { useState,useEffect } from 'react' 

 import {Link as RouterLink} from "react-router-dom" 
 import "./Navbar.css" 
 import { Navigate, useNavigate } from "react-router-dom"; 
 import { useContext } from "react";
 
import { MyAuthContext } from '../Context/AuthContextProvide';

 const Navbar = () => { 
  const { language, lang,setLang} = useContext(MyAuthContext);
console.log(lang)
   let mylink=[ 
     { 
         title: "Home", 
         path: "/" 
     }, 
     { 
         title: "Gallery", 
         path: "/gallery" 
     }, 
     { 
         title: "About", 
         path: "/about" 
     }, 
     { 
         title: "Contact", 
         path: "/contact" 
     }

     
    
   ] 
  
   return ( 
     <div className="Navbar"> 

{/* <img className='img' src='https://png.pngtree.com/png-clipart/20230817/original/pngtree-initial-letter-ll-logo-template-design-abstract-icon-simple-vector-picture-image_10936199.png' alt='error'></img> */}

     <nav>

       

     { 
     mylink.map((e)=>(<RouterLink className="link" key={e.path} to={e.path}>{e.title}</RouterLink>))

   } 

   <span></span>
        <button onClick={()=>{setLang(!lang)}}>{lang ? "Español": "English"}</button>
     </nav>
  
       </div> 
       
   ); 
 } 
  
 export default Navbar