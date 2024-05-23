import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataAPI } from "../../utils/fetchData";
import { GLOBALTYPES } from "../../redux/actions/globalTypes";
import UserCard from "../UserCard";
import LoadIcon from "../../images/loading.gif";
import NotifyandMenu from "./NotifyandPro";

const Search = () => {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);

  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [load, setLoad] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!search) return;

    try {
      setLoad(true);
      const res = await getDataAPI(`search?username=${search}`, auth.token);
      setUsers(res.data.users);
      setLoad(false);
    } catch (err) {
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: { error: err.response.data.msg },
      });
    }
  };

  const handleClose = () => {
    setSearch("");
    setUsers([]);
  };

  return (
    <form className="search_form" onSubmit={handleSearch}>
      <div className="d-flex">

      <NotifyandMenu/>
      <input
        type="text"
        title="Enter to Search"
        name="search"
        value={search}
        id="search"
        className="w-full p-2 border border-gray-300 rounded-md"
        style={{ fontSize: "1.2rem" }} // Adjust font size here
        onChange={(e) =>
          setSearch(e.target.value.toLowerCase().replace(/ /g, " "))
        }
      />
      <div
        className="search_icon flex justify-start"
        style={{ opacity: search ? 0 : 0.5 }}
      >
        <span className="material-icons">search</span>
        <span className="text-25 ml-1">Enter to Search</span> {/* Adjust font size here */}
      </div>

      <div
        onClick={handleClose}
        className="close_search"
        style={{ opacity: users.length === 0 ? 0 : 1 , fontSize:"28px"}}
      >
        &times;
      </div>

      <button type="submit" style={{ display: "none" }}>
        Search
      </button>

      {load && <img className="loading" src={LoadIcon} alt="Loading" />}

      <div className="users" style={{marginTop:"60px"}}>
        {search &&
          users.map((user) => (
            <UserCard
              key={user._id}
              user={user}
              border="border"
              handleClose={handleClose}
            />
          ))}
      </div>
      </div>
    </form>
  );
};

export default Search;
