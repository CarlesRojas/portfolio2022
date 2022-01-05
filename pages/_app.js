import { Transition, animated } from "react-spring";
import "../styles/globals.scss";

export default function MyApp({ Component, pageProps, router }) {
    const items = [
        {
            id: router.route,
            Component,
            pageProps,
        },
    ];

    return (
        <Transition
            items={items}
            keys={(item) => item.id}
            from={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            enter={{ opacity: 1, delay: 500 }}
            leave={{ opacity: 0, position: "absolute" }}
        >
            {(styles, { pageProps, Component }) => (
                <animated.div style={{ ...styles, width: "100%" }}>
                    <Component {...pageProps} />
                </animated.div>
            )}
        </Transition>
    );
}
