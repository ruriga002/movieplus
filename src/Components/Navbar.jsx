function Navbar({currentUser,onLogout}){
    return(
        <nav className="navbar">
            <link to="/"className="nav-logo">MoviePlus</link>
            <div className="nav-links">
                <link to="/">Home</link>
                <link to="/favourites">
                Favourites
                </link>
                {currentUser ? (
                    <>
                    <span className="nav-user">
                        {currentUser.username}
                        </span>
                    <button
                     className="logout-btn" 
                     onClick={onLogout}
                     >
                        Logout
                        </button>
                    </>
                ):(
                    <Link to="login">Login</Link>
                )}
            </div>
        </nav>
    );
}