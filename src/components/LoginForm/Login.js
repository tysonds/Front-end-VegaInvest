import react, { useState } from 'react'
import './Login.css'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'

const Login = () => {

const [values, setValues] = useState(
    {
    userName: "",
    password: "",    
    }
);

const handleUsernameInputChange = (event) => {
    setValues({...values, userName: event.target.value})
}
const handlePasswordInputChange = (event) => {
    setValues({...values, password: event.target.value})
}
return (

    <div className="Login-container">
        <div className="LoginHeader"> 
        Welcome to VegaInvest!
        </div>
        <div className="form"> 
        <form className="Login-form">
            <input 
            onChange={handleUsernameInputChange}
            value={values.userName}
            className="form-field"
            placeholder="Enter Your Username"
            name="userName"
            /> 
            <br />
            <input 
            onChange={handlePasswordInputChange}
            values={values.password}
            className="form-field"
            placeholder="Enter Your Password"
            name="password"
            />
            <br />
        <a href="">Forgot Password? </a>
        <br />
        <Button variant="secondary" className="LoginBtn" id="BtnLogin"> Log In </Button>
        <br />
        <Link to="/createuser" style={{ textDecoration: 'none', color: 'black' }}> 
        <Button variant="dark" className="LoginBtn" id="SignUp"> 
        Sign Up 
        </Button>
        </Link> 
        
        </form>
        </div>
    </div>
  );

}
export default Login