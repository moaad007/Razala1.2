import { AiFillPlusCircle } from "react-icons/ai";
import Component from "./button";

import { useLocation } from "react-router-dom";
import { useState } from "react";



function Add(){
    const location = useLocation();
  const { name } = location.state || {};
  const [add,setadd]=useState(false)
 const ToggleAdd = () =>{
    setadd(!add)
 }
return(
 
    <div     className=''>
 <Component name={name}  className="my-2"/>
      <AiFillPlusCircle size="4em" color="#B5B2B2" className=" w-screen my-5"  onClick={ToggleAdd}/>
    </div>
    
    
)
}
export default Add