import React, { createContext, useRef } from "react";
export const Projects = createContext();

// Project: Covid-19
import Covid19Icon from "../public/projects/covid19/icon.png";
import Covid19Splash from "../public/projects/covid19/splash.jpg";
import Covid19SplashMobile from "../public/projects/covid19/splashMobile.jpg";
import Covid19Screenshot1 from "../public/projects/covid19/screenshot1.jpg";
import Covid19Screenshot2 from "../public/projects/covid19/screenshot2.jpg";
import Covid19Screenshot3 from "../public/projects/covid19/screenshot3.jpg";
import Covid19Screenshot4 from "../public/projects/covid19/screenshot4.jpg";
import Covid19Screenshot5 from "../public/projects/covid19/screenshot5.jpg";
import Covid19Screenshot6 from "../public/projects/covid19/screenshot6.jpg";
import Covid19Video from "../public/projects/covid19/video.mp4";
import Covid19QR from "../public/projects/covid19/qr.png";

// Project: MatchEat
import MatchEatIcon from "../public/projects/matchEat/icon.png";
import MatchEatSplash from "../public/projects/matchEat/splash.jpg";
import MatchEatSplashMobile from "../public/projects/matchEat/splashMobile.jpg";
import MatchEatScreenshot1 from "../public/projects/matchEat/screenshot1.jpg";
import MatchEatScreenshot2 from "../public/projects/matchEat/screenshot2.jpg";
import MatchEatScreenshot3 from "../public/projects/matchEat/screenshot3.jpg";
import MatchEatScreenshot4 from "../public/projects/matchEat/screenshot4.jpg";
import MatchEatScreenshot5 from "../public/projects/matchEat/screenshot5.jpg";
import MatchEatScreenshot6 from "../public/projects/matchEat/screenshot6.jpg";
import MatchEatScreenshot7 from "../public/projects/matchEat/screenshot7.jpg";
import MatchEatVideo from "../public/projects/matchEat/video.mp4";
import MatchEatQR from "../public/projects/matchEat/qr.png";

// Project: GodHead
import GodHeadIcon from "../public/projects/godHead/icon.png";
import GodHeadSplash from "../public/projects/godHead/splash.jpg";
import GodHeadSplashMobile from "../public/projects/godHead/splashMobile.jpg";
import GodHeadScreenshot1 from "../public/projects/godHead/screenshot1.jpg";
import GodHeadScreenshot2 from "../public/projects/godHead/screenshot2.jpg";
import GodHeadScreenshot3 from "../public/projects/godHead/screenshot3.jpg";
import GodHeadScreenshot4 from "../public/projects/godHead/screenshot4.jpg";
import GodHeadQR from "../public/projects/godHead/qr.png";

// Project: CryptoPlace
import CryptoPlaceIcon from "../public/projects/cryptoPlace/icon.png";
import CryptoPlaceSplash from "../public/projects/cryptoPlace/splash.jpg";
import CryptoPlaceSplashMobile from "../public/projects/cryptoPlace/splashMobile.jpg";
import CryptoPlaceScreenshot1 from "../public/projects/cryptoPlace/screenshot1.jpg";
import CryptoPlaceScreenshot2 from "../public/projects/cryptoPlace/screenshot2.jpg";
import CryptoPlaceScreenshot3 from "../public/projects/cryptoPlace/screenshot3.jpg";
import CryptoPlaceQR from "../public/projects/cryptoPlace/qr.png";

// Project: g-stocks
import GstocksIcon from "../public/projects/gstocks/icon.png";
import GstocksSplash from "../public/projects/gstocks/splash.jpg";
import GstocksSplashMobile from "../public/projects/gstocks/splashMobile.jpg";
import GstocksScreenshot1 from "../public/projects/gstocks/screenshot1.jpg";
import GstocksScreenshot2 from "../public/projects/gstocks/screenshot2.jpg";
import GstocksScreenshot3 from "../public/projects/gstocks/screenshot3.jpg";
import GstocksScreenshot4 from "../public/projects/gstocks/screenshot4.jpg";
import GstocksScreenshot5 from "../public/projects/gstocks/screenshot5.jpg";
import GstocksScreenshot6 from "../public/projects/gstocks/screenshot6.jpg";

