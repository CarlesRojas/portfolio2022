import React, { createContext } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
export const MediaQuery = createContext();

const MediaQueryProvider = (props) => {
    const media = useMediaQuery();
    return <MediaQuery.Provider value={{ media }}>{props.children}</MediaQuery.Provider>;
};

export default MediaQueryProvider;
