import React from "react";
import { Link } from "react-router-dom";
import "./Navigat.css";

const NewSend = () => {
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
      <div className="Recipient-Add">
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
      {/* first input code end here */}

      {/* second input code start here */}
      <div className="Amount-Input-Container">    
          <fieldset className="Input-Border">
            <legend className="Border-text">Amount USDT</legend>
                  <input type="text" className="Amount-Input"/>
                  <button className="Max-Button">MAX</button>
                  <button className="USDT-Button">USDT</button>
          </fieldset>
      </div>
      {/* second input code end here */}
    </div>
  );
};
export default NewSend;
