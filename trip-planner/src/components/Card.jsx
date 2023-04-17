import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Card.module.css";

const Card = (props) => {
  const [likesCount, setLikesCount] = useState(0);
  const likeClickHandler = () => {
    setLikesCount((prevState) => prevState + 1);
  };
  return (
    <div className={classes["post-card"]}>
      <Link to={"edit/" + props.id} className={classes.edit}>
        <i className="fa-solid fa-ellipsis-vertical"></i>
      </Link>
      <h2 className={classes.title}>{props.title}</h2>
      <h4 className={classes.author}>{"by " + props.author}</h4>
      <p className={classes.description}>{props.description}</p>
      <button className={classes.likeBtn} onClick={likeClickHandler}>
        <i className="fa-solid fa-thumbs-up"></i> Likes: {likesCount}
      </button>
    </div>
  );
};

export default Card;
