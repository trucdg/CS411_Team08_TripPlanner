import React from "react";
import { Link } from "react-router-dom";
import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={classes["post-card"]}>
      <Link to="" className={classes.edit}>
        <i className="fa-solid fa-ellipsis-vertical"></i>
      </Link>
      <h2 className={classes.title}>{props.title}</h2>
      <h4 className={classes.author}>{"by " + props.author}</h4>
      <p className={classes.description}>{props.description}</p>
    </div>
  );
};

export default Card;
