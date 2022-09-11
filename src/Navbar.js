import {Link} from "react-router-dom";
import "./Home.css"

function Navbar() {
    return (
        <>
            <div>
                <img className={"logo"} src={"./static/images/Logo.png"} alt={"Logo"}/>
                <div className={"navbar"}>
                    <Link to={'/'}>
                        <button className={"nav-buttons"}>Home</button>
                    </Link>
                    <Link to={'/About'}>
                        <button className={"nav-buttons"}>About</button>
                    </Link>
                    <Link to={'/Team'}>
                        <button className={"nav-buttons"}>Team</button>
                    </Link>
                    <Link to={'/FAQ'}>
                        <button className={"nav-buttons"}>FAQ</button>
                    </Link>
                    <Link to={'/Contact'}>
                        <button className={"nav-buttons"}>Contact</button>
                    </Link>
                </div>
            </div>
        </>
    )

}

export default Navbar;