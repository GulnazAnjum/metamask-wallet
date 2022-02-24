// import React from "react";
// import { Link } from "react-router-dom";
// import { Button } from "react-bootstrap";

// import "./AssetsSend.css";
// const AssetsSend = () => {
//   const handleNextButton = () => {
//     alert("Congratulation");
//   };
//   return (
//     <div>
//       <div className="Send-Compon">
//         <Link to="/TestPage">
//           <i id="content-icon-01" className="fas fa-arrow-left Send-Icon "></i>{" "}
//         </Link>
//         <input
//           type="text"
//           placeholder="Search-Send "
//           style={{ Color: "white" }}
//         />
//       </div>

//       {/* first input code start here */}
//       <h1>AssetsSend</h1>
//       <div className="Recipient-Add">
//         <div className="Scaner-Input">
//           <input
//             type="text"
//             placeholder="Recipient Address"
//             className="Recipient-Input"
//           />
//           <i
//             className="material-icons Scaner-Icon"
//             style={{ fontSize: "36px" }}
//           >
//             scanner
//           </i>
//           <button className="Paste-Button">PASTE</button>
//         </div>
//       </div>

//       <div className="Amount-Input-Container">
//         <fieldset className="Input-Border">
//           <input
//             type="text"
//             placeholder="Insufficient funds for gas"
//             className="Amount-Input"
//           />
//         </fieldset>
//       </div>

//       <div className="assetsContainer1">
//         <div className="RecipientAdd">
//           <label style={{ marginTop: "10px" }}>Asset:</label>
//           <div className="Scaner-Input">
//             <input
//               type="text"
//               placeholder="Balance:
// 0
// ETH"
//               className="Assets-Input"
//             />
//           </div>
//         </div>
//       </div>

//       <div className="assetsContainer">
//         <div className="RecipientAdd2">
//           <label style={{ marginTop: "10px" }}>Amount:</label>
//           <div className="ScanerInput">
//             <input type="text"
//             className="Amount2"
//             placeholder="0
// ETH

// $0.00
// USD" />
//           </div>
//         </div>
//       </div>
//       <p className="Paragraph">Insufficient funds.</p>
//       {/* first input code end here */}

//       {/* second input code start here */}

//       <div className="lastButtons">
//         <Button variant="outline-primary" className="firstButton">
//           cancel
//         </Button>
//         <Button
//           variant="primary"
//           className="secondButton"
//           onClick={() => handleNextButton()}
//         >
//           Next
//         </Button>
//       </div>
//     </div>
//   );
// };
// export default AssetsSend;





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
        {/* 
        <div className="Recipient-Add">
          <label style={{ marginTop: '10px' }}>Assets:</label>
          <div className="Scaner-Input">

            <input
              type="text"
              className="Assets-Input"
            />

          </div>
        </div> */}
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

          {/* <div class="send-v2__form-field">
            <div class="unit-input unit-input--error">
              <div class="unit-input__inputs">
                <div class="unit-input__input-container">
                  <input type="number" dir="ltr" class="unit-input__input" placeholder="0" value="0" style="width: 1.5ch;" />
                  <div class="unit-input__suffix">bnb</div>
                </div>
                <div class="currency-input__conversion-component">No Conversion Rate Available</div>
              </div>
              <div class="currency-input__swap-component">
              </div>
            </div>
          </div> */}
        </div>
      </div>
      {/* first input code end here */}

      {/* second input code start here */}
      {/* <div className="Amount-Input-Container">
        <fieldset className="Input-Border">
          <legend className="Border-text">Amount USDT</legend>
          <input type="text" className="Amount-Input" />
          <button className="Max-Button">MAX</button>
          <button className="USDT-Button">USDT</button>
        </fieldset>
      </div> */}
      <div className="lastButtons">
        <Button variant="outline-primary" className="firstButton">
          cancel
        </Button>
        <Button variant="primary" className="secondButton" onClick={() => handleNextButton()} >
          Next
        </Button>

      </div>
      {/* second input code end here */}
    </div>
  );
};
export default AssetsSend;

