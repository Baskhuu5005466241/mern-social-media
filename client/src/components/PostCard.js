// import React from 'react';
// import CardBody from "./home/post_card/CardBody";
// import CardFooter from "./home/post_card/CardFooter";
// import CardHeader from "./home/post_card/CardHeader";
// import Comments from './home/Comments';
// import InputComment from "./home/InputComment";


// const PostCard = ({ post, theme }) => {
//   return (
//     <div className='d-flex'>
//       <div className="card my-3 outer-shadow" style={{ maxWidth: '600px' }}>
//       <CardHeader post={post} />
//       <CardBody post={post} theme={theme} />

     
//     </div>
//       <div>
//       <Comments post={post} />

//       <CardFooter post={post} />

//       <InputComment post={post} />
//       </div>
//     </div>

//   );
// };

// export default PostCard;













import React from 'react';
import CardBody from "./home/post_card/CardBody";
import CardFooter from "./home/post_card/CardFooter";
import CardHeader from "./home/post_card/CardHeader";
import Comments from './home/Comments';
import InputComment from "./home/InputComment";


const PostCard = ({ post, theme }) => {
  return (
    <div className="card my-3 outer-shadow">
      <CardHeader post={post} />
      <CardBody post={post} theme={theme} />
      <CardFooter post={post} />

        <Comments post={post} />
        <InputComment post={post} />
    </div>
  );
};

export default PostCard;
