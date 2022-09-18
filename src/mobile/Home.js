//import {useState} from "react";
import '../desktop/Home.css'
import Navbar from "./Navbar";

function Home() {
    const inDev = false;

    return (
        <>
            <div className={"window-container"} style={{
                backgroundColor: "#fcfbfb",
                display: "flex",
                flexDirection: "column",
                overflowY: "scroll",
                alignItems: "center",
                placeContent: "center"
            }}>
                <div style={{
                    paddingTop: "2%",
                    paddingLeft: "5%",
                    paddingRight: "5%",
                    display: "flex",
                    alignItems: "center",
                    height: "fit-content"
                }}>
                    <text style={{
                        fontSize: "2vw",
                        fontStyle: "normal",
                        fontWeight: "300",
                        lineHeight: "4vw",
                        padding: "inherit"
                    }}>
                        Hello! <br/>
                        Our website is currently under development. <br/>
                        We hope to provide you with an aesthetic and detailed website to ensure that
                        your experience with us is welcoming and warm so please be patient with us!
                    </text>
                </div>
                <div style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <img src={"./static/images/Logo.png"} alt={"Logo"} style={{
                        height: "75vw",
                        width: "75vw",
                        paddingTop: "5%",
                        paddingBottom: "5%",
                    }}/>
                    <text style={{
                        fontSize: "1.4vw",
                        fontStyle: "normal",
                        fontWeight: "300",
                        paddingBottom: "10%",
                    }}>A kind way to send a virtual HUG - Heartfelt, Unique, and Generous.
                    </text>
                </div>
            </div>
        </>
    )
}

export default Home;
