import React from "react";
import "./Home.css";
import { BrowserRouter, NavLink,Route,Routes} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const Child = () => {
  let history=useNavigate();
  const countinnue =()=>{
   history("/account")
 
  }
 
  return (
    <div>
      <div className="gation">
        <div className="Header-Contain-Contain">
          <div className="Logo-logo">
            <img src="./images/trodex.png" alt="Random Image" />
          </div>
          <div className="Right-Button-Button">
            <button>
              <span className="Green-Circle-Circle"></span> Ethereum Mainnet
            </button>
          </div>
        </div>
      </div>
      <div>
        <span className="span-span">CSS Vertical Tabs.</span>
      </div>
      <div>
        <nav className="Links">
          <NavLink target="_self" to="/Home" className="Home-Link">
            Home
          </NavLink>
          <br></br>
          <NavLink target="_self" to="/Blog" className="Blog-Link">
            Blog
          </NavLink>
          <br></br>
          <NavLink target="_self" to="/Help" className="Help-Link">
            Help
          </NavLink>
          <br></br>
          <NavLink target="_self" to="/Code" className="Code-Link">
            Code
          </NavLink>
          <br></br>
          <NavLink target="_parent" to="/About" className="About-Link">
            About
          </NavLink>
          <br/>
          <br/>
          {/* <NavLink to="/account" className="About-Link">
          Account
          </NavLink> */}
          <button  onClick={()=>countinnue()}>
              next
            </button>


        </nav>
        
      </div>
    </div>
  );
};

export default Child;
