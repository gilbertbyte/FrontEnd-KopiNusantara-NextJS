import { stats } from "../data/content";

export default function About() {
    return (
        <section id="tentang" className="about-section">
            <div className="about-flex">
                <div className="about-text">
                    <h2>Cerita Kami</h2>
                    <p>Kopi Nusantara dimulai dari dapur rumah kecil dengan satu mesin seduh manual. Kami percaya kopi terbaik datang dari biji yang jujur dan proses yang sabar. Setiap cangkir yang kami sajikan membawa cerita petani kopi dari berbagai daerah di Indonesia.</p>
                </div>
                <div className="about-stats">
                    {stats.map((stat) => (
                        <div className="stat" key={stat.label}>
                            <strong>{stat.angka}</strong>
                            <span>{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
