import "../NavBar.scss";

export default function NavBar() {
  return (
    <div className="navbar-container">
      <h2>My Portfolio</h2>
      <div className="navbar-buttons">
        <button onClick={() => window.location.href="/"}>Home</button>
      </div>
    </div>
  );
}
