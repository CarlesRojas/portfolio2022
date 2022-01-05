import Image from "next/image";
import useClass from "../hooks/useClass";
import ProfilePicture from "../public/profile/Profile.png";

export default function Header() {
    return (
        <header className={useClass("header")}>
            <div className={useClass("info")}>
                <p className={useClass()}>{"Hi"}</p>
                <h1 className={useClass()}>{"I'm Carles Rojas"}</h1>
                <h2 className={useClass()}>{"Software Engineer & Designer from Barcelona"}</h2>
            </div>
            <div className={useClass("image")}>
                <Image src={ProfilePicture} alt="" layout="fill" priority />
            </div>
        </header>
    );
}
