import { useContext, useState, useRef } from "react";
import cx from "classnames";
import Head from "next/head";
import useQueryClasses from "../hooks/useQueryClasses";
import Header from "../components/Header";
import Slider from "../components/Slider";
import Popup from "../components/Popup";
import Profile from "../components/Profile";
import Footer from "../components/Footer";
import { Projects } from "../contexts/Projects";

export default function Home() {
    const { webDev, gameDev, design } = useContext(Projects);
    const queryClasses = useQueryClasses();

    const currentPopupData = useRef({});
    const [popupVisible, setPopupVisible] = useState(false);

    const handleElemClicked = (data) => {
        currentPopupData.current = data;
        setPopupVisible(true);
    };

    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=0"
                />
                <meta name="theme-color" content="#131520" />
                <meta name="description" content="A showcase of different projects I've been involved in." />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-title" content="Carles Rojas - Portfolio" />

                <link rel="icon" href="/favicon.ico" />
                <link rel="manifest" href="/manifest.json" />
                <link rel="apple-touch-icon" href="/appleIcon120.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/appleIcon180.png" />
                <link rel="apple-touch-icon" sizes="152x152" href="/appleIcon152.png" />
                <link rel="apple-touch-icon" sizes="167x167" href="/appleIcon167.png" />

                <title>Carles Rojas - Portfolio</title>
            </Head>

            <main className={cx("home", queryClasses)}>
                <Header />
                <Slider elems={webDev.current} title="Web Development" onElemClick={handleElemClicked} />
                <Slider elems={gameDev.current} title="Game Development" onElemClick={handleElemClicked} />
                <Slider elems={design.current} title="Product Design" onElemClick={handleElemClicked} />

                <Popup visible={popupVisible} setVisible={setPopupVisible}>
                    <Profile data={currentPopupData.current} setVisible={setPopupVisible} />
                </Popup>

                <Footer />
            </main>
        </>
    );
}
