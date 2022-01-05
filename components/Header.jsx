import { useState, useContext } from "react";
import Image from "next/image";
import { useSpring, animated } from "react-spring";
import cx from "classnames";
import useClass from "../hooks/useClass";
import { MediaQuery } from "../contexts/MediaQuery";
import ProfilePicture from "../public/profile/Profile.png";

export default function Header() {
    console.log("Render Header");
    const { media } = useContext(MediaQuery);

    const [collapsed, setCollapsed] = useState(false);
    const [{ y }, spring] = useSpring(() => ({ height: "100%" }));

    if (media.isDesktop) console.log("isDesktop");
    else if (media.isTablet) console.log("isTablet");
    else console.log("isMobile");

    if (media.isLandscape) console.log("isLandscape");
    else console.log("isPortrait");

    return (
        <header className={useClass(cx("header", { collapsed }))}>
            <div className={useClass("info")}>
                <p className={useClass()}>{"Hi"}</p>
                <h1 className={useClass()}>{"I'm Carles Rojas"}</h1>
                <h2 className={useClass()}>{"Software Engineer & Designer from Barcelona"}</h2>
            </div>
            <div className={useClass("image")} onClick={() => setCollapsed((prev) => !prev)}>
                <Image src={ProfilePicture} alt="" priority placeholder="blur" layout="fill" />
            </div>
        </header>
    );
}
