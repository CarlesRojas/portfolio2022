import { useContext, memo } from "react";
import Image from "next/image";
import { MediaQuery } from "../contexts/MediaQuery";
import useQueryClasses from "../hooks/useQueryClasses";
import cx from "classnames";
import SVG from "react-inlinesvg";
import dynamic from "next/dynamic";
import Screenshots from "./Screenshots";

const Profile = memo(({ data, setVisible }) => {
    const { media } = useContext(MediaQuery);
    const { title, icon, subtitle, description, links, qr, videoPosition, video, screenshots, horizontal, process } =
        data;

    const queryClasses = useQueryClasses();

    // #################################################
    //   ELEMS
    // #################################################

    const close = (
        <SVG className={cx("close", queryClasses)} src={"/icons/close.svg"} onClick={() => setVisible(false)} />
    );

    const quickInfoDOM = icon && title && subtitle && (
        <div className={cx("quickInfo", queryClasses)}>
            <div className={cx("imageContainer", queryClasses)}>
                <Image src={icon} alt="" layout="fill" priority />
            </div>

            <div className={cx("titleContainer", queryClasses)}>
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
            </div>
        </div>
    );

    const descriptionDOM =
        description &&
        description.map((paragraph, i) => (
            <p className={cx("description", { first: i === 0 }, queryClasses)} key={i}>
                {paragraph}
            </p>
        ));

    const processDOM = process && <p className={cx("process", queryClasses)}>{process}</p>;

    const linksDOM =
        links &&
        links.map(({ icon, url }, i) => (
            <a href={url} target="_blank" className={cx("link", queryClasses)} key={i} rel="noopener noreferrer">
                <div className={cx("imageContainer", queryClasses)}>
                    <SVG src={icon} className="icon" />
                    {/* <Image src={icon} alt="" layout="fill" priority /> */}
                </div>
            </a>
        ));

    const qrDOM = qr && (
        <a href={qr.url} target="_blank" className={cx("qr", queryClasses)} rel="noopener noreferrer">
            <div className={cx("imageContainer", queryClasses)}>
                <Image src={qr.qr} alt="" layout="fill" priority />
            </div>
        </a>
    );

    const screenshotsDOM = screenshots && (
        <Screenshots video={video} screenshots={screenshots} horizontal={horizontal} videoPosition={videoPosition} />
    );

    // #################################################
    //   RENDER
    // #################################################

    return (
        <div className={cx("profile", queryClasses)} onMouseDown={(e) => e.stopPropagation()}>
            {(media.isMobile || media.isTablet) && (
                <div className={cx("mobile", queryClasses)}>
                    {close}

                    <div className={cx("scroll", queryClasses)}>
                        {quickInfoDOM}
                        {descriptionDOM}
                        {processDOM}

                        {(qrDOM || linksDOM) && (
                            <div className={cx("linksContainer", queryClasses)}>
                                {qrDOM}
                                {linksDOM}
                            </div>
                        )}

                        <div
                            className={cx(
                                "screenshotsAspectRatio",
                                { horizontal },
                                { vertical: !horizontal },
                                queryClasses
                            )}
                        >
                            <div className={cx("screenshotContainer", { horizontal }, queryClasses)}>
                                {screenshotsDOM}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {!media.isMobile && (
                <div className={cx("desktop", queryClasses)}>
                    {close}

                    <div className={cx("left", { horizontal }, queryClasses)}>
                        {quickInfoDOM}
                        {descriptionDOM}
                        {processDOM}

                        {(qrDOM || linksDOM) && (
                            <div className={cx("linksContainer", queryClasses)}>
                                {qrDOM}
                                {linksDOM}
                            </div>
                        )}
                    </div>

                    <div className={cx("right", { horizontal }, queryClasses)}>{screenshotsDOM}</div>
                </div>
            )}
        </div>
    );
});

Profile.displayName = "Profile";
export default dynamic(() => Promise.resolve(Profile), {
    ssr: false,
});
