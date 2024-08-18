import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {

  const navItems = [
    { path: '/', name: 'Home' },
    { path: '/projects', name: 'Projects' },
    { path: '/skills', name: 'Skills' },
    { path: '/contact', name: 'Contact' },
  ];

  return (
    <nav className="py-4 sticky top-0 z-10">
      <div className="container mx-auto px-4">
        <ul className="flex space-x-6 justify-center">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `text-[#1e88e5] hover:text-blue-600 ${isActive ? 'font-bold text-blue-600 dark:text-blue-400' : ''}`}
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