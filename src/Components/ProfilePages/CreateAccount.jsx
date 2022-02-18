import React from "react";
import "./styles.css";
import { Button, Card, InputGroup } from "react-bootstrap";
const CreateAccount = () => {
    return (
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
            <div className="paraContainer">
                <Card className="cardForm">
                    <h2 className="titleStyle">Account Name</h2>
                    <input type="text"
                        name="password"
                        className="passwordStyle"
                        ></input>

                    <div className="lastButtons">
                        <Button variant="outline-primary" className="firstButton">
                            cancel
                        </Button>
                        <Button variant="primary" className="secondButton">
                            Create
                        </Button>

                    </div>
                </Card>
            </div>
        </div>
    );
};

export default CreateAccount;
