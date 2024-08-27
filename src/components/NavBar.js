import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  const navItems = [
    { path: '/', name: 'Home' },
    { path: '/about', name: 'About' },
    { path: '/projects', name: 'Projects' },
    { path: '/skills', name: 'Skills' },
    { path: '/contact', name: 'Contact' },
  ];

  return (
    <nav className="py-4 fixed top-0 right-0 md:right-7 z-10">
      <div className="container mx-auto px-4">
        <ul className="flex space-x-6 justify-center">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `${isActive ? 'text-white font-bold' : 'text-gray-500 hover:text-white'}`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;

