import React, { useState } from 'react';
import './Dashboard.css';
import Dashhead from '../../components/Dashhead/Dashhead.js'
// import Plot from "react-plotly.js";
import PortfolioGraph from '../../components/PortfolioGraph/PortfolioGraph'
import Footer from '../../components/Footer/Footer';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import Table from 'react-bootstrap/Table'
import Keyportfacts from '../../components/Keyportfacts/Keyportfacts.jsx';

const Dashboard = () => {

  return(
 <div className="Dashbd">  
   <div> 
     <Dashhead> </Dashhead>
   </div>
   <div className="Dashcolcontain">
   <div className="Dashrowcontain">
      <PortfolioGraph></PortfolioGraph>
      <div className="tb"> 
      <Table id="table" striped bordered hover size="sm">
  <thead>
    <tr>
      <th>Portfolio Statistic</th>
      <th>Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td> Annualized Return </td>
      <td> 18.3 % </td>
    </tr>
    <tr>
      <td> Annualized Volatility </td>
      <td> 7.3% </td>
    </tr>
    <tr>
      <td> Annualized Sharpe Ratio </td>
      <td>23.09% </td>
    </tr>
  </tbody>
</Table>
</div>
   </div>
   <div className="Dashrowcontain">
  
<Keyportfacts> </Keyportfacts>
</div> 
   </div>
   <div>
   <Footer> </Footer>
   </div>
  </div>
  );

}
export default Dashboard