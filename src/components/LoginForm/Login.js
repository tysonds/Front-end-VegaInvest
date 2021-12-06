import react, { useState,useEffect } from 'react'
import './Login.css'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import axios from 'axios';



const Login = () => {

const [values, setValues] = useState(
    {
    email: "",
    password: "",    
    }
);


const [error, setError] = useState("");

const [getPostMessage, setGetPostMessage] = useState({});

const handleEmailChange = (event) => {
    setValues({...values, email: event.target.value})
}
const handlePasswordInputChange = (event) => {
    setValues({...values, password: event.target.value})
}

let navigate = useNavigate();

useEffect(() => {
    if (getPostMessage.Status=='found') {
        navigate("../dashboard", 
        {
            state: {
              values
            }
          });
      }
    else {
        setError(getPostMessage.Status);

    }
        
}, [getPostMessage])


 const HandleLogin = () => {
    var fullurl='http://127.0.0.1:5000/users/login';
    axios.post(fullurl, values).then(response => {
        setGetPostMessage(response.data)
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
}



return (

    <div className="Login-container">
        <div className="LoginHeader"> 
        Welcome to VegaInvest!
        </div>
        <div className="form"> 
        <form className="Login-form">
            <input 
            onChange={handleEmailChange}
            type="email"
            value={values.email}
            className="form-field"
            placeholder="Enter Your Email"
            name="email"
            /> 
            <br />
            <input 
            onChange={handlePasswordInputChange}
            values={values.password}
            className="form-field"
            type="password"
            placeholder="Enter Your Password"
            name="password"
            />
            <br />
        <div id="errorMessage"> {error} </div>
        <br />
        {/* <Link to="/dashboard" style={{ textDecoration: 'none', color: 'black' }}> */}
        <Button onClick={HandleLogin} variant="secondary" className="LoginBtn" id="BtnLogin"> Log In </Button>
        <br />
        {/* </Link> */}
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