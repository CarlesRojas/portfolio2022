import { useEffect, useRef, useState, useContext, memo, useCallback } from "react";
import useClass from "../hooks/useClass";
import SliderElem from "./SliderElem";
import SlideButtons from "./SlideButtons";
import { useSpring, animated } from "react-spring";
import { useDrag } from "react-use-gesture";
import { Utils } from "../contexts/Utils";
import { MediaQuery } from "../contexts/MediaQuery";

const Slider = memo(({ elems, title }) => {
    const { clamp, debounce } = useContext(Utils);
    const { media } = useContext(MediaQuery);

    const sliderWidth = useRef();
    const elemsInScreen = useRef();
    const elemWidthRef = useRef();
    const [elemWidth, setElemWidth] = useState(0);

    // #################################################
    //   SPRING
    // #################################################

    const [{ x }, spring] = useSpring(() => ({ x: 0 }));
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

    return (
        <section className={useClass("slider")}>
            <h1 className={useClass()}>{title}</h1>

            <animated.div className={useClass("container")} {...gestureBind()} style={{ x }} ref={containerRef}>
                {elems.map((data, i) => (
                    <SliderElem key={i} data={data} width={elemWidth} />
                ))}
            </animated.div>

            <SlideButtons next={next} prev={prev} nextVisible={true} prevVisible={true} />
        </section>
    );
});

Slider.displayName = "Slider";
export default Slider;
