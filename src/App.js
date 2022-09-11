import logo from './logo.svg';
import './App.css';
import Home from "./Home";
import About from "./About";
import Team from "./Team";
import Faq from "./Faq";
import Contact from "./Contact";
import {BrowserRouter, Route, Routes} from "react-router-dom";


function App() {
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

export default App;
