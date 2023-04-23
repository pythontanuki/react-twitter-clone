import React from "react";
import SidebarOptions from "./SidebarOptions";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import TagIcon from "@mui/icons-material/Tag";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Button } from "@mui/material";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <TwitterIcon className="sidebarTwitterIcon" />
      <SidebarOptions text="Home" Icon={HomeIcon} />
      <SidebarOptions text="Explore" Icon={TagIcon} />
      <SidebarOptions text="Notifications" Icon={NotificationsNoneIcon} />
      <SidebarOptions text="Messages" Icon={MailOutlineIcon} />
      <SidebarOptions text="Bookmarks" Icon={BookmarkBorderIcon} />
      <SidebarOptions text="List" Icon={ListAltIcon} />
      <SidebarOptions text="Profile" Icon={PersonOutlineIcon} />
      <SidebarOptions text="More" Icon={MoreHorizIcon} />
      <Button variant="contained" className="tweetButton">
        Tweet
      </Button>
    </div>
  );
}
