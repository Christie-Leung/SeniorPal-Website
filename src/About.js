import "./Home.css"
import Navbar from "./Navbar"

export default function About() {
    return (
        <>
            <div className={"window-container"} style={{
                    backgroundColor: "#F7F2F3",
            }}>
                <Navbar position={"about"}/>
            </div>
        </>
    )
}