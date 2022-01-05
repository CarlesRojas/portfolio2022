import { useMediaQuery as useMedia } from "react-responsive";

export default function useMediaQuery() {
    const isDesktop = useMedia({ minWidth: 1100 });
    const isTablet = useMedia({ minWidth: 768, maxWidth: 1100 });
    const isLandscape = useMedia({ orientation: "landscape" });

    return { isDesktop, isTablet, isLandscape };
}
