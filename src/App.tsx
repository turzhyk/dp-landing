import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.css";
import BusinesscardCalculator from "./Calculators/BusinesscardCalculator";
import { BrowserRouter, Routes, Route, Link, Outlet, useLocation } from "react-router-dom";
import Home from "./Components/Home";
import { Header } from "./Components/Header/Header";
import BannerCalculator from "./Calculators/BannerCalculator";
import StickerCalculator from "./Calculators/StickerCalculator";
import FlyerCalculator from "./Calculators/FlyerCalculator";
import { Services } from "./Components/Services";
import WindowStickerCalculator from "./Calculators/WindowStickerCalculator";
import OfferPage from "./Components/Offer/OfferPage";

// interface IServiceLink {
//   name:string;
//   url:string;
// }
// const ServiceLinks:IServiceLink[] = [
//   {name:"",url:""},
// ];


function App() {
  return (
    <>
      <BrowserRouter>
        {/* <header>
          <Link to={"/"}>Digital Printing</Link>
          <div className="flex gap-4">
            <a>O Nas</a>
            <a>Dostawa</a>
          </div>
          <div className="flex items-center gap-4">
            <img src="/svg/phone_icon.svg" width={30} />
            <span>732 853 845</span>
          </div>
        </header> */}
        <Header />
        <Routes>
          <Route path="/offer" element={<OfferPage/>}/>
          <Route path="/services" element={<Services />}>
            <Route path="wizytowki" element={<BusinesscardCalculator />} />
            <Route path="plakaty" element={<BannerCalculator />} />
            <Route path="naklejki" element={<StickerCalculator />} />
            <Route path="ulotki" element={<FlyerCalculator />} />
             <Route path="witryna" element={<WindowStickerCalculator />} />
          </Route>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
