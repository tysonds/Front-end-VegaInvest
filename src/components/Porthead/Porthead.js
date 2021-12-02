import react, { useState } from 'react'
import {DropdownButton, Dropdown, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Porthead.css';
import { Link } from 'react-router-dom'

const Porthead = () => {

return (

    <div className="Porthead">
      <div> 
        <Link to="/dashboard" style={{ textDecoration: 'none'}}> 
      <Button variant="secondary" id="DashBtn"> Dashboard </Button>
      </Link> 
     </div>
     <div> 
     <DropdownButton id="dropdown-basic-button" title="tysonds99" id="dropBtn" variant="secondary">
       
    <Dropdown.Item href="/"> Logout  </Dropdown.Item>
    <Dropdown.Item  href="/editquestion">  Edit portfolio details </Dropdown.Item>
    </DropdownButton>
    </div>
    </div>
  );

}
export default Porthead