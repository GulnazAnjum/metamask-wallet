import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "../../Components/Third-Folder/Pages/About";
import Code from "../../Components/Third-Folder/Pages/Code";
import Help from "../../Components/Third-Folder/Pages/Help";
import Blog from "../../Components/Third-Folder/Pages/Blog";
import Homes from "./Pages/Homes";
import Child from "./Child";
const Home = () => {
 
  return (
    <React.Fragment>
      <Router>
        <Child />
        <Routes>
          <Route exact path="/Home" element={<Homes />} />
          <Route exact path="/Blog" element={<Blog />} />
          <Route exact path="/Help" element={<Help />} />
          <Route exact path="/Code" element={<Code />} />
          <Route exact path="/About" element={<About />} />
        </Routes>

       
      </Router>
  
     
    </React.Fragment>
    
  );
};

export default Home;
