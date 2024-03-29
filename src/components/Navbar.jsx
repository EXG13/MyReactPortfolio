import React from "react";
import { NavLink } from "react-router-dom";



function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3">
      <div className="container">
        <NavLink to="/" className="navbar-brand">
          BrandLabs3.0
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navmenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/projects" className="nav-link">
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}



// function Navbar() {
//   return (
//     <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3">
//       <div className="container">
//         <a href="#" className="navbar-brand">
//           BrandLabs3.0
//         </a>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navmenu">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navmenu">
//           <ul className="navbar-nav ms-auto">
//             <li className="nav-item">
//               <a href="#about" className="nav-link">
//                 About
//               </a>
//             </li>
//             <li className="nav-item">
//               <a href="#portfolio" className="nav-link">
//                 Projects
//               </a>
//             </li>
//             <li className="nav-item">
//               <a href="#contact" className="nav-link">
//                 Contact
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }


export default Navbar