import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./Coinrow.css";
const Coinrow = ({coin,index}) => {
    console.log(coin,index);
    let history=useNavigate();
    const ReceiveFunction =()=>{
      history("/ReciveQrcode")
     } 
  return (
         <tr>
         <td>{index}</td>
        <td>
        <img src={coin.image } alt={coin.name} onClick={()=>ReceiveFunction()} className='img-fluid me-3 Coin-Image'/>
        </td>
        <td>
        <span className='Coin-Name' onClick={()=>ReceiveFunction()}>
            {coin.name} 
            </span>
            
            <span className="ms-3 text-muted text-uppercase">{coin.symbol}</span>
        </td>
        <td>
            {coin.current_price}
        </td>   
    </tr> 
  )
}
export default Coinrow;