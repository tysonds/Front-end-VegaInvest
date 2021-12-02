
import react, { useState } from 'react'
import * as ReactBootStrap from "react-bootstrap"
import './ETF_table.css'

const ETF_table = () => { 
    
const ETF = [
    {ticker: "BBC", description:"Tracks the S&P500 stock market index of large and mid-cap US stocks",shares:"2", value:"$5430.98", weight: "18.29%"},
    {ticker: "GAMR", description:"Tracks the S&P500 stock market index of large and mid-cap US stocks", shares:"3",value:"$1000.98", weight: "2.29%"},
    {ticker: "QLNC", description:"Tracks the S&P500 stock market index of large and mid-cap US stocks", shares:"4",value:"$1300.98", weight: "2.00%"},
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
            <ReactBootStrap.Table striped bordered hover variant="dark">
            <thead>
                <tr>
                <th>Ticker</th>
                <th>Description</th>
                <th>Value</th>
                <th>Shares</th>
                <th>% of Account</th>
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
