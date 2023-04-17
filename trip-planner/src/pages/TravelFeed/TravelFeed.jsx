import React, { useEffect, useState } from "react";
import { useRoutes, Link } from "react-router-dom";
import classes from "./TravelFeed.module.css";
import ReadPosts from "./ReadPosts";
import CreatePost from "./CreatePost";
import EditPost from "./EditPost";
import { supabase } from "../../client";

const TravelFeed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // READ all pose from table
    const fetchPosts = async () => {
      const { data } = await supabase.from("Posts").select();

      // set state of posts
      setPosts(data);
      console.log(data);
    };

    console.log("Use Effect run");
    fetchPosts();
  }, []);

  // set up routes
  let elements = useRoutes([
    {
      index: true,
      element: <ReadPosts data={posts} />,
    },
    {
      path: "edit/:id",
      element: <EditPost data={posts} />,
    },
    {
      path: "new",
      element: <CreatePost />,
    },
  ]);

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

        <Link to="new">
          <button className={classes.headerBtn}>
            New Post<i className="fa-solid fa-square-up-right"></i>
          </button>
        </Link>
      </div>
      {elements}
    </div>
  );
};

export default TravelFeed;
