import { Fragment, useContext } from "react";
import Head from "next/head";
import useClass from "../hooks/useClass";
import Header from "../components/Header";
import Slider from "../components/Slider";
import useFocus from "../hooks/useFocus";
import { Projects } from "../contexts/Projects";

const NAME = "home";

export default function Home() {
    const { webDev } = useContext(Projects);

    // #######################################
    //      FOCUS MANAGEMENT
    // #######################################

    const newID = NAME;
    const newObject = {
        id: NAME,
        orientation: "vertical",
        isIndexAlign: true,
        children: [],
    };
    const treeUpdated = useFocus(newID, newObject);

    return (
        <Fragment>
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

            <main className={useClass("home")}>
                <Header />
                {treeUpdated && (
                    <Fragment>
                        <Slider elements={webDev.current} title="Web Development" parentID={newID} index={0} />
                        <Slider elements={webDev.current} title="Game Development" parentID={newID} index={1} />
                        <Slider elements={webDev.current} title="Product Design" parentID={newID} index={2} />
                    </Fragment>
                )}
            </main>
        </Fragment>
    );
}
