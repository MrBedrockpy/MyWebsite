export default function Biography({t}) {
    return (
        <div className={"page-container"}>
            <div className="frame">
                <h2 className="title">{t.bio.title}</h2>
                <p><b>{t.bio.overview}</b></p>
            </div>
        </div>
    )
}