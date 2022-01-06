import Image from "next/image";
import cx from "classnames";
import useQueryClasses from "../hooks/useQueryClasses";
import ProfilePicture from "../public/profile/Profile.png";

export default function Header() {
    const queryClasses = useQueryClasses();

    return (
        <header className={cx("header", queryClasses)}>
            <div className={cx("info", queryClasses)}>
                <p className={queryClasses}>{"Hi"}</p>
                <h1 className={queryClasses}>{"I'm Carles Rojas"}</h1>
                <h2 className={queryClasses}>{"Software Engineer & Designer from Barcelona"}</h2>
            </div>
            <div className={cx("image", queryClasses)}>
                <Image src={ProfilePicture} alt="" layout="fill" priority />
            </div>
        </header>
    );
}
