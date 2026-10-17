import Image from "next/image";
import LikeButton from "./like-button";
import { menus } from "../data/content";

export default function MenuSection() {
    return (
        <section id="menu" className="menu-section">
            <h2>Menu Favorit Kami</h2>
            <p className="section-lead">Dipilih dari biji kopi pilihan berbagai daerah di Indonesia.</p>

            <div className="menu-grid">
                {menus.map((menu) => (
                    <article className="menu-card" key={menu.nama}>
                        <Image
                            src={menu.img}
                            alt={menu.nama}
                            width={600}
                            height={400}
                            className="menu-img"
                        />
                        <h3>{menu.nama}</h3>
                        <p>{menu.deskripsi}</p>
                        <div className="menu-footer">
                            <span className="price">{menu.harga}</span>
                            <LikeButton />
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
