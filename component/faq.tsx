"use client";

import { useState } from "react";
import { faqs } from "../data/content";

export default function Faq() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    function toggle(i: number) {
        setOpenIndex(openIndex === i ? null : i);
    }

    return (
        <section id="faq" className="faq-section">
            <h2>Pertanyaan yang Sering Diajukan</h2>
            <p className="section-lead">Masih ada yang ingin ditanyakan? Klik pertanyaan di bawah untuk melihat jawabannya.</p>

            <div className="faq-list">
                {faqs.map((faq, i) => (
                    <div className={`faq-item ${openIndex === i ? "open" : ""}`} key={faq.tanya}>
                        <button
                            className="faq-question"
                            type="button"
                            aria-expanded={openIndex === i}
                            onClick={() => toggle(i)}>
                            {faq.tanya}
                            <span className="faq-icon">+</span>
                        </button>
                        <div className="faq-answer">
                            <div className="faq-answer-inner">
                                <p>{faq.jawab}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
