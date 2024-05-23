// import React from 'react';
// import CardBody from "./home/post_card/CardBody";
// import CardFooter from "./home/post_card/CardFooter";
// import CardHeader from "./home/post_card/CardHeader";
// import Comments from './home/Comments';
// import InputComment from "./home/InputComment";
// import SingleCardHeader from '../components/home/post_card/SingleCardHeader';
// import SingleCardBody from '../components/home/post_card/SingleCardBody';
// import SingleCardFooter from '../components/home/post_card/SingleCardFooter';



// const SinglePostCard = ({ post, theme }) => {
//   return (
//     <div className='d-flex justify-content-center'>
//       <div className="card my-3 outer-shadow" style={{ maxWidth: '600px', }}>
//         <SingleCardBody post={post} theme={theme} />
//       </div>
//       <div className="comments-container" style={{ maxWidth: '600px', maxHeight: '800px', overflowY: 'auto' }}>
//         <SingleCardHeader post={post} />
//         <Comments post={post} />
//         <SingleCardFooter post={post} />
//         <InputComment post={post} />
//       </div>
//     </div>
//   );
// };

// export default SinglePostCard;










import '../styles/singlepostcard.css'
import React from 'react';
import CardBody from "./home/post_card/CardBody";
import CardFooter from "./home/post_card/CardFooter";
import CardHeader from "./home/post_card/CardHeader";
import Comments from './home/Comments';
import InputComment from "./home/InputComment";
import SingleCardHeader from './home/post_card/SingleCardHeader';
import SingleCardBody from './home/post_card/SingleCardBody';
import SingleCardFooter from './home/post_card/SingleCardFooter';

const SinglePostCard = ({ post, theme }) => {
  return (
    <div className='d-flex justify-content-center align-items-start'>
      <div className="card my-3 outer-shadow" style={{ maxWidth: '600px', display: 'flex', flexDirection: 'column', flex: '1' }}>
        <SingleCardBody post={post} theme={theme} />
      </div>
      <div className="comments-container" style={{ maxWidth: '600px', overflowY: 'auto', flex: '1', display: 'flex', flexDirection: 'column' }}>
        <SingleCardHeader post={post} />
        <div className="comments-scroll" style={{ flex: '1', overflowY: 'auto' }}>
          <Comments post={post} />
        </div>
        <SingleCardFooter post={post} />
        <InputComment post={post} />
      </div>
    </div>
  );
};

export default SinglePostCard;
