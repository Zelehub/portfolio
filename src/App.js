import logo from "./logo.svg";
import "./App.css";
import "./Banner.scss";
import "./Aurora.css";
import Aurora from "./components/Aurora";
import BannerComponent from "./components/BannerComponent";
import TechStack from "./components/TechStack";
import ProfileDescription from "./components/ProfileDescription";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import CircularGallery from "./components/CircularGallery";
import CineBox from "./components/CineBox";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Aurora></Aurora>
                <BannerComponent></BannerComponent>
                <ProfileDescription></ProfileDescription>

                <div style={{ width: "100%", margin: "auto", height: "1500px", position: "relative" }}>
                  <h2 style={{ color: "white" }}>Tech Stack</h2>
                  <CircularGallery
                    bend={1}
                    textColor="#ffffff"
                    borderRadius={0.05}
                  />
                </div>
              </div>
            }
          ></Route>
          <Route path="/cinebox" element={<CineBox></CineBox>}></Route>
          <Route path="*" element={<Navigate to="/"></Navigate>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
