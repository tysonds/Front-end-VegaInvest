import react, { useState } from 'react'
import './UserPWForm.css'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'

const UserPwForm = () => {

const [values, setValues] = useState(
    {
    userName: "",
    password: "",
    confirmpassword: "",
    passwordMatch: false,    
    }
);

const handleUsernameInputChange = (event) => {
    setValues({...values, userName: event.target.value})
}

const handlePasswordInputChange = (event) => {
    setValues({...values, password: event.target.value})
    
}
const handleConfirmPasswordInputChange = (event) => {
    setValues({...values, confirmpassword: event.target.value})
}
return (

    <div className="UserPWForm-container">
        <div className="UserPWFormHeader">
        Create a Username and Password
        </div>
        <div className="form">
        <form className="UserPW-form">
            <input
            onChange={handleUsernameInputChange}
            value={values.userName}
            className="form-field"
            placeholder="Enter 5-10 character Username"
            name="userName"
            />
            <br />
            <input
            onChange={handlePasswordInputChange}
            value={values.password}
            className="form-field"
            placeholder="Enter A 7+ character Password"
            name="password"
            />
            <br />
            <input
            onChange={handleConfirmPasswordInputChange}
            value={values.confirmpassword}
            className="form-field"
            placeholder="Confirm Password"
            name="confirmpassword"
            />
            <br />
            <Link to="/question" style={{ textDecoration: 'none', color: 'black' }}> 
            <Button variant="secondary" className="UserPWBtn"> Create New User </Button>
            </Link>
            </form>    
        </div>
    
    </div>
  );

}
export default UserPwForm