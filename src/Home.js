//import {useState} from "react";
import './Home.css'
import {isMobile} from "react-device-detect";
import Navbar from "./Navbar";

function Home() {
    const inDev = false;

    if (isMobile) {
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
    } else {
        return (
        <>
            {inDev ?
                <div className={"window-container"} style={{
                            backgroundColor: "#fcfbfb",
                            placeContent: "center",
                            display: "flex"
                        }}>
                            <div style={{
                                width: "fit-content",
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                                paddingRight: "5%",
                                alignItems: "center",
                                justifyContent: "center"
                            }}>
                                <img src={"./static/images/Logo.png"} alt={"Logo"} style={{
                                    height: "75vh",
                                    width: "75vh",
                                    paddingTop: "5%",
                                    paddingBottom: "5%",
                                }}/>
                                <text style={{
                                    fontSize: "1.4vw",
                                    fontStyle: "normal",
                                    fontWeight: "300"

                                }}>A kind way to send a virtual HUG - Heartfelt, Unique, and Generous.
                                </text>
                            </div>
                            <div style={{
                                width: "calc(100% / 2.5)",
                                height: "100%",
                                display: "flex",
                                alignItems: "center"
                            }}>
                                <text style={{
                                    fontSize: "2vw",
                                    fontStyle: "normal",
                                    fontWeight: "300",
                                    lineHeight: "7vh"
                                }}>
                                    Hello! <br/>
                                    Our website is currently under development. <br/>
                                    We hope to provide you with an aesthetic and detailed website to ensure that
                                    your experience with us is welcoming and warm so please be patient with us!
                                </text>
                            </div>
                        </div> : 
                <div className={"window-container"} style={{
                    backgroundColor: "#F7F2F3",
                }}>
                    <Navbar position={"home"}/>
                    <div style={{
                        position: "relative",
                        width: "100%",
                        height: "100%",
                    }}>
                        <div style={{
                            backgroundColor: "rgba(30, 30, 30, 0.2)",
                            width: "100%",
                            height: "inherit",
                            position: "absolute",
                        }}>
                            <img src={"./static/images/LetterWriting.jpg"} alt={"Background"} style={{
                                opacity: 0.35,
                                width: "100%",
                            }}/>
                        </div>
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            width: "100%",
                            height: "85%",
                            position: "absolute",
                            alignItems: "center",
                            placeContent: "center",
                        }}>
                            <text className={"title"}>Senior Pal</text>
                            <text className={"description"}>A kind way to send a virtual HUG - Heartfelt, Unique, and Generous.</text>
                        </div>
                    </div>


                </div>
            }
        </>
    )
    }
}

export default Home;

/*
 <div className={"navbar"}>
                <button className={"nav-buttons"}>Home</button>
                <Link to={'About'}>
                    <button className={"nav-buttons"}>About</button>
                </Link>
                <Link to={'Team'}>
                    <button className={"nav-buttons"}>Team</button>
                </Link>
                <Link to={'FAQ'}>
                    <button className={"nav-buttons"}>FAQ</button>
                </Link>
                <Link to={'Contact'}>
                    <button className={"nav-buttons"}>Contact</button>
                </Link>
                <text>Hi</text>
            </div>
 */