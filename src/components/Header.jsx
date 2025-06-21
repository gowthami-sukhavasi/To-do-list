import sunLogo from "../assets/icon-sun.svg";
import moonLogo from "../assets/icon-moon.svg";

export default function Header({ theme, toggleTheme }) {
  return (
    <div className="header-container">
      <h1 className="page-heading">TODO</h1>
      <img
        className="header-logo"
        src={theme === "dark" ? sunLogo : moonLogo}
        alt="toggle theme"
        role="button"
        onClick={toggleTheme}
      />
    </div>
  );
}
