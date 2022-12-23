import "./SearchInput.css";
import classNames from "classnames";
import React from "react";

interface Props extends React.ComponentPropsWithoutRef<"input"> {}

export default function SearchInput(props: Props) {
    const inputRef = React.useRef<HTMLInputElement>(null);
    const divRef = React.useRef<HTMLDivElement>(null);

    const [hasClicked, setHasClicked] = React.useState(false);

    const classes = classNames("search-input", { clicked: hasClicked });

    React.useEffect(() => {
        const onClick = (event: MouseEvent) => {
            if (!divRef.current || !event.target) {
                return;
            }

            if (!divRef.current.contains(event.target as Node)) {
                setHasClicked(false);
            }
        };

        document.body.addEventListener("click", onClick);

        return () => {
            document.body.removeEventListener("click", onClick);
        };
    }, []);

    const onDivClick = () => {
        if (!inputRef.current) {
            return;
        }

        inputRef.current.focus();
        setHasClicked(true);
    };

    return (
        <div className={classes} onClick={onDivClick} ref={divRef}>
            <span className="centered">
                <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                        fill="currentColor"
                        d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                    ></path>
                </svg>
            </span>
            <input {...props} ref={inputRef}></input>
        </div>
    );
}
