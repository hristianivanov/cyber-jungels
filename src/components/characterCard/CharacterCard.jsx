import './characterCard.scss';

export default function CharacterCard({
    img,
    name,
    desc
}) {
    // Dynamically set the border color and name color based on the character's name
    const style = {
        '--border-color': `var(--card-color-${name.toLowerCase()})`,
        '--name-color-hover': `var(--card-color-${name.toLowerCase()})`
    };

    return (
        <article className="character-card" style={style}>
            <div className="character-img">
                <img src={img} alt="character" />
            </div>

            <div className="character-info">
                <h3 className="name">{name}</h3>
                <div className="desc">{desc}</div>
            </div>
        </article>
    );
}
