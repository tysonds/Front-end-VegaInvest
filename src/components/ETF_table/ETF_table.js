
import react, { useState } from 'react'
import * as ReactBootStrap from "react-bootstrap"
import './ETF_table.css'

const ETF_table = () => { 
    
const ETF = [
    {Ticker: "BBC", Value:"$5430.98", Shares:"2", Weight: "18.29%"},
    {Ticker: "GAMR", Value:"$1000.98", Shares:"3", Weight: "2.29%"},
    {Ticker: "QLNC", Value:"$1300.98", Shares:"4", Weight: "2.00%"},
    {Ticker: "GAMR", Value:"$1100.98", Shares:"14", Weight: "2.1%"},
]

    const ETF_render=(ETF,index)=> {
    return(
        <tr key={index}>
            <td>{ETF.Ticker}</td>
            <td>{ETF.Value}</td>
            <td>{ETF.Shares}</td>
            <td>{ETF.Weight}</td>
        </tr>
        )
    }

    return(
            <div className="tablefit">
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
                <tr>
                {ETF.map(ETF_render)}
                </tr>
            </tbody>
            </ReactBootStrap.Table> </div>
            );
}
export default ETF_table;
