import { useState, memo } from "react";
import Image from "next/image";
import cx from "classnames";

const SliderElem = memo(({ index, elemsInScreen, data, width }) => {
    const { screenshots, title } = data;

    const [focused, setFocused] = useState(false);

    const handleClick = () => {
        console.log(`${title} clicked`);
    };

    // #################################################
    //   RENDER
    // #################################################

    return (
        <div className={"sliderElem"} style={{ width: `${width}px` }}>
            <div className="aspectRatio">
                <div
                    className={cx("container", { outside: index >= elemsInScreen }, { focused })}
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
