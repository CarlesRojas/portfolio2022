import { useState, useRef, memo, useEffect, useContext } from "react";
import Image from "next/image";
import useQueryClasses from "../hooks/useQueryClasses";
import { MediaQuery } from "../contexts/MediaQuery";
import cx from "classnames";
import ReactPlayer from "react-player/lazy";
import SVG from "react-inlinesvg";
import dynamic from "next/dynamic";
import { useSprings, animated } from "react-spring";

const Screenshots = memo(({ video, screenshots, horizontal }) => {
    const { media } = useContext(MediaQuery);
    const queryClasses = useQueryClasses();

    // #################################################
    //   VIDEO
    // #################################################

    const [playing, setPlaying] = useState(true);
    const player = useRef(null);

    const onPlayPauseClicked = () => {
        setPlaying((prev) => !prev);
    };

    const onVideoEnds = () => {
        setPlaying(false);
        player.current.seekTo(0);
    };

    const playerContainerRef = useRef();

    const videoDOM = video ? (
        <div className={cx("videoContainer", queryClasses)} key={-1}>
            <div className="playerContainer" ref={playerContainerRef}>
                <ReactPlayer
                    ref={player}
                    playing={playing}
                    className="video"
                    url={video}
                    width=""
                    height=""
                    onEnded={onVideoEnds}
                    config={{
                        file: {
                            forceVideo: true,
                            attributes: {
                                muted: true,
                                controls: false,
                                disablePictureInPicture: true,
                                controlsList: "nodownload noremoteplayback",
                            },
                        },
                    }}
                />
            </div>

            <div
                className={cx("playPause", { playing }, queryClasses)}
                onClick={onPlayPauseClicked}
                style={{
                    width: playerContainerRef.current
                        ? playerContainerRef.current.getBoundingClientRect().width
                        : "100%",
                }}
            >
                <div className={cx("iconContainer", { pause: playing })}>
                    <SVG
                        className={cx("icon", { play: !playing }, queryClasses)}
                        src={playing && !media.isTouchScreen ? "/icons/pause.svg" : "/icons/play.svg"}
                    />
                </div>
            </div>
        </div>
    ) : null;

    // #################################################
    //   SCREENSHOTS
    // #################################################

    const screenshotsDOM =
        screenshots &&
        screenshots.map((src, i) => (
            <div className={cx("screenshot", queryClasses)} key={i}>
                <Image className={cx({ horizontal }, { vertical: !horizontal })} src={src} alt="" layout="fill" />
            </div>
        ));

    // #################################################
    //   TRANSITIONS
    // #################################################

    const itemsArray =
        videoDOM && screenshotsDOM
            ? [videoDOM, ...screenshotsDOM]
            : videoDOM
            ? [videoDOM]
            : screenshotsDOM
            ? screenshotsDOM
            : null;

    const currentVisibleItem = useRef(0);
    const [visibleItems, setVisibleItems] = useState(itemsArray.map((_, i) => i === currentVisibleItem.current));

    const [springs, api] = useSprings(itemsArray.length, (i) => ({
        opacity: visibleItems[i] ? 1 : 0,
        pointerEvents: visibleItems[i] ? "all" : "none",
        scale: visibleItems[i] ? 1 : 0.9,
    }));

    const next = () => {
        setPlaying(false);
        setVisibleItems((prev) => {
            const newArray = [...prev];
            newArray[currentVisibleItem.current] = false;

            if (currentVisibleItem.current === newArray.length - 1) currentVisibleItem.current = 0;
            else currentVisibleItem.current += 1;

            newScreenshotShown.current = false;
            return newArray;
        });
    };

    const prev = () => {
        setPlaying(false);
        setVisibleItems((prev) => {
            const newArray = [...prev];
            newArray[currentVisibleItem.current] = false;

            if (currentVisibleItem.current === 0) currentVisibleItem.current = newArray.length - 1;
            else currentVisibleItem.current -= 1;

            newScreenshotShown.current = false;
            return newArray;
        });
    };

    const newScreenshotShown = useRef(false);
    useEffect(() => {
        api.start((i) => ({
            opacity: visibleItems[i] ? 1 : 0,
            pointerEvents: visibleItems[i] ? "all" : "none",
            scale: visibleItems[i] ? 1 : 0.9,
        }));

        if (!newScreenshotShown.current) {
            const showTimeout = setTimeout(() => {
                newScreenshotShown.current = true;
                setVisibleItems((prev) => {
                    const newArray = [...prev];
                    newArray[currentVisibleItem.current] = true;
                    return newArray;
                });
            }, 400);
        }

        return () => {
            clearTimeout(showTimeout);
        };
    }, [visibleItems, api]);

    // #################################################
    //   RENDER
    // #################################################

    return (
        <div className={cx("screenshots", queryClasses)}>
            <div className={cx("container", queryClasses)}>
                {springs.map((styles, i) => (
                    <animated.div className="animated" style={styles} key={i}>
                        {itemsArray[i]}
                    </animated.div>
                ))}
            </div>

            <div className={cx("controls", queryClasses)}>
                <SVG className={cx("prev", queryClasses)} src={"/icons/prev.svg"} onClick={prev} />

                <p className={cx("state", queryClasses)}>
                    {`${currentVisibleItem.current + 1} `}
                    <span>/ {visibleItems.length}</span>
                </p>

                <SVG className={cx("next", queryClasses)} src={"/icons/next.svg"} onClick={next} />
            </div>
        </div>
    );
});

Screenshots.displayName = "Screenshots";
export default dynamic(() => Promise.resolve(Screenshots), {
    ssr: false,
});
