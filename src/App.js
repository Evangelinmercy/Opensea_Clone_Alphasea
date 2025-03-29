import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfileSettings from "./Components/ProfileSettings/ProfileSettings";
import Profile from "./Components/Profile/Profile";
import Explore from "./Components/Explore/Explore";
import CollectionDetail from "./Components/Explore/CollectionDetail";
import CreateItem from "./Components/CreateItem/CreateItem";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import ForgetPassword from "./Components/ForgetPassword/ForgetPassword";
import ProductDetailMain from "./Components/ProductDetail/ProductDetailMain";
import ProductMenu from "./Components/ProductMenu/ProductMenu";
import CollectionStats from "./Components/CollectionStats/CollectionStats";
import CreateNft from "./Components/CreateNft/CreateNft";
import CreateHeader from "./Components/CreateNft/CreateHeader";
import CreateAdd from "./Components/CreateNft/CreateAdd";
import CreateCollection from "./Components/CreateNft/CreateCollection";
import HelpCenter from "./Components/HelpCenter/HelpCenter";
import WhatAreNfts from "./Components/Learn/WhatAreNfts";
import WatchList from "./Components/Watchlist/Watchlist";
import Deal from "./Components/Deal/Deal";
import LearnFooter from './Components/Learn/LearnFooter';
import About from "./Components/Company/About";
import LearnHomePage from "./Components/LearnHomePage/LearnHomePage";
import Terms from "./Components/Terms-condition/Terms-condition";
import PrivacyPolicy from "./Components/Privacy-policy/Privacy-policy";
import Blog from "./Components/Blog/Blog";
import GetStarted from "./Components/HelpCenter/GetStarted";
import DetailPage from "./Components/HelpCenter/DetailPage"


import Ventures from "./Components/Company/ventures";
import Careers from "./Components/Company/careers";
import HeaderStudio from "./Components/Studio/HeaderStudio";
import HeaderStudioCollections from "./Components/Studio/StudioCollections";
import Favourites from "./Components/Profile/Favourites";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/profilesettings" element={<ProfileSettings />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/watchlist" element={<WatchList />} />
          <Route path="/deal" element={<Deal />} />
          <Route path="/terms-condition" element={<Terms />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/learn-homepage" element={<LearnHomePage />} />
          <Route index="index" path="/" element={<Explore />} />
          <Route path="/collection-detail" element={<CollectionDetail />} />
          <Route path="/create-NFT" element={<CreateItem />} />
          <Route index="index" path="/login" element={<Login />} />
          <Route index="index" path="/register" element={<Register />} />
          <Route index="index" path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/productdetail" element={<ProductDetailMain />} />
          <Route path="/product-menu" element={<ProductMenu />} />
          <Route path="/collectionstats" element={<CollectionStats />} />
          <Route path="/createNft" element={<CreateNft />} />
          <Route path="/createHeader" element={<CreateHeader />} />
          <Route path="/createAdd" element={<CreateAdd />} />
          <Route path="/createcollection" element={<CreateCollection />} />
          <Route path="/helpcenter" element={<HelpCenter />} />
          <Route path="/what-are-nfts" element={<WhatAreNfts />} />
          <Route path="/learn-footer" element={<LearnFooter />} />
          <Route path="/about" element={<About />} />
          <Route path="/ventures" element={<Ventures />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/header-studio" element={<HeaderStudio />} />
          <Route path="/header-studio-Collections" element={<HeaderStudioCollections />}/>
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/detail-page-help-center" element={<DetailPage />} />
          <Route path="/favourites" element={<Favourites />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
