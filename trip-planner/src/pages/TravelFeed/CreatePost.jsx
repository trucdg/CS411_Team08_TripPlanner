import React from "react";
import { useRef } from "react";
import classes from "./CreatePost.module.css";

const CreatePost = () => {
  const titleRef = useRef();
  const authorRef = useRef();
  const descriptionRef = useRef();

  const createPost = (event) => {
    event.preventDefault();
    const post = {
      title: titleRef.current.value,
      author: authorRef.current.value,
      description: descriptionRef.current.value,
    };
    console.log(post);
  };
  return (
    <div className={classes["createPost-main"]}>
      <div className={"container " + classes.inner}>
        <form onSubmit={createPost}>
          <label for="title" className="form-label">
            Title
          </label>
          <input
            ref={titleRef}
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
            ref={authorRef}
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
            ref={descriptionRef}
            name="description"
            id="description"
            className="form-control"
            placeholder="Tell us more about your exciting trip!"
            rows="5"
          ></textarea>
          <button type="submit" className={classes.submitBtn}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
