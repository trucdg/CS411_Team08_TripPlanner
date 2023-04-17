import React, { useEffect, useState } from "react";
import { useRoutes, Link } from "react-router-dom";
import classes from "./TravelFeed.module.css";
import ReadPosts from "./ReadPosts";
import CreatePost from "./CreatePost";
import EditPost from "./EditPost";
import { supabase } from "../../client";

const TravelFeed = () => {
  // const descr =
  //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";

  // const posts = [
  //   {
  //     id: "1",
  //     title: "Beaches in Hawaii 🤸🏽‍♀️",
  //     author: "Harvey Milian",
  //     description: descr,
  //   },
  //   {
  //     id: "2",
  //     title: "Love Lock in Paris 🔒",
  //     author: "Beauford Delaney",
  //     description: descr,
  //   },
  //   {
  //     id: "3",
  //     title: "Visit Vungtau City, Vietnam 🎀",
  //     author: "Truc Duong",
  //     description: descr,
  //   },
  //   {
  //     id: "4",
  //     title: "A day at Golden Gate Park",
  //     author: "Denise Michelle",
  //     description: descr,
  //   },
  // ];

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
