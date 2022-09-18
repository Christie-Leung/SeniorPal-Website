//import {useState} from "react";
import './Home.css'
import {isMobile} from "react-device-detect";
import Navbar from "./Navbar";

function Home() {
    const inDev = false;
    return (
        <>
            {inDev ?
                <div className={"window-container"} style={{
                    backgroundColor: "#fcfbfb",
                    placeContent: "center",
                    display: "flex",
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

                // !!! Website Home Page !!!
                <div className={"window-container"} style={{
                    backgroundColor: "#F7F2F3",
                    overflowY: "scroll",
                    scrollSnapType: "y mandatory",
                }}>

                    <Navbar position={"home"}/>
                    <section style={{
                        position: "relative",
                        marginTop: "",
                        width: "100%",
                        height: "116%",
                        scrollSnapAlign: "start",
                    }}>
                        <div style={{
                            backgroundColor: "rgba(30, 30, 30, 0.2)",
                            width: "100%",
                            height: "100%",
                        }}>
                            <img src={"./static/images/LetterWriting.jpg"} alt={"Background"} style={{
                                opacity: 0.35,
                                objectFit: "fill",
                                height: "100%",
                                width: "100%",
                                position: "static",
                            }}/>
                        </div>
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            width: "100%",
                            marginTop: "4.6%",
                            height: "90%",
                            position: "absolute",
                            alignItems: "center",
                            placeContent: "center",
                            scrollSnapAlign: "start",
                        }}>
                            <text className={"title"}>Senior Pal</text>
                            <text className={"description"}>A kind way to send a virtual HUG - Heartfelt, Unique, and
                                Generous.
                            </text>
                        </div>
                    </section>
                    <section style={{
                        position: "relative",
                        height: "100%",
                        scrollSnapAlign: "start",
                    }}>
                        <div className={"whoAreWe"}>
                            <div style={{
                                width: "100%",
                                height: "100%",
                                position: "relative",
                                display: "flex",
                            }}>
                                <img src={"./static/images/Logo.png"} alt={"Logo"} style={{
                                    position: "relative",
                                    padding: "10%",
                                    objectFit: "contain",
                                    width: "100%",
                                }}/>
                            </div>
                            <div style={{
                                height: "100%",
                                padding: "0% 2%",
                                position: "relative",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                            }}>
                                <h1>Who are we?</h1>
                                <h2>
                                    We are young individuals from Edmonton running this non-profit organization in hopes of bringing love and joy to seniors.
                                    We have noticed over these past few years that the pandemic has made it hard to visit loved ones, especially seniors,
                                    as they are the most vulnerable to COVID-19. Therefore, we wanted to incorporate this idea of heartfelt, unique,
                                    and generous cards and letters, to send to seniors as a way of giving them a virtual hug. </h2>
                            </div>

                        </div>
                    </section>
                </div>
            }
        </>
    )
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