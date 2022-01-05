import Link from "next/link";
import { useSpring, animated } from "react-spring";

export default function Home() {
    const [{ opacity }, spring] = useSpring(() => ({ opacity: "1" }));

    return (
        <div>
            <h1>Home</h1>
            <div onClick={() => spring.start({ opacity: "1" })}>Show</div>
            <div onClick={() => spring.start({ opacity: "0" })}>Hide</div>
            <animated.div style={{ opacity, backgroundColor: "red", padding: "2rem" }}>Content</animated.div>
            <Link href="/MatchEat">MatchEat</Link>
        </div>
    );
}
