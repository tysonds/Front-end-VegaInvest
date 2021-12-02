
import react, { useState } from 'react'
import * as ReactBootStrap from "react-bootstrap"
import './ETF_table.css'

const ETF_table = () => { 
    
const ETF = [
    {ticker: "BBC", description:"Tracks the LifeSci Biotechnology Clinical Trials Index, which tracks the performance of select clinical trials stage biotechnology companies.",shares:"2", value:"$5430.98", weight: "18.29%"},
    {ticker: "GAMR", description:"Tracks an equity index of global firms that support, create or use video games. Stocks are assigned to pure-play, non-pure-play or conglomerate baskets, and weighted equally within each.", shares:"3",value:"$1000.98", weight: "2.29%"},
    {ticker: "QLNC", description:"Tracks the First Trust NASDAQ Clean Edge Green Energy (alternative energy) Index.", shares:"4",value:"$1300.98", weight: "2.00%"},
    {ticker: "SPY", description:"Tracks the S&P500 stock market index of large and mid-cap US stocks.", shares:"14",value:"$1100.98", weight: "2.1%"},
    {ticker: "ERTH", description:"Fund that invests in small-, mid- and large-cap companies. Companies are eligible for inclusion in the index if they derive 75% or more of their cumulative revenue from six areas: alternative energy, energy efficiency, green building, sustainable water, pollution prevention and control, and sustainable agriculture.", shares:"14",value:"$1100.98", weight: "2.1%"},
    {ticker: "IMCG", description:"seeks to track the investment results of an index composed of mid-capitalization U.S. equities that exhibit growth characteristics.", shares:"14",value:"$1100.98", weight: "2.1%"},
    {ticker: "ITOT", description:"Tracks the S&P500 stock market index of large and mid-cap US stocks", shares:"14",value:"$1100.98", weight: "2.1%"},
    {ticker: "SPY", description:"Tracks the S&P500 stock market index of large and mid-cap US stocks", shares:"14",value:"$1100.98", weight: "2.1%"},
    {ticker: "SPY", description:"Tracks the S&P500 stock market index of large and mid-cap US stocks", shares:"14",value:"$1100.98", weight: "2.1%"},
    {ticker: "SPY", description:"Tracks the S&P500 stock market index of large and mid-cap US stocks", shares:"14",value:"$1100.98", weight: "2.1%"},
    {ticker: "SPY", description:"Tracks the S&P500 stock market index of large and mid-cap US stocks", shares:"14",value:"$1100.98", weight: "2.1%"},
    {ticker: "SPY", description:"Tracks the S&P500 stock market index of large and mid-cap US stocks", shares:"14",value:"$1100.98", weight: "2.1%"},
    {ticker: "SPY", description:"Tracks the S&P500 stock market index of large and mid-cap US stocks", shares:"14",value:"$1100.98", weight: "2.1%"},
    {ticker: "SPY", description:"Tracks the S&P500 stock market index of large and mid-cap US stocks", shares:"14",value:"$1100.98", weight: "2.1%"},
    {ticker: "SPY", description:"Tracks the S&P500 stock market index of large and mid-cap US stocks", shares:"14",value:"$1100.98", weight: "2.1%"},

]

    const renderETF=(ETF,index)=> {
    return(
        <tr key={index}>
            <td>{ETF.ticker}</td>
            <td>{ETF.description}</td>
            <td>{ETF.shares}</td>
            <td>{ETF.value}</td>
            <td>{ETF.weight}</td>
        </tr>
        )
    }

    return(
            <div className="rowcontain">
            <div className="colcontain">
            <div className="tb">
            <div className="table">
            <ReactBootStrap.Table style={{background: "#F1F1F1"}}>
            <thead>
                <tr>
                <th>Ticker</th>
                <th>Description</th>
                <th>Shares</th>
                <th>Value</th>
                <th>% of Portfolio </th>
                </tr>
            </thead>
            <tbody>
                {ETF.map(renderETF)}
            </tbody>
            </ReactBootStrap.Table> 
            </div> 
            </div> 
            </div>
            </div> 
    
            );
}
export default ETF_table;
