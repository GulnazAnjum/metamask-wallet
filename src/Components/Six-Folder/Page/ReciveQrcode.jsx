import React from "react";
import CopyToClipboard from "react-copy-to-clipboard";
const ReciveQrcode = () => {
  return (
    <div>
      <div className="qrContainer">
        <div className="qr-box">
          <img src="./Images/qrcode.png" alt="" height={150} width={150} />
          <p className="addStyle">0x0cC9fef6348D0F99D4e1004e4d5460e40E631fd5</p>
        </div>
      </div>
      <CopyToClipboard text="0x0cC9fef6348D0F99D4e1004e4d5460e40E631fd5">
        <button className="copybutton">
          <i class="fa fa-clone" aria-hidden="true"></i>
        </button>
      </CopyToClipboard>
      <button className="copybutton">
        <i class="fa fa-share-alt" aria-hidden="true"></i>
      </button>
    </div>
  );
};

export default ReciveQrcode;
