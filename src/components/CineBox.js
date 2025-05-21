import React from "react";
import "../CineBox.scss";

export default function CineBox() {
  return (
    <a href="./cinebox">
      <div className="project-container">
        <div className="project-image"></div>
        <div className="project-info">
          <h1>CineBox</h1>
          <p>Description</p>
        </div>
      </div>
    </a>
  );
}
