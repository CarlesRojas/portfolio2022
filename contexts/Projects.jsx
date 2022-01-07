import React, { createContext, useRef } from "react";
export const Projects = createContext();

const ProjectsProvider = (props) => {
    const studies = useRef([
        {
            title: "Bachelor's Degree in informatics Engineering",
            institution: "Facultat d'Informàtica de Barcelona",
            initialYear: 2015,
            finalYear: 2018,
        },
        {
            title: "Bachelor's Degree in Product Design",
            institution: "EINA Centre Universitari de Disseny i Art de Barcelona",
            initialYear: 2011,
            finalYear: 2015,
        },
        {
            title: "High School",
            institution: "Institució Cultural del CIC",
            initialYear: 2009,
            finalYear: 2011,
        },
    ]);

    const webDev = useRef([
        {
            title: "Covid-19",
            icon: "/projects/covid19/icon.png",
            subtitle: "Check how the Covid-19 virus is affecting each Province in Spain.",
            description: [
                "Get information about how Covid-19 is affecting every Province in Spain in the last 14 days. Get updated numbers every day about the current state of the virus and track its progress.",
                "If you have to travel around Spain, check the state of Covid-19 in your destinations, with some guides about what measures you should take once there.",
                "If you just caught Covid-19, the app shows you useful information about how to proceed.",
            ],
            links: null,
            qr: {
                url: "https://estado-covid.netlify.app/",
                qr: "/projects/covid19/qr.png",
            },
            video: "/projects/covid19/video.mp4",
            screenshots: [
                "/projects/covid19/screenshot1.jpg",
                "/projects/covid19/screenshot2.jpg",
                "/projects/covid19/screenshot3.jpg",
                "/projects/covid19/screenshot4.jpg",
                "/projects/covid19/screenshot5.jpg",
                "/projects/covid19/screenshot6.jpg",
            ],
            horizontal: false,
            process:
                "Covid-19 is a Progressive Web App made with ReactJS targeting mobile devices. You can add it as an app to your Android or iPhone by scanning this QR and adding the page to your Home Screen.",
        },
        {
            title: "MatchEat",
            icon: "/projects/matchEat/icon.png",
            subtitle: "Find the restaurant around you that matches your group best.",
            description: [
                "Having trouble choosing a restaurant with your friends or your significant other? Use MatchEat to find the restaurant around you that the group likes the most.",
                "Everyone joins a room at the same time from their phones. Each of you will see the same list of restaurants and will give each one a Like, Love or Nope. When everyone is finished, the restaurants will be ranked, and you can get directions to any of them.",
            ],
            links: [
                {
                    url: "https://play.google.com/store/apps/details?id=com.PinyaGames.Tetris3D",
                    icon: "/icons/android.png",
                },
                {
                    url: "https://play.google.com/store/apps/details?id=com.PinyaGames.Tetris3D",
                    icon: "/icons/android.png",
                },
            ],
            qr: {
                url: "http://matcheat.netlify.app/",
                qr: "/projects/matchEat/qr.png",
            },
            video: "/projects/matchEat/video.mp4",
            screenshots: [
                "/projects/matchEat/screenshot1.jpg",
                "/projects/matchEat/screenshot2.jpg",
                "/projects/matchEat/screenshot3.jpg",
                "/projects/matchEat/screenshot4.jpg",
                "/projects/matchEat/screenshot5.jpg",
                "/projects/matchEat/screenshot6.jpg",
                "/projects/matchEat/screenshot7.jpg",
            ],
            horizontal: false,
            process:
                "MatchEat is a Progressive Web App made with ReactJS targeting mobile devices. You can add it as an app to your Android or iPhone by scanning this QR and adding the page to your Home Screen.",
        },
        {
            title: "GodHead",
            icon: "/projects/godHead/icon.png",
            subtitle: "Find out what each item does in The Binding of Isaac: Repentance.",
            description: [
                "Having trouble remembering what one of the more than seven hundred items does in the game? Use this app to quickly find out everything about it.",
                "You can search the items by their icon, by their name or subtitle.",
            ],
            links: null,
            qr: {
                url: "http://godhead.netlify.app/",
                qr: "/projects/godHead/qr.png",
            },
            video: null,
            screenshots: [
                "/projects/godHead/screenshot1.jpg",
                "/projects/godHead/screenshot2.jpg",
                "/projects/godHead/screenshot3.jpg",
                "/projects/godHead/screenshot4.jpg",
            ],
            horizontal: true,
            process:
                "GodHead is a Progressive Web App made with ReactJS targeting mobile & desktop devices. You can add it as an app to your PC, Android, or iPhone by scanning this QR and adding the page to your Home Screen.",
        },
        {
            title: "CryptoPlace",
            icon: "/projects/cryptoPlace/icon.png",
            subtitle: "A recreation of the r/place experiment where every pixel is an NFT (Non Fungible Token).",
            description: [
                "Each pixel in the 256x256 canvas is owned by someone who can change its color. You can buy a group of them or work together to create pixel art.",
                "CryptoPlace is a decentralized app (DApp) that uses Smart Contracts and the ERC721 standard to make sure each pixel is really owned by the person that mints it or buys it.",
            ],
            links: null,
            qr: {
                url: "http://cryptoplace.netlify.app/",
                qr: "/projects/cryptoPlace/qr.png",
            },
            video: null,
            screenshots: [
                "/projects/cryptoPlace/screenshot1.jpg",
                "/projects/cryptoPlace/screenshot2.jpg",
                "/projects/cryptoPlace/screenshot3.jpg",
            ],
            horizontal: true,
            process:
                "CryptoPlace is a DApp made using ReactJS for the front end and Solidity for the Smart Contracts. It hasn't yet been deployed to the Ethereum network. Coming soon.",
        },
        {
            title: "g-stocks",
            icon: "/projects/gstocks/icon.png",
            subtitle:
                "Make your own Valuations of Markets, ETFs, and Companies in seconds, to know if they are cheap or expensive today.",
            description: [
                "g-stocks empowers individual investors with the most advanced and intuitive tool to make valuations of markets and companies. Its unique design allows you to make optimal investment decisions fast.",
            ],
            links: null,
            qr: null,
            video: null,
            screenshots: [
                "/projects/gstocks/screenshot1.jpg",
                "/projects/gstocks/screenshot2.jpg",
                "/projects/gstocks/screenshot3.jpg",
                "/projects/gstocks/screenshot4.jpg",
                "/projects/gstocks/screenshot5.jpg",
                "/projects/gstocks/screenshot6.jpg",
            ],
            horizontal: true,
            process:
                "g-stocks is a tool made with JavaScript targeting desktop devices. It is still in development and can't be accessed yet.",
        },
        {
            title: "Spot",
            icon: "/projects/spot/icon.png",
            subtitle: "A minimal and traditional client for Spotify.",
            description: [
                "Spot is an app that connects to your current Spotify account and lets you explore your music using a traditional library with a minimalistic design.",
            ],
            links: null,
            qr: null,
            video: "/projects/spot/video.mp4",
            screenshots: [
                "/projects/spot/screenshot1.jpg",
                "/projects/spot/screenshot2.jpg",
                "/projects/spot/screenshot3.jpg",
                "/projects/spot/screenshot4.jpg",
                "/projects/spot/screenshot5.jpg",
                "/projects/spot/screenshot6.jpg",
            ],
            horizontal: false,
            process:
                "Spot is a Progressive Web App made with ReactJS targeting mobile devices. It is a work in progress that is not yet available for public use.",
        },
        {
            title: "Reddon",
            icon: "/projects/reddon/icon.png",
            subtitle: "A client for Reddit that navigates posts horizontally.",
            description: [
                "Reddon is an app that connects to your current Reddit account and lets you navigate the most recent posts using horizontal scrolling.",
            ],
            links: null,
            qr: null,
            video: null,
            screenshots: [
                "/projects/reddon/screenshot1.jpg",
                "/projects/reddon/screenshot2.jpg",
                "/projects/reddon/screenshot3.jpg",
                "/projects/reddon/screenshot4.jpg",
            ],
            horizontal: false,
            process:
                "Reddon is a Progressive Web App made with ReactJS targeting mobile devices. It is a work in progress that is not yet available for public use.",
        },
        {
            title: "Portfolio",
            icon: "/projects/portfolio/icon.png",
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
                studies,
                webDev,
            }}
        >
            {props.children}
        </Projects.Provider>
    );
};

export default ProjectsProvider;
