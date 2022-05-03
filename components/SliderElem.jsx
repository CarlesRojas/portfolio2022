import { useState, memo } from "react";
import useQueryClasses from "../hooks/useQueryClasses";
import Image from "next/image";
import cx from "classnames";

const SliderElem = memo(({ data, width, onElemClick }) => {
    const { poster } = data;

    const [focused, setFocused] = useState(false);

    // #################################################
    //   RENDER
    // #################################################

    const queryClasses = useQueryClasses();

    return (
        <div className={cx("sliderElem", queryClasses)} style={{ width: `${width}px` }}>
            <div className={cx("aspectRatio", queryClasses)}>
                <div
                    className={cx("elemContainer", { focused }, queryClasses)}
                    onClick={() => onElemClick(data)}
                    onMouseEnter={() => setFocused(true)}
                    onMouseLeave={() => setFocused(false)}
                >
                    {poster && <Image src={poster} alt="" layout="fill" />}
                </div>
            </div>
        </div>
    );
});

SliderElem.displayName = "SliderElem";
export default SliderElem;
