import React, { useState } from 'react';
import './Dashboard.css';
// import Plot from "react-plotly.js";
import Plotly from 'plotly.js-basic-dist';
import createPlotlyComponent from "react-plotly.js/factory";
const Plot = createPlotlyComponent(Plotly);

const Dashboard = () => {
  return (
<Plot
        data={[
          {
            x: ['2021/09/01', '2021/09/02', '2021/09/03'],
            y: [202, 206, 203],
            type: 'linear',
          },
        ]}
        layout={ {width: 900, height: 800, title: 'A Fancy Plot'} }
      />
  )


}
export default Dashboard