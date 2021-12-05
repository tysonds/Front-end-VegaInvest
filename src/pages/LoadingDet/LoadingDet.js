import './LoadingDet.css';
import Dashhead from '../../components/Dashhead/Dashhead.js'
// import Plot from "react-plotly.js";
import Footer from '../../components/Footer/Footer';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


const LoadingDet= () => {

  return(
 <div className="LoadingDetbd">  
   <div> 
     <Dashhead> </Dashhead>
   </div>
   <div className="mainLoadingMSG">
      <div>
          Your Portfolio Details Will be Available Shortly. Please Check in a Few Minutes.
      </div>
   </div>
   <div className="mainLoadingMSG">
         <Box sx={{ display: 'flex'}}>
      <CircularProgress size="200px" />
    </Box>
   </div>

    <div>
   <Footer> </Footer>
   </div>
  </div>
  );

}
export default LoadingDet