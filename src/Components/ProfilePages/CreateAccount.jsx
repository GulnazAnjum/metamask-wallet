import React from "react";
import { useState } from "react";
import "./styles.css";
import { Button, Card, InputGroup } from "react-bootstrap";
 export const CreateAccount = () => {

     const [count, setCount] = useState([" Main Account"]);
//    const addItem = () => {
    //   setCount([...count,"Account 1"]);
    return (
        <div className="Main-Password-Container">
            {/* <div className="Header">
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
            </div> */}

            {count.map((item) => {
             return <h6> {item}</h6>;
          })}

            <Button
            class="primary"
            onClick={() => setCount([...count, `Account  ${count.length}`])}
             className="Accountbutton"
           >
             Create New Account
           </Button>
           {/* <Button className="AccountButton2">Import an Account</Button> */}
        </div>



    );
}

export default CreateAccount;
