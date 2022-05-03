import { useMediaQuery as useMedia } from "react-responsive";
import { isMobile as isTouchScreen } from "react-device-detect";

export default function useMediaQuery() {
    const isDesktop = useMedia({ minWidth: 1100 });
    const isTablet = useMedia({ minWidth: 768, maxWidth: 1100 });
    const isMobile = useMedia({ maxWidth: 768 });
    const isLandscape = useMedia({ orientation: "landscape" });

    return { isDesktop, isTablet, isMobile, isLandscape, isTouchScreen };
}
