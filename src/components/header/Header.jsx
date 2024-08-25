import Hero from "../hero/Hero";
import Navbar from "../navbar/Navbar";

import './header.scss'

export default function Header() {
    return (
        <header className="site-header">
            <Navbar />
            <Hero />
        </header>
    );
}