import "./Footer.css";

export default function Footer() {
    return (
        <footer className="footer basic-navbar">
            <ul className="basic-nav">
                <li>
                    <a href="https://ads.google.com">Advertising</a>
                </li>
                <li>
                    <a href="https://smallbusiness.withgoogle.com">Business</a>
                </li>
                <li>
                    <a href="https://google.com/search/howsearchworks">How Search works</a>
                </li>
            </ul>
            <ul className="basic-nav">
                <li>
                    <img
                        alt="Leaf"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAYCAMAAAAiV0Z6AAAAPFBMVEVLoEN0wU6CzFKCzFKCzFKCzFKCzFJSo0MSczNDmkCCzFJPoUMTczNdr0gmgziCzFITczMTczMTczMTczPh00jOAAAAFHRSTlPF/+bIsms8Ad///hX+//5/tXw7aMEAx10AAACaSURBVHgBbc4HDoRQCATQ33tbvf9dF9QxaCT9UQaltLHOh/golXKhMs5Xqa0xU1lyoa2fXFyQOsDG38qsLy4TaV+sFislovyhPzLJJrBu6eQOtpW0LjbJkzTuTDLRVNKa3uxJI+VdiRqXSeu6GW+Qxi29eLIi8H7EsYrT42BD+mQtNO5JMjRuC4lSY8V4hsLX0egGijvUSEP9AbylEsOkeCgWAAAAAElFTkSuQmCC"
                    />
                    <a href="https://sustainability.google/carbon-free">
                        Carbon neutral since 2007
                    </a>
                </li>
            </ul>
            <ul className="basic-nav">
                <li>
                    <a href="https://policies.google.com/privacy">Privacy</a>
                </li>
                <li>
                    <a href="https://policies.google.com/terms">Terms</a>
                </li>
                <li>
                    <span className="settings">Settings</span>
                </li>
            </ul>
        </footer>
    );
}
