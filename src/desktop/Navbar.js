import {Link} from "react-router-dom";
import "./Home.css"


function Navbar({position}) {

    return (
        <>
            <div style={{
                position: "absolute",
                zIndex: "100",
                display: "flex",
                width: "100%",
                height: "7%",
                padding: "0.5% 0%",
                background: "rgba(248, 242, 242, 0.64)",
                boxShadow: "0px 4px 24px -1px rgba(0, 0, 0, 0.25)",
            }}>
                <img className={"logo"} src={"./static/images/Logo.png"} alt={"Logo"}/>
                <div style={{
                    display: "flex",
                    placeContent: "center",
                    alignItems: "center",
                    placeContent: "center",
                    alignItems: "center",
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                }}>
                    <div className={"navbar"}>
                        <Link to={'/'}>
                            <div className={position === "home" ? "nav-active-buttons" : "nav-buttons"}>
                                <button className={position === "home" ? "nav-active-text" : "nav-text-buttons"} id={"home"}>HOME</button>
                            </div>
                        </Link>
                        <Link to={'/About'}>
                            <div className={position === "about" ? "nav-active-buttons" : "nav-buttons"}>
                                <button className={position === "about" ? "nav-active-text" : "nav-text-buttons"} id={"about"}>ABOUT</button>
                            </div>
                        </Link>
                        <Link to={'/Team'}>
                            <div className={position === "team" ? "nav-active-buttons" : "nav-buttons"}>
                                <button className={position === "team" ? "nav-active-text" : "nav-text-buttons"} id={"team"}>TEAM</button>
                            </div>
                        </Link>
                        <Link to={'/FAQ'}>
                            <div className={position === "faq" ? "nav-active-buttons" : "nav-buttons"}>
                                <button className={position === "faq" ? "nav-active-text" : "nav-text-buttons"} id={"faq"}>FAQ</button>
                            </div>
                        </Link>
                        <Link to={'/Contact'}>
                            <div className={position === "contact" ? "nav-active-buttons" : "nav-buttons"}>
                                <button className={position === "contact" ? "nav-active-text" : "nav-text-buttons"} id={"contact"}>CONTACT</button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Navbar;