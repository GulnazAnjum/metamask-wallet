import React from "react";
import "./Routing.css";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Token from '../Tokens/Token';
import Nfts from '../Tokens/NFts';

const TokensNft = () => {
  return (
   <div className="wrapper">
      <div className="app">
      <Tabs defaultIndex={0} style={{ dispaly: "flex" }}>
        <TabList style={{ listStyle: "none", dispaly: "flex" }}>
          <Tab className='tokenTab'>Token</Tab>
          <Tab className='tokenTab' >  NFTS</Tab>
        </TabList>
        <TabPanel>
          <Token />
        </TabPanel>
        <TabPanel>
          <Nfts />
        </TabPanel>
      </Tabs>
   </div>
     </div>
     
   
  );
};
export default TokensNft;
