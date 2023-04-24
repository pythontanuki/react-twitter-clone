import React, { useEffect, useState } from "react";
import Post from "./Post.js";
import { collection, getDocs } from "firebase/firestore";
import db from "../../firebase.js";
import Tweetbox from "./Tweetbox";

export default function Timeline() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const postData = collection(db, "post");
    getDocs(postData).then((querySnapshot) => {
      setPosts(querySnapshot.docs.map((doc) => doc.data()));
    });
  }, []);
  return (
    <div className="timeline">
      <h2>Home</h2>
      <Tweetbox />
      {posts.forEach((post) => {
        <Post
          displayName={post.displayName}
          username={post.username}
          text={post.text}
          avatar={post.avatar}
          image={post.image}
        />;
      })}
    </div>
  );
}
