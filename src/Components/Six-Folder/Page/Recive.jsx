import React from "react";
import "./Receive.css";
import {Link} from "react-router-dom"
const Recive = () => {
  return (
    <div>

    {/* back arrow code here */}
     <div className="Send-Compon">    
        <Link to="/TestPage" ><i id="content-icon-01" className="fas fa-arrow-left Send-Icon "></i></Link>
        <input
          type="text"
          placeholder="Search-Recive "
          style={{ color: "white" }}
        />
      </div>

      {/* crypto list code here */}
      <div className="Bitcoin-Container">
        <i  class="fab fa-btc Bitcoin-Icon"></i>
        <div className="Bitcoin-Content">
           <b>Bitcoin</b>
          <p>$43,110.57+6.18%</p>
        </div>
         
         <div className="Bitcoin-Amount">
         <big>0 BTC</big>
         </div>       
      </div><hr/>


        <div className="Ethereum-Container">
        <i  class="fab fa-ethereum Ethereum-Icon"></i>
        <div className="Ethereum-Content">
           <b>Ethereum</b>
          <p>$3,153.04+5.36%</p>
        </div>
         
         <div className="Ethereum-Amount">
         <big>0 ETC</big>
         </div>       
      </div><hr/>
     

     {/* green bitcoin code start here */}

     <div className="BitcoinCash-Container">
        <i  class="fab fa-btc BitcoinCash-Icon"></i>
        <div className="BitcoinCash-Content">
           <b>Bitcoin Cash</b>
          <p>$3,153.04+5.36%</p>
        </div>
         
         <div className="BitcoinCash">
         <big>0 BCH</big>
         </div>       
      </div><hr/>

     {/* bnb coin code start here */}
      <div className="Bnb-Container">
        <img src="./Images/smartchain.png.jpg" alt="" height={50} width={50} className="Bnb-Icon"/>
        <div className="Bnb-Content">
           <b>BNB</b>
          <p>$3,153.04+5.36%</p>
        </div>        
         <div className="Bnb-Amount">
         <big>0 BNB</big>
         </div>       
      </div><hr/>  

      {/* smart chain coin code start here */} 
      <div className="SmartChain-Container">
        <img src="./Images/smartchain.png.jpg" alt="" height={50} width={50} className="SmartChain-Icon"/>
        <div className="SmartChain-Content">
           <b>Smart Chain</b>
          <p>$3,153.04+5.36%</p>
        </div>        
         <div className="SmartChain-Amount">
         <big>0 BNB</big>
         </div>       
      </div><hr/> 

      {/* ------------Mayur QR Code------------ */}
      <div className="qrContainer">
        <div className="qr-box">
          <img src="./Images/qrcode.png" alt="" height={150} width={150} />
          <p className="addStyle">
          0x0cC9fef6348D0F99D4e1004e4d5460e40E631fd5
          </p>
        </div>
       
      </div>
      <button className="copybutton"><i class="fa fa-clone" aria-hidden="true"></i></button>
      <button className="copybutton"><i class="fa fa-share-alt" aria-hidden="true"></i></button>

    </div>
  );
};
export default Recive;
