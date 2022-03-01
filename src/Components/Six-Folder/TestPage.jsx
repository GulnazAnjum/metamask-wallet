import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import TokensNft from "../Tokens/TokensNft";
import { useState } from "react";
import "./MultiCoin.css";
// import { Modal, Button } from "react-bootstrap";
// function MyVerticallyCenteredModal(props) {
//   const [count, setCount] = useState(["Account"]);
//   const addItem = () => {
//     setCount([...count, "Account"]);
//   };
//   return (
    // <Modal
    //   {...props}
    //   size="lg"
    //   aria-labelledby="contained-modal-title-vcenter"
    //   centered
    // >
    //   <Modal.Header closeButton>
    //     <Modal.Title id="contained-modal-title-vcenter">
    //       New Account
    //     </Modal.Title>
    //   </Modal.Header>
    //   <Modal.Body>
    //     <div>
    //       {count.map((item) => {
    //         return <h6> {item}</h6>;
    //       })}
    //       {/* <p>Account{count}</p> */}
    //       </div>
    //       <div className='footbtn'>
    //       <Button
    //         class="primary"
    //         onClick={() => setCount([...count, `Account ${count.length}`])}
    //         className="Accountbutton"
    //       >
    //         Create New Account
    //       </Button>

    //       <Button className="AccountButton2">Import an Account</Button>
    //       </div>        
    //   </Modal.Body>{" "}
    //   <Modal.Footer style={{marginRight:"100px",width:"rem"}}>
    //     <Button onClick={props.onHide}>Close</Button>
    //   </Modal.Footer>
    // </Modal>
//     <></>
//   );
// }
const TestPage = () => {
  // const [modalShow, setModalShow] = React.useState(true);
  // const [count,setCount]=useState(0);
  return (
    <>
      <div>
        <div className="Main-Icon-Container">
          <div className="Main-Header-Icons">
            <div className="Notification-Icon-Container">
              <i className="material-icons Notification-Icon">notifications</i>
            </div>

            {/* <h1 className="Money-Counter">$0.000</h1> */}
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
                {/* <MyVerticallyCenteredModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                /> */}
              </div>
            </div>
          </div>
          <div className="Link-Icons-Container">
            <h2 className="Icon-Header">$0.000</h2>
            <h2 className="Icon-Header">Multi-Coin Wallet 1</h2>
            {/* <h3 className="Account1">`${count.lastIndexOf()}`</h3> */}
            <h3 className="Account1"> Main Account </h3>
            <h3 className="Account1"></h3>
            <div className="Main-Icons">
              {/* <Link to="/AssetsSend" className="Send-Icon">
                <i id="Content-icon-buy" className="material-icons">
                  file_upload
                </i>               
                  <b id="Content-icon-buy">Send</b>               
              </Link> */}
              <Link target="_self" to="/AssetsSend" className="Swap-Icon">
                <i id="Content-icon-buy" class="fa fa-upload"></i>
                <br />
                <b id="Content-icon-buy">&nbsp; Send</b>
              </Link>

              {/* <Link to="/receive" className="Receive-Icon">
                <i id="Content-icon-buy" className="material-icons">
                  file_download
                </i>
                <b id="Content-icon-buy">Receive</b>
              </Link> */}
              <Link target="_self" to="/receive" className="Swap-Icon">
                <i id="Content-icon-buy" class="fa fa-download"></i>
                <br />
                <b id="Content-icon-buy">&nbsp;&nbsp;Receive</b>
              </Link>

              <Link target="_self" to="/history" className="Swap-Icon">
                <i id="Content-icon-buy" class="fas fa-tag"></i>
                <br />
                <b id="Content-icon-buy">&nbsp;&nbsp;History</b>
              </Link>
              <Link target="_self" to="/swap" className="Swap-Icon">
                <i id="Content-icon-buy" class="fas fa-exchange-alt"></i>
                <br />
                <b id="Content-icon-buy">&nbsp;Swap</b>
              </Link>
              <Link target="_self" to="/addtoken" className="Swap-Icon">
                <i id="Content-icon-buy" class="fas fa-tag"></i>
                <br />
                <b id="Content-icon-buy">&nbsp;&nbsp;Token</b>
              </Link>
              <Link target="_self" to="/nftstoken" className="Swap-Icon">
                <i id="Content-icon-buy" class="fas fa-tag"></i>
                <br />
                <b id="Content-icon-buy">&nbsp;&nbsp;&nbsp;NFT </b>
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
