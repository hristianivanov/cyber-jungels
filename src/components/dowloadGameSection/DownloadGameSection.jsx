import './downloadGameSection.scss'

import leftImg from '../../assets/character-left.png'
import rightImg from '../../assets/character-right.png'

import vector1 from '../../assets/vector1.svg'
import vector2 from '../../assets/vector2.svg'
import vector3 from '../../assets/vector3.svg'
import vector4 from '../../assets/vector4.svg'

export default function DownloadGameSection() {
    return (
        <div className="download-game-section">
            <h2 className="title">Fight your opponent in a fight for life and death</h2>
            <div className="cta">
                Download a game

                <img id='vector1' src={vector1} alt="" />
                <img id='vector2' src={vector2} alt="" />
                <img id='vector3' src={vector3} alt="" />
                <img id='vector4' src={vector4} alt="" />
            </div>

            <img id='left' src={leftImg} alt="img" />
            <img id='right' src={rightImg} alt="img" />
        </div>
    );
}