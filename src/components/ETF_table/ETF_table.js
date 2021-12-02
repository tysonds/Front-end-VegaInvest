
import react, { useState } from 'react'
import * as Reactbootstrap from "react-bootstrap"

const ETF = [
    {ticker: "BBC", Value:"$5430.98", Shares:"2", Weight: "18.29%"},
    {ticker: "GAMR", Value:"$1000.98", Shares:"3", Weight: "2.29%"},
    {ticker: "QLNC", Value:"$1300.98", Shares:"4", Weight: "2.00%"},
    {ticker: "GAMR", Value:"$1100.98", Shares:"14", Weight: "2.1%"}
]

const ETF_table = () => { 

    const ETF_render=(ETF,index)=> {
    return(
        <tr key={index}>
            <td>{ETF.ticker}</td>
            <td>{ETF.Value}</td>
            <td>{ETF.Shares}</td>
            <td>{ETF.Weight}</td>
        </tr>
    );
    }

    return(
        <div className="Table">
            <Reactbootstrap.Table striped bordered hover>
                <thread>
                    <tr>
                        <th>Ticker</th>
                        <th>Value</th>
                        <th>Shares</th>
                        <th>Weight</th>
                    </tr>
                </thread>
            </Reactbootstrap.Table>

        </div>





    );
}
export default ETF_table