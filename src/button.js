import { useState ,useEffect} from "react";
import React  from 'react';
import {useNavigate} from "react-router-dom";



export  default function Button() {
 const navigate = useNavigate();
 const [click, setClick] = useState(0);

 
useEffect(() => {
 if(click===3){
  alert("www.google.com")
   }
})
 
 

 return (
  <div >
  
   <button 
      onClick={() => setClick(click + 1)}>clickme
       {/* {click} */}
       </button>
   
   
  </div>
 );
}