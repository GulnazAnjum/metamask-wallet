





import logo from './logo.svg';
import Child from "./Components/Third-Folder/Child"
 import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Singin from './Components/First-Folder/Singin';
import Password from './Components/Second-folder/Password';
 import Home from './Components/Third-Folder/Home';
 import Account from "./Components/Fourth-Folder/Account";
 import Ending  from './Components/Fifth-Folder/Ending';
 import TestPage from './Components/Six-Folder/TestPage';
 import Recive from './Components/Six-Folder/Page/Recive';
 import Buy from './Components/Six-Folder/Page/Buy';
 import Swap from './Components/Six-Folder/Page/Swap';
 import NewSend from './Components/Six-Folder/Page/NewSend';
 import Exchange from './Components/Six-Folder/Page/Exchange';
 import Token from './Components/Tokens/Token';
 import NFts from "./Components/Tokens/NFts"
 import TokensNft from "./Components/Tokens/TokensNft"
 
function App() {
  return (
    <div className="App">
 
     <BrowserRouter>
        <Routes>
          <Route   path="/" element={<Singin/>} />
          <Route   path="/password" element={<Password/>} />
          <Route path="/hhme" element={<Child/>} />
          <Route path="/blank" element={<Home/>} />
          <Route path="/account" element={<Account/>} />
          <Route path="/ending" element={<Ending/> } /> 
          <Route path="/testpage" element={<TestPage/> } /> 
          <Route exact path="/send" element={<NewSend />} />
          <Route exact  path="/buy" element={<Buy />} />
          <Route exact path="/exchange" element={<Exchange />} />
          <Route exact  path="/Receive" element={<Recive />} />
          <Route exact  path="/swap" element={<Swap />} />
          {/* -------Mayur code-------- */}
          <Route  path="/Token" element={<Token/>} />
          <Route exact path="/NFTS" element={<NFts />} />
        </Routes>
      </BrowserRouter> 
   {/* <BrowserRouter>
   <TokensNft />
       <Routes>
      
         <Route  path="/Token" element={<Token/>} />
         <Route exact path="/NFTS" element={<NFts />} />
       </Routes>
      
     </BrowserRouter> */}
 
    
     </div> 
  );
}

export default App;
