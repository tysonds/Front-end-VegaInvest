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
    <Card.Title id="Title"> "Retirement" </Card.Title>
    <Card.Text id="Title">
      $60,531 
    </Card.Text>
    <Link to="/portfoliosum" style={{ textDecoration: 'none', color: 'black' }}>
    <Button variant="primary" style={{color: '#000000', fontFamily: 'Montserrat', backgroundColor: '#ABDDFC', fontWeight: '800'}}> View </Button>
    </Link>
  </Card.Body>
</Card>
<Card style={{ width: '14rem' }} id="PortCard">
  <Card.Body>
    <Card.Title id="Title"> "Education" </Card.Title>
    <Card.Text id="Title">
      $19,529
    </Card.Text>
    <Link to="/portfoliosum" style={{ textDecoration: 'none', color: 'black' }}>
    <Button variant="primary" style={{color: '#000000', fontFamily: 'Montserrat', backgroundColor: '#ABDDFC', fontWeight: '800'}}> View </Button>
    </Link>
  </Card.Body>
</Card>
<div ClassName="Dashcolcontain">
<Link to="/question" style={{ textDecoration: 'none', color: 'black' }}>
<Button variant="primary" style={{height: '40%', color: '#000000', fontFamily: 'Montserrat',
fontStyle: 'normal' , width: '14rem', backgroundColor: '#ABDDFC', fontWeight: '800', marginTop:'15%'}}> Create New Portfolio </Button>
</Link> 
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