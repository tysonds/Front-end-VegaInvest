import React, { useState } from 'react';
import './Dashboard.css';
import Dashhead from '../../components/Dashhead/Dashhead.js'
// import Plot from "react-plotly.js";
import PortfolioGraph from '../../components/PortfolioGraph/PortfolioGraph'
import Footer from '../../components/Footer/Footer';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

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
   <div className="Dashrowcontain">
     <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title> "Retirement" </Card.Title>
    <Card.Text>
      $10,000 
    </Card.Text>
    <Button variant="primary"> View </Button>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title> "Education" </Card.Title>
    <Card.Text>
      $10,000
    </Card.Text>
    <Button variant="primary"> View </Button>
  </Card.Body>
</Card>
<Button variant="primary"> Create New Portfolio </Button>
     </div> 
   </div>
   <div>
   <Footer> </Footer>
   </div>


  </div>
  );

}
export default Dashboard