

// import React, { useState, useEffect} from 'react'
// import CommentDisplay from './comments/CommentDisplay'

// const SingleComments = ({post}) => {
//   const [comments, setComments] = useState([]);
//   const [showComments, setShowComments] = useState([]);
//   const [next, setNext] = useState(5);
//   const [replyComments, setReplyComments] = useState([]);


//   useEffect(() => {
//     const newCm = post.comments.filter((cm) => !cm.reply);
//     setComments(newCm);
//     setShowComments(newCm.slice(newCm.length - next));
//   }, [post.comments, next]);

//   useEffect(() => {
//     const newReply = post.comments.filter((cm) => cm.reply);
//     setReplyComments(newReply);
//   }, [post.comments]);

//     return (
//       <div className="comments">
//         {showComments.map((comment, index) => (
//           <CommentDisplay
//             key={index}
//             comment={comment}
//             post={post}
//             replyCm={replyComments.filter((item) => item.reply === comment._id)}
//           />
//         ))}
//         {comments.length - next > 0 ? (
//           <div
//             onClick={() => setNext(next + 10)}
//             className="p-2 border-top"
//             style={{ cursor: "pointer", color: "crimson" }}
//           >
//             View all comments
//           </div>
//         ) : (
//           comments.length > 2 && (
//             <div
//               onClick={() => setNext(2)}
//               className="p-2 border-top"
//               style={{ cursor: "pointer", color: "crimson" }}
//             >
//               Hide...
//             </div>
//           )
//         )}
        
//       </div>
//     );
// }

// export default SingleComments


















import React, { useState, useEffect } from 'react';
import CommentDisplay from './comments/CommentDisplay';

const SingleComments = ({ post }) => {
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState([]);
  const [showAll, setShowAll] = useState(true); // State to determine whether to show all comments
  const [replyComments, setReplyComments] = useState([]);

  useEffect(() => {
    const newCm = post.comments.filter((cm) => !cm.reply);
    setComments(newCm);
    setShowComments(newCm); // Initially show all comments
  }, [post.comments]);

  useEffect(() => {
    const newReply = post.comments.filter((cm) => cm.reply);
    setReplyComments(newReply);
  }, [post.comments]);

  const handleHide = () => {
    setShowAll(false);
    setShowComments(comments.slice(0, 3)); // Show only the first three comments
  };

  const handleShowAll = () => {
    setShowAll(true);
    setShowComments(comments); // Show all comments
  };

  return (
    <div className="comments">
      {showComments.map((comment, index) => (
        <CommentDisplay
          key={index}
          comment={comment}
          post={post}
          replyCm={replyComments.filter((item) => item.reply === comment._id)}
        />
      ))}
      {/* {showAll && comments.length > 3 && (
        <div
          onClick={handleHide}
          className="p-2 border-top"
          style={{ cursor: 'pointer', color: 'crimson' }}
        >
          Hide...
        </div>
      )}
      {!showAll && (
        <div
          onClick={handleShowAll}
          className="p-2 border-top"
          style={{ cursor: 'pointer', color: 'crimson' }}
        >
          View all comments
        </div>
      )} */}
    </div>
  );
};

export default SingleComments;
