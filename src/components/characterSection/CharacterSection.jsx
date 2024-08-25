import './characterSection.scss'

import CharacterCard from '../characterCard/CharacterCard';

import healerImg from '../../assets/character1.png'
import hunterImg from '../../assets/character2.png'
import shadowImg from '../../assets/character3.png'
import pirateImg from '../../assets/character4.png'
import arrowImg from '../../assets/character5.png'
import ghostImg from '../../assets/character6.png'

const Data = [
    {
        name: "Healer",
        img: healerImg,
        desc: "She can use the ability \"Restoration\" to restore the health of herself or allied creatures."
    },
    {
        name: "Hunter",
        img: hunterImg,
        desc: "He can place a \"Trap\" on the battlefield that deals damage to enemy creatures when they enter play or attack the Hunter."
    },
    {
        name: "Shadow",
        img: shadowImg,
        desc: "She can use \"Dark Shield\" which protects her from magical attacks and absorbs some of the damage received."
    },
    {
        name: "Pirate",
        img: pirateImg,
        desc: "He has the ability to \"Steal\", which allows him to steal a card from the opponent's deck or hand."
    },
    {
        name: "Arrow",
        img: arrowImg,
        desc: "She can use \"Slow Arrow\", which slows down the movement of her opponents and weakens their attacks."
    },
    {
        name: "Ghost",
        img: ghostImg,
        desc: "He can use \"Phantom Curse\" to place a curse on the opponent's cards, reducing their effectiveness when they are used."
    },
]

export default function CharacterSection() {
    return (
        <section className="character-section">
            <h2 className="title">
                C<span className="colored">H</span>ARA<span className="colored">C</span>TERS
            </h2>
            <div className="character-list">
                <CharacterCard {...Data[0]} />
                <CharacterCard {...Data[1]} />
                <CharacterCard {...Data[2]} />
                <CharacterCard {...Data[3]} />
                <CharacterCard {...Data[4]} />
                <CharacterCard {...Data[5]} />
            </div>
        </section>
    );
}