import React from 'react';
import { Link } from 'gatsby';

const Header = ({ siteTitle, menuLinks }) => (
  <header>
    <div>
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
      <div>
        <nav>
          <ul>
            {menuLinks.map(link => (
              <li key={link.name}>
                <Link to={link.link}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  </header>
);

export default Header;
