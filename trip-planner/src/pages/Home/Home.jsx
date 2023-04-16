import { Link } from "react-router-dom";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <div className={classes["home-content-box"]}>
      <div className={classes["home-content"]}>
        <h1>TripPlanner</h1>
        <p class="description">Feel at ease on your trip with our planner!</p>
        <p>
          Create, organize, and plan your itinerary with a free travel planning
          app.
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
