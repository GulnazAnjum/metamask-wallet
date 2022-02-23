import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import TokensNft from "../Tokens/TokensNft";
import { useState } from "react";
import "./MultiCoin.css";
import { Modal, Button } from "react-bootstrap";
function MyVerticallyCenteredModal(props) {
  const [count, setCount] = useState(["Account"]);
  const addItem = () => {
    setCount([...count, count + 1]);
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          New Account
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          {count.map((count) => {
            return <h6>Account{1}</h6>;
          })}
          {/* <p>Account{count}</p> */}
          <Button
            class="primary"
            onClick={() => addItem(addItem + 1)}
            className="Accountbutton"
          >
            Create New Account
          </Button>
          <Button className="AccountButton2">Import an Account</Button>
        </div>
      </Modal.Body>{" "}
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}
const TestPage = () => {
  const [modalShow, setModalShow] = React.useState(true);
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
                <div className="Side-DropDown">
                  <a href="/createaccount" id="Create-Account-Link">
                    Create Account
                  </a>
                  <a
                    href=""
                    onClick={() => setModalShow(true)}
                    id="openModal"
                    className="New-Account-Link"
                  >
                    New Account
                  </a>
                </div>

                <a href="/importaccount">import Account</a>
                <a href="/settings">Settings</a>
                <MyVerticallyCenteredModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </div>
            </div>
          </div>
          <div className="Link-Icons-Container">
            <h2 className="Icon-Header">Multi-Coin Wallet 1</h2>
            <h3 className="Account1">Account 1</h3>
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
                <b id="Content-icon-buy">History</b>
              </Link>

              <Link target="_self" to="/swap" className="Swap-Icon">
                <i id="Content-icon-buy" class="fas fa-exchange-alt"></i>
                <br />
                <b id="Content-icon-buy">Swap</b>
              </Link>
              <Link target="_self" to="/addtoken" className="Swap-Icon">
                <i id="Content-icon-buy" class="fas fa-tag"></i>
                <br />
                <b id="Content-icon-buy">Token</b>
              </Link>
              <Link target="_self" to="/nftstoken" className="Swap-Icon">
                <i id="Content-icon-buy" class="fas fa-tag"></i>
                <br />
                <b id="Content-icon-buy">NFT Token</b>
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
