import React from "react";
import { Avatar } from "@mui/material";
import "./Channelnfo.css";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
function Channelnfo() {
  const channelname = "Mercedes-Benz";
  return (
    <div className="channelinfo">
      {/* <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbRdatsyDUxHc0SHwtBFNULM8YsX5IDKweXvJ5lgnM1ynrUVUNjnA55UVGi3z8Xf1gOhA&usqp=CAU"
        alt="Mercedes"
      /> */}
      <Avatar
        src="https://yt3.googleusercontent.com/jB2hOCXGtAAV2UrwD3mr_IGssEfRrPJX8w663lUzXoolVoaAhWVaZjNSM9EwFh-VU5N6Vuc_Yw=s160-c-k-c0x00ffffff-no-rj"
        alt="mercedes"
        className="channelRow__logo"
      />

      <div className="channelRow__text">
        <h4>
          {channelname} {<CheckCircleOutlineIcon />}
        </h4>

        <p>1.45M subscribers • 255 videos</p>
        <p>
          Love of invention will never end.” - Carl Benz Explore the fascinating
          world of Mercedes-Benz ...
        </p>
      </div>
    </div>
  );
}

export default Channelnfo;
