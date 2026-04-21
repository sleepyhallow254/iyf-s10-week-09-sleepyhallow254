import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <div>

      <header>
        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/posts">Posts</Link> |{" "}
          <Link to="/about">About</Link>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <p>© 2026 CommunityHub</p>
      </footer>

    </div>
  );
}

export default Layout;