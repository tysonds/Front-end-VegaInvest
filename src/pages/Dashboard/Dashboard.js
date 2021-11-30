import React, { useState } from 'react';
import './Dashboard.css';
import Dashhead from '../../components/Dashhead/Dashhead.js'
// import Plot from "react-plotly.js";
import Plotly from 'plotly.js-basic-dist';
import createPlotlyComponent from "react-plotly.js/factory";
const Plot = createPlotlyComponent(Plotly);

const Dashboard = () => {

  return(
 <div className="Dashbd"> 
   <div> 
     <Dashhead> </Dashhead>
   </div>
   <Plot
        data={[
            {
            x: ['2021/09/01', '2021/09/02', '2021/09/03'],
            y: [202, 206, 203],
            type: 'linear',
            }]}
        layout={ {width: 450, height: 400, title: 'Portfolio'} }
        />
   <div> 
   This is the Dashboard
   </div>
  </div>
  );

}
export default Dashboard