import { useContext } from "react";
import useQueryClasses from "../hooks/useQueryClasses";
import SVG from "react-inlinesvg";
import cx from "classnames";
import { MediaQuery } from "../contexts/MediaQuery";

export default function SlideButtons({ next, prev, nextVisible, prevVisible }) {
    const { media } = useContext(MediaQuery);

    const queryClasses = useQueryClasses();

    return (
        !media.isTouchScreen && (
            <div className="slideButtons">
                <h1 className={cx("invisible", queryClasses)}>a</h1>

                <div className="buttonsConteiner">
                    <div className={cx("iconContainer", { visible: prevVisible > 0 })} onClick={prev}>
                        <SVG className="icon" src={"/icons/prev.svg"} />
                    </div>

                    <div className={cx("iconContainer", "next", { visible: nextVisible })} onClick={next}>
                        <SVG className="icon" src={"/icons/next.svg"} />
                    </div>
                </div>
            </div>
        )
    );
}
