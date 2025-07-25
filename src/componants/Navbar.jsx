// Navbar.jsx
import React from 'react';
import Admin from '../pages/Admin';

function Navbar(props) {
  return (
    <>
      <div className='container-fluid'>
        <nav className="navbar navbar-expand bg-dark px-1 justify-content-between">
          <a className="nav-link navbar-brand text-white" href="admin">Admin</a>

          <div className="d-flex align-items-center">
            <button
              className="btn btn-link btn-sm order-1 order-lg-0 text-white me-3"
              id="sidebarToggle"
              onClick={() => {
                const sidebar = document.getElementById('sidebar');
                if (sidebar) sidebar.classList.toggle('d-none');
              }}
            >
              <i className="fas fa-bars"></i>
            </button>

            <div className="input-group me-3 d-none d-md-flex">
              <input
                type="text"
                className="form-control form-control-sm"
                placeholder="Search..."
              />
              <span className="input-group-text bg-primary text-white">
                <i className="fas fa-search"></i>
              </span>
            </div>

            <div className="dropdown">
              <button
                className="btn btn-dark dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/12225/12225935.png"
                  alt="profile"
                  style={{ width: "30px", height: "30px", borderRadius: "50%" }}
                />
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li><a className="dropdown-item" href="#">Profile</a></li>
                <li><a className="dropdown-item" href="#">Settings</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Logout</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <Admin />
    </>
  );
}

export default Navbar;