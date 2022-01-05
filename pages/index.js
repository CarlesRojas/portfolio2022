import { Fragment } from "react";
import Link from "next/link";
import Head from "next/head";
import { useSpring, animated } from "react-spring";

export default function Home() {
    const [{ opacity }, spring] = useSpring(() => ({ opacity: "1" }));

    return (
        <Fragment>
            <Head>
                <meta charset="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=0"
                />
                <meta name="theme-color" content="#000000" />
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

            <div>
                <h1>Home</h1>
                <div onClick={() => spring.start({ opacity: "1" })}>Show</div>
                <div onClick={() => spring.start({ opacity: "0" })}>Hide</div>
                <animated.div style={{ opacity, backgroundColor: "red", padding: "2rem" }}>Content</animated.div>
                <Link href="/MatchEat">MatchEat</Link>
            </div>
        </Fragment>
    );
}
