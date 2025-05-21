import React from "react";
import "../ProfileDescription.scss";

export default function ProfileDescription() {
  return (
    <div className="profile-container">
      <div className="profile-picture">
        <img src="pepe.png"></img>
      </div>
      <div className="profile-info">
        <h3>
          Hey, I’m José — a former welder who made the switch into web
          development. After years of working with my hands, I got curious about
          coding and decided to pursue it seriously.
        </h3>
        <h3>
          I completed a full-stack web development bootcamp where I learned how
          to build web apps using tools like JavaScript, React, Ruby on Rails,
          and SQL. I enjoy solving problems, building things that are both
          useful and intuitive, and learning by doing.
        </h3>
        <h3>
          I’m always looking for ways to improve my skills and grow as a
          developer. Right now, I’m looking for opportunities to be part of a
          team, keep learning, and contribute to real-world projects.
        </h3>
      </div>
    </div>
  );
}
