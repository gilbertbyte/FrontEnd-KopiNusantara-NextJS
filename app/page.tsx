import Navbar from "../component/navbar";
import Hero from "../component/hero";
import MenuSection from "../component/menu-section";
import About from "../component/about";
import Faq from "../component/faq";
import Footer from "../component/footer";

const NAMA = "Gilbert Imanuel Susanto";
const NIM = "535250087";

export default function Home() {
    return (
        <>
            <div className="identitas">
                <p>{NAMA} &middot; NIM: {NIM}</p>
            </div>
            <Navbar />
            <Hero />
            <main>
                <MenuSection />
                <About />
                <Faq />
            </main>
            <Footer />
        </>
    );
}