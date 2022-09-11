import {Link} from "react-router-dom";
import "./Home.css"


function Navbar({position}) {

    return (
        <>
            <div>
                <img className={"logo"} src={"./static/images/Logo.png"} alt={"Logo"}/>
                <div style={{
                    position: "absolute",
                    display: "flex",
                    placeContent: "center",
                    alignItems: "center",
                    padding: "0.5% 1% 0%",
                    width: "100%",
                    height: "7%"
                }}>
                    <div className={"navbar"}>
                        <Link to={'/'}>
                            <div className={position === "home" ? "nav-active-buttons" : "nav-buttons"}>
                                <button className={position === "home" ? "nav-active-text" : "nav-text-buttons"} id={"home"}> Home</button>
                            </div>
                        </Link>
                        <Link to={'/About'}>
                            <div className={position === "about" ? "nav-active-buttons" : "nav-buttons"}>
                                <button className={position === "about" ? "nav-active-text" : "nav-text-buttons"} id={"about"}> About</button>
                            </div>
                        </Link>
                        <Link to={'/Team'}>
                            <div className={position === "team" ? "nav-active-buttons" : "nav-buttons"}>
                                <button className={position === "team" ? "nav-active-text" : "nav-text-buttons"} id={"team"}> Team</button>
                            </div>
                        </Link>
                        <Link to={'/FAQ'}>
                            <div className={position === "faq" ? "nav-active-buttons" : "nav-buttons"}>
                                <button className={position === "faq" ? "nav-active-text" : "nav-text-buttons"} id={"faq"}> FAQ</button>
                            </div>
                        </Link>
                        <Link to={'/Contact'}>
                            <div className={position === "contact" ? "nav-active-buttons" : "nav-buttons"}>
                                <button className={position === "contact" ? "nav-active-text" : "nav-text-buttons"} id={"contact"}> Contact</button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Navbar;