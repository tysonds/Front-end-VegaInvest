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
<<<<<<< Updated upstream

   <div className="Dashrowcontain">
      <PortfolioGraph></PortfolioGraph>
=======
      <PortfolioGraph>const startdate='2014-02-17'
        const enddate = "2017-02-16" </PortfolioGraph>
   <div> 
   This is the Dashboard
>>>>>>> Stashed changes
   </div>

  </div>
  );

}
export default Dashboard