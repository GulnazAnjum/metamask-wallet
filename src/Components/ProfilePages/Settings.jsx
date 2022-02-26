import React from "react";
// import Child from "../Third-Folder/Child";
import CreateAccount from "../ProfilePages/CreateAccount";
import Generalpage from "./SettingsPage/Generalpage";
import NetworksPage from "./SettingsPage/NetworksPage";
import AboutPage from "./SettingsPage/AboutPage";
import "./styles.css"
const Settings = () => {
    return (
        <>
          <div className="Main-Password-Container">
            <div className="Header">
                <div className="Image-Container">
                    <img src="./Images/trodex7.png" alt="RandomImage" />
                </div>
                <div className="Side-Bar-Button">
                    <button>
                        <span></span>Ethereum Mainnet
                    </button>
                </div>
            </div>
            <div className="container">
                <div className="topic">Settings</div>
                <div className="middle-content">
                    <input type="radio" name="slider"  defaultChecked id="general" />
                    <input type="radio" name="slider" id="blog" />
                    <input type="radio" name="slider" id="help" />
                    {/* <input type="radio" name="slider" id="code" />
                    <input type="radio" name="slider" id="about" /> */}
                    <div className="list">
                        <label htmlFor="general" className="home">
                            <span className="title-name">General</span>
                        </label>
                        <label htmlFor="blog" className="blog">
                            <span className="title-name">Networks</span>
                        </label>
                        <label htmlFor="help" className="help">
                            <span className="title-name">About</span>
                        </label>
                        {/* <label htmlFor="code" className="code">
                            <span className="title-name">Code</span>
                        </label>
                        <label htmlFor="about" className="about">
                            <span className="title-name">About</span>
                        </label> */}
                        <div className="slider" />
                    </div>
                    <div className="text-content">
                        <div className="home text">
                           
                            <Generalpage/>

                        </div>
                         <div className="blog text">
                            <NetworksPage/>
                        </div> 
                         <div className="help text"> 
                            
                            <AboutPage/> 
                         </div> 
                      
                    </div>
                </div>
            </div>
            </div>
            
        </>
    );
};

export default Settings;