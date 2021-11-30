import Plotly from 'plotly.js-basic-dist';
import createPlotlyComponent from "react-plotly.js/factory";
const Plot = createPlotlyComponent(Plotly);

const PortfolioGraph = () => {

    return (
    
        <div className="PortfolioGraph">
            <Plot
            data={[
                {
                x: ['2021/09/01', '2021/09/02', '2021/09/03'],
                y: [202, 206, 203],
                type: 'linear',
                }]}
            layout={ {width: 450, height: 400, title: 'Portfolio'} }
            />
        </div>
      );
    
    }
    export default PortfolioGraph