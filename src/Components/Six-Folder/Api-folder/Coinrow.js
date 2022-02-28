import React from 'react'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import "./Coinrow.css";
const Coinrow = ({coin,index}) => {
    console.log(coin,index);
  
    let history=useNavigate();
    const reciveFunction =()=>{
      history("/ReciveQrcode")
     
     } 
     
  return (
         <tr>
         <td>{index}</td>
        <td>
        <img src={coin.image } alt={coin.name}  className='img-fluid me-3 Coin-Image'/>
        </td>
        <td>
        <span className='Coin-Name'>
            {coin.name}
            </span>
            
            <span className="ms-3 text-muted text-uppercase">{coin.symbol}</span>
        </td>
        <td>
            {coin.current_price}
        </td>
        <td>
            <Button onClick={()=>reciveFunction()} style={{width:"80px"}}>Receive</Button>
        </td>

      
    </tr> 
    
  )
}
export default Coinrow;