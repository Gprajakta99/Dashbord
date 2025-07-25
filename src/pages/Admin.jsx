import React, { useState } from 'react';
import Sidebar from '../componants/Sidebar';
import Chart from '../componants/Chart';

function Admin() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(prev => !prev);
  };

  return (
    <div className="container-fluid">
      <div className="row min-vh-100">
        <Sidebar isOpen={sidebarOpen} />

        <div className="offset-md-3 offset-lg-2 col-12 col-md-9 col-lg-10 p-4">
          <button
            className="btn btn-link d-md-none text-dark mb-3"
            onClick={toggleSidebar}
          >
            <i className="fas fa-bars"></i>
          </button>

          <h2>Dashboard</h2>
          <p className='bg-light p-3 shadow-sm'>dashboard</p>

          <div className="row">
            <div className="col-md-3 mb-4">
              <div className="card bg-primary text-white shadow">
                <div className="card-body">Primary</div>
                <div className="card-footer d-flex align-items-center justify-content-between">
                  <a className="small text-white stretched-link" href="#">View Details</a>
                  <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-4">
              <div className="card bg-warning text-white shadow">
                <div className="card-body">Warning</div>
                <div className="card-footer d-flex align-items-center justify-content-between">
                  <a className="small text-white stretched-link" href="#">View Details</a>
                  <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-4">
              <div className="card bg-success text-white shadow">
                <div className="card-body">Success</div>
                <div className="card-footer d-flex align-items-center justify-content-between">
                  <a className="small text-white stretched-link" href="#">View Details</a>
                  <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-4">
              <div className="card bg-danger text-white shadow">
                <div className="card-body">Danger</div>
                <div className="card-footer d-flex align-items-center justify-content-between">
                  <a className="small text-white stretched-link" href="#">View Details</a>
                  <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                </div>
              </div>
            </div>
          </div>

          <Chart />
        </div>
      </div>
    </div>
  );
}

export default Admin;
