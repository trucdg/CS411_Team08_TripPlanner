import React from "react";
import classes from "./CreatePost.module.css";

const CreatePost = () => {
  return (
    <div className={classes["createPost-main"]}>
      <div className={"container " + classes.inner}>
        <form>
          <label for="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            className={"form-control"}
            placeholder="What's on your mind?"
          ></input>
          <label for="author" className="form-label">
            Author
          </label>
          <input
            type="text"
            name="author"
            id="author"
            className={"form-control"}
            placeholder="What's your name?"
          ></input>
          <label for="description" className="form-label">
            Description
          </label>
          <textarea
            name="description"
            id="description"
            className="form-control"
            placeholder="Tell us more about your exciting trip!"
            rows="5"
          ></textarea>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
