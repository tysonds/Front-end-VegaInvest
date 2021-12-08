import react, { useState, useEffect } from 'react'
import {DropdownButton, Dropdown, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Porthead.css';
import { Link, useNavigate, useLocation } from 'react-router-dom'

const Porthead = () => {
const email = useLocation().state.email;
const values = {
  email: email,
}
useEffect(() => {
    console.log(email)
},[]);

let navigate = useNavigate();
const NavDash = () => {
    navigate("../dashboard", 
        {
            state: {values}
          });
}
const NavQuest = () => {
    navigate("../editquestion", 
        {
            state: {email}
          });
}

return (

    <div className="Porthead">
      <div>  
      <Button onClick={NavDash} variant="secondary" id="DashBtn"> Dashboard </Button> 
     </div>
     <div> 
     <DropdownButton id="dropdown-basic-button" title={email} id="dropBtn" variant="secondary">
       
    <Dropdown.Item href="/"> Logout  </Dropdown.Item>
    <Dropdown.Item  onClick={NavQuest}>  Edit Portfolio Details </Dropdown.Item>
    </DropdownButton>
    </div>
    </div>
  );

}
export default Porthead