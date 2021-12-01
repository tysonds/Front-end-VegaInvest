import Plotly from 'plotly.js-basic-dist';
import createPlotlyComponent from "react-plotly.js/factory";
const Plot = createPlotlyComponent(Plotly);


const PortfolioGraph = () => {

    return (
    
        <div className="PortfolioGraph">

            <Plot
            data={[
                {
                x: ['2012-09-01', '2016-09-02', '2018-04-03','2018-09-03'],
                y: [202, 500, 303, 300],
                hovertemplate:  '%{x}<br>' +'$%{y:.2f}' +'<extra></extra>',
                type: 'linear',
                line:{width:5,color:"#0645AD"},
                marker: { size: 9, color:'#ABDDFC', line:{width:1,color:'grey'} },
                fill: 'tozeroy'
                }]}
            layout={ 
                {    
                paper_bgcolor:'rgba(0,0,0,0)',
                plot_bgcolor:"white",    
                title: 'Portfolio Graph',
                font_color:"white",
                xaxis: {
                  tickfont:{color:"white",size:16},  
                  linecolor:"#BCCCDC", 
                  showgrid:false,  
                  autorange: true,
                  range: ["2014-09-01", "2018-11-01"],
                  rangeselector: {
                      buttons: [
                      {
                        count: 1,
                        label: '1m',
                        step: 'month',
                        stepmode: 'backward'
                      },
                      {
                        count: 6,
                        label: '6m',
                        step: 'month',
                        stepmode: 'backward'
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
                  tickfont:{color:"white",size:16},
                  linecolor:"#BCCCDC",  
                  gridcolor:"black", 
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