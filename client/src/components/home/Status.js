import React from 'react';
import Avatar from "../Avatar";
import { useSelector, useDispatch } from "react-redux";
import { GLOBALTYPES } from '../../redux/actions/globalTypes';
import { Link } from 'react-router-dom';

const Status = () => {
    const { auth } = useSelector(state => state);
    const dispatch = useDispatch();
    return (
      <div className="status my-3 d-flex">
        {/* Wrapped Avatar component with Link */}
        <Link to={`/profile/${auth.user._id}`} className="outer-shadow big-avatar-cover">
          <Avatar src={auth.user.avatar} size="big-avatar" className="" />
        </Link>
        <button
          onClick={() => dispatch({ type: GLOBALTYPES.STATUS, payload: true })}
          className="btn-1 outer-shadow hover-in-shadow statusBtn flex-fill "
          style={{ marginLeft: "7px" }}
        >
          {/* Username without Link */}
          <span id='whatsonyourmind' style={{ textShadow: "var(--outer-shadow)", color:"black" }} >
            {auth.user.username}, What's on your mind?
          </span>
        </button>
      </div>
    );
}

export default Status;
