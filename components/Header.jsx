import { useState, useContext, useEffect, useRef } from "react";
import Image from "next/image";
import { useSpring, animated } from "react-spring";
import cx from "classnames";
import useClass from "../hooks/useClass";
import { MediaQuery } from "../contexts/MediaQuery";
import ProfilePicture from "../public/profile/Profile.png";

export default function Header() {
    const { media } = useContext(MediaQuery);

    const [collapsed, setCollapsed] = useState(false);
    const [{ height: headerHeight }, headerSpring] = useSpring(() => ({ height: "80%" }));
    const [{ height, width, opacity }, imageSpring] = useSpring(() => ({
        height: "70%",
        width: "100%",
        opacity: "1",
    }));

    const collapse = () => {
        headerSpring.start({ height: "20%" });
        imageSpring.start({ height: "0%", width: "0%", opacity: "0" });
        setCollapsed(true);
    };

    const expand = () => {
        headerSpring.start({ height: "80%" });
        imageSpring.start({
            height: media.isLandscape ? "100%" : "70%",
            width: media.isLandscape ? "55%" : "100%",
            opacity: "1",
        });
        setCollapsed(false);
    };

    const first = useRef(true);
    useEffect(() => {
        if (!collapsed) {
            headerSpring.start({ height: "80%", immediate: first.current });
            imageSpring.start({
                height: media.isLandscape ? "100%" : "70%",
                width: media.isLandscape ? "55%" : "100%",
                opacity: "1",
                immediate: first.current,
            });
        }

        first.current = false;
    }, [collapsed, media, headerSpring, imageSpring]);

    return (
        <animated.header className={useClass(cx("header", { collapsed }))} style={{ height: headerHeight }}>
            <div className={useClass("info")}>
                <p className={useClass()}>{"Hi"}</p>
                <h1 className={useClass()} onClick={() => (collapsed ? expand() : collapse())}>
                    {"I'm Carles Rojas"}
                </h1>
                <h2 className={useClass()}>{"Software Engineer & Designer from Barcelona"}</h2>
            </div>
            <animated.div className={useClass("image")} style={{ height, width, opacity }}>
                <Image src={ProfilePicture} alt="" layout="fill" priority />
            </animated.div>
        </animated.header>
    );
}
