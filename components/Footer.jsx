import { useContext, useState, useRef, useEffect } from "react";
import cx from "classnames";
import { Projects } from "../contexts/Projects";
import useQueryClasses from "../hooks/useQueryClasses";

export default function Footer() {
    const { studies } = useContext(Projects);
    const queryClasses = useQueryClasses();

    // ###################################################
    //      COPY EMAIL
    // ###################################################

    const [canCopy, setCanCopy] = useState(false);
    const emailCopiedRef = useRef(null);

    const handleCopyEmail = () => {
        if (!canCopy) return;

        // Show the copied message for a second
        emailCopiedRef.current.classList.remove("fadeOut");
        void emailCopiedRef.current.offsetWidth;
        emailCopiedRef.current.classList.add("fadeOut");

        navigator.clipboard.writeText("carlesrojas@outlook.com");
    };

    useEffect(() => {
        setCanCopy(navigator && "clipboard" in navigator && "writeText" in navigator.clipboard);
    }, []);

    // ###################################################
    //      RENDER
    // ###################################################

    return (
        <footer className={cx("footer", queryClasses)}>
            <div className={cx("top", queryClasses)}>
                <h1 className={cx(queryClasses)}>Carles Rojas</h1>

                <h2 className={cx(queryClasses, { canCopy })} onClick={handleCopyEmail}>
                    carlesrojas@outlook.com
                </h2>

                <p className="emailCopy" ref={emailCopiedRef}>
                    email copied
                </p>
            </div>

            <div className={cx("bottom", queryClasses)}>
                {studies.current &&
                    studies.current.map(({ title, institution, initialYear, finalYear }, i) => (
                        <div className={cx("study", queryClasses)} key={i}>
                            <h1 className={cx(queryClasses)}>{title}</h1>
                            <h2 className={cx(queryClasses)}>{institution}</h2>
                            <p className={cx(queryClasses)}>{`${initialYear} - ${finalYear}`}</p>
                        </div>
                    ))}
            </div>
        </footer>
    );
}
