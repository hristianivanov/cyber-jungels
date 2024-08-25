import './infoSection.scss'

import gunImg from '../../assets/gun.png'
import stone1 from '../../assets/stone1.png'
import stone2 from '../../assets/stone2.png'

export default function InfoSection() {
    return (
        <article className="site-info">
            <div className="desc">
                <p>In a world where people used cybernetics to create
                    perfect and deadly animal-machines, a terrible event
                    occurred. Control over some of these creations was lost,
                    and they began attacking humans, destroying everything
                    in their path. In this dystopia, the surviving humans
                    formed different factions and compete with each other
                    using their cyber beasts in a card battle. The player
                    must choose their faction and assemble a deck of cyber
                    animals for battle.</p>
            </div>
            <div className="background">
                <img src={gunImg} alt="gun" className="gun" />
                <img src={stone1} alt="stone" className="left-stone" />
                <img src={stone2} alt="stone" className="right-stone" />
            </div>
        </article>
    );
}