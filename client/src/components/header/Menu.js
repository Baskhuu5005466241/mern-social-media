import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/actions/authAction";
import { GLOBALTYPES } from "../../redux/actions/globalTypes";
import Avatar from "../Avatar";
import NotifyModal from "../NotifyModal";
import UserCard from "../UserCard";

const Menu = () => {
  const navLinks = [
    { label: "Home", icon: "home", path: "/" },
    { label: "Message", icon: "near_me", path: "/message" },
    { label: "Discover", icon: "explore", path: "/discover" },
  ];

  const { auth, theme, notify } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const isActive = (pn) => {
    if (pn === pathname) return "active";
  };

  return (
    <div className="menu">
      <ul className="navbar-nav flex-row mb-2 mb-lg-0">
        {navLinks.map((link, index) => (
          <li className={`nav-item px-2 ${isActive(link.path)}`} key={index}>
            <Link className={`nav-link text-black` } to={link.path}>
              <span className={`material-icons `}>{link.icon}</span>
            </Link>
          </li>
        ))}
        
      </ul>
    </div>
  );
};

export default Menu;











