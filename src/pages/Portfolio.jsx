import portfolio from "../data/portfolio.json"

export default function Portfolio({t}) {
    return (
        <div className={"page-container"}>
            <div className="frame">
                <h2 className="title">{t.portfolio.title}</h2>
                <p><b>{t.portfolio.overview}</b></p>
            </div>
            {portfolio.portfolio.map((el, key) => (
                <div key={key} className="frame">
                    <video width="600" controls>
                        <source src={el.video} type="video/mp4" />
                        Ваш браузер не поддерживает видео.
                    </video>
                    <h4 className="title">{el.name}</h4>
                    {t.portfolio.descriptions[el.name]}
                </div>
            ))}
        </div>
    )
}
