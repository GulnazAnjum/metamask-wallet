import React from 'react'

const Coinrow = ({coin,index}) => {
    console.log(coin,index);
  return (
         <tr>
         <td>{index}</td>
        <td>
        <img src={coin.image} alt={coin.name} style={{width:'5%',marginLeft:'-15rem',}} className='img-fluid me-4'/>
        <span>
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