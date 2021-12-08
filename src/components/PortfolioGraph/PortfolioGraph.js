import Plotly from 'plotly.js-basic-dist';
import createPlotlyComponent from "react-plotly.js/factory";
import react, { useState, useEffect } from 'react';
import './PortfolioGraph.css';
import axios from 'axios';
import { Link, useNavigate, useLocation } from 'react-router-dom';
const Plot = createPlotlyComponent(Plotly);

const PortfolioGraph = () => {
  /*We need to fetch the email and portfolio value evolution from the back-end */
  const email=  useLocation().state.email;
  const [getMessage, setGetMessage] = useState({})
  useEffect(() => {
    var fullurl='http://127.0.0.1:5000/portfolios/pushParams/' + email;
    axios.get(fullurl).then(response => {
        console.log("SUCCESS")
        console.log(response.data);
        setGetMessage(response.data)
      }).catch(error => {
        console.log(error)
      })
  }, [])
    return (
  
        <div className="PortfolioGraph">
            <Plot className="Plot"
            data={[
                {
                /*We have specified that the time interval will always be the same */
                x: ['2018-08-31T00:00:00.000000000','2018-09-30T00:00:00.000000000','2018-10-31T00:00:00.000000000','2018-11-30T00:00:00.000000000','2018-12-31T00:00:00.000000000', '2019-01-31T00:00:00.000000000','2019-02-28T00:00:00.000000000' ,'2019-03-31T00:00:00.000000000','2019-04-30T00:00:00.000000000' ,'2019-05-31T00:00:00.000000000','2019-06-30T00:00:00.000000000', '2019-07-31T00:00:00.000000000','2019-08-31T00:00:00.000000000' ,'2019-09-30T00:00:00.000000000','2019-10-31T00:00:00.000000000' ,'2019-11-30T00:00:00.000000000','2019-12-31T00:00:00.000000000' ,'2020-01-31T00:00:00.000000000','2020-02-29T00:00:00.000000000' ,'2020-03-31T00:00:00.000000000','2020-04-30T00:00:00.000000000' ,'2020-05-31T00:00:00.000000000' ,'2020-06-30T00:00:00.000000000' ,'2020-07-31T00:00:00.000000000','2020-08-31T00:00:00.000000000' ,'2020-09-30T00:00:00.000000000','2020-10-31T00:00:00.000000000' ,'2020-11-30T00:00:00.000000000','2020-12-31T00:00:00.000000000'],
                y: getMessage.portval,
                hovertemplate:  '%{x}<br>' +'$%{y:.2f}' +'<extra></extra>',
                type: 'linear',
                line:{width:5,color:"#0645AD"},
                marker: { size: 7, color:'#ABDDFC', line:{width:1,color:'grey'} },
                fill: 'tozeroy'
                }]}
            layout={{ 
              margin:{l:0, r:0, b:30, t:40, pad:1},
                title:{text:"Portfolio Value: "+getMessage.lastportval},
                titlefont:{size:15,family:"Arial Black",color:'black'},
                width: '70%',
                height: 575,  
                paper_bgcolor:'white',
                plot_bgcolor:"white",    
                font_color:"white",
                xaxis: {  
                  tickfont:{color:'rgba(0,0,0,0)',size:16},   
                  showgrid:false,  
                  autorange: true,
                  rangeselector: {
                      y:-0.085,
                      x:0.35,
                      buttons: [
                      {
                        title:'up $300',
                        count: 1,
                        label: '1m',
                        step: 'month',
                        stepmode: 'backward',
                      },
                      {
                        count: 6,
                        label: '6m',
                        step: 'month',
                        stepmode: 'backward'
                      },
                      {
                        count: 1,
                        label: 'YTD' , 
                        step: 'year',
                        stepmode: 'todate',
                        count: 1,
                      }, 
                      {
                        count: 12,
                        label: '1y',
                        step: 'month',
                        stepmode: 'backward'
                      },
                      {step: 'all',
                        label: 'ALL',
                       stepmode:'backward'}
                    ]},
                    type:'date'
                },
                yaxis: {   
                  tickfont:{color:"rgba(0,0,0,0)",size:14},   
                  showgrid:false,
                  autorange: true,
                  range: [86.8700008333, 138.870004167],
                  tickprefix:"$",
                  tickformat:",.",
                  side:"right"
                }} }
            />
        </div>
      );
    
    }
    export default PortfolioGraph