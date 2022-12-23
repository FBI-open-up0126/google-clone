import React from "react";
import "./App.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import SearchInput from "./SearchInput";

export default function App() {
    const [searchQuery, setSearchQuery] = React.useState("");

    function search() {
        if (!searchQuery) {
            return;
        }

        window.location.href = `https://google.com/search?q=${searchQuery}`;
    }

    function onInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setSearchQuery(event.target.value);
    }

    function onFormSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        search();
    }

    function onSearchButtonClick() {
        search();
    }

    return (
        <div className="app">
            <Navbar />

            <section className="main-content">
                <div className="google-icon">
                    <img
                        src="https://www.google.com/logos/doodles/2022/seasonal-holidays-2022-6753651837109831.8-ladc.gif"
                        alt="Google icon"
                    />
                </div>
                <div className="search">
                    <form onSubmit={onFormSubmit}>
                        <SearchInput value={searchQuery} onChange={onInputChange} />
                    </form>
                </div>
                <div className="buttons">
                    <button onClick={onSearchButtonClick}>Google Search</button>
                    {/* TODO: FIGURE OUT A WAY OF DOING THIS */}
                    <button>I'm Feeling Lucky</button>
                </div>
            </section>

            <Footer />
        </div>
    );
}
