import { Link } from "react-router-dom";

function Button() {
    return (
      <Link
        to="/homepage"
        className="bg-light rounded-[100px] pr-[24px] pl-[24px] flex justify-center items-center gap-[10px] w-[320px]"
      >
        <button className="text-dark bg-light  ">Get Started</button>
      </Link>
    );
}

export default Button;