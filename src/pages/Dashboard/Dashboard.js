import React, { useState } from 'react';
import './Dashboard.css';
import Dashhead from '../../components/Dashhead/Dashhead.js'
// import Plot from "react-plotly.js";
import PortfolioGraph from '../../components/PortfolioGraph/PortfolioGraph'

const Dashboard = () => {

  return(
 <div className="Dashbd">  
   <div> 
     <Dashhead> </Dashhead>
   </div>
   <div className="Dashcolcontain">
   <div className="Dashrowcontain">
      <PortfolioGraph></PortfolioGraph>
   </div> 
   </div>


  </div>
  );

}
export default Dashboard