import React from 'react';

const Sidebar = () => {
  return (
    <div className="App-sidebar">
      <div className="Header">
        <img className="Logo" alt="crescent moon logo" src="https://img.icons8.com/fluency/344/full-moon.png"/>
        <h3 className="Header-title">AstroDash</h3>
      </div>
      <div className="Menu">
        <ul>
          <li className="Menu-item"><a className="menu-link" href="/"><i className="menu-icon tf-icons bx bx-home-circle"></i><span>🏠  Dashboard</span></a></li>
          <li className="Menu-item"><a className="menu-link" href="/"><i className="menu-icon tf-icons bx bx-home-circle"></i><span>🔍  Search</span></a></li>
          <li className="Menu-item"><a className="menu-link" href="/"><i className="menu-icon tf-icons bx bx-home-circle"></i><span>ℹ️  About</span></a></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
