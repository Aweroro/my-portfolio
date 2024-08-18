// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';

// function NavBar() {
//   const location = useLocation();

//   return (
//     <nav className="bg-gray-100 dark:bg-gray-800 py-4 sticky top-0 z-10">
//       <div className="container mx-auto px-4">
//         <ul className="flex space-x-6 justify-center">
//           {[
//             { path: '/', name: 'Home' },
//             { path: '/projects', name: 'Projects' },
//             { path: '/skills', name: 'Skills' },
//             { path: '/contact', name: 'Contact' },
//           ].map((item) => (
//             <li key={item.path}>
//               <Link
//                 to={item.path}
//                 className={`text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 ${
//                   location.pathname === item.path
//                     ? 'font-bold text-blue-600 dark:text-blue-400'
//                     : ''
//                 }`}
//               >
//                 {item.name}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default NavBar;

import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

function NavBar() {
  const location = useLocation();

  const navItems = [
    { path: '/', name: 'Home' },
    { path: '/projects', name: 'Projects' },
    { path: '/skills', name: 'Skills' },
    { path: '/contact', name: 'Contact' },
  ];

  return (
    <nav className="bg-gray-100 dark:bg-gray-800 py-4 sticky top-0 z-10">
      <div className="container mx-auto px-4">
        <ul className="flex space-x-6 justify-center">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 ${
                    isActive ? 'font-bold text-blue-600 dark:text-blue-400' : ''
                  }`
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