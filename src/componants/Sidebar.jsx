import React from 'react';

function Sidebar({ isOpen }) {
  const sidebarClass = `
    bg-dark text-white p-3
    col-12 col-md-3 col-lg-2
    position-fixed h-100
    ${isOpen ? 'd-block' : 'd-none d-md-block'}
  `;

  return (
    <div id="sidebar" className={sidebarClass} style={{ zIndex: 1040 }}>
      <ul className="nav flex-column">
        <li className="nav-item mb-2">
          <a className="nav-link text-white" href="#"><i className="fas fa-tachometer-alt me-2"></i>Dashboard</a>
        </li>
        <li className="nav-item mb-2">
          <a className="nav-link text-white" href="#"><i className="fas fa-layer-group me-2"></i>Layouts</a>
        </li>
        <li className="nav-item mb-2">
          <a className="nav-link text-white" href="#"><i className="fas fa-file-alt me-2"></i>Pages</a>
        </li>
        <li className="nav-item mb-2">
          <a className="nav-link text-white" href="#"><i className="fas fa-chart-bar me-2"></i>Charts</a>
        </li>
        <li className="nav-item mb-2">
          <a className="nav-link text-white" href="#"><i className="fas fa-table me-2"></i>Tables</a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
