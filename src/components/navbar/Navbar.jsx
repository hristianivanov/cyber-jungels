import './navbar.scss'

export default function Navbar() {
    return (
        <nav className="main-nav">
            <ul className="nav-list">
                <li className="nav-item">
                    <a className="nav-link" href="#">Characters</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">History</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Cards</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Download a game</a>
                </li>
            </ul>
        </nav>
    );
}