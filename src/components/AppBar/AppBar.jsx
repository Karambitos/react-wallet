import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <nav>
        <NavLink className="nav-link" to="/" end>
          Home
        </NavLink>
        <NavLink className="nav-link" to="/login" end>
          Login
        </NavLink>
        <NavLink className="nav-link" to="/register">
          Register
        </NavLink>
        <NavLink className="nav-link" to="/statistics">
          Statistics
        </NavLink>
      </nav>
    </header>
  );
}
