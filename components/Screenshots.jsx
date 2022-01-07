import { useState, useRef } from "react";
import Image from "next/image";
import useQueryClasses from "../hooks/useQueryClasses";
import cx from "classnames";
import ReactPlayer from "react-player/lazy";
import SVG from "react-inlinesvg";

export default function Screenshots({ video, screenshots, horizontal }) {
    const queryClasses = useQueryClasses();

    // #################################################
    //   VIDEO
    // #################################################

    const [playing, setPlaying] = useState(false);
    const player = useRef(null);

    const onVideoClicked = () => {
        setPlaying((prev) => !prev);
    };

    const onVideoEnds = () => {
        setPlaying(false);
        player.current.seekTo(0);
    };

    var videoDOM = video ? (
        <div className={cx("videoContainer", queryClasses)}>
            <div className="playerContainer">
                <ReactPlayer
                    ref={player}
                    onClick={onVideoClicked}
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

            <div className={cx("playPause", { playing }, queryClasses)}>
                <div className="iconContainer">
                    <SVG className={cx("icon", queryClasses)} src={playing ? "/icons/pause.svg" : "/icons/play.svg"} />
                </div>
            </div>
        </div>
    ) : null;

    // #################################################
    //   RENDER
    // #################################################

    return (
        <div className={cx("screenshots", queryClasses)}>
            <div className={cx("container", queryClasses)}>
                {videoDOM}

                {screenshots.map((src, i) => (
                    <div className={cx("screenshot", queryClasses)} key={i}>
                        <Image
                            className={cx({ horizontal }, { vertical: !horizontal })}
                            src={src}
                            alt=""
                            layout="fill"
                        />
                    </div>
                ))}
            </div>

            <div className={cx("controls", queryClasses)}>
                <SVG className={cx("prev", queryClasses)} src={"/icons/prev.svg"} />

                <p className={cx("state", queryClasses)}>
                    1 <span>/ 6</span>
                </p>

                <SVG className={cx("next", queryClasses)} src={"/icons/next.svg"} />
            </div>
        </div>
    );
}
