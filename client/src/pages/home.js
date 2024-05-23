// import React from 'react';
// import { useSelector } from "react-redux";

// import Posts from '../components/home/Posts';
// import Status from '../components/home/Status';
// import RightSideBar from "../components/home/RightSideBar";

// import LoadIcon from '../images/loading.gif'
// import Menu from '../components/header/Menu';
// import Sidebar from '../components/adminDashboard/sidebar/Sidebar';
// import LeftMenu from '../components/header/LeftMenu';


// const Home = () => {
//   const { homePosts } = useSelector(state => state);
//     return (
//       <div className="home w-[500px] br-72 row mx-0 justify-stretch">
//         {/* <div className="col-md-1 fixed top-0 bottom-0 left-0">
//           <LeftMenu/>
//         </div> */}
//         <div className="col-md-2 mr-[500px]">
//           <RightSideBar />
//         </div>
//         <div className='col-md-1 hidden invisible'>
//           <LeftMenu/>
//         </div>
//         <div className="col-md-6">
          
//           <Status />
//           <div className=''>
//             <button>Timeline</button>
//             <button>Following</button>
//           </div>

//           {homePosts.loading ? (
//             <img src={LoadIcon} alt="loading" className="d-block mx-auto" />
//           ) : (homePosts.result === 0 ? <h2 className="text-center">No Post</h2> :<Posts />
//           )}
//         </div>
        

        
//       </div>
//     );
// }

// export default Home;
















// import React, { useState } from 'react';
// import { useSelector } from "react-redux";

// import Posts from '../components/home/Posts';
// import Status from '../components/home/Status';
// import RightSideBar from "../components/home/RightSideBar";

// import LoadIcon from '../images/loading.gif';
// import LeftMenu from '../components/header/LeftMenu';

// const Home = () => {
//   const { homePosts } = useSelector(state => state);
//   const [activeTab, setActiveTab] = useState('timeline');

//   const handleTabChange = (tab) => {
//     setActiveTab(tab);
//   };

//   return (
//     <div className="home w-[500px] br-72 row mx-0 justify-stretch">
//       <div className="col-md-2 mr-[500px]">
//         <RightSideBar/>
//       </div>
//       {/* <div className='col-md-1 hidden invisible'>
//         <LeftMenu/>
//       </div> */}
//       <div className="col-md-6">
//         <Status />
//         {/* <div>
//           <button onClick={() => handleTabChange('timeline')} className={activeTab === 'timeline' ? 'active' : ''}>Timeline</button>
//           <button onClick={() => handleTabChange('following')} className={activeTab === 'following' ? 'active' : ''}>Following</button>
//         </div> */}
//         {homePosts.loading ? (
//           <img src={LoadIcon} alt="loading" />
//         ) : (
//           homePosts.result === 0 ? 
//             <h2 className="text-center">No Post</h2> :
//             <Posts showFollowing={activeTab === 'following'} />
//         )}
//       </div>
//     </div>
//   );
// }

// export default Home;














import React, { useState } from 'react';
import { useSelector } from "react-redux";

import Posts from '../components/home/Posts';
import Status from '../components/home/Status';
import RightSideBar from "../components/home/RightSideBar";

import LoadIcon from '../images/loading.gif';
import LeftMenu from '../components/header/LeftMenu';

const Home = () => {
  const { homePosts } = useSelector(state => state);
  const [activeTab, setActiveTab] = useState('timeline');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="home w-[500px] br-72 row mx-0 justify-stretch">
      <div className="col-md-2">
        <RightSideBar />
      </div>
      <div className="col-md-6 offset-md-2"> {/* Added offset-md-1 to shift the div to the right */}
        <Status />
        {/* <div>
          <button onClick={() => handleTabChange('timeline')} className={activeTab === 'timeline' ? 'active' : ''}>Timeline</button>
          <button onClick={() => handleTabChange('following')} className={activeTab === 'following' ? 'active' : ''}>Following</button>
        </div> */}
        {homePosts.loading ? (
          <img src={LoadIcon} alt="loading" className="d-block mx-auto" />
        ) : (
          homePosts.result === 0 ? 
            <h2 className="text-center">No Post</h2> :
            <Posts showFollowing={activeTab === 'following'} />
        )}
      </div>
    </div>
  );
}

export default Home;










// import React, { useState } from 'react';
// import { useSelector } from "react-redux";

// import Posts from '../components/home/Posts';
// import Status from '../components/home/Status';
// import RightSideBar from "../components/home/RightSideBar";
// import PostThumb from '../components/PostThumb'; // Adjust the import path accordingly

// import LoadIcon from '../images/loading.gif';
// import LeftMenu from '../components/header/LeftMenu';

// const Home = () => {
//   const { homePosts } = useSelector(state => state);
//   const [activeTab, setActiveTab] = useState('timeline');

//   const handleTabChange = (tab) => {
//     setActiveTab(tab);
//   };

//   return (
//     <div className="home w-[500px] br-72 row mx-0 justify-stretch">
//       <div className="col-md-2 mr-[500px]">
//         <RightSideBar />
//       </div>
//       <div className='col-md-1 hidden invisible'>
//         <LeftMenu/>
//       </div>
//       <div className="col-md-6">
//         <Status />
//         <div>
//           <button onClick={() => handleTabChange('timeline')} className={activeTab === 'timeline' ? 'active' : ''}>Timeline</button>
//           <button onClick={() => handleTabChange('following')} className={activeTab === 'following' ? 'active' : ''}>Following</button>
//         </div>
//         {homePosts.loading ? (
//           <img src={LoadIcon} alt="loading" className="d-block mx-auto" />
//         ) : (
//           homePosts.result === 0 ? 
//             <h2 className="text-center">No Post</h2> :
//             <PostThumb posts={homePosts.posts} result={homePosts.result} />
//         )}
//       </div>
//     </div>
//   );
// }

