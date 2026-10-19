export type Menu = {
    nama: string;
    img: string;
    deskripsi: string;
    harga: string;
};

export type Stat = {
    angka: string;
    label: string;
};

export type FaqItem = {
    tanya: string;
    jawab: string;
};

export const menus: Menu[] = [
    {
        nama: "Kopi Susu Gula Aren",
        img: "/images/kopi-susu-gula-aren.jpeg",
        deskripsi: "Espresso robusta lokal dipadukan susu segar dan gula aren asli.",
        harga: "Rp 25.000"
    },
    {
        nama: "Kopi Tubruk Nusantara",
        img: "/images/kopi-tubruk.jpeg",
        deskripsi: "Kopi hitam tradisional, diseduh kasar khas warung kopi rumahan.",
        harga: "Rp 27.000"
    },
    {
        nama: "Cappuccino",
        img: "/images/cappucino.jpeg",
        deskripsi: "Minuman kopi khas Italia yang dibuat dari perbandingan seimbang antara espreso, susu panas, dan busa susu.",
        harga: "Rp 24.000"
    },
    {
        nama: "Americano",
        img: "/images/americano.jpeg",
        deskripsi: "Minuman kopi hitam yang dibuat dengan mencampurkan satu atau dua shot espresso dengan air panas",
        harga: "Rp 22.000"
    }
];

export const stats: Stat[] = [
    { angka: "7+", label: "Daerah Asal Kopi" },
    { angka: "50+", label: "Menu Racikan" },
    { angka: "3", label: "Tahun Beroperasi" }
];

export const faqs: FaqItem[] = [
    {
        tanya: "Apakah kopi yang digunakan asli dari petani lokal?",
        jawab: "Ya, seluruh biji kopi yang kami gunakan berasal dari petani di berbagai daerah di Indonesia dan diseleksi langsung oleh tim kami."
    },
    {
        tanya: "Apakah tersedia layanan pesan antar?",
        jawab: "Tersedia. Kamu bisa memesan melalui WhatsApp di 0812-3456-7890 dan pesanan akan diantar ke area sekitar kedai."
    },
    {
        tanya: "Bisakah tingkat kemanisan atau gula diatur sesuai selera?",
        jawab: "Tentu. Kamu bisa meminta tingkat gula lebih sedikit, normal, atau lebih banyak saat memesan, baik langsung maupun via WhatsApp."
    },
    {
        tanya: "Apakah ada menu kopi tanpa kafein atau non-kopi?",
        jawab: "Saat ini fokus menu kami adalah racikan kopi. Untuk pilihan rendah kafein, kamu bisa memilih Kopi Susu Gula Aren dengan porsi espresso lebih sedikit — cukup sampaikan saat memesan."
    },
    {
        tanya: "Apakah kedai buka setiap hari termasuk hari libur?",
        jawab: "Kedai kami buka setiap hari, termasuk akhir pekan dan sebagian besar hari libur nasional, pukul 08.00 - 21.00 WIB."
    }
];

export const identitas = {
    nama: "Gilbert Imanuel Susanto",
    nim: "535250087"
};
