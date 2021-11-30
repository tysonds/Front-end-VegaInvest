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
      <PortfolioGraph></PortfolioGraph>
   <div> 
   This is the Dashboard
   </div>
  </div>
  );

}
export default Dashboard