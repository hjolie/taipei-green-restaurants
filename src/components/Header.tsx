import Link from "next/link";

const Header = () => {
    return (
        <header>
            <nav className="navbar">
                <h1>
                    喵皇<span>綠</span>膳房
                </h1>
                <ul>
                    <li>
                        <Link href="/">HOME</Link>
                    </li>
                    <li>
                        <Link href="/search">SEARCH</Link>
                    </li>
                    <li>
                        <Link href="/">SIGNIN</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
