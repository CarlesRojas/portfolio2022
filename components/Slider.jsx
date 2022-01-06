import { useEffect, useRef, useState, useContext, memo } from "react";
import useClass from "../hooks/useClass";
import SVG from "react-inlinesvg";
import cx from "classnames";
import SliderElem from "./SliderElem";
import { useSpring, animated } from "react-spring";
import { useDrag } from "react-use-gesture";
import { Utils } from "../contexts/Utils";
import { MediaQuery } from "../contexts/MediaQuery";
import { Fragment } from "react/cjs/react.production.min";

const Slider = memo(({ elems, title }) => {
    const { clamp } = useContext(Utils);
    const { media } = useContext(MediaQuery);

    // #################################################
    //   RESIZE
    // #################################################

    const sliderRef = useRef();
    const sliderWidth = useRef();
    const elemsInScreen = useRef();
    const [elemWidth, setElemWidth] = useState(0);

    useEffect(() => {
        const onResize = () => {
            sliderWidth.current = window.innerWidth - (media.isMobile ? 2 * 18 : 6 * 18);
            elemsInScreen.current = clamp(Math.floor(sliderWidth.current / 350), 1, 5);
            setElemWidth(sliderWidth.current / elemsInScreen.current);
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

    const [{ x }, spring] = useSpring(() => ({ x: "0px" }));
    const [, setMinMax] = useState({ min: 0, max: elemsInScreen.current - 1 });

    useEffect(() => {
        setMinMax((prev) => {
            const newMin = prev.min;
            const newMax = newMin + elemsInScreen.current - 1;

            if (newMax >= elems.length) {
                newMax = elems.length - 1;
                newMin = newMax - elemsInScreen.current + 1;
            }

            return { min: newMin, max: newMax };
        });
    }, [elemWidth, spring, elems]);

    // #################################################
    //   GESTURE
    // #################################################

    const containerRef = useRef();

    // Vertical gesture
    const gestureBind = useDrag(
        ({ event, down, offset: [ox] }) => {
            event.stopPropagation();

            if (down) {
                spring.start({ x: `${ox}px` });
            }
        },
        {
            filterTaps: true,
            axis: "x",
            bounds: {
                right: 0,
                left: containerRef.current
                    ? -containerRef.current.getBoundingClientRect().width + sliderWidth.current
                    : sliderWidth.current,
            },
        }
    );

    // #################################################
    //   RENDER
    // #################################################

    return (
        <section className={useClass("slider")} ref={sliderRef}>
            <h1 className={useClass()}>{title}</h1>

            <div className={useClass("scroll")}>
                <animated.div className={useClass("container")} {...gestureBind()} style={{ x }} ref={containerRef}>
                    {elems.map((data, i) => (
                        <SliderElem key={i} data={data} width={elemWidth} />
                    ))}
                </animated.div>
            </div>
        </section>
    );
});

Slider.displayName = "Slider";
export default Slider;
