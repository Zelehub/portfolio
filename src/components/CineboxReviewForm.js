import React, { useState } from "react";
import "../CineboxReviewForm.scss";
import { postCineboxReview } from "../services/reviewService";

export default function CineboxReviewForm() {
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    // e.preventDefault();
    console.log(author);
    console.log(content);
    postCineboxReview({author, content}).then((response) =>
      console.log(response)
    );
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="author-div">
          <label htmlFor="author">Name / Company: </label>
          <input
            type="text"
            id="author"
            onChange={(e) => setAuthor(e.target.value)}
          ></input>
        </div>
        <div className="content-div">
          <label htmlFor="content">Leave a comment: </label>
          <input
            type="text"
            id="content"
            onChange={(e) => setContent(e.target.value)}
          ></input>
        </div>
        <div className="submit-button">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
