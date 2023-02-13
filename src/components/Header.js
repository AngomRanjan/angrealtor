import { NavLink } from 'react-router-dom';
import '../index.css';

const Header = () => {
  const isLoggedIn = false ? 'Profile' : 'Sign-In';

  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-40">
      <header className="flex justify-between items-center px-3 max-w-7xl mx-auto">
        <div>
          <a href="/">
            <img
              src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
              alt="logo"
              className="h-5 cursor-pointer"
            />
          </a>
        </div>
        <div>
          <nav className="flex space-x-10">
            <NavLink
              to="/"
              className="nav__a"
            >
              Home
            </NavLink>
            <NavLink
              to="/offers"
              className="nav__a"
            >
              Offers
            </NavLink>
            <NavLink
              to={isLoggedIn.toLowerCase()}
              className="nav__a"
            >
              {isLoggedIn}
            </NavLink>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
