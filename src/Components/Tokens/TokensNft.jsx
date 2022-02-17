import React from "react";
import "./Routing.css";
import { Link } from "react-router-dom";

const TokensNft = () => {
  return (
    <div className="Link--Container">
      <div className="First--Link--Container">
        <Link className="Token--Link" to="/token">
          Tokens
        </Link>
      </div>

      <div className="Second--Link-Container">
        <Link className="Nfts--Link" to="/NFts">
          Nfts
        </Link>
      </div>
    </div>
  );
};
export default TokensNft;
