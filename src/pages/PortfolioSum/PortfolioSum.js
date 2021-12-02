import React, { useState } from 'react';
import './PortfolioSum.css';
import Porthead from '../../components/Porthead/Porthead';
import ETF_table from '../../components/ETF_table/ETF_table';
import Footer from '../../components/Footer/Footer';




const PortfolioSum = () => {

  return(
 <div className="Portsum"> 
<Porthead> </Porthead>
      <ETF_table></ETF_table>
  </div>
  );

}
export default PortfolioSum