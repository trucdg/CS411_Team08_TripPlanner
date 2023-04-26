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
        <ul>
          <li>
            <Link to="/" className={classes.actionBtn}>
              <span>Learn More</span>
            </Link>
          </li>
          <li>
            <Link to="/login" className={classes.actionBtn}>
              <span>Log In</span>
            </Link>
          </li>

          <li>
            <Link to="/signup" className={classes.actionBtn}>
              <span>Sign Up</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
