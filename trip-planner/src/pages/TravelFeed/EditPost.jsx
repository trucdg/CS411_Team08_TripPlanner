import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import classes from "./EditPost.module.css";
import { supabase } from "../../client";

const EditPost = ({ data }) => {
  const params = useParams();
  const id = params.id;

  const [post, setPost] = useState({
    id: null,
    title: "",
    author: "",
    description: "",
  });

  useEffect(() => {
    const result = data.filter((item) => String(item.id) == id)[0];
    setPost({
      title: result.title,
      author: result.author,
      description: result.description,
    });
  }, [data, id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPost((prevPost) => {
      return {
        ...prevPost,
        [name]: value,
      };
    });
  };

  const updatePost = async (event) => {
    event.preventDefault();
    const { error } = await supabase
      .from("Posts")
      .update({
        title: post.title,
        author: post.author,
        description: post.description,
      })
      .eq("id", id);

    if (error) {
      console.log(error);
    }

    window.location = "/feed";
  };

  const deletePost = async (event) => {
    event.preventDefault();
    const { error } = await supabase.from("Posts").delete().eq("id", id);

    if (error) {
      console.log(error);
    }

    window.location = "/feed";
  };

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
            onChange={handleChange}
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
            onChange={handleChange}
            value={post.author}
          ></input>
          <label for="description" className="form-label">
            Description
          </label>
          <textarea
            name="description"
            id="description"
            className="form-control"
            onChange={handleChange}
            value={post.description}
            rows="5"
          ></textarea>
          <button
            type="submit"
            className={classes.submitBtn}
            onClick={updatePost}
          >
            Submit
          </button>
          <button
            type="submit"
            className={classes.deleteBtn}
            onClick={deletePost}
          >
            Delete
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditPost;
