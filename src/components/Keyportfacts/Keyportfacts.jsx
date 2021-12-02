import './Keyportfacts.css'
import Button from 'react-bootstrap/Button'

const Keyportfacts = () => {

return (

    <div className="KeyContainer">
        <div className="KeyRow">
            <div className="Title"> 
            </div>
        </div>
        <div className="KeyRow">
            Investment Horizon: 
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