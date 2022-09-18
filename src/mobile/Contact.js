import "../desktop/Home.css"
import Navbar from "./Navbar"

export default function Contact() {
    return (
        <>
            <div className={"window-container"} style={{
                    backgroundColor: "#F7F2F3",
            }}>
                <Navbar position={"contact"}/>
            </div>
        </>
    )
}