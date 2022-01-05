import { useEffect, useRef, useState, useContext } from "react";
import Image from "next/image";
import useClass from "../hooks/useClass";
import { Utils } from "../contexts/Utils";

export default function Slider({ elements, title }) {
    const { clamp } = useContext(Utils);

    const sliderRef = useRef();
    const [elemsInScreen, setElemsInScreen] = useState(5);

    useEffect(() => {
        const onResize = () => {
            const sliderBox = sliderRef.current.getBoundingClientRect();
            const newNumElems = clamp(Math.floor(sliderBox.width / 350, 0, 5));
            setElemsInScreen(newNumElems);
        };

        window.addEventListener("resize", onResize);
        onResize();

        return () => {
            window.removeEventListener("resize", onResize);
        };
    }, [clamp]);

    return (
        <section className={useClass("slider")} ref={sliderRef}>
            <h1 className={useClass()}>{title}</h1>
            {/* {elements.map(() => {})} */}
        </section>
    );
}
