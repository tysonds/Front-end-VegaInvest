import './Keyportfacts.css';
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'

const Keyportfacts = () => {

return (

    <div className="KeyContainer">
        <div className="KeyRow">
            <div className="Title"> 
            Key Portfolio Facts
            </div>
        </div>
        <div className="KeyRow">
            <strong style={{width: "10rem"}}> Investment Horizon: </strong> <div> <ProgressBar style={{width: '22rem', marginTop: '5px'}} now={50} /> </div>  <div style={{width: "4rem"}}> 50 years </div>
        </div>
        <div className="KeyRow">
            <strong style={{width: "10rem"}}> Investment Goal: </strong> <div> <ProgressBar style={{width: '22rem', marginTop: '5px'}} now={50} /> </div>  <div style={{width: "4rem"}}> $250,000 </div>
        </div>

        <div className="KeyRow"> 
        <strong> Risk Level:  Moderate </strong>
        </div>
        <div className="KeyRow">
            <Link to="/portfoliosum" style={{ textDecoration: 'none'}}> 
            <Button variant="primary"> View Portfolio Holdings </Button>
            </Link> 
            <Link to="/question" style={{ textDecoration: 'none'}}>
            <Button variant="secondary"> Edit Portfolio Details </Button> 
            </Link>
        </div>
    
    </div>
  );

}
export default Keyportfacts