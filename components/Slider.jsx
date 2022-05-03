import { useEffect, useRef, useState, useContext, memo, useCallback } from "react";
import dynamic from "next/dynamic";
import useQueryClasses from "../hooks/useQueryClasses";
import cx from "classnames";
import SliderElem from "./SliderElem";
import SlideButtons from "./SlideButtons";
import { useSpring, animated } from "react-spring";
import { useDrag } from "react-use-gesture";
import { Utils } from "../contexts/Utils";
import { MediaQuery } from "../contexts/MediaQuery";

const Slider = memo(({ elems, title, onElemClick }) => {
    const { clamp, debounce } = useContext(Utils);
    const { media } = useContext(MediaQuery);

    const sliderWidth = useRef();
    const elemsInScreen = useRef();
    const elemWidthRef = useRef();
    const [elemWidth, setElemWidth] = useState(0);

    // #################################################
    //   SPRING
    // #################################################

    const handleRest = ({ value }) => {
        const currIndex = Math.floor(Math.abs(value.x) / elemWidthRef.current);
        setMin(currIndex);
    };

    const [{ x }, spring] = useSpring(() => ({
        x: 0,
        onRest: handleRest,
    }));
    const [min, setMin] = useState(0);

    const prev = () => {
        const currIndex = Math.floor(Math.abs(x.get()) / elemWidthRef.current);
        const newIndex = Math.max(0, currIndex - elemsInScreen.current);
        setMin(newIndex);
        spring.start({ x: -newIndex * elemWidthRef.current });
    };

    const next = () => {
        const currIndex = Math.floor(Math.abs(x.get()) / elemWidthRef.current);
        const newIndex = Math.min(elems.length - elemsInScreen.current, currIndex + elemsInScreen.current);
        setMin(newIndex);
        spring.start({ x: -newIndex * elemWidthRef.current });
    };

    // #################################################
    //   GESTURE
    // #################################################

    const containerRef = useRef();
    const initialX = useRef(0);

    // Vertical gesture
    const gestureBind = useDrag(
        ({ event, first, down, movement: [mx] }) => {
            event.stopPropagation();

            if (first) initialX.current = x.get();

            if (down) {
                const maxSlide = containerRef.current.getBoundingClientRect().width - sliderWidth.current;
                const disp = clamp(initialX.current + mx, -maxSlide, 0);
                const currIndex = Math.floor(Math.abs(disp) / elemWidthRef.current);
                setMin(currIndex);
                spring.start({ x: disp });
            }
        },
        {
            filterTaps: true,
            axis: "x",
        }
    );

    // #################################################
    //   RESIZE
    // #################################################

    const firstResizeDone = useRef(false);

    const onResize = useCallback(() => {
        firstResizeDone.current = true;
        sliderWidth.current = window.innerWidth - (media.isMobile ? 2 * 18 : 6 * 18);
        elemsInScreen.current = clamp(Math.floor(sliderWidth.current / 350), 1, 5);
        elemWidthRef.current = sliderWidth.current / elemsInScreen.current;
        setElemWidth(elemWidthRef.current);

        const newIndex = clamp(min, 0, elems.length - elemsInScreen.current);
        setMin(newIndex);
        spring.start({ x: -newIndex * elemWidthRef.current, immediate: true });
    }, [clamp, elems, media.isMobile, min, spring]);

    useEffect(() => {
        if (!firstResizeDone.current) onResize();
        const debounceResize = debounce(onResize, 500);

        window.addEventListener("resize", debounceResize);
        return () => {
            window.removeEventListener("resize", debounceResize);
        };
    }, [onResize, debounce]);

    // #################################################
    //   RENDER
    // #################################################

    const queryClasses = useQueryClasses();

    return (
        <section className={cx("slider", queryClasses)}>
            <h1 className={queryClasses}>{title}</h1>

            {media.isTouchScreen && (
                <div className={cx("touchScroll", queryClasses)}>
                    <div className={cx("touchContainer", queryClasses)}>
                        {elems.map((data, i) => (
                            <SliderElem key={i} data={data} width={elemWidth} onElemClick={onElemClick} />
                        ))}
                    </div>
                </div>
            )}

            {!media.isTouchScreen && (
                <animated.div
                    className={cx("container", queryClasses)}
                    {...gestureBind()}
                    style={{ x }}
                    ref={containerRef}
                >
                    {elems.map((data, i) => (
                        <SliderElem key={i} data={data} width={elemWidth} onElemClick={onElemClick} />
                    ))}
                </animated.div>
            )}

            <SlideButtons
                next={next}
                prev={prev}
                nextVisible={min < elems.length - elemsInScreen.current}
                prevVisible={min > 0}
            />
        </section>
    );
});

Slider.displayName = "Slider";
export default dynamic(() => Promise.resolve(Slider), {
    ssr: false,
});
