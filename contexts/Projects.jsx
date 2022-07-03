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
            poster: "/projects/scoot/poster.jpg",
            title: "scoot",
            icon: "/projects/scoot/icon.png",
            subtitle: "Browse for your next motorcycle in a comfortable way.",
            description: [
                "The application allows you to explore Mundimoto’s motorcycles in a very pleasant and comfortable way, while it learns your preferences to show you more relevant results.",
                "This app was developed alongside Jaume Ballester and Santi Rubio for the 2022 HackUPC.",
            ],
            links: [
                {
                    url: "https://github.com/CarlesRojas/hackupc2022",
                    icon: "/icons/github.svg",
                },
                {
                    url: "https://github.com/JaumeBallester/hackupc2022-server",
                    icon: "/icons/github.svg",
                },
            ],
            qr: {
                url: "https://scoot.pinya.app/",
                qr: "/projects/scoot/qr.png",
            },
            videoPosition: 0,
            video: "/projects/scoot/video.mp4",
            screenshots: [
                "/projects/scoot/screenshot1.jpg",
                "/projects/scoot/screenshot2.jpg",
                "/projects/scoot/screenshot3.jpg",
                "/projects/scoot/screenshot4.jpg",
                "/projects/scoot/screenshot5.jpg",
                "/projects/scoot/screenshot6.jpg",
                "/projects/scoot/screenshot7.jpg",
            ],
            horizontal: false,
            process:
                "Scoot is a Progressive Web App made with ReactJS that targets mobile, tablet and desktop devices via responsive UI. You can also add it to your phone by scanning or clicking this QR and adding the website to your Home Screen.",
        },
        {
            poster: "/projects/covid19/poster.jpg",
            title: "Covid-19",
            icon: "/projects/covid19/icon.png",
            subtitle: "Check how the Covid-19 virus is affecting each Province in Spain.",
            description: [
                "Get information about how Covid-19 is affecting every Province in Spain in the last 14 days. Get updated numbers every day about the current state of the virus and track its progress.",
                "If you have to travel around Spain, check the state of Covid-19 in your destinations, with some guides about what measures you should take once there.",
                "If you just caught Covid-19, the app shows you useful information about how to proceed.",
            ],
            links: [
                {
                    url: "https://github.com/CarlesRojas/estado-covid-client",
                    icon: "/icons/github.svg",
                },
                {
                    url: "https://github.com/CarlesRojas/estado-covid-server",
                    icon: "/icons/github.svg",
                },
            ],
            qr: {
                url: "https://estado-covid.netlify.app/",
                qr: "/projects/covid19/qr.png",
            },
            videoPosition: 2,
            video: "/projects/covid19/video.mp4",
            screenshots: [
                "/projects/covid19/screenshot1.jpg",
                "/projects/covid19/screenshot2.jpg",
                // "/projects/covid19/screenshot3.jpg",
                "/projects/covid19/screenshot4.jpg",
                "/projects/covid19/screenshot5.jpg",
                "/projects/covid19/screenshot6.jpg",
            ],
            horizontal: false,
            process:
                "Covid-19 is a Progressive Web App made with ReactJS targeting mobile devices. You can add it as an app to your Android or iPhone by scanning this QR and adding the page to your Home Screen.",
        },
        {
            poster: "/projects/fanfastic/poster.jpg",
            title: "Fanfastic",
            icon: "/projects/fanfastic/icon.png",
            subtitle: "Keep track of your fasting schedule in a healthy way.",
            description: [
                "In Fanfastic you can setup any intermittent fasting routine you wish. Choose how long you want to fast for and when to start. You can also track your weight and BMI.",
                "The app will remind you of when to start and stop fasting and it will provide an explanation for the different phases of fasting.",
            ],
            links: [
                {
                    url: "https://play.google.com/store/apps/details?id=app.netlify.fanfastic",
                    icon: "/icons/android.svg",
                },
                {
                    url: "https://www.microsoft.com/store/productId/9NFJ33VBGK91",
                    icon: "/icons/windows.svg",
                },
                {
                    url: "https://github.com/CarlesRojas/fanfastic-client",
                    icon: "/icons/github.svg",
                },
                {
                    url: "https://github.com/CarlesRojas/fanfastic-server",
                    icon: "/icons/github.svg",
                },
            ],
            qr: {
                url: "https://fanfastic.netlify.app/",
                qr: "/projects/fanfastic/qr.png",
            },
            videoPosition: 5,
            video: "/projects/fanfastic/video.mp4",
            screenshots: [
                "/projects/fanfastic/screenshot1.jpg",
                "/projects/fanfastic/screenshot2.jpg",
                "/projects/fanfastic/screenshot3.jpg",
                "/projects/fanfastic/screenshot4.jpg",
                "/projects/fanfastic/screenshot5.jpg",
            ],
            horizontal: false,
            process:
                "Fanfastic is a Progressive Web App made with ReactJS that targets mobile, tablet and desktop devices via responsive UI. It is available in the Google Play Store and in the Microsoft Store. You can also add it to your iPhone by scanning this QR and adding the website to your Home Screen.",
        },
        {
            poster: "/projects/godHead/poster.jpg",
            title: "GodHead",
            icon: "/projects/godHead/icon.png",
            subtitle: "Find out what each item does in The Binding of Isaac: Repentance.",
            description: [
                "Having trouble remembering what one of the more than seven hundred items does in the game? Use this app to quickly find out everything about it.",
                "You can search the items by their icon, by their name or subtitle.",
            ],
            links: [
                {
                    url: "https://github.com/CarlesRojas/GodHead",
                    icon: "/icons/github.svg",
                },
            ],
            qr: {
                url: "http://godhead.netlify.app/",
                qr: "/projects/godHead/qr.png",
            },
            videoPosition: 0,
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
            poster: "/projects/matchEat/poster.jpg",
            title: "MatchEat",
            icon: "/projects/matchEat/icon.png",
            subtitle: "Find the restaurant around you that matches your group best.",
            description: [
                "Having trouble choosing a restaurant with your friends or your significant other? Use MatchEat to find the restaurant around you that the group likes the most.",
                "Everyone joins a room at the same time from their phones. Each of you will see the same list of restaurants and will give each one a Like, Love or Nope. When everyone is finished, the restaurants will be ranked, and you can get directions to any of them.",
            ],
            links: [
                {
                    url: "https://github.com/CarlesRojas/matcheat-client",
                    icon: "/icons/github.svg",
                },
                {
                    url: "https://github.com/CarlesRojas/matcheat-server",
                    icon: "/icons/github.svg",
                },
            ],
            qr: {
                url: "http://matcheat.netlify.app/",
                qr: "/projects/matchEat/qr.png",
            },
            videoPosition: 0,
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
            poster: "/projects/cryptoPlace/poster.jpg",
            title: "CryptoPlace",
            icon: "/projects/cryptoPlace/icon.png",
            subtitle: "A recreation of the r/place experiment where every pixel is an NFT (Non Fungible Token).",
            description: [
                "Each pixel in the 256x256 canvas is owned by someone who can change its color. You can buy a group of them or work together to create pixel art.",
                "CryptoPlace is a decentralized app (DApp) that uses Smart Contracts and the ERC721 standard to make sure each pixel is really owned by the person that mints it or buys it.",
            ],
            links: [
                {
                    url: "https://github.com/CarlesRojas/CryptoBoard",
                    icon: "/icons/github.svg",
                },
            ],
            qr: null,
            // {
            //     url: "http://cryptoplace.netlify.app/",
            //     qr: "/projects/cryptoPlace/qr.png",
            // },
            videoPosition: 0,
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
            poster: "/projects/gstocks/poster.jpg",
            title: "g-stocks",
            icon: "/projects/gstocks/icon.png",
            subtitle:
                "Make your own Valuations of Markets, ETFs, and Companies in seconds, to know if they are cheap or expensive today.",
            description: [
                "g-stocks empowers individual investors with the most advanced and intuitive tool to make valuations of markets and companies. Its unique design allows you to make optimal investment decisions fast.",
            ],
            links: null,
            qr: null,
            videoPosition: 0,
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
            poster: "/projects/reddon/poster.jpg",
            title: "Reddon",
            icon: "/projects/reddon/icon.png",
            subtitle: "A client for Reddit that navigates posts horizontally.",
            description: [
                "Reddon is an app that connects to your current Reddit account and lets you navigate the most recent posts using horizontal scrolling.",
            ],
            links: [
                {
                    url: "https://github.com/CarlesRojas/Reddon",
                    icon: "/icons/github.svg",
                },
            ],
            qr: null,
            videoPosition: 0,
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
            poster: "/projects/spot/poster.jpg",
            title: "Spot",
            icon: "/projects/spot/icon.png",
            subtitle: "A minimal and traditional client for Spotify.",
            description: [
                "Spot is an app that connects to your current Spotify account and lets you explore your music using a traditional library with a minimalistic design.",
            ],
            links: [
                {
                    url: "https://github.com/CarlesRojas/Spot2",
                    icon: "/icons/github.svg",
                },
                {
                    url: "https://github.com/CarlesRojas/Spot-Server",
                    icon: "/icons/github.svg",
                },
            ],
            qr: null,
            videoPosition: 0,
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
    ]);

    const gameDev = useRef([
        {
            poster: "/projects/simulchess/poster.jpg",
            title: "simulchess",
            icon: "/projects/simulchess/icon.png",
            subtitle: "A chess variant where turns are played simultaneously. ",
            description: [
                "Your turn and the opponents happen at the same time. You have 60 seconds to decide your move. Missing it loses you the game. Once both players have decided, both moves will resolve simultaneously.",
                "If both moves end up in the same square, the player with precedence will capture the opponent's piece. White starts having precedence, and it changes every turn.",
            ],
            links: [
                {
                    url: "https://play.google.com/store/apps/details?id=app.pinya.simulchess",
                    icon: "/icons/android.svg",
                },
                {
                    url: "https://www.microsoft.com/store/apps/9N7L52DD9PFK",
                    icon: "/icons/windows.svg",
                },
                {
                    url: "https://github.com/CarlesRojas/simulchess",
                    icon: "/icons/github.svg",
                },
            ],
            qr: {
                url: "https://simulchess.pinya.app/",
                qr: "/projects/simulchess/qr.png",
            },
            videoPosition: 0,
            video: "/projects/simulchess/video.mp4",
            screenshots: [
                "/projects/simulchess/screenshot1.jpg",
                "/projects/simulchess/screenshot2.jpg",
                "/projects/simulchess/screenshot3.jpg",
                "/projects/simulchess/screenshot4.jpg",
                "/projects/simulchess/screenshot5.jpg",
            ],
            horizontal: false,
            process:
                "Simulchess is a Progressive Web App made with ReactJS and PixiJS. It targets mobile, tablet and desktop devices via responsive UI. The game is available in the Google Play Store and the Microsoft Store. You can also add it to your iPhone by scanning this QR and adding the website to your Home Screen.",
        },
        {
            poster: "/projects/kubic/poster.jpg",
            title: "Kubic",
            icon: "/projects/kubic/icon.png",
            subtitle: "Stack and puzzle the 3D tetrominos to avoid them getting to the top!",
            description: [
                "Both the pieces and the board have three dimensions, making this a lot more challenging!",
                "Clear planes by filling them, and try to reach the highest score by clearing four at the same time!",
            ],
            links: [
                {
                    url: "https://play.google.com/store/apps/details?id=app.pinya.kubic",
                    icon: "/icons/android.svg",
                },
                {
                    url: "https://www.microsoft.com/store/apps/9NZLVCD128J4",
                    icon: "/icons/windows.svg",
                },
                {
                    url: "https://github.com/CarlesRojas/kubic-client",
                    icon: "/icons/github.svg",
                },
                {
                    url: "https://github.com/CarlesRojas/kubic-server",
                    icon: "/icons/github.svg",
                },
            ],
            qr: {
                url: "https://kubic.pinya.app/",
                qr: "/projects/kubic/qr.png",
            },
            videoPosition: 1,
            video: "/projects/kubic/video.mp4",
            screenshots: [
                "/projects/kubic/screenshot1.jpg",
                "/projects/kubic/screenshot2.jpg",
                "/projects/kubic/screenshot3.jpg",
                "/projects/kubic/screenshot4.jpg",
                "/projects/kubic/screenshot5.jpg",
                "/projects/kubic/screenshot6.jpg",
            ],
            horizontal: false,
            process:
                "Kubic is a Progressive Web App made with ReactJS and ThreeJS. It targets mobile, tablet and desktop devices via responsive UI. The game is available in the Google Play Store and the Microsoft Store. You can also add it to your iPhone by scanning this QR and adding the website to your Home Screen.",
        },
        {
            poster: "/projects/letsDrive/poster.jpg",
            title: "Let's Drive",
            icon: "/projects/letsDrive/icon.png",
            subtitle: "Deliver all cars to their destination but avoid your past self!",
            description: [
                "You drive a single vehicle with a destination, and you decide the way, but beware! In each round you will cross with all your previous vehicles and their routes.",
                "Win seconds with the time bonus and restore your vehicle with the repair bonus. Will you deliver all cars to their destinations without accidents?",
                "Let's drive!",
            ],
            links: [
                {
                    url: "https://play.google.com/store/apps/details?id=com.PinyaGames.LetsDrive",
                    icon: "/icons/android.svg",
                },
            ],
            qr: null,
            videoPosition: 0,
            video: "/projects/letsDrive/video.mp4",
            screenshots: [
                "/projects/letsDrive/screenshot1.jpg",
                "/projects/letsDrive/screenshot2.jpg",
                "/projects/letsDrive/screenshot3.jpg",
                "/projects/letsDrive/screenshot4.jpg",
                "/projects/letsDrive/screenshot5.jpg",
                "/projects/letsDrive/screenshot6.jpg",
            ],
            horizontal: true,
            process:
                "Let's Drive is a game made with Unity targeting the mobile devices. It was made by Alejandra Jiménez & me (Carles Rojas). The game is coded in C# is currently published on the Google Play Store.",
        },
        {
            poster: "/projects/trickShots/poster.jpg",
            title: "TrickShots",
            icon: "/projects/trickShots/icon.png",
            subtitle: "Augmented reality trick-shots using your room and virtual props.",
            description: [
                "Perform limitless trick shots with a holographic tennis ball that will interact with your surroundings. Add an assortment of different holographic objects like a basketball hoop, a paper bin or a couple of teleporting portals. Challenge yourself and achieve bigger combos to get the higher scores.",
            ],
            links: [
                {
                    url: "https://www.microsoft.com/en-us/store/p/trickshots/9nkmv03xqcng#",
                    icon: "/icons/hololens.svg",
                },
            ],
            qr: null,
            videoPosition: 0,
            video: null,
            screenshots: [
                "/projects/trickShots/screenshot1.jpg",
                "/projects/trickShots/screenshot2.jpg",
                "/projects/trickShots/screenshot3.jpg",
                "/projects/trickShots/screenshot4.jpg",
            ],
            horizontal: true,
            process:
                "MatchEat is a Progressive Web App made with ReactJS targeting mobile devices. You can add it as an app to your Android or iPhone by scanning this QR and adding the page to your Home Screen.",
        },
        {
            poster: "/projects/holoChess/poster.jpg",
            title: "HoloChess",
            icon: "/projects/holoChess/icon.png",
            subtitle: "The first holographic chess game ever.",
            description: [
                "Play against as AI with three difficulty levels and enjoy the classic game of chess in the augmented world. Choose your favorite style, place the board on your table and enjoy!",
            ],
            links: [
                {
                    url: "https://www.microsoft.com/en-us/store/p/holochess-beta/9nblggh40d7c#",
                    icon: "/icons/hololens.svg",
                },
            ],
            qr: null,
            videoPosition: 0,
            video: null,
            screenshots: [
                "/projects/holoChess/screenshot1.jpg",
                "/projects/holoChess/screenshot2.jpg",
                "/projects/holoChess/screenshot3.jpg",
                "/projects/holoChess/screenshot4.jpg",
                "/projects/holoChess/screenshot5.jpg",
                "/projects/holoChess/screenshot6.jpg",
                "/projects/holoChess/screenshot7.jpg",
                "/projects/holoChess/screenshot8.jpg",
                "/projects/holoChess/screenshot9.jpg",
            ],
            horizontal: true,
            process:
                "HoloChess is a game made with Unity targeting the HoloLens device by Microsoft. The distinctively styled chessboards and pieces have been modeled using SolidWorks and Maya and textured with Photoshop. The game is coded in C# and build with Visual Studio and is currently published on the Windows Store, available only for the HoloLens device by Microsoft.",
        },
        {
            poster: "/projects/neoWar/poster.jpg",
            title: "NeoWar",
            icon: "/projects/neoWar/icon.png",
            subtitle: "Avoid the endless stream of neon enemies coming at you!",
            description: [
                "Control your neon spaceship and shoot down the opposition trying to bring you down. Grab powerups to help you get out of sticky situations and hang on as much as possible.",
            ],
            links: [
                {
                    url: "https://pinyagames.itch.io/neowar",
                    icon: "/icons/itchio.svg",
                },
                {
                    url: "https://github.com/CarlesRojas/Neowar",
                    icon: "/icons/github.svg",
                },
            ],
            qr: null,
            videoPosition: 0,
            video: "/projects/neoWar/video.mp4",
            screenshots: [
                "/projects/neoWar/screenshot1.jpg",
                "/projects/neoWar/screenshot2.jpg",
                "/projects/neoWar/screenshot3.jpg",
                "/projects/neoWar/screenshot4.jpg",
                "/projects/neoWar/screenshot5.jpg",
                "/projects/neoWar/screenshot6.jpg",
            ],
            horizontal: true,
            process:
                "NeoWar is a game made with Unity targeting Windows devices. It was made by Jaume Ballester, Santi Rubio & me (Carles Rojas). The game is coded in C# and can be played online.",
        },
        {
            poster: "/projects/escape/poster.jpg",
            title: "Escape",
            icon: "/projects/escape/icon.png",
            subtitle: "Escape through the maze using power ups and avoiding the red wall!",
            description: [
                "Use the phones accelerometer to move around a dark maze and collect power ups to escape from the inevitable red wall.",
            ],
            links: [
                {
                    url: "https://play.google.com/store/apps/details?id=com.PinyaGames.Escape",
                    icon: "/icons/android.svg",
                },
            ],
            qr: null,
            videoPosition: 0,
            video: "/projects/escape/video.mp4",
            screenshots: [
                "/projects/escape/screenshot1.jpg",
                "/projects/escape/screenshot2.jpg",
                "/projects/escape/screenshot3.jpg",
                "/projects/escape/screenshot4.jpg",
                "/projects/escape/screenshot5.jpg",
                "/projects/escape/screenshot6.jpg",
                "/projects/escape/screenshot7.jpg",
            ],
            horizontal: true,
            process:
                "Escape is a game made with Unity targeting the mobile devices. All 3D shapes were made using the default shapes available in Unity. The game is coded in C# is currently published on the Google Play Store.",
        },
        {
            poster: "/projects/infinityGallery/poster.jpg",
            title: "Infinity Gallery",
            icon: "/projects/infinityGallery/icon.png",
            subtitle: "The biggest collection of pictures in the world, for a specific kind of pictures.",
            description: [
                "All the pictures in Infinity Gallery are 64 by 64 pixels and in grayscale, using 64 shades of grey. The reason the Infinity Gallery is so big is because it contains every combination possible of this finite number of pixels and gray tonalities. Exactly 1.29 x 107398 pictures. You've read this number quite fast, and you're probably not grasping how enormously big that is.",
                "So, what are the implications of this? In this Gallery you can find every single picture (with those properties) that has been taken in the past and that will be taken in the future. It even contains all the pictures that will never be taken. There is a 64x64 grayscale version of every picture you have posted and will ever post on social media, of each planet in the Universe and each species that may or may not live on them. There is also a picture of those keys you lost a few years ago in the exact location they are now. The only hard task is finding them. Good luck!",
            ],
            links: [
                {
                    url: "https://play.google.com/store/apps/details?id=com.PinyaGames.InfinityGallery",
                    icon: "/icons/android.svg",
                },
            ],
            qr: null,
            videoPosition: 0,
            video: null,
            screenshots: [
                "/projects/infinityGallery/screenshot1.jpg",
                "/projects/infinityGallery/screenshot2.jpg",
                "/projects/infinityGallery/screenshot3.jpg",
                "/projects/infinityGallery/screenshot4.jpg",
                "/projects/infinityGallery/screenshot5.jpg",
                "/projects/infinityGallery/screenshot6.jpg",
                "/projects/infinityGallery/screenshot7.jpg",
                "/projects/infinityGallery/screenshot8.jpg",
            ],
            horizontal: false,
            process:
                "Infinity Gallery is an app made with Unity targeting the mobile devices. All images been made using Illustrator and Photoshop, and Wolfram Alpha was used to create the algorithm to encode the images. The app is coded in C#.",
        },
        {
            poster: "/projects/portal/poster.jpg",
            title: "Portal",
            icon: "/projects/portal/icon.png",
            subtitle: "A Portal inspired game, but 2D and using pixel art.",
            description: [
                "Solve Portal-like puzzles in 2D. Create your own levels with an intuitive in-game tool and share them. You can play any level in the game as well as the ones created by the community.",
            ],
            links: null,
            qr: null,
            videoPosition: 0,
            video: null,
            screenshots: [
                "/projects/portal/screenshot1.jpg",
                "/projects/portal/screenshot2.jpg",
                "/projects/portal/screenshot3.jpg",
                "/projects/portal/screenshot4.jpg",
            ],
            horizontal: true,
            process:
                "Portal is a work in progress game made with Unity targeting Windows devices. The sprites were created using Photoshop and Illustrator. The game is coded in C# and is not yet available.",
        },
    ]);

    const design = useRef([
        {
            poster: "/projects/smartBike/poster.jpg",
            title: "SmartBike",
            icon: "/projects/smartBike/icon.png",
            subtitle: "Electric and foldable, the perfect city bike.",
            description: [
                "SmartBike is a design concept aimed at improving individual mobility at cities. It uses airless tires without spokes that revolve around the static rim. The back wheel has an electric motor with batteries allocated in the tube.",
                "This bike is can fold to occupy the minimum amount of space. Both wheels retract, and the tube folds on its middle. Once folded the wheels align perfectly which allows users to pull the bike instead of carrying it.",
            ],
            links: null,
            qr: null,
            videoPosition: 0,
            video: "/projects/smartBike/video.mp4",
            screenshots: [
                "/projects/smartBike/screenshot1.jpg",
                "/projects/smartBike/screenshot2.jpg",
                "/projects/smartBike/screenshot3.jpg",
                "/projects/smartBike/screenshot4.jpg",
            ],
            horizontal: true,
            process:
                "Smartbike was the final project for the 3D Modeling subject at EINA, University School of Design and Art. It was modeled with SolidWorks and animated using KeyShot. The final images were made using the KeyShot renders and Photoshop.",
        },
        {
            poster: "/projects/holoLens/poster.jpg",
            title: "HoloLens 2",
            icon: "/projects/holoLens/icon.png",
            subtitle: "All in one: holographic computer and over-ear headphones.",
            description: [
                "This is concept inspired by the HoloLens device by Microsoft. The holographic screen can be rotated until it disappears when not needed. The headset can be controlled with tactile controls on the right ear-cup as well as hand gestures.",
                "When needed the screen can be pulled down, which resumes the last session. With this design, the device becomes, portable, multifunctional, and avoids the lack of familiarity that the current design iteration has.",
            ],
            links: null,
            qr: null,
            videoPosition: 1,
            video: "/projects/holoLens/video.mp4",
            screenshots: ["/projects/holoLens/screenshot1.jpg", "/projects/holoLens/screenshot2.jpg"],
            horizontal: true,
            process:
                "HoloLens is a concept project modeled using SolidWorks and animated with KeyShot. It only represents a proof of concept and helps visualize how holographic computers could integrate with currently existing devices.",
        },
        {
            poster: "/projects/gwood/poster.jpg",
            title: "Gwood",
            icon: "/projects/gwood/icon.png",
            subtitle: "Wood-based furniture showcased at 'Feria del Hábitat Valencia 2014'",
            description: [
                "Gwood is a partnership formed by several students from the 3rd and 4th year from the product design degree from EINA, school about design and art, from Barcelona.",
                "What was presented at Feria del Hábitat Valencia 2014 is a furniture family entirely made from beech and maroon details, designed for its placement in small rooms so to be able to better use the little space capacity they offer and the tiny useless nooks they often generate.",
            ],
            links: null,
            qr: null,
            videoPosition: 0,
            video: null,
            screenshots: [
                "/projects/gwood/screenshot1.jpg",
                "/projects/gwood/screenshot2.jpg",
                "/projects/gwood/screenshot3.jpg",
                "/projects/gwood/screenshot4.jpg",
            ],
            horizontal: true,
            process:
                "Gwood is a project made by students of EINA, University School of Design and Art for the Hábitat fair in Valencia 2014. Gwood was divided in five groups. The lounge chair was modeled with SolidWorks and made at EINA's workshop.",
        },
        {
            poster: "/projects/orbit/poster.jpg",
            title: "Orbit",
            icon: "/projects/orbit/icon.png",
            subtitle: "A concept for an all-in-one device. Tablet, Laptop & Desktop computer using a foldable screen.",
            description: [
                "Orbit is a computer screen with three configurations, and some variants. When opened flat it has a 21.2-inch screen that can be placed in a stand to work as a full desktop computer. When opened a quarter of the way, to be used like a laptop, the lower part of the screen will display a keyboard or application specific controls. And when completely folded backwards the device can be used as a tablet.",
                "This concept uses a foldable screen and a 360 hinge to allow its rotation.",
            ],
            links: null,
            qr: null,
            videoPosition: 5,
            video: "/projects/orbit/video.mp4",
            screenshots: [
                "/projects/orbit/screenshot1.jpg",
                "/projects/orbit/screenshot2.jpg",
                "/projects/orbit/screenshot3.jpg",
                "/projects/orbit/screenshot4.jpg",
                "/projects/orbit/screenshot5.jpg",
                "/projects/orbit/screenshot6.jpg",
            ],
            horizontal: true,
            process:
                "Orbit was the final career project at EINA, University School of Design and Art. It was modeled using SolidWorks, rendered, and animated with KeyShot and edited with Photoshop. It's a proof of concept for an All-In-One device.",
        },
        {
            poster: "/projects/showBattle/poster.jpg",
            title: "ShowBattle",
            icon: "/projects/showBattle/icon.png",
            subtitle: "A battle card game inspired by popular tv-shows",
            description: [
                "Composed by more than two hundred cards ShowBattle features the characters, locations, and items from eight different tv-shows. Up to four players compete and fight using the strengths and weaknesses inspired in events of the shows with lot of 'fan-service' interactions between cards.",
                "Each card can have attack power, defense, the number of locations required to use it, and its different effects. Also, each one has a quote from its show.",
            ],
            links: null,
            qr: null,
            videoPosition: 0,
            video: null,
            screenshots: ["/projects/showBattle/screenshot1.jpg", "/projects/showBattle/screenshot2.jpg"],
            horizontal: true,
            process:
                "ShowBattle is a personal project that was completely created using Photoshop. Al the images used are property of the original show producers. The cards were printed once for personal use.",
        },
        {
            poster: "/projects/smartWatch/poster.jpg",
            title: "SmartWatch",
            icon: "/projects/smartWatch/icon.png",
            subtitle: "A new intuitive way to check the time.",
            description: [
                "Apart from its appearance, the goal behind this project was finding out a new way to display the time. Analogic watches have been around for so long that the position of the needles has become something very intuitive for all of us. On the other hand, digital clocks can display the time in a faster and easier way.",
                "This concept tries to use the best of both worlds by displaying the time digitally in the position the needles would be. Making it intuitive and fast to read.",
            ],
            links: null,
            qr: null,
            videoPosition: 0,
            video: "/projects/smartWatch/video.mp4",
            screenshots: ["/projects/smartWatch/screenshot1.jpg", "/projects/smartWatch/screenshot2.jpg"],
            horizontal: true,
            process:
                "SmartWatch is a project modeled and rendered using SolidWorks for an early project at EINA, University School of Design and Art. The time display method is an original idea animated using Flash Pro.",
        },
    ]);

    return (
        <Projects.Provider
            value={{
                studies,
                webDev,
                gameDev,
                design,
            }}
        >
            {props.children}
        </Projects.Provider>
    );
};

export default ProjectsProvider;
