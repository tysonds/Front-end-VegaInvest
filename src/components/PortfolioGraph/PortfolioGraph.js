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
                type: 'linear',
                }]}
            layout={ 
                {title: 'Portfolio Graph',
                xaxis: {
                  autorange: true,
                  range: ["2019-09-01", "2018-11-01"],
                  rangeselector: {buttons: [
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
                      {step: 'all'}
                    ]},
                },
                yaxis: {
                  autorange: true,
                  range: [86.8700008333, 138.870004167],
                  type: 'linear'
                }} }
            />
        </div>
      );
    
    }
    export default PortfolioGraph