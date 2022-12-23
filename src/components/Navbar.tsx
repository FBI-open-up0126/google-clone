import GoogleApps from "./GoogleApps";
import "./Navbar.css";

export default function Navbar() {
    return (
        <nav className="navbar basic-navbar">
            <ul className="basic-nav nav">
                <li>
                    <a href="https://about.google">About</a>
                </li>
                <li>
                    <a href="https://store.google.com/US">Store</a>
                </li>
            </ul>
            <ul className="basic-nav nav right">
                <li>
                    <a href="https://mail.google.com">Gmail</a>
                </li>
                <li>
                    <a href="https://www.google.com/imghp?hl=en&ogbl">Images</a>
                </li>
                <li>
                    <GoogleApps />
                </li>
                <li>
                    <button>Profile Picture</button>
                </li>
            </ul>
        </nav>
    );
}
