import logo from './logo.svg';
import './App.css';
import Home from "./desktop/Home";
import About from "./desktop/About";
import Team from "./desktop/Team";
import Faq from "./desktop/Faq";
import Contact from "./desktop/Contact";
import MobileHome from "./mobile/Home";
import MobileAbout from "./mobile/About";
import MobileTeam from "./mobile/Team";
import MobileFaq from "./mobile/Faq";
import MobileContact from "./mobile/Contact";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {isMobile} from "react-device-detect";


function App() {
    if (isMobile) {
        return (
             <BrowserRouter>
                <Routes>
                    <Route exact path={"/about"} element={<MobileAbout/>}/>
                    <Route exact path={"/team"} element={<MobileTeam/>}/>
                    <Route exact path={"/faq"} element={<MobileFaq/>}/>
                    <Route exact path={"/contact"} element={<MobileContact/>}/>
                    <Route exact path={"/"} element={<MobileHome/>}/>
                    <Route exact path={"*"} element={
                        <>
                            <main>This page doesn't exist</main>
                        </>
                    }/>
                </Routes>
            </BrowserRouter>
        )
    } else {
        return (
            <BrowserRouter>
                <Routes>
                    <Route exact path={"/about"} element={<About/>}/>
                    <Route exact path={"/team"} element={<Team/>}/>
                    <Route exact path={"/faq"} element={<Faq/>}/>
                    <Route exact path={"/contact"} element={<Contact/>}/>
                    <Route exact path={"/"} element={<Home/>}/>
                    <Route exact path={"*"} element={
                        <>
                            <main>This page doesn't exist</main>
                        </>
                    }/>
                </Routes>
            </BrowserRouter>
        );
    }

}

export default App;
