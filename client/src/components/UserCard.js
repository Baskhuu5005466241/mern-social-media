import React from 'react';
import Avatar from "./Avatar";
import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";

const UserCard = ({
  children,
  user,
  border,
  handleClose,
  setShowFollowers,
  setShowFollowing,
  msg
}) => {

  // const { theme } = useSelector(state => state);

  const handleCloseAll = () => {
    if (handleClose) handleClose();
    if (setShowFollowers) setShowFollowers(false);
    if (setShowFollowing) setShowFollowing(false);
  };
  return (
    <div
      className={`d-flex p-2 justify-content-between w-[45%] align-items-center ${border}`}
    >
      <div>
        <Link
          to={`/profile/${user._id}`}
          onClick={handleCloseAll}
          className="d-flex align-items-center"
          style={{ textDecoration: "none" }}
        >
          <div className="outer-shadow big-avatar-cover ">
            <Avatar src={user.avatar} size="big-avatar" />
          </div>
          <div className="ms-2" style={{ transform: "translateY(-2px)" }}>
            <span className="d-block color-c2">{user.username}</span>

            <small className="d-flex text-muted" style={{ flexWrap: "wrap" }}>
              {msg ? (
                <>
                  <div>{user.text}</div>
                  {user.media.length > 0 && <div>{user.media.length} <i className="fas fa-image" /></div>}
                </>
              ) : (
                user.fullname
              )}
            </small>
          </div>
        </Link>
      </div>
      {children}
    </div>
  );
};

export default UserCard







// import React, { useState } from 'react';
// import Avatar from "./Avatar";
// import { Link } from "react-router-dom";
// import Popover from '@mui/material/Popover';
// import Typography from '@mui/material/Typography';

// const UserCard = ({
//   children,
//   user,
//   border,
//   handleClose,
//   setShowFollowers,
//   setShowFollowing,
//   msg
// }) => {
//   const [anchorEl, setAnchorEl] = useState(null);

//   const handlePopoverOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handlePopoverClose = () => {
//     setAnchorEl(null);
//   };

//   const open = Boolean(anchorEl);

//   const handleCloseAll = () => {
//     if (handleClose) handleClose();
//     if (setShowFollowers) setShowFollowers(false);
//     if (setShowFollowing) setShowFollowing(false);
//   };

//   return (
//     <div
//       className={`d-flex justify-content-between p-2 w-[45%] align-items-center ${border}`}
//     >
//       <div>
//         <Link
//           to={`/profile/${user._id}`}
//           onClick={handleCloseAll}
//           className="d-flex align-items-center"
//           style={{ textDecoration: "none" }}
//           onMouseEnter={handlePopoverOpen}
//           onMouseLeave={handlePopoverClose}
//         >
//           <div className="outer-shadow big-avatar-cover ">
//             <Avatar src={user.avatar} size="big-avatar" />
//           </div>
//           <div className="ms-2" style={{ transform: "translateY(-2px)" }}>
//             <span className="d-block color-c2">{user.username}</span>

//             <small className="d-flex text-muted" style={{ flexWrap: "wrap" }}>
//               {msg ? (
//                 <>
//                   <div>{user.text}</div>
//                   {user.media.length > 0 && <div>{user.media.length} <i className="fas fa-image" /></div>}
//                 </>
//               ) : (
//                 user.fullname
//               )}
//             </small>
//           </div>
//         </Link>
//         <Popover
//           open={open}
//           anchorEl={anchorEl}
//           onClose={handlePopoverClose}
//           anchorOrigin={{
//             vertical: 'bottom',
//             horizontal: 'left',
//           }}
//           transformOrigin={{
//             vertical: 'top',
//             horizontal: 'left',
//           }}
//         >
//           <Typography sx={{ p: 1 }}>Your popover content goes here.</Typography>
//         </Popover>
//       </div>
//       {children}
//     </div>
//   );
// };

// export default UserCard;
