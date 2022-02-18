import React from "react";
import "./Token.css";

const Token = () => {
  return (
    <div>
      <div className="Bitcoin-Container">
        <i class="fab fa-btc Bitcoin-Icon"></i>
        <div className="Bitcoin-Content">
          <b>Bitcoin</b>
          <p>$43,110.57+6.18%</p>
        </div>

        <div className="Bitcoin-Amount">
          <big>0 BTC</big>
        </div>
      </div>
      <hr />

      <div className="Ethereum-Container">
        <i class="fab fa-ethereum Ethereum-Icon"></i>
        <div className="Ethereum-Content">
          <b>Ethereum</b>
          <p>$3,153.04+5.36%</p>
        </div>

        <div className="Ethereum-Amount">
          <big>0 ETC</big>
        </div>
      </div>
      <hr />

      {/* green bitcoin code start here */}

      <div className="BitcoinCash-Container">
        <i class="fab fa-btc BitcoinCash-Icon"></i>
        <div className="BitcoinCash-Content">
          <b>Bitcoin Cash</b>
          <p>$3,153.04+5.36%</p>
        </div>

        <div className="BitcoinCash">
          <big>0 BCH</big>
        </div>
      </div>
      <hr />

      {/* bnb coin code start here */}
      <div className="Bnb-Container">
        <img
          src="./Images/smartchain.png.jpg"
          alt=""
          height={50}
          width={50}
          className="Bnb-Icon"
        />
        <div className="Bnb-Content">
          <b>BNB</b>
          <p>$3,153.04+5.36%</p>
        </div>
        <div className="Bnb-Amount">
          <big>0 BNB</big>
        </div>
      </div>
      <hr />

      {/* smart chain coin code start here */}
      <div className="SmartChain-Container">
        <img
          src="./Images/smartchain.png.jpg"
          alt=""
          height={50}
          width={50}
          className="SmartChain-Icon"
        />
        <div className="SmartChain-Content">
          <b>Smart Chain</b>
          <p>$3,153.04+5.36%</p>
        </div>
        <div className="SmartChain-Amount">
          <big>0 BNB</big>
        </div>
      </div>
      <hr />
    </div>
  );
};
export default Token;
