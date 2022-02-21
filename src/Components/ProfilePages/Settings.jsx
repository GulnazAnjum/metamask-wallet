import React from "react";
import Child from "../Third-Folder/Child";
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
                        {/* <div className="code text">
                            <div className="title">Code Content</div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore magnam vitae inventore blanditiis nam tenetur voluptates doloribus error atque reprehenderit, necessitatibus minima incidunt a eius corrupti placeat, quasi similique deserunt, harum? Quia ut impedit ab earum expedita soluta repellat perferendis hic tempora inventore, accusantium porro consequuntur quisquam et assumenda distinctio dignissimos doloremque enim nemo delectus deserunt! Ullam perspiciatis quae aliquid animi quam amet deleniti, at dolorum tenetur, tempore laborum.</p>
                        </div>
                        <div className="about text">
                            <div className="title">About Content</div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus incidunt possimus quas ad, sit nam veniam illo ullam sapiente, aspernatur fugiat atque. Laboriosam libero voluptatum molestiae veniam earum quisquam, laudantium aperiam, eligendi dicta animi maxime sunt non nisi, ex, ipsa! Soluta ex, quibusdam voluptatem distinctio asperiores recusandae veritatis optio dolorem illo nesciunt quos ullam, dicta numquam ipsam cumque sed. Blanditiis omnis placeat, enim sit dicta eligendi voluptatibus laborum consectetur repudiandae tempora numquam molestiae rerum mollitia nemo. Velit perspiciatis, nesciunt, quo illo quas error debitis molestiae et sapiente neque tempore natus?</p>
                        </div> */}
                    </div>
                </div>
            </div>
            </div>
            
        </>
    );
};

export default Settings;