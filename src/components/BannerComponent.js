import SplitText from "./SplitText";

export default function BannerComponent() {
  return (
    <div className="banner-container">
      <SplitText
        text="Welcome"
        className="welcome-message font-semibold text-center"
        delay={150}
        animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
        animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
        easing="easeOutCubic"
        threshold={0.2}
        rootMargin="-50px"
      />
      <div>
        <SplitText
          text="to my Portfolio"
          className="portfolio-message font-semibold text-center"
          delay={200}
          animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
          animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-50px"
        />
      </div>
      <div>
        
      </div>
    </div>
  );
}
