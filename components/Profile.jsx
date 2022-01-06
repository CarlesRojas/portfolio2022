import { useEffect, useRef, useState, useContext, memo, useCallback } from "react";
import Image from "next/image";
import { MediaQuery } from "../contexts/MediaQuery";
import useQueryClasses from "../hooks/useQueryClasses";
import cx from "classnames";
import SVG from "react-inlinesvg";
import dynamic from "next/dynamic";

const Profile = memo(({ data }) => {
    const { media } = useContext(MediaQuery);
    const { title, icon, subtitle, description, links, qr, video, screenshots, horizontal, process } = data;

    var deleteHorizontal = true;
    const queryClasses = useQueryClasses();

    // #################################################
    //   ELEMS
    // #################################################

    const quickInfoDOM = icon && title && subtitle && (
        <div className={cx("quickInfo", queryClasses)}>
            <div className={cx("imageContainer", queryClasses)}>
                <Image src={icon} alt="" layout="fill" />
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

    const linksDOM = links && (
        <div className={cx("linksContainer", queryClasses)}>
            {links.map(({ icon, url }, i) => (
                <a href={url} target="_blank" className={cx("link", queryClasses)} key={i} rel="noopener noreferrer">
                    <div className={cx("imageContainer", queryClasses)}>
                        <Image src={icon} alt="" layout="fill" />
                    </div>
                </a>
            ))}
        </div>
    );

    const qrDOM = qr && (
        <a href={qr.url} target="_blank" className={cx("qr", queryClasses)} rel="noopener noreferrer">
            <div className={cx("imageContainer", queryClasses)}>
                <Image src={qr.qr} alt="" layout="fill" />
            </div>
        </a>
    );

    // #################################################
    //   RENDER
    // #################################################

    return (
        <div className={cx("profile", queryClasses)}>
            {media.isMobile && deleteHorizontal && (
                <div className={cx("mobileHorizontalApp", queryClasses)}>{title}</div>
            )}

            {media.isMobile && !deleteHorizontal && (
                <div className={cx("mobileVerticalApp", queryClasses)}>{title}</div>
            )}

            {!media.isMobile && deleteHorizontal && (
                <div className={cx("horizontalApp", queryClasses)}>
                    <div className="top">
                        <div className={cx("left", queryClasses)}>
                            {quickInfoDOM}

                            <div className={cx("linksContainer", queryClasses)}>
                                {qrDOM}
                                {linksDOM}
                            </div>
                        </div>

                        <div className={cx("right", queryClasses)}>
                            {descriptionDOM}
                            {processDOM}
                        </div>
                    </div>

                    <div className="bottom"></div>
                </div>
            )}

            {!media.isMobile && !deleteHorizontal && (
                <div className={cx("verticalApp", queryClasses)}>
                    <div className={cx("left", queryClasses)}>
                        {quickInfoDOM}
                        {descriptionDOM}
                        {processDOM}

                        <div className={cx("linksContainer", queryClasses)}>
                            {linksDOM}
                            {qrDOM}
                        </div>
                    </div>

                    <div className={cx("right", queryClasses)}></div>
                </div>
            )}
        </div>
    );
});

Profile.displayName = "Profile";
export default dynamic(() => Promise.resolve(Profile), {
    ssr: false,
});
