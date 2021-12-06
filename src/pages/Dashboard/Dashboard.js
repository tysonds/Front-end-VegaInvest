import react, { useState,useEffect } from 'react';
import './Dashboard.css';
import Dashhead from '../../components/Dashhead/Dashhead.js'
// import Plot from "react-plotly.js";
import PortfolioGraph from '../../components/PortfolioGraph/PortfolioGraph'
import Footer from '../../components/Footer/Footer';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Table from 'react-bootstrap/Table'
import Keyportfacts from '../../components/Keyportfacts/Keyportfacts.jsx';
import axios from 'axios';

const Dashboard = () => {
  const email=  useLocation().state.email;
  const [getMessage, setGetMessage] = useState({})
  useEffect(() => {
    var fullurl='http://127.0.0.1:5000/portfolios/pushParams/' + email;
    axios.get(fullurl).then(response => {
        console.log("SUCCESS")
        console.log(response.data);
        setGetMessage(response.data)
      }).catch(error => {
        console.log(error)
      })
  }, [])
  
  return(

 <div className="Dashbd">  
   <div> 
     <Dashhead> </Dashhead>
   </div>

   <div className="Dashrowcontain">
      <div> <PortfolioGraph></PortfolioGraph> </div>

    <div className="Dashcolcontain">
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
      <td> Amount Invested</td>
      <td> $10,000.00</td> 
      </tr>
      <tr> 
      <td> Total Return </td>
      <td> $10,249.00 (102.5%) </td> 
      </tr>
    <tr>
      <td> Annualized Return </td>
      <td> 15.2 % </td>
    </tr>
    <tr>
      <td> Annualized Volatility </td>
      <td> 17.3% </td>
    </tr>
     <tr>
      <td> Annualized Sharpe Ratio </td>
      <td> 0.81 </td>
    </tr>
  </tbody>
</Table>
</div>
   
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