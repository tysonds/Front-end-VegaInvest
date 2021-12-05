import react, { useState } from 'react'
import Vegalogo from './VegaLogoCon.jpeg'
import './Dashhead.css'
import {DropdownButton, Dropdown} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, useNavigate, useLocation } from 'react-router-dom'
const Dashhead = () => {
  const values = useLocation().state.values.email
return (

    <div className="Dashhead">
      <div> 
     <img alt="logo" src={Vegalogo} height='50px' width='75px' />
     </div>
     <div> 
     <DropdownButton id="dropdown-basic-button" title={values} id="dropBtn" variant="secondary">
       
    <Dropdown.Item href="/"> Logout  </Dropdown.Item>
    <Dropdown.Item  href="/editquestion">  Edit Portfolio Details </Dropdown.Item>
    </DropdownButton>
    </div>
    </div>
  );

}
export default Dashhead