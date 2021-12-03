import './Keyportfacts.css';
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'

const Keyportfacts = () => {

return (

    <div className="KeyContainer">
        <div className>
            <div className="Title"> 
            Key Portfolio Facts
            </div>
        </div>
        <div className="KeyRow">
            <strong style={{width: "12rem", marginLeft:'1rem'}}> Investment Horizon: </strong> <div> <ProgressBar style={{width: '15rem', marginTop: '5px'}} now={50} /> </div>  <div style={{width: "5rem", marginLeft:"1rem"}}> 50 years </div>
        </div>
        <div className="KeyRow">
            <strong style={{width: "12rem", marginLeft: '1rem'}}> Investment Goal: </strong> <div> <ProgressBar style={{width: '15rem', marginTop: '5px'}} now={50} /> </div>  <div style={{width: "5rem", marginLeft: "1rem"}}> $250,000 </div>
        </div>

        <div className="KeyRow"> 
        <strong> Risk Level:  Moderate </strong>
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