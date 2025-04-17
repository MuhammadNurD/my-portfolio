import React, { useState } from "react";
import { send } from "emailjs-com";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "../../src/App.css";
export function Testimonials({ reviews, reviewInput, setReviewInput, handleReviewSubmit }) {
    return (
        <div className="right-panel">
            <form onSubmit={handleReviewSubmit} className="testimonial-form">
                <textarea
                    placeholder="Leave a testimonial..."
                    value={reviewInput}
                    onChange={(e) => setReviewInput(e.target.value)}
                ></textarea>
                <button type="submit">Submit Review</button>
            </form>
            <div className="testimonial-list">
                {reviews.map((r, i) => (
                    <div key={i} className="testimonial-item">{r}</div>
                ))}
            </div>
            <Link to="/" className="back-link">Back to Home</Link>
        </div>
    );
}