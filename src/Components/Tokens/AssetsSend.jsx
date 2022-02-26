
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
// import "./Navigat.css";
import "./AssetsSend.css"
const AssetsSend = () => {

  const handleNextButton = () => {
    alert("Congratulation")
  }
  return (
    <div>


      <div className="Send-Compon">
        <Link to="/TestPage">
          <i id="content-icon-01" className="fas fa-arrow-left Send-Icon "></i> </Link>
        <input
          type="text"
          placeholder="Search-Send "
          style={{ Color: "white" }}
        />

      </div>

      {/* first input code start here */}
      <h1>Send</h1>
      <div className="RecipientAdd">
        <div className="Scaner-Input">
          <input
            type="text"
            placeholder="Recipient Address"
            className="Recipient-Input"
          />
          <i
            className="material-icons Scaner-Icon"
            style={{ fontSize: "36px" }}
          >
            scanner
          </i>
          <button className="Paste-Button">PASTE</button>
        </div>
      </div>

      <div className="assetsContainer">
        
      </div>
      <div className="assetsContainer">

        <div className="Recipient-Add">
          <label className="amountLabelStyle">Asset:</label>
          <div className="borderContainer">
            <div >
              <div className="BitcoinStyle">
                <i class="fab fa-btc Bitcoin-Icon"></i>
              </div>
            </div>
            <div className="innerContainer">
              <label className="labelStyle">bnb</label>
              <label className="labelBalanceStyle">Balance: 0 BNB</label>
            </div>
          </div>
        </div>
      </div>



      <div className="assetsContainer">

        <div className="Recipient-Add">
          <label className="amountLabelStyle">Amount:</label>
          <div className="amountContainer">
            <div class="unit-input__inputs">
              <div class="unit-input__input-container">
                <input type="number"  class="unit-input__input" placeholder="0" />
                <div class="unit-input__suffix">bnb</div>
              </div>
              <div class="currency-input__conversion-component">No Conversion Rate Available</div>
            </div>

          </div>

         
        </div>
      </div>
     
      <div className="lastButtons">
      <Link to='/TestPage'> <Button variant="outline-primary" className="firstButton">
          cancel
        </Button>
        </Link>
        <Button variant="primary" className="secondButton" onClick={() => handleNextButton()} >
          Next
        </Button>

      </div>
      {/* second input code end here */}
    </div>
  );
};
export default AssetsSend;

