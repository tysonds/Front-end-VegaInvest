import './Keyportfacts.css';
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate, useLocation } from 'react-router-dom'
import react, { useState,useEffect } from 'react'
import axios from 'axios';

const Keyportfacts = () => {
const email=  useLocation().state.values.email
const [getMessage, setGetMessage] = useState({})

useEffect(() => {
    if (getMessage.Status=='Success') {
        console.log("inside");
      }
        
}, [setGetMessage])

useEffect(() => {
    var fullurl='http://127.0.0.1:5000/portfolios/pushRisk/' + email;
    axios.get(fullurl).then(response => {
        console.log("SUCCESS")
        console.log(response.data.risk_appetite);
        setGetMessage(response.data)
      }).catch(error => {
        console.log(error)
      })
  }, [])


return (

    <div className="KeyContainer">
        <div className>
            <div className="Title"> 
            Key Portfolio Facts
            </div>
        </div>
        <div className="KeyRow">
            <strong style={{width: "12rem", marginLeft:'1rem'}}> Investment Horizon: </strong> <div> <ProgressBar style={{width: '15rem', marginTop: '5px'}} now={50} /> </div>  <div style={{width: "5rem", marginLeft:"1rem"}}> {/*console.log(Horizon_out)*/} years </div>
        </div>
        <div className="KeyRow">
            <strong style={{width: "12rem", marginLeft: '1rem'}}> Investment Goal: </strong> <div> <ProgressBar style={{width: '15rem', marginTop: '5px'}} now={52} /> </div>  <div style={{width: "5rem", marginLeft: "1rem"}}> ${/*console.log(Goal_out)*/} </div>
        </div>

        <div className="KeyRow"> 
        <strong> Risk Level: {getMessage.risk_appetite}</strong>
        </div>
        <div className="KeyRow">
            <Link to="/portfoliosum" style={{ textDecoration: 'none'}}> 
            <Button id="KeyHoldBtn" variant="primary"> View Portfolio Holdings </Button>
            </Link> 
            <Link to="/question" style={{ textDecoration: 'none'}}>
            <Button id="KeyDetBtn" variant="secondary"> Edit Portfolio Details </Button> 
            </Link>
        </div>
    
    </div>
  );

}
export default Keyportfacts