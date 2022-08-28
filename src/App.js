
import './App.css';
import PreNavbar from './components/PreNavbar';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Offers from './components/Offers';
import Heading from './components/Heading';
import StarProduct from './components/StarProduct';
import HotAccessoriesMenu from './components/HotAccessoriesMenu';
import HotAccessories from './components/HotAccessories';
// import {BrowserRouter,Switch} from "react-router-dom"
// import {Route} from "react-router-dom"
// import {Switch} from "react-router"
// import { Route, Switch } from "react-router";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import file from "./data/data.json"



function App() {
  return (
    <BrowserRouter>
      <PreNavbar/>
      <Navbar/>
      <Slider start={file.banner.start}/>
      <Offers offer={file.offer}/>
      <Heading Text="STAR PRODUCTS"/>
      <StarProduct starProduct={file.starProduct}/>
      <Heading Text="HOT ACCESORIES"/>
      <HotAccessoriesMenu/>
      <Routes>
        <Route exact path="/music"  element = {<HotAccessories music = {file.hotAccessories.music} musicCover = {file.hotAccessoriesCover.music}/>}/>

        {/* <Route exact path="/smartDevice" element={<HotAccessories smartDevice={file.hotAccessories.smartDevice} smartDeviceCover={file.hotAccessoriesCover.smartDevice}/>}/>
      
        <Route exact path="/home" element={<HotAccessories home={file.hotAccessories.home} homeCover={file.hotAccessoriesCover.home}/>}/>
      
        <Route exact path="/lifestyle" element={<HotAccessories lifeStyle={file.hotAccessories.lifeStyle} lifeStyleCover={file.hotAccessoriesCover.lifeStyle}/>}/>
      
        <Route exact path="/mobileAccessories" element={<HotAccessories mobileAccessories={file.hotAccessories.mobileAccessories} mobileAccessoriesCover={file.hotAccessoriesCover.mobileAccessories}/>}/> */}
      </Routes>


    </BrowserRouter>
    
  );
}

export default App;
