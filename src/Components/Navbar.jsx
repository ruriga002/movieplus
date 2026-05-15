import { Link } from "react-router-dom";

function Navbar({ currentUser, onLogout }) {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">MoviePlus</Link>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/favourites">Favourites</Link>
        {currentUser ? (
          <>
            <span className="nav-user"> {currentUser.username}</span>
            <button className="logout-btn" onClick={onLogout}>Logout</button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;