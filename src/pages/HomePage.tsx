import Hero from "../components/Hero";
import SurahContainer from "../components/Surah/SurahContainer";


function HomePage() {
    return (
        <div className="text-white">
            <Hero />
            <SurahContainer />
        </div>
    );
}

export default HomePage;