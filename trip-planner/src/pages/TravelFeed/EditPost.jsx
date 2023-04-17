import React from "react";
import { useParams } from "react-router-dom";
import classes from "./EditPost.module.css";

const EditPost = ({ data }) => {
  const params = useParams();
  const id = params.id;
  const post = data.filter((item) => item.id == id)[0];

  return (
    <div className={classes["EditPost-main"]}>
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
            value={post.title}
          ></input>
          <label for="author" className="form-label">
            Author
          </label>
          <input
            type="text"
            name="author"
            id="author"
            className={"form-control"}
            value={post.author}
          ></input>
          <label for="description" className="form-label">
            Description
          </label>
          <textarea
            name="description"
            id="description"
            className="form-control"
            value={post.description}
            rows="5"
          ></textarea>
          <button type="submit" className={classes.submitBtn}>
            Submit
          </button>
          <button type="submit" className={classes.deleteBtn}>
            Delete
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditPost;
