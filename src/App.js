
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import ConfirmPassword from './Components/Confirm-Password/Confirm-Password';
import Password from './Components/Confirm-Password/Password';
import Account from "./Components/Recovery/Account";
import Ending from './Components/Confirm-Recovery/Ending';
import TestPage from './Components/Six-Folder/TestPage';
import Recive from './Components/Six-Folder/Page/Recive';
import History from './Components/Six-Folder/Page/History';
import Swap from './Components/Six-Folder/Page/Swap';
import AddToken from './Components/Six-Folder/Page/AddToken';
import NftsToken from './Components/Six-Folder/Page/NftsToken';
import Exchange from './Components/Six-Folder/Page/Exchange';
import CreateAccount from './Components/ProfilePages/CreateAccount';
import ImportAccount from './Components/ProfilePages/ImportAccount';
import Settings from './Components/ProfilePages/Settings';
import Generalpage from "./Components/ProfilePages/SettingsPage/Generalpage";
import NetworksPage from "./Components/ProfilePages/SettingsPage/NetworksPage";
import AboutPage from "./Components/ProfilePages/SettingsPage/AboutPage";
import Etherium from "./Components/Tokens/Etherium";
import SmartChain from "./Components/Tokens/SmartChain";
import BitcoinCash from "./Components/Tokens/BitcoinCash";
import BNB from "./Components/Tokens/BNB"
import Index from "./Components/index/Index";
import Assets from "./Components/Tokens/Assets";
import AssetsSend from "./Components/Tokens/AssetsSend";
import ReciveQrcode from "./Components/Six-Folder/Page/ReciveQrcode";
import BtcExchange from "./Components/Tokens/BtcExchange";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/ConfirmPassword" element={<ConfirmPassword />} />
          <Route path="/Password" element={<Password />} />
          <Route path="/account" element={<Account />} />
          <Route path="/" element={<Index />} />
          <Route path="/ending" element={<Ending />} />
          <Route path="/testpage" element={<TestPage />} />
          <Route exact path="/history" element={<History />} />
          <Route exact path="/exchange" element={<Exchange />} />
          <Route exact path="/Receive" element={<Recive />} />
          <Route exact path="/swap" element={<Swap />} />
          <Route exact path="/addtoken" element={<AddToken />} />
          <Route exact path="/nftstoken" element={<NftsToken />} />
          <Route exact path="/createaccount" element={<CreateAccount />} />
          <Route exact path="/importaccount" element={<ImportAccount />} />
          <Route exact path="/settings" element={<Settings />} />
          <Route exact path="/aboutpage" element={<AboutPage />} />
          <Route exact path="/generalpage" element={<Generalpage />} />
          <Route exact path="/networkpage" element={<NetworksPage />} />
          <Route exact path="/AssetsSend" element={<AssetsSend />} />
          <Route exact path="/Assets" element={<Assets />} />
          <Route exact path="/Etherium" element={<Etherium />} />
          <Route exact path="/SmartChain" element={<SmartChain />} />
          <Route exact path="/BitcoinCash" element={<BitcoinCash />} />
          <Route exact path="/BNB" element={<BNB />} />
          <Route exact path="/ReciveQrcode" element={<ReciveQrcode />} />
          <Route exact path="/BtcExchange" element={<BtcExchange />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

