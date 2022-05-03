import { memo } from "react";
import cx from "classnames";
import { useTransition, animated } from "react-spring";

const Popup = memo(({ children, visible, setVisible }) => {
    // #################################################
    //   TRANSITIONS
    // #################################################

    const backgroundTransition = useTransition(visible, {
        from: { backgroundColor: "rgba(30, 33, 44, 0)" },
        enter: { backgroundColor: "rgba(30, 33, 44, 1)" },
        leave: { backgroundColor: "rgba(30, 33, 44, 0)", delay: 400 },
        reverse: visible,
    });

    const contentTransition = useTransition(visible, {
        from: { translateY: "100vh" },
        enter: { translateY: "0vh", delay: 400 },
        leave: { translateY: "100vh" },
        reverse: visible,
    });

    // #################################################
    //   CLOSE
    // #################################################

    return (
        <div className="popup">
            {backgroundTransition(
                (styles, item) =>
                    item && <animated.div className={cx("background", { visible })} style={styles}></animated.div>
            )}
            {contentTransition(
                (styles, item) =>
                    item && (
                        <animated.div className="contentContainer" style={styles} onMouseDown={() => setVisible(false)}>
                            {children}
                        </animated.div>
                    )
            )}
        </div>
    );
});

Popup.displayName = "Popup";
export default Popup;
