// // src/components/MsgCarousel.js
// import React, { useState } from 'react';
// import '../styles/messengercarousal.css';

// const MsgCarousel = ({ items, startIndex = 0, onClose }) => {
//   const [currentIndex, setCurrentIndex] = useState(startIndex);

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
//   };

//   const currentItem = items[currentIndex];

//   if (!currentItem || !currentItem.url) {
//     return null; // or render a placeholder
//   }

//   return (
//     <div className="modal">
//       <div className="modal-content">
//         <span className="close-button" onClick={onClose}>&times;</span>
//         <div className="carousel">
//           <button className="carousel-control prev" onClick={handlePrev}>
//             &lt;
//           </button>
//           <div className="carousel-content">
//             {currentItem.url.match(/video/i) ? (
//               <video controls>
//                 <source src={currentItem.url} type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//             ) : (
//               <img src={currentItem.url} alt={`carousel-${currentIndex}`} />
//             )}
//           </div>
//           <button className="carousel-control next" onClick={handleNext}>
//             &gt;
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MsgCarousel;











// // src/components/MsgCarousel.js
// import React, { useState } from 'react';
// import '../styles/messengercarousal.css';

// const MsgCarousel = ({ items, startIndex = 0, onClose }) => {
//   const [currentIndex, setCurrentIndex] = useState(startIndex);

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
//   };

//   const currentItem = items[currentIndex];

//   if (!currentItem || !currentItem.url) {
//     return null; // or render a placeholder
//   }

//   return (
//     <div className="modal">
//       <div className="modal-content">
//         <span className="close-button" onClick={onClose}>&times;</span>
//         <div className="carousel">
//           <button className="carousel-control prev" onClick={handlePrev}>
//             &lt;
//           </button>
//           <div className="carousel-content">
//             {currentItem.url.match(/video/i) ? (
//               <video controls>
//                 <source src={currentItem.url} type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//             ) : (
//               <img src={currentItem.url} alt={`carousel-${currentIndex}`} />
//             )}
//           </div>
//           <button className="carousel-control next" onClick={handleNext}>
//             &gt;
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MsgCarousel;


















// // src/components/MsgCarousel.js
// import React, { useState, useEffect } from 'react';
// import '../styles/messengercarousal.css';

// const MsgCarousel = ({ items, startIndex = 0, onClose }) => {
//   const [currentIndex, setCurrentIndex] = useState(startIndex);

//   useEffect(() => {
//     setCurrentIndex(startIndex);
//   }, [startIndex]);

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
//   };

//   const currentItem = items[currentIndex];

//   if (!currentItem || !currentItem.url) {
//     return null; // or render a placeholder
//   }

//   return (
//     <div className="modal">
//       <div className="modal-content">
//         <span className="close-button" onClick={onClose}>&times;</span>
//         <div className="carousel">
//           <button className="carousel-control prev" onClick={handlePrev}>
//             &lt;
//           </button>
//           <div className="carousel-content">
//             {currentItem.url.match(/video/i) ? (
//               <video controls>
//                 <source src={currentItem.url} type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//             ) : (
//               <img src={currentItem.url} alt={`carousel-${currentIndex}`} />
//             )}
//           </div>
//           <button className="carousel-control next" onClick={handleNext}>
//             &gt;
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MsgCarousel;














// import React, { useState, useEffect } from 'react';
// import '../styles/messengercarousal.css';

// const MsgCarousel = ({ items, startIndex = 0, onClose }) => {
//   const [currentIndex, setCurrentIndex] = useState(startIndex);

//   useEffect(() => {
//     setCurrentIndex(startIndex);
//   }, [startIndex]);

//   useEffect(() => {
//     const handleKeyDown = (event) => {
//       if (event.key === 'Escape') {
//         onClose();
//       }
//     };

//     document.addEventListener('keydown', handleKeyDown);
//     return () => {
//       document.removeEventListener('keydown', handleKeyDown);
//     };
//   }, [onClose]);

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
//   };

//   const currentItem = items[currentIndex];

//   if (!currentItem || !currentItem.url) {
//     return null; // or render a placeholder
//   }

//   return (
//     <div className="modal">
//       <div className="modal-content">
//         <span className="close-button" onClick={onClose}>&times;</span>
//         <div className="carousel">
//           <button className="carousel-control prev" onClick={handlePrev}>
//             &lt;
//           </button>
//           <div className="carousel-content">
//             {currentItem.url.match(/video/i) ? (
//               <video controls>
//                 <source src={currentItem.url} type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//             ) : (
//               <img src={currentItem.url} alt={`carousel-${currentIndex}`} />
//             )}
//           </div>
//           <button className="carousel-control next" onClick={handleNext}>
//             &gt;
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MsgCarousel;
















import React, { useState, useEffect } from 'react';
import '../styles/messengercarousal.css';

const MsgCarousel = ({ items, startIndex = 0, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(startIndex);

  useEffect(() => {
    setCurrentIndex(startIndex);
  }, [startIndex]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const currentItem = items[currentIndex];

  if (!currentItem || !currentItem.url) {
    return null; // or render a placeholder
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>&times;</span>
        <div className="carousel">
          {items.length > 1 && (
            <button className="carousel-control prev" onClick={handlePrev}>
              &lt;
            </button>
          )}
          <div className="carousel-content">
            {currentItem.url.match(/video/i) ? (
              <video controls>
                <source src={currentItem.url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img src={currentItem.url} alt={`carousel-${currentIndex}`} />
            )}
          </div>
          {items.length > 1 && (
            <button className="carousel-control next" onClick={handleNext}>
              &gt;
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MsgCarousel;
