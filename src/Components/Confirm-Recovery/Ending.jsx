
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import {Link} from "react-router-dom"
import { useNavigate } from "react-router-dom";
import "./Ending.css";
const Ending = () => {
  const [show, setShow] = useState();
  const [disel, setDisel] = useState();
  const [humble, setHumble] = useState("");
  const [humor, setHumor] = useState("");
  const [larg, setLarg] = useState("");
  const [liar, setLiar] = useState("");
  const [panda, setPanda] = useState("");
  const [portion, setPortion] = useState("");
  const [stem, setStem] = useState("");
  const [supers, setSuper] = useState("");
  const [swit, setSwitch] = useState("");
  const [wise, setWise] = useState("");

  return (
    // header logo code start here
    <div className="main-counter">
      <div className="Body-counter">
        <img src="./images/trodex1.png" alt="" className="Photo" />
      </div>

      {/* right side button code start here */}
      <div className="Button-Counter">
        <button>
          <span className="Dotted"></span>Ethereum Mainnet
        </button>
      </div>

      {/* main content code start here */}
      <div className="Border">
        <h2 className="Head2">Confirm your Secret Recovery Phrase</h2>
        <p className="Paragraph">
          Please select each phrase in order to make sure it is correct.
        </p>

        <div className="Body2-Counter">
          <button>{show}</button>
          <button>{disel}</button>
          <button>{humble}</button>
          <button>{humor}</button>
          <button>{larg}</button>
          <button>{liar}</button>
          <button>{panda}</button>
          <button>{portion}</button>
          <button>{stem}</button>
          <button>{supers}</button>
          <button>{swit}</button>
          <button>{wise}</button>
        </div>

        {/* last button code start here */}
        <div className="Boxes">
          <input
            onClick={(e) => setShow(e.target.value)}
            type="submit"
            value="One"
            className="Button"
          />

          <input
            onClick={(e) => setDisel(e.target.value)}
            type="submit"
            value="Two"
            className="Button"
          />

          <input
            onClick={(e) => setHumble(e.target.value)}
            type="submit"
            value="Three"
            className="Button"
          />

          <input
            onClick={(e) => setHumor(e.target.value)}
            type="submit"
            value="Four"
            className="Button"
          />

          <input
            onClick={(e) => setLarg(e.target.value)}
            type="submit"
            value="Five"
            className="Button"
          />

          <input
            onClick={(e) => setLiar(e.target.value)}
            type="submit"
            value="Six"
            className="Button"
          />

          <input
            onClick={(e) => setPanda(e.target.value)}
            type="submit"
            value="Seven"
            className="Button"
          />

          <input
            onClick={(e) => setPortion(e.target.value)}
            type="submit"
            value="Eight"
            className="Button"
          />

          <input
            onClick={(e) => setStem(e.target.value)}
            type="submit"
            value="Nine"
            className="Button"
          />

          <input
            onClick={(e) => setSuper(e.target.value)}
            type="submit"
            value="Ten"
            className="Button"
          />

          <input
            onClick={(e) => setSwitch(e.target.value)}
            type="submit"
            value="Eleven"
            className="Button"
          />

          <input
            onClick={(e) => setWise(e.target.value)}
            type="submit"
            value="Twelve"
            className="Button"
          />
        </div>
        {/* footer button code start here */}
        <div className="end-Buttons">
          {/* <Button variant="outline-primary" className="one-Button">
            Remind me later
          </Button> */}
          <Link to='/Index'><Button variant="primary" className="two-Button">
            Next
          </Button>
          </Link>
          
        </div>
      </div>
    </div>
  );
};
export default Ending;

