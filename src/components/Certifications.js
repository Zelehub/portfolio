import "../Certifications.scss";

export default function Certfications() {
  return (
    <div className="certifications-container">
      <a href="./LeWagon.png">
        <img
          src="LeWagon.png"
          alt="LeWagon Bootcamp Certificate"
          className="lewagon-certificate"
        ></img>
      </a>
      <a href="./ReactCourse.jpg">
        <img src="ReactCourse.jpg" alt="React Course Certificate"></img>
      </a>
    </div>
  );
}
