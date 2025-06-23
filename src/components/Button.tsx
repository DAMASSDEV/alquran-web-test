import { Link } from "react-router-dom";

function Button() {
  return (
    <Link
      to="/homepage"
      className="bg-light rounded-[100px]"
    >
      <p className="text-dark font-semibold p-1">Get Started</p>
    </Link>
  );
}

export default Button;
