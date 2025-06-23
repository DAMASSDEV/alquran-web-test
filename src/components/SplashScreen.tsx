import { useEffect } from "react";
import Button from "./Button";


function SplashScreen() {
    return (
      <div className="relative text-light">
        <div className="absolute top-0 left-[-70px] bg-center bg-[url('./assets/splash.png')] bg-cover bg-no-repeat w-sm min-h-screen"></div>
        <div className="relative z-10 px-5 pt-8 flex flex-col justify-center items-center gap-[320px]">
        <div className="relative top-50">
            <p className=" font-bold text-[24px] ">Quran App</p>
            <p className=" p-5 text-[16px] w-50">
                Learn Quran and Recite once everyday </p>
        </div>
        <Button />
        </div>
      </div>
    );
}

export default SplashScreen;