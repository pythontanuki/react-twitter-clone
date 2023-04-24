import React, { useEffect, useState } from "react";
import Post from "./Post.js";
import { collection, getDocs } from "firebase/firestore";
import db from "../../firebase.js";
import Tweetbox from "./Tweetbox";

useEffect(() => {
  (async () => {
    const response = await fetch(
      "https://www.googleapis.com/books/v1/volumes?q=AWS"
    );
    const data = await response.json();
    alert(data.totalItems);
  })();
}, []);

export default function Timeline() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    (async () => {
      const postData = collection(db, "post");
      await getDocs(postData).then((querySnapshot) => {
        querySnapshot.docs.forEach((doc) => {
          setPosts([...posts, doc.data()]);
        });
      });
    })();
    console.log(posts);
  }, []);
  return (
    <div className="timeline">
      <h2>Home</h2>
      <Tweetbox />
      <div className="posts">
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
    </div>
  );
}
