import './historyCard.scss';

export default function HistoryCard({
    img = '',
    text = ''
}) {
    return (
        <div className="history-card">
            <div className="background-img">
                <img
                    src={img}
                    alt="img"
                    style={text !== '' ? { filter: 'grayscale(100%)' } : {}}
                />
            </div>
            {text && (
                <div className="text">
                    {text}
                </div>
            )}
        </div>
    );
}
