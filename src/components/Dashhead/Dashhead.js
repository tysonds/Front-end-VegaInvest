import react, { useState } from 'react'
import Vegalogo from './VegaLogoCon.jpeg'
import './Dashhead.css'
import {DropdownButton, Dropdown} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'

const Dashhead = () => {

return (

    <div className="Dashhead">
      <div> 
     <img alt="logo" src={Vegalogo} height='50px' width='75px' />
     </div>
     <div> 
     <DropdownButton id="dropdown-basic-button" title="tysonds99" id="dropBtn" variant="secondary">
       
    <Dropdown.Item> <Link to="/" style={{ textDecoration: 'none', color: '#000000'}}> Logout </Link> </Dropdown.Item>
    <Dropdown.Item > <Link to="/question" style={{ textDecoration: 'none', color: '#000000'}}> Edit portfolio details </Link></Dropdown.Item>
    </DropdownButton>
    </div>
    </div>
  );

}
export default Dashhead