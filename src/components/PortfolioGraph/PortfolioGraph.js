import Plotly from 'plotly.js-basic-dist';
import createPlotlyComponent from "react-plotly.js/factory";
const Plot = createPlotlyComponent(Plotly);


const PortfolioGraph = () => {

    return (
    
        <div className="PortfolioGraph">

            <Plot
            data={[
                {
                x: ['2012-09-01','2013-09-01','2014-09-01','2015-09-01', '2016-09-01', '2017-09-02', '2018-04-03','2019-09-03','2020-09-04','2021-09-03'],
                y: [100, 300, 500, 600, 300,400,700,500,700,1000],
                hovertemplate:  '%{x}<br>' +'$%{y:.2f}' +'<extra></extra>',
                type: 'linear',
                line:{width:5,color:"#0645AD"},
                marker: { size: 7, color:'#ABDDFC', line:{width:1,color:'grey'} },
                fill: 'tozeroy'
                }]}
            layout={{ 
                title:{text:"Total of all Portfolio Values: $1000"},
                titlefont:{size:20,font_family:"Montserrat",color:'black'},
                width: 800,
                height: 500,  
                paper_bgcolor:'white',
                plot_bgcolor:"white",    
                font_color:"white",
                xaxis: {
                  linecolor: 'black',
                  linewidth:3,
                  mirror: true,  
                  tickfont:{color:'rgba(0,0,0,0)',size:16},   
                  showgrid:false,  
                  autorange: true,
                  range: ["2014-09-01", "2018-11-01"],
                  rangeselector: {
                      y:-0.1,
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
                       stepmode:'backward'}
                    ]},
                    type:'date'
                },
                yaxis: {  
                  linecolor: 'black',
                  linewidth: 5,
                  mirror: true,  
                  tickfont:{color:"black",size:14},   
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