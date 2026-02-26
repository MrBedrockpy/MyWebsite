import React from "react";
import { Link } from 'react-router-dom'

export default function Home({ t }) {

    return (
        <div className="page-container banner-box frame">
            <div className="banner-content">
                <h1>{t.welcome}</h1>
                <div className={"about"}>
                    <div className={"avatar-container"}>
                        <img className={"avatar"} src="avatar.png" alt=""/>
                    </div>
                    <div className={"description"}>
                        {t.description.map((text) => (
                            <h5><b>{text}</b></h5>
                        ))}
                    </div>
                </div>
            </div>

            <nav className={"navbar"}>
                <ul className="link">
                    <li><Link to="/bio"><b>{t.menu.biography}</b></Link></li>
                    <li><Link to="/projects"><b>{t.menu.projects}</b></Link></li>
                    <li><Link to="/portfolio"><b>{t.menu.portfolio}</b></Link></li>
                    <li><Link to="/service"><b>{t.menu.services}</b></Link></li>
                </ul>
            </nav>
        </div>
    );
}
