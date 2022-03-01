import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Receive.css";
import TableCoin from "../Api-folder/TableCoin";
const Recive = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const getData = async () => {
    const res = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100"
    );
    console.log(res.data);
    setCoins(res.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="container">
      <div className="row">
        <input
          type="text"
          placeholder="Search a Coin"
          className="form-control text-dark border-3 mt-4 text-center"
          onChange={(e) => setSearch(e.target.value)}
        />
        <TableCoin coins={coins} search={search} />
      </div>
    </div>
  );
};
export default Recive;
