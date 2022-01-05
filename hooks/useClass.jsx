import { useEffect, useState, useContext } from "react";
import cx from "classnames";
import { MediaQuery } from "../contexts/MediaQuery";

export default function useClass(classes) {
    const { media } = useContext(MediaQuery);
    const { isDesktop, isTablet, isLandscape, isTouchScreen } = media;

    const [addMediaClasses, setAddMediaClasses] = useState(false);
    useEffect(() => {
        setAddMediaClasses(true);
    }, []);

    return addMediaClasses ? cx(classes, { isDesktop }, { isTablet }, { isLandscape }, { isTouchScreen }) : classes;
}
