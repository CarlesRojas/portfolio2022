import { useContext, useState, memo } from "react";
import Image from "next/image";
import cx from "classnames";
import useFocus from "../hooks/useFocus";
import { Focus } from "../contexts/Focus";

const NAME = "sliderElem";

const SliderElem = memo(({ parentID, index, elemsInScreen, data, width }) => {
    const { setFocusedNode } = useContext(Focus);

    const { screenshots, title } = data;

    // #################################################
    //   FOCUS MANAGEMENT
    // #################################################

    const [focused, setFocused] = useState(false);

    const newID = `${parentID}-${NAME}-${index}`;
    const newObject = {
        id: newID,
        parent: parentID,
        isFocusable: true,
        index,
        onFocus: () => setFocused(true),
        onBlur: () => setFocused(false),
        onSelect: () => handleOptionSelected(option),
    };
    useFocus(newID, newObject, parentID);

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
                    onMouseEnter={() => setFocusedNode(newID)}
                >
                    {screenshots && <Image src={screenshots[0]} alt="" layout="fill" />}
                    <div className={cx("selected", { focused })}></div>
                </div>
            </div>
        </div>
    );
});

SliderElem.displayName = "SliderElem";
export default SliderElem;
