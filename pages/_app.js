import "../styles/main.scss";

import MediaQueryProvider from "../contexts/MediaQuery";

export default function MyApp({ Component, pageProps }) {
    return (
        <MediaQueryProvider>
            <Component {...pageProps} />
        </MediaQueryProvider>
    );
}
