import React from "react";
import { Link } from "react-router-dom";
import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={classes["post-card"]}>
      <Link to="">
        <i className="fa-solid fa-ellipsis-vertical"></i>
      </Link>
      <h2>{props.title}</h2>
      <h3>{"by " + props.author}</h3>
      <p>{props.description}</p>
    </div>
  );
};

export default Card;
