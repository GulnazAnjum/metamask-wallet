import React from "react";
import "./Routing.css";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Token from '../Tokens/Token';
import Nfts from '../Tokens/NFts';

const TokensNft = () => {
  return (
    // <div className="Link--Container">
    //   <div className="First--Link--Container">
    //     <Link className="Token--Link" to="/token">
    //       Tokens
    //     </Link>
    //   </div>

    //   <div className="Second--Link-Container">
    //     <Link className="Nfts--Link" to="/NFts">
    //       Nfts
    //     </Link>
    //   </div>
    // </div>
    <div className="app">
      <Tabs defaultIndex={0} style={{ dispaly: "flex" }}>
        <TabList style={{ listStyle: "none", dispaly: "flex" }}>
          <Tab
            style={{
              color: "gray",
              fontSize: "30px",
              backgroundColor: "lightblue",
              width: "50%",
              float: "left",
            }}
          >
            Token
          </Tab>
          <Tab
            style={{
              color: "gray",
              fontSize: "30px",
              backgroundColor: "lightblue",
              width: "50%",
              float: "right",
            }}
          >
            NFTS
          </Tab>
        </TabList>
        <TabPanel>
          <Token />
        </TabPanel>
        <TabPanel>
          <Nfts />
        </TabPanel>
      </Tabs>
    </div>
  );
};
export default TokensNft;
