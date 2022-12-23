import GoogleApps from "./GoogleApps";
import "./Navbar.css";

export default function Navbar() {
    return (
        <div className="navbar">
            <ul className="nav">
                <li>
                    <a href="https://about.google">About</a>
                </li>
                <li>
                    <a href="https://store.google.com/US">Store</a>
                </li>
            </ul>
            <ul className="nav right">
                <li>
                    <a href="https://mail.google.com">Gmail</a>
                </li>
                <li>
                    <a href="https://www.google.com/imghp?hl=en&ogbl">Images</a>
                </li>
                <li>
                    {/* <button className="apps-button centered">
                        <svg focusable="false" viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"
                            ></path>
                        </svg>
                    </button> */}
                    <GoogleApps />
                </li>
                <li>
                    <button>Profile Picture</button>
                </li>
            </ul>
        </div>
    );
}
