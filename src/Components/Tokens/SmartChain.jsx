import React from 'react';
import { Link } from 'react-router-dom';

const SmartChain = () => {
    return (
        <div>
        <div className="Main-Icon-Container">
          <div className="Main-Header-Icons"></div>

          <div className="BitcoinContainer">
       <img
          src="./Images/smartchain.png.jpg"
          alt=""
          height={50}
          width={50}
          className="Bnb-Icon"
        />
            <h1 className="MoneyCounter">0 BNB</h1>

          </div>
          
          <div className="Link-Icons-Container">
            <div className="Main-Icons">
              <Link to="/AssetsSend" className="Send-Icon">
                <i id="Content-icon-buy" className="material-icons">
                  file_upload
                </i>
                <Link to="/">
                  <b id="Content-icon-buy">Send</b>
                </Link>
              </Link>

              <Link to="/ReciveQrcode" className="Receive-Icon">
                <i id="Content-icon-buy" className="material-icons">
                  file_download
                </i>
                <b id="Content-icon-buy">Receive</b>
              </Link>
            </div>
          </div>
        </div>


   <h1 id="HistoryContent">History</h1>
        </div>
    );
};

export default SmartChain;