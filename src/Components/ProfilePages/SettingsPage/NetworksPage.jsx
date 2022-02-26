import React from "react";
import "./SettingCss.css";
import { Button, Card, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
const NetworksPage = () => {
    return (
        <>
            <div className="headerNetworkStyle">
                <h2 className="networkHeaderStyle">Networks</h2>
                <Button variant="primary" className="addNetworkButton">
                    Add a network
                </Button>

            </div>
            <span className="borderStyle"></span>
            <div className="networkContaoner">
                <div className="networkLeftContainer">
                    <div className="leftDataStyle" >
                        <label className="leftLableStyle">Ethereum Mainnet</label>
                    </div>
                    <div className="leftDataStyle">
                        <label className="leftLableStyle">Ropsten Test Network</label>
                    </div>
                    <div className="leftDataStyle" >
                        <label className="leftLableStyle">Rinkeby Test Network</label>
                    </div>
                    <div className="leftDataStyle">
                        <label className="leftLableStyle">Goerli Test Network</label>
                    </div>

                </div>
                <div className="networkRightcontainer">
                    <div className="rightDataStyle" >
                        <label className="rightLableStyle">Network Name</label>

                    </div>
                    <div className="rightDataStyle" >
                        <input
                            type='text'
                            className="inputStyle"
                        />
                    </div>
                    <div className="rightDataStyle">
                        <label className="rightLableStyle">New RPC URL</label>
                    </div>
                    <div className="rightDataStyle" >
                        <input
                            type='text'
                            className="inputStyle"
                        />
                    </div>

                    <div className="rightDataStyle">
                        <label className="rightLableStyle">Chain IDL</label>
                    </div>
                    <div className="rightDataStyle" >
                        <input
                            type='text'
                            className="inputStyle"
                        />
                    </div>
                    <div className="rightDataStyle">
                        <label className="rightLableStyle">Currency Symbol(Optional)</label>
                    </div>
                    <div className="rightDataStyle" >
                        <input
                            type='text'
                            className="inputStyle"
                        />
                    </div>
                    <div className="rightDataStyle">
                        <label className="rightLableStyle">Block Explorer URL(Optional)</label>
                    </div>
                    <div className="rightDataStyle" >
                        <input
                            type='text'
                            className="inputStyle"
                        />
                    </div>
                    <div className="cancelSaveStyle">
                        <Link to='/testpage'><Button variant="outline-primary" className="cancelButton">
                            cancel
                        </Button></Link>
                        <Button variant="primary" className="saveButton" >
                            Save
                        </Button>
                    </div>
                </div>

            </div>
        </>
    )
}
export default NetworksPage;