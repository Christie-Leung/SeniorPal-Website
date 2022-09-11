import "./Home.css"
import "./Team.css"
import Navbar from "./Navbar"

export default function Team() {
    return (
        <>
            <div className={"window-container"} style={{
                backgroundColor: "#F7F2F3",
            }}>
                <Navbar  position={"team"}/>
                <div style={{
                    position: "relative",
                        width: "100%",
                        height: "100%",
                }}>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        placeContent: "center",
                        alignItems: "center",
                        height: "90%",
                        backgroundColor: "rgba(30, 30, 30, 0.05)",
                    }}>
                        <text className={"founder-text"}>Co-founders</text>
                        <div className={"founders"}>
                            <div className={"headshot"}>
                                <img className={"headshot-image"} src={"./static/images/stephanie.jpeg"} alt={"Stephanie Headshot"}/>
                                <text className={"emails"}>stephanie@murphyshome.net</text>
                            </div>
                            <div className={"headshot"}>
                                <img className={"headshot-image"} src={"./static/images/catherine.jpg"} alt={"Catherine Headshot"}/>
                                <text className={"emails"}>catherine.mah16@gmail.com</text>
                            </div>
                            <div className={"headshot"}>
                                <img className={"headshot-image"} src={"./static/images/christie.jpeg"} alt={"Christie Headshot"}/>
                                <text className={"emails"}>christie@murphyshome.net </text>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}