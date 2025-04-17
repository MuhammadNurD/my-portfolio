import React, { useState } from "react";
import { send } from "emailjs-com";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "../../src/App.css";

export function Contact({ onSendEmail, formData, setFormData }) {
    return (
        <div className="right-panel">
            <form onSubmit={onSendEmail} className="contact-form">
                <input
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                <input
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <textarea
                    placeholder="Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
                <button type="submit">Send</button>
            </form>
            <Link to="/" className="back-link">Back to Home</Link>
        </div>
    );
}