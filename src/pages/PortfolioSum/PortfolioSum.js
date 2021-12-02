import React, { useState } from 'react';
import './PortfolioSum.css';
import Porthead from '../../components/Porthead/Porthead';
import ETF_table from '../../components/ETF_table/ETF_table';
import Footer from '../../components/Footer/Footer';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'




const PortfolioSum = () => {

  return(
 <div className="Portsum"> 
<Porthead> </Porthead>
<div className="PortsumContainer"> 
<div className="PortsumTitle"> Portfolio Holdings </div>
<div> 
<ETF_table></ETF_table>
</div>
<div>
  <Link to="/editquestion" style={{ textDecoration: 'none', color: 'black' }}> 
  <Button variant="primary" id="Portsumbtn" > Edit Portolio Details  </Button>
  </Link> 
</div>
</div>
<Footer> </Footer>
  </div>
  );

}
export default PortfolioSum