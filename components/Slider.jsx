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

const Slider = memo(({ elements, title }) => {
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

    const [indexesInView, setIndexesInView] = useState({ min: 0, max: elemsInScreen.current });

    useEffect(() => {
        setIndexesInView((prev) => ({ ...prev, max: prev.min + elemsInScreen.current }));
    }, [elemWidth]);

    const next = () => {
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

    const [{ x }, spring] = useSpring(() => ({ x: "0px" }));

    // #################################################
    //   GESTURE
    // #################################################

    const containerRef = useRef();

    // Vertical gesture
    const gestureBind = useDrag(
        ({ first, event, down, vxvy: [vx], offset: [ox] }) => {
            // Stop event propagation
            event.stopPropagation();
            if (first) console.log(containerRef.current.getBoundingClientRect().width);

            if (!down) {
                if (vx > 1) next();
                else if (vx < -1) prev();
                console.log("DOWN");
            }

            // Update the position while the gesture is active
            else {
                console.log(ox);
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
                    : 0,
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
                    {elements.map((data, i) => (
                        <SliderElem
                            key={i}
                            data={data}
                            width={elemWidth}
                            elemsInScreen={elemsInScreen.current}
                            index={i}
                        />
                    ))}
                </animated.div>
            </div>

            {!media.isTouchScreen && (
                <Fragment>
                    <div className={cx("prevNextButton", { visible: indexesInView.min > 0 })}>
                        <h1 className="invisible">a</h1>
                        <div className={cx("iconContainer", { visible: indexesInView.min > 0 })} onClick={prev}>
                            <SVG className="icon" src={"/icons/prev.svg"} />
                        </div>
                    </div>

                    <div className={cx("prevNextButton", "next", { visible: indexesInView.max < elements.length - 1 })}>
                        <h1 className="invisible">a</h1>{" "}
                        <div
                            className={cx("iconContainer", { visible: indexesInView.max < elements.length - 1 })}
                            onClick={next}
                        >
                            <SVG className="icon" src={"/icons/next.svg"} />
                        </div>
                    </div>
                </Fragment>
            )}
        </section>
    );
});

Slider.displayName = "Slider";
export default Slider;
