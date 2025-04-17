import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Hologram from "./Hologram";

export function Home({ theme }) {
    return (
        <div className="left-panel">
            <h1 className="title">Muhammad Nur Dalwai</h1>
            <p className="subtitle">Full-Stack Software Developer</p>
            <ul className="nav-list">
                <li>
                    <a href="https://github.com/MuhammadNurD" target="_blank">Projects</a>
                </li>
                <li>
                    <Link to="/about">About me</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/testimonials">Testimonials</Link>
                </li>
            </ul>
            {/* Pass theme as prop to Hologram */}
            <div className="hologram-wrapper">
                <Hologram theme={theme} />
            </div>
        </div>
    );
}

