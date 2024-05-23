import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import Search from "./Search";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from '../../redux/actions/postAction';
import { getSuggestions } from '../../redux/actions/suggestionsAction';
import logo from '../../images/[removal.ai]_7148e794-a89f-46fd-9c49-5222a8f33e60-screenshot-2024-05-21-210908_85YGY3.png'


const Header = () => {
  const { auth } = useSelector(state => state);
  const dispatch = useDispatch();

  const handleRefreshHome = () => {
    window.scrollTo({top: 0})
    dispatch(getPosts(auth.token));
    dispatch(getSuggestions(auth.token));
  };

  return (
    <div className="header bg-light d-flex">
      <nav className="navbar navbar-expand-lg navbar-light bg-light row w-100">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <Link to="/" className="logo" onClick={handleRefreshHome}>

            
            <img src={logo} style={{height:"60px", width:"60px"}}/>
            {/* <h1 className="navbar-brand text-uppercase p-0 m-0">Connect</h1> */}
          </Link>

          <div className="col-md-8 d-flex justify-content-center" >
            <Menu />
          </div>
          <div className="" style={{marginLeft:"-60px"}}>
            <Search />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
