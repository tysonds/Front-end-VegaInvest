
import react, { useState } from 'react'
import * as ReactBootStrap from "react-bootstrap"
import './ETF_table.css'

const ETF_table = () => { 
    
const ETF = [
    {ticker: "BBC", description:"Tracks the LifeSci Biotechnology Clinical Trials Index, which tracks the performance of select clinical trials stage biotechnology companies.",value:"$3679.20", weight: "18.2%"},
    {ticker: "GAMR", description:"Tracks an equity index of global firms that support, create or use video games. Stocks are assigned to pure-play, non-pure-play or conglomerate baskets, and weighted equally within each.", value:"$3649.60", weight: "18.0%"},
    {ticker: "QLNC", description:"Tracks the First Trust NASDAQ Clean Edge Green Energy (alternative energy) Index.", value:"$2824.08", weight: "13.9%"},
    {ticker: "SPY", description:"Tracks the S&P500 stock market index of large and mid-cap US stocks.", value:"$585.47", weight: "8.7%"},
    {ticker: "ERTH", description:"Fund that seeks to track the investment results of MSCI Global Environment Select Index. The Fund generally will invest at least 90% of its total assets in the securities that comprise the Underlying Index. The Underlying Index is designed to maximize exposure to six themes that impact the environment.", value:"964.15", weight: "4.8%"},
    {ticker: "IMCG", description:"Fund that seeks to track the investment results of an index composed of mid-capitalization U.S. equities that exhibit growth characteristics.", value:"$716.19", weight: "3.5%"},
    {ticker: "ITOT", description:"Tracks the S&P500 stock market index of large and mid-cap US stocks", value:"$1756.41", weight: "8.7%"},
    {ticker: "SPY", description:"Tracks the S&P500 stock market index of large and mid-cap US stocks", value:"$1100.98", weight: "2.1%"},
    {ticker: "SPY", description:"Tracks the S&P500 stock market index of large and mid-cap US stocks", value:"$1100.98", weight: "2.1%"},
    {ticker: "SPY", description:"Tracks the S&P500 stock market index of large and mid-cap US stocks", value:"$1100.98", weight: "2.1%"},
    {ticker: "SPY", description:"Tracks the S&P500 stock market index of large and mid-cap US stocks", value:"$1100.98", weight: "2.1%"},
    {ticker: "SPY", description:"Tracks the S&P500 stock market index of large and mid-cap US stocks", value:"$1100.98", weight: "2.1%"},
    {ticker: "SPY", description:"Tracks the S&P500 stock market index of large and mid-cap US stocks",value:"$1100.98", weight: "2.1%"},
    {ticker: "SPY", description:"Tracks the S&P500 stock market index of large and mid-cap US stocks", value:"$1100.98", weight: "2.1%"},
    {ticker: "SPY", description:"Tracks the S&P500 stock market index of large and mid-cap US stocks", value:"$1100.98", weight: "2.1%"},

]

    const renderETF=(ETF,index)=> {
    return(
        <tr key={index}>
            <td>{ETF.ticker}</td>
            <td>{ETF.description}</td>
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
