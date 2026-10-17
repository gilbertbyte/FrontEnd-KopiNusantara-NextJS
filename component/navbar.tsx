"use client";

import { useState } from "react";

const links = [
    { href: "#beranda", label: "Beranda" },
    { href: "#menu", label: "Menu" },
    { href: "#tentang", label: "Tentang" },
    { href: "#faq", label: "FAQ" },
    { href: "#kontak", label: "Kontak" }
];

export default function Navbar() {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <header className="site-header">
            <div className="nav-wrap">
                <a href="#beranda" className="brand">Kopi Nusantara</a>

                <button
                    className="nav-burger"
                    type="button"
                    aria-label="Buka menu"
                    aria-expanded={open}
                    onClick={() => setOpen(!open)}>
                    <span></span><span></span><span></span>
                </button>

                <nav className={`main-nav ${open ? "open" : ""}`}>
                    {links.map((link) => (
                        <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
                            {link.label}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
}
