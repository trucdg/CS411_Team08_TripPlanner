import React from "react";
import classes from "./Posts.module.css";

const Posts = () => {
  return (
    <div className={classes["posts-main"]}>
      <div className={classes.header}>
        <h1>TravelFeed</h1>
        <p>
          Need some inspiration picking out your next travel destination? Or you
          want to inspire people with your trips?
        </p>
        <p>Explore and share travelling experiences here!</p>
      </div>
      <div>
        <button className={classes.headerBtn}>
          Explore
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
        <button className={classes.headerBtn}>
          New Post<i className="fa-solid fa-square-up-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Posts;
