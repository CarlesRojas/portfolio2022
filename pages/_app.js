import "../styles/main.scss";

import MediaQueryProvider from "../contexts/MediaQuery";
import UtilsProvider from "../contexts/Utils";
import ProjectsProvider from "../contexts/Projects";

export default function MyApp({ Component, pageProps }) {
    return (
        <UtilsProvider>
            <ProjectsProvider>
                <MediaQueryProvider>
                    <Component {...pageProps} />
                </MediaQueryProvider>
            </ProjectsProvider>
        </UtilsProvider>
    );
}
