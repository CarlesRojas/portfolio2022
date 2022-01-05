import "../styles/main.scss";

import MediaQueryProvider from "../contexts/MediaQuery";
import UtilsProvider from "../contexts/Utils";
import FocusProvider from "../contexts/Focus";
import ProjectsProvider from "../contexts/Projects";

export default function MyApp({ Component, pageProps }) {
    return (
        <UtilsProvider>
            <ProjectsProvider>
                <FocusProvider>
                    <MediaQueryProvider>
                        <Component {...pageProps} />
                    </MediaQueryProvider>
                </FocusProvider>
            </ProjectsProvider>
        </UtilsProvider>
    );
}
