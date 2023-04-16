import React from "react";
import { Outlet, Link } from "react-router-dom";
import classes from "./TravelFeed.module.css";

const TravelFeed = () => {
  return (
    <div className={classes["feed-main"]}>
      <div className={classes.header}>
        <h1>TravelFeed</h1>
        <p>
          Need some inspiration picking out your next travel destination? Or you
          want to inspire people with your trips?
        </p>
        <p>Explore and share travelling experiences here!</p>
      </div>
      <div>
        <Link to="./">
          <button className={classes.headerBtn}>
            Explore
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </Link>

        <Link to="newpost">
          <button className={classes.headerBtn}>
            New Post<i className="fa-solid fa-square-up-right"></i>
          </button>
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default TravelFeed;
