import React from "react";
// import "./BtcExchange.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
const BtcExchange = () => {
  return (
    <div className="Main-BtcExchange-Container">

<div className="Send-Compon">
        <Link to="/TestPage" ><i id="content-icon-01" className="fas fa-arrow-left Send-Icon "></i></Link>
        <input
          type="text"
          placeholder="Sent"
          style={{ color: "white" }} />        
      </div>
      <div className="BtcExchange-Container">
        <div className="Header-Send-Btc">
          {/* <i className="fa fa-upload Send-Icon"></i> */}
          <h1>
            -100 USDT <small>($100.03)</small>
          </h1>
        </div>
        <hr />

        <div className="Recipient-Btc-Code">
          <h3>Recipient</h3>
          <p>0xb4f73c5fa7928a02bdc6286b3976ca4db505cccb</p>
        </div>
        <hr />

        <div className="NetWork-Fee">
          <h3>Network Fee</h3>
          <p>0.00027086 BNB ($0.11)</p>
        </div>
        <hr />

        <div className="Confirmation">
          <h3>Confirmations</h3>
          <p>3347220</p>
        </div>
        <hr />

        <div className="Nonce">
          <h3>Nonce</h3>
          <p>10</p>
        </div>
        <hr />

        <div className="Transaction-time">
          <h3>Transaction time</h3>
          <p>November 9,2021 20:28:19</p>
        </div>
        <hr />

        <div className="Details-Button">
          <h6>More Details</h6>
        </div>
      </div>
      <div>
     <Link to="/AssetsSend">  <Button>Cancel</Button></Link> 
      </div>
    </div>
  );
};

export default BtcExchange;
