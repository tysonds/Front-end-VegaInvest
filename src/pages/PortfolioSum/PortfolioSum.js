import React, { useState } from 'react';
import './PortfolioSum.css';
import Porthead from '../../components/Porthead/Porthead';
import ETF_table from '../../components/ETF_table/ETF_table';
import Footer from '../../components/Footer/Footer';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate, useLocation } from 'react-router-dom'


const PortfolioSum = () => {
const email = useLocation().state.email;
let navigate = useNavigate();
const NavQuest = () => {
    navigate("../editquestion", 
        {
            state: {email}
          });
}

  return(
 <div className="Portsum"> 
<Porthead> </Porthead>
<div className="PortsumContainer"> 
<div className="PortsumTitle"> Portfolio Holdings </div>
<div> 
<ETF_table></ETF_table>
</div>
<div>
  <Button onClick={NavQuest} variant="primary" id="Portsumbtn" > Edit Portolio Details  </Button>
</div>
</div>
<Footer> </Footer>
  </div>
  );

}
export default PortfolioSum