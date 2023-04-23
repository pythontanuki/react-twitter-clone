import React from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import RepeatOutlinedIcon from "@mui/icons-material/RepeatOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SignalCellularAltOutlinedIcon from "@mui/icons-material/SignalCellularAltOutlined";
import IosShareOutlinedIcon from "@mui/icons-material/IosShareOutlined";

export default function Post(
  displayName,
  userName,
  avatar,
  // verified,
  content,
  image
) {
  return (
    <div className="post">
      <div className="post-avatar">
        <Avatar src={avatar} />
      </div>
      <div className="post-body">
        <div className="post-about-account">
          <h3>{displayName}</h3>
          <span className="userName">{userName}</span>
        </div>
        <div className="post-content">
          <p>{content}</p>
          <img src={image} alt="Any is OK." />
        </div>
        <div className="post-footer">
          <ChatBubbleOutlineOutlinedIcon />
          <RepeatOutlinedIcon />
          <FavoriteBorderOutlinedIcon />
          <SignalCellularAltOutlinedIcon />
          <IosShareOutlinedIcon />
        </div>
      </div>
    </div>
  );
}
