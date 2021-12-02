
import react, { useState } from 'react'
import * as ReactBootStrap from "react-bootstrap"
import './ETF_table.css'

const ETF_table = () => { 
    
const ETF = [
    {ticker: "BBC", value:"$5430.98", shares:"2", weight: "18.29%"},
    {ticker: "GAMR", value:"$1000.98", shares:"3", weight: "2.29%"},
    {ticker: "QLNC", value:"$1300.98", shares:"4", weight: "2.00%"},
    {ticker: "SPY", value:"$1100.98", shares:"14", weight: "2.1%"},
]

    const renderETF=(ETF,index)=> {
    return(
        <tr key={index}>
            <td>{ETF.ticker}</td>
            <td>{ETF.value}</td>
            <td>{ETF.shares}</td>
            <td>{ETF.weight}</td>
        </tr>
        )
    }

    return(
            <div className="Dashrowcontain">
            <div className="Dashcolcontain">
            <div className="tb">
            <ReactBootStrap.Table striped bordered hover>
            <thead>
                <tr>
                <th>Ticker</th>
                <th>Value</th>
                <th>Shares</th>
                <th>Weight</th>
                </tr>
            </thead>
            <tbody>
                {ETF.map(renderETF)}
            </tbody>
            </ReactBootStrap.Table> </div> </div> </div>
            );
}
export default ETF_table;
