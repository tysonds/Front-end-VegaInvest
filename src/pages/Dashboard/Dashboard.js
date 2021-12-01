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
     <Card style={{ width: '14rem' }} id="PortCard">
  <Card.Body>
    <Card.Title> "Retirement" </Card.Title>
    <Card.Text>
      $10,000 
    </Card.Text>
    <Button variant="primary"> View </Button>
  </Card.Body>
</Card>
<Card style={{ width: '14rem' }} id="PortCard">
  <Card.Body>
    <Card.Title> "Education" </Card.Title>
    <Card.Text>
      $10,000
    </Card.Text>
    <Button variant="primary"> View </Button>
  </Card.Body>
</Card>
<div ClassName="Dashcolcontain">
  
<Button variant="primary" style={{height: '40%', color: '#000000', fontFamily: 'Montserrat',
fontStyle: 'bold' , width: '14rem', backgroundColor: '#ABDDFC', fontWeight: '800', marginTop:'25%'}}> Create New Portfolio </Button>
</div>
     </div> 
   </div>
   <div>
   <Footer> </Footer>
   </div>


  </div>
  );

}
export default Dashboard