import { NavLink, useLocation } from 'react-router-dom';
import '../index.css';

const Header = () => {
  const location = useLocation();
  const isLinkActive = (link) => (link === location.pathname);

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
              activeClassName="active"
            >
              Home
            </NavLink>
            <NavLink
              to="/offers"
              className="nav__a"
              activeClassName="active"
            >
              Offers
            </NavLink>
            <NavLink
              to="/sign-in"
              className="nav__a"
              activeClassName="active"
            >
              {(!isLinkActive) ? (
                'Profile'
              ) : (
                'Sign-in'
              )}
            </NavLink>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
