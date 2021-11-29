import react, { useState } from 'react'
import MCempl from '../MCempl/MCempl.js';
import './userqone.css';

const Userqone = () => {

return (
 <div className="mccontainer"> 
 <div className="question"> 
 1. Are you employed?
 </div> 
   <MCempl />

 </div>
  );

}
export default Userqone