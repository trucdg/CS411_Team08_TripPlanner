import React from "react";
import { useEffect, useState } from "react";
import Card from "../../components/Card";
import { supabase } from "../../client";

const ReadPosts = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(props.data);
  }, [props]);

  return (
    <div>
      {posts && posts.length > 0 ? (
        posts.map((post, index) => {
          return (
            <>
              <Card
                key={index}
                id={post.id}
                title={post.title}
                author={post.author}
                description={post.description}
              />
            </>
          );
        })
      ) : (
        <h2>
          {"There is no post yet"}
          <i className="fa-regular fa-face-sad-cry"></i>
        </h2>
      )}
    </div>
  );
};

export default ReadPosts;
