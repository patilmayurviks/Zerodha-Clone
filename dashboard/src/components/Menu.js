import React, { useState } from "react";

import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = (index) => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };
  const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");

  window.location.href = "http://localhost:3000/login";
};
  

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" alt="logo" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() => handleMenuClick(1)}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => handleMenuClick(2)}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="funds"
              onClick={() => handleMenuClick(4)}
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/apps"
              onClick={() => handleMenuClick(6)}
            >
              <p className={selectedMenu === 6 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>
        <hr />
       <div className="profile">
  <div
    style={{ display: "flex", cursor: "pointer" }}
    onClick={handleProfileClick}
  >
    <div className="avatar">
  {user?.username ? user.username.charAt(0).toUpperCase() : "U"}
</div>

<p className="username">
  {user?.username || "USER"}
</p>
  </div>

  {isProfileDropdownOpen && (
    <div
      style={{
        position: "absolute",
        top: "60px",
        right: "20px",
        background: "white",
        boxShadow: "0 0 10px rgba(0,0,0,0.2)",
        borderRadius: "5px",
        padding: "10px",
        zIndex: 100,
      }}
    >
      <button
        onClick={logout}
        style={{
          border: "none",
          background: "red",
          color: "white",
          padding: "8px 15px",
          cursor: "pointer",
          borderRadius: "5px",
        }}
      >
        Logout
      </button>
    </div>
  )}
</div>
      </div>
    </div>
  );
};

export default Menu;
