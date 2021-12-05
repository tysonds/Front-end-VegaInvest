import react, { useState ,useEffect} from 'react'
import './userqone.css';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import axios from 'axios'

const Userqone = (values) => {
  const value=  useLocation().state.values.email
  const [pvalues, setpvalues] = useState(
    {
    email: value,
    amount_invest: "",
    goal: "",
    horizon: "",
    risk_appetite: "",   
    }
);


const [getPostMessage, setGetPostMessage] = useState({})

const [Errormsg,setErrormsg] = useState("")

const handleGoalChange = (event) => {
    setpvalues({...pvalues, goal: event.target.value})
}
const handleHorizonChange = (event) => {
    setpvalues({...pvalues, horizon: event.target.value})
}
const handleAmountInvestChange = (event) => {
    setpvalues({...pvalues, amount_invest: event.target.value})
}

const onChangeMC = (event) => {
  setpvalues({...pvalues, risk_appetite: event.target.value});

}

let navigate = useNavigate();

useEffect(() => {
    if (getPostMessage.Status=='portfolio created!') {
        console.log("inside");
        navigate("../dashboard", 
        {
            state: {
              values
            }
          });
      }
    else {
        setErrormsg(getPostMessage.Status);

    }
        
}, [getPostMessage])

const HandlePortfolio = () => {
  var fullurl='http://127.0.0.1:5000/portfolios/new';
  axios.post(fullurl, pvalues).then(response => {
      setGetPostMessage(response.data)
      console.log(response.data)
    }).catch(error => {
      console.log(error)
    })
  }
return (
  <form>
 <div className="mccontainer"> 
 <div className="question"> 
 1. What is your risk tolerance for this portfolio?
 </div> 
<div className="rad" onChange={onChangeMC}>
        <input type="radio" value="high" name="risk" /> High, bring it on!
        <br />
        <input type="radio" value="medium" name="risk" /> Moderate, some risk for some reward.
        <br />
        <input type="radio" value="low" name="risk" /> Low, losing money makes me squirm.
        <br /> 
      </div>


<div className="question">
   2. How much do you have to invest? 
    </div>
  <input
            onChange={handleAmountInvestChange}
            value={pvalues.amount_invest}
            className="formfield"
            placeholder=  "Enter the Amount in $"
            name="amount_invest"
  />
   <div className="question">
  3. What is your investment goal?
  </div>
 <input
            onChange={handleGoalChange}
            value={pvalues.goal}
            className="formfield"
            placeholder="Enter the Goal in $" 
            name="goal"
  />
  <div className="question">
    4. What is your investment horizon?
    </div>
    <input
            onChange={handleHorizonChange}
            value={pvalues.horizon}
            className="formfield"
            placeholder="Enter the horizon in years"
            name="horizon"
  />
  <Link to="/" style={{ textDecoration: 'none' }}> 
<Button onClick= {HandlePortfolio} variant="secondary" className="pBtn"> Create Portfolio </Button>
<p>
</p>
</Link>
</div>
 </form>

  );

}
export default Userqone