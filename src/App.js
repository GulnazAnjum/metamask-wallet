
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
 import AddToken from './Components/Six-Folder/Page/AddToken';
import NftsToken from './Components/Six-Folder/Page/NftsToken';
 import NewSend from './Components/Six-Folder/Page/NewSend';
 import Exchange from './Components/Six-Folder/Page/Exchange';
 import CreateAccount from './Components/ProfilePages/CreateAccount';
 import ImportAccount from './Components/ProfilePages/ImportAccount';
 import Settings from './Components/ProfilePages/Settings';
 import Generalpage from "./Components/ProfilePages/SettingsPage/Generalpage";
import NetworksPage from "./Components/ProfilePages/SettingsPage/NetworksPage";
import AboutPage from "./Components/ProfilePages/SettingsPage/AboutPage";
import Bitcoin from "./Components/Tokens/Bitcoin"
import Etherium from "./Components/Tokens/Etherium";
import SmartChain from "./Components/Tokens/SmartChain";
import BitcoinCash from "./Components/Tokens/BitcoinCash";
import BNB from "./Components/Tokens/BNB"
import Index from "./Components/index/Index";
import NewAccount from "./Components/ProfilePages/SettingsPage/NewAccount";
 
function App() {
  return (
    <div className="App">
           {/* <Index/> */}
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Singin/>} />
          <Route path="/password" element={<Password/>} />
          <Route path="/hhme" element={<Child/>} />
          <Route path="/blank" element={<Home/>} />
          <Route path="/account" element={<Account/>} />
          <Route path="/Index" element={<Index/>} />
          <Route path="/ending" element={<Ending/> } /> 
          <Route path="/testpage" element={<TestPage/> } /> 
          <Route exact path="/send" element={<NewSend />} />
          <Route exact  path="/buy" element={<Buy />} />
          <Route exact path="/exchange" element={<Exchange />} />
          <Route exact  path="/Receive" element={<Recive />} />
          <Route exact  path="/swap" element={<Swap />} />

          <Route exact path="/addtoken" element={<AddToken />} />
          <Route exact path="/nftstoken" element={<NftsToken />} />
          <Route exact path="/createaccount" element={<CreateAccount />} />
          <Route exact path="/importaccount" element={<ImportAccount />} />
          <Route exact path="/NewAccount" element={<NewAccount />} />
          <Route exact path="/settings" element={<Settings />} />
          <Route exact path="/aboutpage" element={<AboutPage />} />
          <Route exact path="/generalpage" element={<Generalpage />} />
          <Route exact path="/networkpage" element={<NetworksPage />} />
          <Route exact path="/Bitcoin" element={<Bitcoin />} />
          <Route exact path="/Etherium" element={<Etherium />} />
          <Route exact path="/SmartChain" element={<SmartChain />} />
          <Route exact path="/BitcoinCash" element={<BitcoinCash />} />
          <Route exact path="/BNB" element={<BNB/>} />
         

        </Routes>
      </BrowserRouter> 
     </div> 
  );
}

export default App;

