import React from 'react'
import { useSelector } from "react-redux";

const LikeButton = ({ isLike, handleLike, handleUnLike }) => {
    const { theme } = useSelector(state => state);
    const iconStyle = {
      filter: theme ? "invert(1)" : "invert(0)",
      color: theme ? "rgba(119, 33, 18, 0.733)" : ""
  };
  return (
    <div>
      {isLike ? (
        <i
          className="fas fa-thumbs-up text-red-500 text-info"
          style={iconStyle}
          onClick={handleUnLike}
        />
      ) : (
        <i className="far fa-thumbs-up" onClick={handleLike} />
      )}
    </div>
  );
};

export default LikeButton
