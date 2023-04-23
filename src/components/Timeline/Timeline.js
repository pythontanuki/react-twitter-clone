import React, { useEffect, useState } from "react";
import Post from "./Post";
import { collection, getDocs } from "firebase/firestore";
import db from "../../firebase.js";

export default function Timeline() {
  const [posts, setposts] = useState([]);
  useEffect(() => {
    const postData = collection(db, "post");
    getDocs(postData).then((querySnapshot) => {
      querySnapshot.docs.map((doc) => {
        setposts.push(doc.data());
      });
    });
  }, [posts]);
  return (
    <div className="timeline">
      <h2>Home</h2>
      {posts.map((post) => {
        <Post
          displayName={post.displayName}
          userName={post.userName}
          avatar={post.avatar}
          content={post.content}
          image={post.image}
        />;
      })}
    </div>
  );
}
