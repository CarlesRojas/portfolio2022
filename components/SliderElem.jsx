import { useState, memo } from "react";
import useQueryClasses from "../hooks/useQueryClasses";
import Image from "next/image";
import cx from "classnames";

const SliderElem = memo(({ data, width }) => {
    const { screenshots, title } = data;

    const [focused, setFocused] = useState(false);

    const handleClick = () => {
        console.log(`${title} clicked`);
    };

    // #################################################
    //   RENDER
    // #################################################

    const queryClasses = useQueryClasses();

    return (
        <div className={cx("sliderElem", queryClasses)} style={{ width: `${width}px` }}>
            <div className={cx("aspectRatio", queryClasses)}>
                <div
                    className={cx("elemContainer", { focused }, queryClasses)}
                    onClick={handleClick}
                    onMouseEnter={() => setFocused(true)}
                    onMouseLeave={() => setFocused(false)}
                >
                    {screenshots && <Image src={screenshots[0]} alt="" layout="fill" />}
                </div>
            </div>
        </div>
    );
});

SliderElem.displayName = "SliderElem";
export default SliderElem;