// Project: Spot
import SpotIcon from "../public/projects/spot/icon.png";
import SpotSplash from "../public/projects/spot/splash.jpg";
import SpotSplashMobile from "../public/projects/spot/splashMobile.jpg";
import SpotScreenshot1 from "../public/projects/spot/screenshot1.jpg";
import SpotScreenshot2 from "../public/projects/spot/screenshot2.jpg";
import SpotScreenshot3 from "../public/projects/spot/screenshot3.jpg";
import SpotScreenshot4 from "../public/projects/spot/screenshot4.jpg";
import SpotScreenshot5 from "../public/projects/spot/screenshot5.jpg";
import SpotScreenshot6 from "../public/projects/spot/screenshot6.jpg";
import SpotVideo from "../public/projects/spot/video.mp4";

// Project: Reddon
import ReddonIcon from "../public/projects/reddon/icon.png";
import ReddonSplash from "../public/projects/reddon/splash.jpg";
import ReddonSplashMobile from "../public/projects/reddon/splashMobile.jpg";
import ReddonScreenshot1 from "../public/projects/reddon/screenshot1.jpg";
import ReddonScreenshot2 from "../public/projects/reddon/screenshot2.jpg";
import ReddonScreenshot3 from "../public/projects/reddon/screenshot3.jpg";
import ReddonScreenshot4 from "../public/projects/reddon/screenshot4.jpg";

// Project: Portfolio
import PortfolioIcon from "../public/projects/portfolio/icon.png";
import PortfolioSplash from "../public/projects/portfolio/splash.jpg";
import PortfolioSplashMobile from "../public/projects/portfolio/splashMobile.jpg";

