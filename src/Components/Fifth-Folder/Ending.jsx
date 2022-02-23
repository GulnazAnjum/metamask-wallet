// import React, { useState } from "react";
// import { Button } from "react-bootstrap";
// import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
// import { Link } from "react-router-dom"
// import { useNavigate } from "react-router-dom";
// import TestPage from "../Six-Folder/TestPage";
// import "./Ending.css";
// const Ending = () => {
//   const [activeNumber, setActiveNumber] = useState([]);
//   const handleFilterCoin = (number) => {
//     setActiveNumber((oldData) => {
//       return [
//         ...oldData,
//         number
//       ]
//     });
//   }
//   const name = "Your Secret Recovery Phrase makes it easy to";
//   const name1 = "Your Secret Recovery Phrase makes it easy to back up and restore your ";
//   const array = name.split(' ');
//   const result = array.length;
//   console.log('length is', result);

//   const percentagebutton = array.map(number => {
//     return (
//       <input
//         onClick={() => handleFilterCoin(number)}
//         type="submit"
//         value={number}
//         className="Button"
//       />
//     )
//   });
//   const successhandle = () => {
//     <TestPage />
//   }
//   const handlenextbutton = () => {
//     if (name === name1) {
//       alert("correct Secret Phrase");
     
//     }
//     else {
//       alert("incorrect Secret Phrase");
//     }
//   }
//   return (
//     // header logo code start here
//     <div className="main-counter">
//       <div className="Body-counter">
//         <img src="./images/trodex1.png" alt="" className="Photo" />
//       </div>

//       {/* right side button code start here */}
//       <div className="Button-Counter">
//         <button>
//           <span className="Dotted"></span>Ethereum Mainnet
//         </button>
//       </div>

//       {/* main content code start here */}
//       <div className="Border">
//         <h2 className="Head2">Confirm your Secret Recovery Phrase</h2>
//         <p className="Paragraph">
//           Please select each phrase in order to make sure it is correct.
//         </p>

//         <div className="Body2-Counter">
//           <label>{activeNumber}</label>
//           {console.log(activeNumber)}
//         </div>

//         {/* last button code start here */}
//         <div className="Boxes">
//           {percentagebutton}
//         </div>
//         {/* footer button code start here */}
//         <div className="end-Buttons">
//           <Button variant="outline-primary" className="one-Button">
//             Remind me later
//           </Button>
//           <Button variant="primary" className="two-Button" onClick={() => handlenextbutton()}>
//             Next
//           </Button>
//           <Link to='/testpage'><Button variant="primary" className="two-Button">
//             Next
//           </Button>
//           </Link>

//         </div>
//       </div>
//     </div>
//   );
// };
// export default Ending;
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
            value="chair"
            className="Button"
          />

          <input
            onClick={(e) => setDisel(e.target.value)}
            type="submit"
            value="disel"
            className="Button"
          />

          <input
            onClick={(e) => setHumble(e.target.value)}
            type="submit"
            value="humble"
            className="Button"
          />

          <input
            onClick={(e) => setHumor(e.target.value)}
            type="submit"
            value="humor"
            className="Button"
          />

          <input
            onClick={(e) => setLarg(e.target.value)}
            type="submit"
            value="larg"
            className="Button"
          />

          <input
            onClick={(e) => setLiar(e.target.value)}
            type="submit"
            value="liar"
            className="Button"
          />

          <input
            onClick={(e) => setPanda(e.target.value)}
            type="submit"
            value="panda"
            className="Button"
          />

          <input
            onClick={(e) => setPortion(e.target.value)}
            type="submit"
            value="portion"
            className="Button"
          />

          <input
            onClick={(e) => setStem(e.target.value)}
            type="submit"
            value="stem"
            className="Button"
          />

          <input
            onClick={(e) => setSuper(e.target.value)}
            type="submit"
            value="super"
            className="Button"
          />

          <input
            onClick={(e) => setSwitch(e.target.value)}
            type="submit"
            value="switch"
            className="Button"
          />

          <input
            onClick={(e) => setWise(e.target.value)}
            type="submit"
            value="wise"
            className="Button"
          />
        </div>
        {/* footer button code start here */}
        <div className="end-Buttons">
          <Button variant="outline-primary" className="one-Button">
            Remind me later
          </Button>
          <Link to='/testpage'><Button variant="primary" className="two-Button">
            Next
          </Button>
          </Link>
          {/* <Link to="./TestPage"><Button variant="primary">
            Next
          </Button></Link> */}
        </div>
      </div>
    </div>
  );
};
export default Ending;

