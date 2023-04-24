import React, { useState } from "react";
import { Avatar, Button } from "@mui/material";
import { addDoc, collection } from "firebase/firestore";
import db from "../../firebase";

export default function Tweetbox() {
  const [message, setMessage] = useState("");
  const [image, setImage] = useState("");

  const handleMessage = (event) => {
    setMessage(event);
  };

  const handleImage = (event) => {
    setImage(event);
  };

  const sendTweet = (event) => {
    event.preventDefault();
    addDoc(collection(db, "post"), {
      displayName: "taichi",
      userName: "swapman",
      avatar: "",
      content: message,
      image: image,
    });
  };

  return (
    <div className="tweetbox">
      <div className="tweetbox-input">
        <form>
          <Avatar src={image} />
          <input
            type="text"
            placeholder="What's happening?"
            onChange={(event) => handleMessage(event.target.value)}
          ></input>
          <input
            type="text"
            placeholder="Please Enter Image's URL"
            onChange={(event) => handleImage(event.target.value)}
          />
          <Button
            className="submit-button"
            type="submit"
            value="Submit"
            onClick={sendTweet}
          >
            Submit Tweet
          </Button>
        </form>
      </div>
    </div>
  );
}
