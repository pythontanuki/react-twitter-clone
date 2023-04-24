import {
  ChatBubbleOutline,
  FavoriteBorder,
  PublicOutlined,
  Repeat,
  VerifiedUserOutlined,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";
import "./Post.css";

export default function Post(displayName, username, text, avatar, image) {
  return (
    <div className="post">
      <div className="post-avatar">
        <Avatar src={avatar} />
      </div>
      <div className="post-body">
        <div className="post-header">
          <div className="post-headerText">
            <h3>{displayName}</h3>
            <span className="post-headerSpecial">
              <VerifiedUserOutlined className="post-budge" />
              {username}
            </span>
          </div>
          <div className="header-description">
            <p>{text}</p>
          </div>
        </div>
        <img src={image} alt="Any is OK" />
        <div className="post-footer">
          <ChatBubbleOutline fontSize="small" />
          <Repeat fontSize="small" />
          <FavoriteBorder fontSize="small" />
          <PublicOutlined fontSize="small" />
        </div>
      </div>
    </div>
  );
}
