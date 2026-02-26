import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Biography from "./pages/bio/Biography.jsx";
import locale from "./data/locale.json";
import './App.css'
import Projects from "./pages/Projects.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Service from "./pages/Service.jsx";

export default function App() {
    const languages = Object.keys(locale);
    const [language, setLanguage] = useState(languages[0]);
    const t = locale[language];

    const handleLanguageSwitch = () => {
        const currentIndex = languages.indexOf(language);
        const nextIndex = (currentIndex + 1) % languages.length;
        setLanguage(languages[nextIndex]);
    };

    return (
        <Router>
            <section className="banner">
                <button className="lang-btn-banner" onClick={handleLanguageSwitch}>
                    {language.toUpperCase()}
                </button>

                <Routes>
                    <Route path="/" element={ <Home t={t}/> }/>
                    <Route path="/bio" element={ <Biography t={t}/> }/>
                    <Route path="/projects" element={ <Projects t={t}/> }/>
                    <Route path="/portfolio" element={ <Portfolio t={t}/> }/>
                    <Route path="/service" element={ <Service t={t}/> }/>
                </Routes>
            </section>
        </Router>
    );
}