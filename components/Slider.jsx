import { useEffect, useRef, useState, useContext, memo } from "react";
import useClass from "../hooks/useClass";
import useFocus from "../hooks/useFocus";
import SVG from "react-inlinesvg";
import cx from "classnames";
import SliderElem from "./SliderElem";
import { Utils } from "../contexts/Utils";
import { MediaQuery } from "../contexts/MediaQuery";
import { Fragment } from "react/cjs/react.production.min";

const NAME = "slider";

const Slider = memo(({ index, parentID, elements, title }) => {
    const { clamp } = useContext(Utils);
    const { media } = useContext(MediaQuery);

    // #################################################
    //   FOCUS MANAGEMENT
    // #################################################

    const newID = `${parentID}-${NAME}-${index}`;
    const newObject = {
        id: newID,
        parent: parentID,
        orientation: "horizontal",
        children: [],
    };
    const treeUpdated = useFocus(newID, newObject, parentID);

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
        setIndexesInView(({ min }) => {
            let newMin = min + elemsInScreen.current;
            let newMax = newMin + elemsInScreen.current;

            if (newMax >= elements.length) {
                newMax = elements.length - 1;
                newMin = newMax - elemsInScreen.current;
            }

            return { min: newMin, max: newMax };
        });
    };

    const prev = () => {
        setIndexesInView(({ min, max }) => {
            let newMin = Math.max(0, min - elemsInScreen.current);
            let newMax = newMin + elemsInScreen.current;

            return { min: newMin, max: newMax };
        });
    };

    // #################################################
    //   RENDER
    // #################################################

    return (
        <section className={useClass("slider")} ref={sliderRef}>
            <h1 className={useClass()}>{title}</h1>

            {treeUpdated && (
                <Fragment>
                    <div className="container">
                        {elements.map((data, i) => (
                            <SliderElem
                                key={i}
                                parentID={newID}
                                data={data}
                                width={elemWidth}
                                elemsInScreen={elemsInScreen.current}
                                index={i}
                            />
                        ))}
                    </div>

                    <div className={cx("prev", { visible: indexesInView.min > 0 })}>
                        <SVG className="icon" src={"/icons/prev.svg"} onClick={next} />
                    </div>

                    <div className={cx("next", { visible: indexesInView.max < elements.length - 1 })}>
                        <SVG className="icon" src={"/icons/next.svg"} onClick={prev} />
                    </div>
                </Fragment>
            )}
        </section>
    );
});

Slider.displayName = "Slider";
export default Slider;
