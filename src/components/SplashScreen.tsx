import Button from "./Button";


function SplashScreen() {
    return (
      <div className="relative  flex flex-col justify-center items-center h-[630px]">
        <div className="absolute top-0 left-0 bg-[url('./assets/splash.png')] p-4  bg-cover bg-no-repeat w-full h-[630px] text-left flex flex-col justify-between"></div>
        <div className="relative z-10 px-5 pt-8 flex flex-col justify-center items-center gap-[350px]">
        <div className="relative top-50">
            <p className="text-light font-bold text-[24px] ">Quran App</p>
            <p className="text-light p-5 text-[16px] w-50">
                Learn Quran and Recite once everyday </p>
        </div>
        <Button />
        </div>
      </div>
    );
}

export default SplashScreen;