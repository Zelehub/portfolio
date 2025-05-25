import "../CineBoxShow.scss"
import Reviews from "./Reviews";
import CineboxReviewForm from "./CineboxReviewForm";

export default function CineBoxShow() {
  return (
    <div className="cinebox-show">
      <h1>CineBox</h1>
      <div className="images-list">
        <img src="LandingPage.png"></img>
        <img src="Lists.png"></img>
        <img src="InsideList.png"></img>
      </div>
      <p>
        CineBox is a web application that allows users to curate personalized
        movie lists—such as “Favorites,” “Watch Later,” or custom
        collections—and easily add, manage, and browse their selected films.
      </p>
      <p>
        Whether you're organizing your all-time favorites or building a themed
        list, CineBox helps movie lovers keep track of what they love, what
        they’ve seen, and what they plan to watch.
      </p>
      <Reviews></Reviews>
      <CineboxReviewForm></CineboxReviewForm>
      <a href="https://www.cinebox.space">Check it out !</a>
    </div>
  );
}
