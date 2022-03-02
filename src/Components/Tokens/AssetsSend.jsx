import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./AssetsSend.css";
const AssetsSend = () => {
  return (
    <div>
      <div className="Send-Compon">
        <Link to="/TestPage">
          <i id="content-icon-01" className="fas fa-arrow-left Send-Icon "></i>{" "}
        </Link>
        <input
          type="text"
          placeholder="Search-Send "
          style={{ Color: "white" }}
        />
      </div>

      {/* first input code start here */}
      <div className="mainWrapper">
        {/* <h1 className="headerStyle1">Send</h1> */}
        <div className="innerSendContainer">
          <div className="RecipientAdd">
            <div className="Scaner-Input">
              <input
                type="text"
                placeholder="Recipient Address"
                className="Recipient-Input"
              />
              {/* <i
                className="material-icons Scaner-Icon"
                style={{ fontSize: "36px" }}
              >
                scanner
              </i> */}
              {/* <button className="Paste-Button">PASTE</button> */}
            </div>
          </div>

          <div className="assetsContainer"></div>
          <div className="assetsContainer">
            <div className="Recipient-Add">
              <label className="amountLabelStyle1">Asset:</label>
              <div className="borderContainer">
                <div>
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
              <label className="amountLabelStyle1">Amount:</label>
              <div className="amountContainer">
                <div class="unit-input__inputs">
                  <div class="unit-input__input-container">
                    <input
                      type="number"
                      class="unit-input__input"
                      placeholder="0"
                    />
                    <div class="unit-input__suffix">bnb</div>
                  </div>
                  {/* <div class="currency-input__conversion-component">
                    No Conversion Rate Available
                  </div> */}
                </div>
              </div>
            </div>
          </div>

          <div className="lastButtons">
            <Link to="/TestPage">
              <Button variant="outline-primary" className="firstButton">
                cancel
              </Button>
            </Link>
            <Button
              variant="outline-primary"
              className="secondButton"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              data-bs-whatever="@mdo"
            >
              Next
            </Button>
          </div>
        </div>
      </div>
      {/* second input code end here */}

      {/* popup box code start here */}
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body Popup-Data"> 
               <p>Transaction has been sent with hash:</p>  
               <p><b>0x000012345778gjjusgbwjis,</b>it will be mined shortly</p>          
            </div>
            <div className="modal-footer">
           <Link to="/BtcExchange">   <button type="button" className="btn btn-primary">
                View Details
              </button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AssetsSend;
