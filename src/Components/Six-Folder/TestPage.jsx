
import { Link } from "react-router-dom";
import TokensNft from "../Tokens/TokensNft";

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

          
            <div className="Side-Bar-Button">
              <button>
                <span></span>Ethereum Mainnet
              </button>
            </div>

            <div class="dropdown">
              <div className="Setting-Icon-Container">
                <i class="fas fa-sliders-h Setting-Icon"></i>
              </div>
              <div class="dropdown-content">
                <div className="Side-DropDown">
                  <a href="/createaccount" id="Create-Account-Link">
                    Create Account
                  </a>
                </div>
                <a href="/importaccount">Import Account</a>
                <a href="/settings">Settings</a>
                <a href="/">LogOut</a>
                
              </div>
            </div>
          </div>
          <div className="Link-Icons-Container">
            <h2 className="Icon-Header">$0.000</h2>
            <h2 className="Icon-Header">Multi-Coin Wallet 1</h2>
     
            <h3 className="Account1"> Main Account </h3>
            <h3 className="Account1"></h3>
            <div className="Main-Icons">
              
              <Link target="_self" to="/AssetsSend" className="Swap-Icon">
                <i id="Content-icon-buy" class="fa fa-upload"></i>
                <br />
                <b id="Content-icon-buy">&nbsp; Send</b>
              </Link>

            
              <Link target="_self" to="/receive" className="Swap-Icon">
                <i id="Content-icon-buy" class="fa fa-download"></i>
                <br />
                <b id="Content-icon-buy">&nbsp; &nbsp; Receive</b>
              </Link>

              <Link target="_self" to="/history" className="Swap-Icon">
                <i id="Content-icon-buy" class="fas fa-tag"></i>
                <br />
                <b id="Content-icon-buy">&nbsp; &nbsp; History</b>
              </Link>
              <Link target="_self" to="/swap" className="Swap-Icon">
                <i id="Content-icon-buy" class="fas fa-exchange-alt"></i>
                <br />
                <b id="Content-icon-buy"> &nbsp; Swap</b>
              </Link>
              <Link target="_self" to="/addtoken" className="Swap-Icon">
                <i id="Content-icon-buy" class="fas fa-tag"></i>
                <br />
                <b id="Content-icon-buy">&nbsp; &nbsp; Token</b>
              </Link>
              <Link target="_self" to="/nftstoken" className="Swap-Icon">
                <i id="Content-icon-buy" class="fas fa-tag"></i>
                <br />
                <b id="Content-icon-buy">&nbsp; &nbsp; &nbsp; NFT </b>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <TokensNft />
    </>
  );
};
export default TestPage;
