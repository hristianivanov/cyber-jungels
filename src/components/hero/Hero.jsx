import './hero.scss'
import img from '../../assets/main-character.png';

export default function Hero() {
    return (
        <section className="hero-section">
            <header className="text-heading">
                <h3 className="subtitle">New Era of Card Battles</h3>
                <h1 className="title">CyberJungles</h1>
            </header>
            <div className="img-container">
                <img src={img} alt="character" width={688} height={688} className="character" />
            </div>
        </section>
    );
}