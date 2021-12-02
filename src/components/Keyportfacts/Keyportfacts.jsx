import './Keyportfacts.css';
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';

const Keyportfacts = () => {

return (

    <div className="KeyContainer">
        <div className="KeyRow">
            <div className="Title"> 
            Key Portfolio Facts
            </div>
        </div>
        <div className="KeyRow">
            Investment Horizon: <div> <ProgressBar style={{width: '30rem', marginTop: '5px'}} now={50} /> </div> 50 years
        </div>
        <div className="KeyRow">
            Investment Goal: <div> <ProgressBar now={60} /> </div> $250,000
        </div>

        <div className="KeyRow"> 
        Risk Level: Moderate
        </div>
        <div className="KeyRow">
            <Button variant="primary">  View Portfolio Holdings </Button>
            <Button variant="secondary"> Edit Portfolio Details </Button>
        </div>
    
    </div>
  );

}
export default Keyportfacts