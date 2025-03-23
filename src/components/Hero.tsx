import Profile from "./Profile";
import Verse from "./Verse";
import Photo from "../assets/Photo.png";

function Hero() {
  return (
    <div className="relative text-light">
      <div className="absolute top-0 left-0 bg-[url(./assets/HeroBackgroundImage.png)] bg-cover bg-no-repeat h-60 w-full bg-center roudned-2xl"></div>
      <div className="relative z-10 px-5 pt-8 flex flex-col gap-8">
        <Profile
          greeting="Good Evening"
          name="Mareta Ayu  👋🏻 "
          avatar={Photo}
        />
        <Verse
          verse="“He said: ‘Therein you shall live, and therein you shall die, and from it you shall be brought out (i.e. resurrected).’”"
          surah="Al-A’raaf (7:25)"
        />
      </div>
    </div>
  );
}

export default Hero;
