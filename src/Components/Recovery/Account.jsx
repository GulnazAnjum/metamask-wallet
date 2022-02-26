import React from "react";
import { Button, Card, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Account.css"
 const Account = () => {
let history=useNavigate();
const ButtonTow =()=>{
 history("/ending")

} 

  return (
    <div className="APP">
      <div className="Man-body">
        <div className="im">
          <img src="images/trodex1.png" alt="" />
        </div>
        <div className="Button-Container">
          <Button>
            <span className="Dot"></span> Ethereum Mainnet
          </Button>
        </div>
      </div>
      <div className="Para-Container">
        <Card className="Card-Form">
          <h2>Secret Recovery Phrase</h2>
          <p className="Paragraph1">
            Your Secret Recovery Phrase makes it easy to back up and restore
            your account.
          </p>
          <p className="Paragraph2">
            WARNINGS: Never disclose your Secret Recovery Phrase. Anyone with
            this Phrase can take your Ether forever.
          </p>
          <p className="Last-Content">
            Your Secret Recovery Phrase makes it easy to back up and restore
            your account.
          </p>
          <p className="end-Content">
            Save this recovery phrase as it will help you when password is forgotten.
          </p>
          <div className="Last-Buttons">
          
            <Button variant="primary" className="Second-Button"  onClick={()=>ButtonTow()}>
              Next
            </Button>          
            </div>
        </Card>
      
    </div>
    
</div>
  );
};

export default Account;
