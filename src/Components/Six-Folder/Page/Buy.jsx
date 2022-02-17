import React from "react";
import {Link} from "react-router-dom"

const Buy = () => {
  return (
    <div>
      <div className="Send-Compon">
    <Link to="/TestPage">    <i id="content-icon-01" className="fas fa-arrow-left Send-Icon "></i></Link>
        <input
          type="text"
          placeholder="Search-Buy "
          style={{ Color: "white" }}
        />
      </div>
    </div>
  );
};
export default Buy;
