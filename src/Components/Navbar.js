import { AiOutlineLink } from "react-icons/ai";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div
        className="flex justify-between items-center"
        style={styles.navbarWrapper}
      >
        <Link to="/">
          <div className="flex justify-center items-center">
            <AiOutlineLink size={24} />
            <div className="font-bold text-lg ml-1">SociaLinks</div>
          </div>
        </Link>

        <div className="flex justify-center items-center">
          {/* <div className="mx-4">Pricing</div> */}
        </div>
        <div className="flex justify-center items-center">
          <div className="mr-8">Features</div>
          <Link to="/login">
            <div className="mr-8">Login</div>
          </Link>
          <Link to="/signup">
            <button className="bg-off-white text-black rounded-md px-4 py-2">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

const styles = {
  navbarWrapper: {
    height: "8vh",
  },
};

export default Navbar;
