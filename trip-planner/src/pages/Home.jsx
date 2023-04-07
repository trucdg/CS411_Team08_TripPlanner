import { Link } from "react-router-dom";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <div className={classes["home-content-box"]}>
      <div className={classes["home-content"]}>
        <h1>TripPlanner</h1>
        <p class="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde aliquam
          inventore sequi consequatur commodi sint, quasi qui corporis dolorum
          tenetur earum iste aliquid, libero, amet eius dignissimos maxime
          deleniti blanditiis.
        </p>
        <Link
          to="/"
          className="btn btn-lg btn-secondary font-weight-bold text-white"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default Home;
