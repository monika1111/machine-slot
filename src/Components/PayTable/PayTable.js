import React from 'react';
import {prizeRows} from '../../lib/Constants'
import Paper from "@material-ui/core/Paper";

const PayTable = ({winPrizes}) => {
    return (
        <Paper elevation={15} style={{padding : '1rem', margin : "2rem"}}>
            <div><h2> Pay Table </h2></div>
            <table style={{borderCollapse : 'collapse'}}>
                <tbody>
                {
                    prizeRows.map((row, i) => {

                        const isWinLine = winPrizes.includes(row.prize);

                        return <tr key={i} style={{
                            backgroundColor : isWinLine ? "red" : 'transparent',
                            opacity         : isWinLine ? 0.5 : 1
                        }}>
                            <td>
                                <div className='symbol'><img src={row.image[2]} alt=""/></div>
                            </td>
                            <td>
                                <div className='symbol'><img src={row.image[1]} alt=""/></div>
                            </td>
                            <td>
                                <div className='symbol'><img src={row.image[0]} alt=""/></div>
                            </td>
                            <td>
                                <div> {row.name} <b> {row.prize} </b></div>
                            </td>
                        </tr>

                    })
                }
                </tbody>
            </table>
        </Paper>

    );
}

export default PayTable;
