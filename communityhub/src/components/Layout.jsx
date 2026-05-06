import { NavLink, Outlet } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

function Layout() {
  const activeClass = ({ isActive }) =>
    isActive ? 'nav-link nav-link-active' : 'nav-link';

  return (
    <div className="app-layout">
      <header className="site-header">
        <div className="brand">
          <h1>CommunityHub</h1>
          <p>Your React community dashboard</p>
        </div>

        <nav className="site-nav">
          <NavLink to="/" end className={activeClass}>
            Home
          </NavLink>
          <NavLink to="/posts" className={activeClass}>
            Posts
          </NavLink>
          <NavLink to="/create-post" className={activeClass}>
            Create Post
          </NavLink>
          <NavLink to="/about" className={activeClass}>
            About
          </NavLink>
          <ThemeToggle />
        </nav>
      </header>

      <main className="page-content">
        <Outlet />
      </main>

      <footer className="site-footer">
        <p>© 2026 CommunityHub</p>
      </footer>
    </div>
  );
}

export default Layout;