const ProjectsProvider = (props) => {
    const webDev = useRef([
        {
            title: "Covid-19",
            icon: Covid19Icon,
            subtitle: "Check how the Covid-19 virus is affecting each Province in Spain.",
            description: [
                "Get information about how Covid-19 is affecting every Province in Spain in the last 14 days. Get updated numbers every day about the current state of the virus and track its progress.",
                "If you have to travel around Spain, check the state of Covid-19 in your destinations, with some guides about what measures you should take once there.",
                "If you just caught Covid-19, the app shows you useful information about how to proceed.",
            ],
            links: null,
            qr: {
                url: "https://estado-covid.netlify.app/",
                qr: Covid19QR,
            },
            video: Covid19Video,
            screenshots: [
                Covid19Screenshot1,
                Covid19Screenshot2,
                Covid19Screenshot3,
                Covid19Screenshot4,
                Covid19Screenshot5,
                Covid19Screenshot6,
            ],
            horizontal: false,
            process:
                "Covid-19 is a Progressive Web App made with ReactJS targeting mobile devices. You can add it as an app to your Android or iPhone by scanning this QR and adding the page to your Home Screen.",
        },
        {
            title: "MatchEat",
            icon: MatchEatIcon,
            subtitle: "Find the restaurant around you that matches your group best.",
            description: [
                "Having trouble choosing a restaurant with your friends or your significant other? Use MatchEat to find the restaurant around you that the group likes the most.",
                "Everyone joins a room at the same time from their phones. Each of you will see the same list of restaurants and will give each one a Like, Love or Nope. When everyone is finished, the restaurants will be ranked, and you can get directions to any of them.",
            ],
            links: null,
            qr: {
                url: "http://matcheat.netlify.app/",
                qr: MatchEatQR,
            },
            video: MatchEatVideo,
            screenshots: [
                MatchEatScreenshot1,
                MatchEatScreenshot2,
                MatchEatScreenshot3,
                MatchEatScreenshot4,
                MatchEatScreenshot5,
                MatchEatScreenshot6,
                MatchEatScreenshot7,
            ],
            horizontal: false,
            process:
                "MatchEat is a Progressive Web App made with ReactJS targeting mobile devices. You can add it as an app to your Android or iPhone by scanning this QR and adding the page to your Home Screen.",
        },
        {
            title: "GodHead",
            icon: GodHeadIcon,
            subtitle: "Find out what each item does in The Binding of Isaac: Repentance.",
            description: [
                "Having trouble remembering what one of the more than seven hundred items does in the game? Use this app to quickly find out everything about it.",
                "You can search the items by their icon, by their name or subtitle.",
            ],
            links: null,
            qr: {
                url: "http://godhead.netlify.app/",
                qr: GodHeadQR,
            },
            video: null,
            screenshots: [GodHeadScreenshot1, GodHeadScreenshot2, GodHeadScreenshot3, GodHeadScreenshot4],
            horizontal: true,
            process:
                "GodHead is a Progressive Web App made with ReactJS targeting mobile & desktop devices. You can add it as an app to your PC, Android, or iPhone by scanning this QR and adding the page to your Home Screen.",
        },
        {
            title: "CryptoPlace",
            icon: CryptoPlaceIcon,
            subtitle: "A recreation of the r/place experiment where every pixel is an NFT (Non Fungible Token).",
            description: [
                "Each pixel in the 256x256 canvas is owned by someone who can change its color. You can buy a group of them or work together to create pixel art.",
                "CryptoPlace is a decentralized app (DApp) that uses Smart Contracts and the ERC721 standard to make sure each pixel is really owned by the person that mints it or buys it.",
            ],
            links: null,
            qr: {
                url: "http://cryptoplace.netlify.app/",
                qr: CryptoPlaceQR,
            },
            video: null,
            screenshots: [CryptoPlaceScreenshot1, CryptoPlaceScreenshot2, CryptoPlaceScreenshot3],
            horizontal: true,
            process:
                "CryptoPlace is a DApp made using ReactJS for the front end and Solidity for the Smart Contracts. It hasn't yet been deployed to the Ethereum network. Coming soon.",
        },
        {
            title: "g-stocks",
            icon: GstocksIcon,
            subtitle:
                "Make your own Valuations of Markets, ETFs, and Companies in seconds, to know if they are cheap or expensive today.",
            description: [
                "g-stocks empowers individual investors with the most advanced and intuitive tool to make valuations of markets and companies. Its unique design allows you to make optimal investment decisions fast.",
            ],
            links: null,
            qr: null,
            video: null,
            screenshots: [
                GstocksScreenshot1,
                GstocksScreenshot2,
                GstocksScreenshot3,
                GstocksScreenshot4,
                GstocksScreenshot5,
                GstocksScreenshot6,
            ],
            horizontal: true,
            process:
                "g-stocks is a tool made with JavaScript targeting desktop devices. It is still in development and can't be accessed yet.",
        },
        {
            title: "Spot",
            icon: SpotIcon,
            subtitle: "A minimal and traditional client for Spotify.",
            description: [
                "Spot is an app that connects to your current Spotify account and lets you explore your music using a traditional library with a minimalistic design.",
            ],
            links: null,
            qr: null,
            video: SpotVideo,
            screenshots: [
                SpotScreenshot1,
                SpotScreenshot2,
                SpotScreenshot3,
                SpotScreenshot4,
                SpotScreenshot5,
                SpotScreenshot6,
            ],
            horizontal: false,
            process:
                "Spot is a Progressive Web App made with ReactJS targeting mobile devices. It is a work in progress that is not yet available for public use.",
        },
        {
            title: "Reddon",
            icon: ReddonIcon,
            subtitle: "A client for Reddit that navigates posts horizontally.",
            description: [
                "Reddon is an app that connects to your current Reddit account and lets you navigate the most recent posts using horizontal scrolling.",
            ],
            links: null,
            qr: null,
            video: null,
            screenshots: [ReddonScreenshot1, ReddonScreenshot2, ReddonScreenshot3, ReddonScreenshot4],
            horizontal: false,
            process:
                "Reddon is a Progressive Web App made with ReactJS targeting mobile devices. It is a work in progress that is not yet available for public use.",
        },
        {
            title: "Portfolio",
            icon: PortfolioIcon,
            subtitle: "A showcase of different projects I've been involved in.",
            description: [
                "I've divided the projects in three sections, Web Development, Game Development & Product Design. Each card shows you a brief explanation of each project with some screenshots.",
            ],
            links: null,
            qr: null,
            video: null,
            screenshots: null,
            horizontal: true,
            process: "This portfolio is a webpage build using ReactJS.",
        },
    ]);

    return (
        <Projects.Provider
            value={{
                webDev,
            }}
        >
            {props.children}
        </Projects.Provider>
    );
};

export default ProjectsProvider;
