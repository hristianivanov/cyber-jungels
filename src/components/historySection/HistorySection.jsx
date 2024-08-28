import './historySection.scss';
import img1 from '../../assets/history-line-1-img.png';
import img2 from '../../assets/history-line2-img.png';
import img3 from '../../assets/history-line3-img.png';
import img4 from '../../assets/history-line4-img.png';
import text1 from '../../assets/history-line1-text.png';
import text2 from '../../assets/history-line2-text.png';
import text3 from '../../assets/history-line3-text.png';
import text4 from '../../assets/history-line4-text.png';
import HistoryCard from '../historyCard/HistoryCard';

export default function HistorySection() {
    const data = [
        {
            img: text1,
            text: `In 2060, a group of scientists began conducting secret experiments on genetically modifying animals in an underground laboratory. They used cutting-edge technologies and computer programs to create the perfect combination of animal genes and mechanics, allowing them to create unique cyber-creatures.

        Soon, the scientists began applying these technologies to more dangerous animals such as predators and reptiles in the hope of creating the perfect weapon for military purposes. However, the experiments got out of control and the animals began exhibiting extraordinary aggression and strength. They started attacking the laboratory personnel and breaking out.

        Nevertheless, the scientists were not going to stop, and they continued their experiments in an attempt to create even stronger cyber-monsters. They continued to modify the animals' genes by adding new, more powerful mechanisms, and subjecting them to more rigorous training and testing.`
        },
        {
            img: text2,
            text: `The world after the invasion of the cyber-animals looked terrifying. Cities were destroyed, leaving only ruins and ash. Pollution and chemical emissions became the norm, and the quality of air and water became unfit for human life.

Where once there was life and movement, now there was emptiness and silence. Animals and insects were displaced by the cyber-animals, leaving the planet devoid of nature and living beings. The cyber-animals, once created to assist humans, had now become a threat to their survival.

Humanity was forced to start over. They began to restore and recreate what had been destroyed, and to seek new ways of survival in this new, devastated world`
        },
        {
            img: text3,
            text: `Despite the devastation caused by the cyber-animals, pockets of humanity survived by banding together in factions. These groups pooled their resources and knowledge to fend off the cyber-threat, while also seeking to harness the power of the cyber-animals for their own purposes.`
        },
        {
            img: text4,
            text: `Some factions saw the cyber-animals as valuable assets and began to use them as their own army. They modified the cyber-animals to enhance their combat effectiveness and used them in battles against other factions that threatened their survival.

As the cyber-animals continued to spread across the planet, different factions fought against each other for control over them. Some factions collaborated to destroy them, while others used the cyber-animals for their own personal gain.`
        },
    ];

    return (
        <div className="history-section">
            <h2 className="title">
                HI<span className="colored">S</span>TOR<span className="colored">Y</span>
            </h2>
            <div className="history-list">
                <div className="row">
                    <HistoryCard img={img1} />
                    <HistoryCard {...data[0]} />
                </div>
                <div className="row">
                    <HistoryCard img={img2} />
                    <HistoryCard {...data[1]} />
                </div>
                <div className="row">
                    <HistoryCard img={img3} />
                    <HistoryCard {...data[2]} />
                </div>
                <div className="row">
                    <HistoryCard img={img4} />
                    <HistoryCard {...data[3]} />
                </div>
            </div>
        </div>
    );
}
