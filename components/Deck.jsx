import React, { useState, memo, useRef } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useSprings, animated, to as interpolate } from "react-spring";
import { useDrag } from "react-use-gesture";
import cx from "classnames";

// Final resting position of the images
const to = (i) => ({ x: 0, y: i * /*-4*/ 0, scale: 1, rot: /*-10 + Math.random() * 20*/ 0, delay: i * 100 });

// Starting position from outside the screen
const from = (_i) => ({ x: window.innerWidth * 2, rot: 0, scale: 1, y: 0 });

// Interpolates rotation and scale into a css transform
const transformStyle = (r, s) => `rotateZ(${r}deg) scale(${s})`;

const Deck = memo(({ images, horizontal }) => {
    // The set flags all the cards that are flicked out
    const [gone] = useState(() => new Set());

    // Return timeout
    const returnCardsTimeout = useRef(null);

    // Springs for each card
    const [props, api] = useSprings(images.length, (i) => ({ ...to(i), from: from(i) }));

    // Gesture
    const gestureBind = useDrag(
        ({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
            // Direction should either left or right
            const dir = xDir < 0 ? -1 : 1;

            // If the gesture is over and it had high velocity -> Flag the card to fly away
            if (!down && velocity > 0.2) gone.add(index);

            // Update the spings
            api.start((i) => {
                // Do not set if not the current card
                if (index !== i) return;

                // If the card is gone or not
                const isGone = gone.has(index);

                // When a card is gone it flys out left or right, otherwise goes back to zero
                const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0;

                // How much the card tilts, flicking it harder makes it rotate faster
                const rot = !isGone && !down ? 0 : mx / 100 + (isGone ? dir * 10 * velocity : 0);

                // The rest of the images lift up
                const scale = down ? 1.05 : 1;

                // Set the spring
                return {
                    x,
                    rot,
                    scale,
                    delay: undefined,
                    config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
                };
            });

            // After some time all the images come back
            if (!down && gone.size === images.length) {
                clearTimeout(returnCardsTimeout.current);

                returnCardsTimeout.current = setTimeout(() => {
                    gone.clear();
                    api.start((i) => to(i));
                }, 600);
            }
        },
        { filterTaps: true, axis: "x" }
    );

    return (
        <div className="deck">
            {props.map(({ x, y, rot, scale }, i) => (
                <animated.div className={"container"} key={i} style={{ x, y }}>
                    <animated.div {...gestureBind(i)} style={{ transform: interpolate([rot, scale], transformStyle) }}>
                        <Image
                            className={cx("screenshot", { horizontal }, { vertical: !horizontal })}
                            src={images[i]}
                            alt=""
                            layout="fill"
                        />
                    </animated.div>
                </animated.div>
            ))}
        </div>
    );
});

Deck.displayName = "Deck";
export default dynamic(() => Promise.resolve(Deck), {
    ssr: false,
});
