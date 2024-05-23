// // I CHANGED WHOLE CODE HERE



// import React from 'react';
// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { imageShow, videoShow } from "../utils/mediaShow";

// const PostThumb = ({ posts, result }) => {
//   const { theme } = useSelector((state) => state);

//   if (result === 0) {
//     return <h2 className="text-center color-c1">No Post</h2>
//   }

//   const imageShow = (src) => {
//     return (
//       <img
//         src={src}
//         alt={src}
//         style={{ filter: theme ? "invert(1)" : "invert(0)" }}
//       />
//     );
//   };

//   const videoShow = (src) => {
//     return (
//       <video
//         controls
//         src={src}
//         alt={src}
//         style={{ filter: theme ? "invert(1)" : "invert(0)" }}
//       />
//     );
//   };

//   return (
//     <div className="post_thumb">
//       {posts &&
//         posts.map((post) => (
//           <Link to={`/post/${post._id}`} key={post._id}>
//             <div className="post_thumb_display">
//               {post.images && post.images.length > 0 && post.images[0].url && // Add conditional check
//                 (post.images[0].url.match(/video/i) ? (
//                   videoShow(post.images[0].url, theme)
//                 ) : (
//                   imageShow(post.images[0].url, theme)
//                 ))}
//               <div className="post_thumb_menu">
//                 <i className="far fa-thumbs-up">{post.likes.length}</i>
//                 <i className="far fa-comments">{post.comments.length}</i>
//               </div>
//             </div>
//           </Link>
//         ))}
//     </div>
//   );
// }

// export default PostThumb;













import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { imageShow, videoShow } from "../utils/mediaShow";

const PostThumb = ({ posts, result }) => {
  const { theme } = useSelector((state) => state);

  if (result === 0) {
    return <h2 className="text-center color-c1">No Post</h2>
  }

  return (
    <div className="post_thumb">
      {posts &&
        posts.map((post) => (
          <Link to={`/post/${post._id}`} key={post._id}>
            <div className="post_thumb_display">
              {post.images && post.images.length > 0 && post.images[0].url &&
                (post.images[0].url.match(/video/i) ? (
                  videoShow(post.images[0].url)
                ) : (
                  imageShow(post.images[0].url)
                ))}
              <div className="post_thumb_menu">
                <i className="far fa-thumbs-up">{post.likes.length}</i>
                <i className="far fa-comments">{post.comments.length}</i>
              </div>
              <div className="post_title">
                <h2>{post.title}</h2> {/* Assuming each post has a title */}
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
}

export default PostThumb;
