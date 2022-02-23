import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import TokensNft from "../Tokens/TokensNft";
import { useState } from "react";
import "./Assets.css";
// import { Modal, Button } from "react-bootstrap";
// function MyVerticallyCenteredModal(props) {
//   const [count, setCount] = useState(["Account"]);
//   const addItem = () => {
//     setCount([...count, "Account"]);
//   };
//   return (
//     <Modal
//       {...props}
//       size="lg"
//       aria-labelledby="contained-modal-title-vcenter"
//       centered
//     >
//       <Modal.Header closeButton>
//         <Modal.Title id="contained-modal-title-vcenter">
//           New Account
//         </Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <div>
//           {count.map((item) => {
//             return <h6> {item}</h6>;
//           })}
//           {/* <p>Account{count}</p> */}
//           <Button
//             class="primary"
//             onClick={() => setCount([...count, `Account ${count.length}`])}
//             className="Accountbutton"
//           >
//             Create New Account
//           </Button>
//           <Button className="AccountButton2">Import an Account</Button>
//         </div>
//       </Modal.Body>{" "}
//       <Modal.Footer style={{ marginRight: "100px" }}>
//         <Button onClick={props.onHide}>Close</Button>
//       </Modal.Footer>
//     </Modal>
//   );
// }
const Assets = () => {
//   const [modalShow, setModalShow] = React.useState(true);
//   // const [count,setCount]=useState(0);
  return (
    <>
      <div>
        <div className="Main-Icon-Container">
          <div className="Main-Header-Icons"></div>

          <div className="BitcoinContainer">
            <i class="fab fa-btc Bitcoin-Icon"></i>
            <h1 className="MoneyCounter">$0.000</h1>

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

              <Link to="/receive" className="Receive-Icon">
                <i id="Content-icon-buy" className="material-icons">
                  file_download
                </i>
                <b id="Content-icon-buy">Receive</b>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <TokensNft /> */}
    </>
  );
};
export default Assets;
