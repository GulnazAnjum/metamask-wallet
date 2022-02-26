import React, { useState } from "react";
import { Card, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import validator from "validator";

import "./SecondPassword.css";
export const SecondPassword = () => {
  const [errorMessage, setErrorMessage] = useState("");

  let history = useNavigate();
  const Buttton = () => {
    history("/account");
  };

  const validate = (value) => {
    if (
      validator.isStrongPassword(value, {
        minLength: 8,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setErrorMessage("Is Strong Password");
    } else {
      setErrorMessage("Is Not Strong Password");
    }
  };

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
      <div className="bootstrap">
        <Card className="Container1">
          <Card.Img
            variant="top"
            src="./images/logo-icon1.png"
            className="Image-side"
          />
          <Card.Body>
          <h2 className="Headding">Welcome back!</h2>
            <div className="Border-Bottom"></div>
            <Card.Text className="Text">The decentralized web awaits</Card.Text>

            <div className="Password-Container">
              <pre>
                <i className="fa fa-lock Lock-Icon"></i>
                <input
                  type="text"
                  name="password"
                  className="Password"
                  placeholder="enter your password"
                  onChange={(e) => validate(e.target.value)}
                ></input>{" "}
                <br />
                <span
                  style={{
                    color: "red",
                  }}
                >
                  {errorMessage}
                </span>
              </pre>
            </div>


            <Button
              variant="primary"
              className="Bubbton"
              onClick={() => Buttton()}
            >
              UNLOCK{" "}
            </Button>
            <div>
              <p className="One">
                <span className="SSpan">or</span>import using Secret Recovery
                Phrase
              </p>

              <p className="Three">
                <span className="Span">Need help?</span>Contact Trodex Wallet
                Support
              </p>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};
export default SecondPassword;