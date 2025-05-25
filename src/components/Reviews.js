import React, { useEffect, useState } from "react";
import { getCineboxReviews } from "../services/reviewService";
import "../Reviews.scss";

export default function Reviews() {
  const [cineboxReviews, setCineboxReviews] = useState([]);

  useEffect(() => {
    getCineboxReviews().then((coiso) => {
      // console.log(coiso.data)
      setCineboxReviews(coiso.data.reviews);
      // console.log(cineboxReviews);
    });
  }, []);

  return (
    <div className="pirontus">
      <div>
        {cineboxReviews.map((review) => (
          <div key={review.id}>
            <h1>{review.author}</h1>
            <h2>{review.content}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