// export default Home;




















// import React, { useState } from 'react';
// import { useSelector } from "react-redux";

// import Posts from '../components/home/Posts';
// import Status from '../components/home/Status';
// import RightSideBar from "../components/home/RightSideBar";

// import LoadIcon from '../images/loading.gif';
// import LeftMenu from '../components/header/LeftMenu';

// const Home = () => {
//   const { homePosts } = useSelector(state => state);
//   const [activeTab, setActiveTab] = useState('timeline');

//   const handleTabChange = (tab) => {
//     setActiveTab(tab);
//   };

//   return (
//     <div className="home w-[500px] br-72 row mx-0 justify-stretch">
//       <div className="col-md-2 mr-[500px]">
//         <RightSideBar />
//       </div>
//       <div className='col-md-1 hidden invisible'>
//         <LeftMenu/>
//       </div>
//       <div className="col-md-6">
//         <Status />
//         <div>
//           <button onClick={() => handleTabChange('timeline')} className={activeTab === 'timeline' ? 'active' : ''}>Timeline</button>
//           <button onClick={() => handleTabChange('following')} className={activeTab === 'following' ? 'active' : ''}>Following</button>
//         </div>




        
//         {homePosts.loading ? (
//           <img src={LoadIcon} alt="loading" className="d-block mx-auto" />
//         ) : (
//           homePosts.result === 0 ? 
//             <h2 className="text-center">No Post</h2> :
//             <Posts showFollowing={activeTab === 'following'} />
//         )}
//       </div>
//     </div>
//   );
// }

// export default Home;





// import React, { useState } from 'react';
// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";

// import Status from '../components/home/Status';
// import RightSideBar from "../components/home/RightSideBar";

// import LoadIcon from '../images/loading.gif';
// import LeftMenu from '../components/header/LeftMenu';

// const imageShow = (src, theme) => (
//   <img
//     src={src}
//     alt={src}
//     style={{ filter: theme ? "invert(1)" : "invert(0)" }}
//   />
// );

// const videoShow = (src, theme) => (
//   <video
//     controls
//     src={src}
//     alt={src}
//     style={{ filter: theme ? "invert(1)" : "invert(0)" }}
//   />
// );

// const Home = () => {
//   const { homePosts, theme } = useSelector(state => state);
//   const [activeTab, setActiveTab] = useState('timeline');

//   const handleTabChange = (tab) => {
//     setActiveTab(tab);
//   };

//   return (
//     <div className="home w-[500px] br-72 row mx-0 justify-stretch">
//       <div className="col-md-2 mr-[500px]">
//         <RightSideBar />
//       </div>
//       <div className='col-md-1 hidden invisible'>
//         <LeftMenu />
//       </div>
//       <div className="col-md-6">
//         <Status />
//         <div>
//           <button onClick={() => handleTabChange('timeline')} className={activeTab === 'timeline' ? 'active' : ''}>Timeline</button>
//           <button onClick={() => handleTabChange('following')} className={activeTab === 'following' ? 'active' : ''}>Following</button>
//         </div>
//         {homePosts.loading ? (
//           <img src={LoadIcon} alt="loading" className="d-block mx-auto" />
//         ) : (
//           homePosts.result === 0 ? (
//             <h2 className="text-center">No Post</h2>
//           ) : (
//             homePosts.posts.map((post) => (
//               <Link to={`/post/${post._id}`} key={post._id}>
//                 <div className="post_thumb_display">
//                   {post.images && post.images.length > 0 && post.images[0].url &&
//                     (post.images[0].url.match(/video/i) ? (
//                       videoShow(post.images[0].url, theme)
//                     ) : (
//                       imageShow(post.images[0].url, theme)
//                     ))}
//                   {/* <div className="post_thumb_menu">
//                     <i className="far fa-thumbs-up">{post.likes.length}</i>
//                     <i className="far fa-comments">{post.comments.length}</i>
//                   </div> */}
//                   <div className="post_title">
//                     <h2>{post.title}</h2>
//                   </div>
//                 </div>
//               </Link>
//             ))
//           )
//         )}
//       </div>
//     </div>
//   );
// }

// export default Home;










// import React, { useState } from 'react';
// import { useSelector } from "react-redux";

// import Posts from '../components/home/Posts';
// import Status from '../components/home/Status';
// import RightSideBar from "../components/home/RightSideBar";

// import LoadIcon from '../images/loading.gif';
// import LeftMenu from '../components/header/LeftMenu';

// const Home = () => {
//   const { homePosts } = useSelector(state => state);
//   const [activeTab, setActiveTab] = useState('timeline');

//   const handleTabChange = (tab) => {
//     setActiveTab(tab);
//   };

//   return (
//     <div className="home w-[500px] br-72 row mx-0 justify-stretch">
//       <div className="col-md-2 mr-[500px]">
//         <RightSideBar />
//       </div>
//       <div className='col-md-1 hidden invisible'>
//         <LeftMenu/>
//       </div>
//       <div className="col-md-6">
//         <Status />
//         <div>
//           <button onClick={() => handleTabChange('timeline')} className={activeTab === 'timeline' ? 'active' : ''}>Timeline</button>
//           <button onClick={() => handleTabChange('following')} className={activeTab === 'following' ? 'active' : ''}>Following</button>
//         </div>
//         {homePosts.loading ? (
//           <img src={LoadIcon} alt="loading" className="d-block mx-auto" />
//         ) : (
//           homePosts.result === 0 ? (
//             <h2 className="text-center">No Post</h2>
//           ) : (
//             <Posts showFollowing={activeTab === 'following'} />
//           )
//         )}
//       </div>
//     </div>
//   );
// }

// export default Home;
