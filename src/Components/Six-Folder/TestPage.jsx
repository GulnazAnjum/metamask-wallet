import React from "react";
import { Link } from "react-router-dom";
import Token from "../Tokens/Token";
import NFts from "../Tokens/NFts";
import TokensNft from "../Tokens/TokensNft";
// import {Routing} from "../Tokens/Routing"

import "./MultiCoin.css";

const TestPage = () => {
  return (
    <>
      <div>
        <div className="Main-Icon-Container">
          <div className="Main-Header-Icons">
            <div className="Notification-Icon-Container">
              <i className="material-icons Notification-Icon">notifications</i>
            </div>

            <h1 className="Money-Counter">$0.000</h1>

            <div class="dropdown">
              <div className="Setting-Icon-Container">
                <i class="fas fa-sliders-h Setting-Icon"></i>
              </div>
              <div class="dropdown-content">
                <a href="/createaccount">Create Account</a>
                <a href="/importaccount">import Account</a>
                <a href="/settings">Settings</a>
              </div>
            </div>
          </div>

          <div className="Link-Icons-Container">
            <h2 className="Icon-Header">Multi-Coin Wallet 1</h2>

            <div className="Main-Icons">
              <Link to="/send" className="Send-Icon">
                <i id="Content-icon-buy" className="material-icons">
                  file_upload
                </i>
                <Link to="/">
                  <b id="Content-icon-buy">Send</b>
                </Link>
              </Link>

              <Link to="/receive" className="Receive-Icon">
                <i id="Content-icon-buy" className="material-icons">
                  file_download
                </i>
                <b id="Content-icon-buy">Receive</b>
              </Link>

              <Link target="_self" to="/buy" className="Buy-Icon">
                <i id="Content-icon-buy" class="fas fa-tag"></i>
                <b id="Content-icon-buy">Transaction history</b>
              </Link>

              <Link target="_self" to="/swap" className="Swap-Icon">
                <i id="Content-icon-buy" class="fas fa-exchange-alt"></i>
                <br />
                <b id="Content-icon-buy">Swap</b>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <TokensNft />
      {/* <TokensNft/> */}
    </>
  );
};
export default TestPage;
