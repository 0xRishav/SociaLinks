import Navbar from "../Components/Navbar";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div className="text-center">
      <Navbar />
      <div className="flex flex-col justify-between items-center">
        <div
          className="text-5xl font-bold mt-40"
          style={{ lineHeight: "4rem" }}
        >
          Turn <span className="text-blue">followers</span> into{" "}
          <span className="text-blue">customers</span> <br /> with Social Links
        </div>
        <div className="text-off-grey mt-8">
          Use Social Links to create a fully-customizable link in bio web page.{" "}
          <br />
          Drive traffic from Instagram & TikTok, track clicks, and more.
        </div>
        <Link to="/signup">
          <button className="bg-blue text-white rounded-md px-4 py-2 flex items-center justify-center mt-24">
            Try Social Links for Free
            <div className="ml-2">
              <BsArrowRight />
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Homepage;
