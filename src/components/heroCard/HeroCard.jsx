import './heroCard.scss'

import icon from '../../assets/overall.png'
import blood from '../../assets/blood.png'

export default function HeroCard({
    img,
    name,
    overall,
    attack,
    defens,
    align
}) {

    return (
        <div className="hero-card" style={{ backgroundImage: `url(${img})`, backgroundPosition: align ? align : 'center' }}>
            <div className="hero-name">{name}</div>
            <div className="hero-overall">
                <div className="value">{overall}</div>
                <img src={icon} alt="overall-img" />
            </div>
            <div className="hero-defens">
                <img src={blood} alt="defens" />
                <div className="value">{defens}</div>
            </div>
            <div className="hero-attack">
                <img src={blood} alt="attack" />
                <div className="value">{attack}</div>
            </div>
        </div>
    );
}