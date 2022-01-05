import { useEffect, useRef, useState, useContext, memo } from "react";
import useClass from "../hooks/useClass";
import SVG from "react-inlinesvg";
import cx from "classnames";
import SliderElem from "./SliderElem";
import { Utils } from "../contexts/Utils";
import { MediaQuery } from "../contexts/MediaQuery";

const Slider = memo(({ elements, title }) => {
    const { clamp } = useContext(Utils);
    const { media } = useContext(MediaQuery);

    // #################################################
    //   RESIZE
    // #################################################

    const sliderRef = useRef();
    const elemsInScreen = useRef();
    const [elemWidth, setElemWidth] = useState(0);

    useEffect(() => {
        const onResize = () => {
            const sliderWidth = window.innerWidth - (media.isMobile ? 2 * 18 : 6 * 18);
            elemsInScreen.current = clamp(Math.floor(sliderWidth / 350), 1, 5);
            setElemWidth(sliderWidth / elemsInScreen.current);
        };

        window.addEventListener("resize", onResize);
        onResize();

        return () => {
            window.removeEventListener("resize", onResize);
        };
    }, [clamp, media, elemsInScreen]);

    // #################################################
    //   SLIDE
    // #################################################

    const [indexesInView, setIndexesInView] = useState({ min: 0, max: elemsInScreen.current });

    useEffect(() => {
        setIndexesInView((prev) => ({ ...prev, max: prev.min + elemsInScreen.current }));
    }, [elemWidth]);

    const next = () => {
        console.log("mmm");
        setIndexesInView(({ min }) => {
            let newMin = min + elemsInScreen.current;
            let newMax = newMin + elemsInScreen.current;

            console.log(newMin, newMax);

            if (newMax >= elements.length) {
                newMax = elements.length - 1;
                newMin = newMax - elemsInScreen.current;
            }
            console.log(newMin, newMax);
            console.log("");

            return { min: newMin, max: newMax };
        });
    };

    const prev = () => {
        setIndexesInView(({ min }) => {
            let newMin = Math.max(0, min - elemsInScreen.current);
            let newMax = newMin + elemsInScreen.current;

            return { min: newMin, max: newMax };
        });
    };

    // #################################################
    //   RENDER
    // #################################################
    console.log(indexesInView.min);

    return (
        <section className={useClass("slider")} ref={sliderRef}>
            <h1 className={useClass()}>{title}</h1>

            <div className="container">
                {elements.map((data, i) => (
                    <SliderElem key={i} data={data} width={elemWidth} elemsInScreen={elemsInScreen.current} index={i} />
                ))}
            </div>

            <div className={cx("prevNextButton", { visible: indexesInView.min > 0 })}>
                <h1 className={useClass("invisible")}>a</h1>
                <div className={cx("iconContainer", { visible: indexesInView.min > 0 })} onClick={prev}>
                    <SVG className="icon" src={"/icons/prev.svg"} />
                </div>
            </div>

            <div className={cx("prevNextButton", "next", { visible: indexesInView.max < elements.length - 1 })}>
                <h1 className={useClass("invisible")}>a</h1>{" "}
                <div
                    className={cx("iconContainer", { visible: indexesInView.max < elements.length - 1 })}
                    onClick={next}
                >
                    <SVG className="icon" src={"/icons/next.svg"} />
                </div>
            </div>
        </section>
    );
});

Slider.displayName = "Slider";
export default Slider;
