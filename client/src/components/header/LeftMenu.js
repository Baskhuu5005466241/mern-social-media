import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/actions/authAction";
import { GLOBALTYPES } from "../../redux/actions/globalTypes";
import Avatar from "../Avatar";
import NotifyModal from "../NotifyModal";

const LeftMenu = () => {
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
    <div className="menu position-fixed justify-center items-center z-50 w-64 h-full overflow-y-auto">
      <ul className="navbar-nav flex-column items-center mb-2 mb-lg-0">
        {navLinks.map((link, index) => (
          <li style={{color:"black"}} className={`nav-item ${isActive(link.path)}`} key={index}>
            <Link className={`nav-link`} style={{color:"black"}} to={link.path}>
                {/* LEFTSIDEBARCOLOR */}
                <div className="d-flex flex-col">
                <span className={`material-icons`} style={{color:"black", display:"flex", gap:"20px",alignItems:"center"}}>{link.icon}<p style={{fontSize:"16px",fontWeight:"400"}}>{link.label}</p></span>

                </div>
            </Link>
          </li>
        ))}

        <li className="nav-item dropdown" style={{ opacity: "1" }}>
          <span
            className="nav-link position-relative"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <div className="d-flex justify-end items-end">
            <span
              style={{  color: notify.data.length > 0 ? "var(--c1)" : "" , color:"black"}}
              className={`material-icons`}
            >
                
              notifications 
            </span>
            
            <span className="notify_length">{notify.data.length}</span>
            <p style={{fontSize:"16px",}}>Notifications</p>
            </div>
            
          </span>

          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <NotifyModal />
          </div>
        </li>

        <li className="nav-item dropdown" style={{ opacity: "1" , marginLeft:"2px"}}>
          <span
            className="nav-link dropdown-toggle"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <Avatar src={auth.user.avatar} size="medium-avatar" />
          </span>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <Link
                style={{ color: "black" }}
                className="dropdown-item"
                to={`/profile/${auth.user._id}`}
              >
                Profile
              </Link>
            </li>
            <li className="">
              <label
                style={{ color: "black" }}
                className="dropdown-item"
                onClick={() =>
                  dispatch({ type: GLOBALTYPES.THEME, payload: !theme })
                }
              >
                {theme ? "Light mode" : "Dark mode"}
              </label>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>

            <li>
              <Link
                style={{ color: "black" }}
                className="dropdown-item"
                to="/"
                onClick={() => dispatch(logout())}
              >
                Logout
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default LeftMenu;
