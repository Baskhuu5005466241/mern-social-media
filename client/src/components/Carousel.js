// import React from "react";
// import { useSelector } from "react-redux";

// const Carousel = ({ images, id }) => {
//   const { theme } = useSelector(state => state);
//     const isActive = index => {
//         if(index === 0) return "active";
//     }
//   return (
//     <div id={`image${id}`} className="carousel slide" data-bs-ride="carousel">
//       <div className="carousel-indicators">
//         {images.map((img, index) => (
//           <button
//             key={index}
//             type="button"
//             data-bs-target={`#image${id}`}
//             data-bs-slide-to={index}
//             className={isActive(index)}
//             aria-current="true"
//           />
//         ))}
//       </div>
//       <div className="carousel-inner">
//       {images.map((img, index) => (
//   <div key={index} className={`carousel-item ${isActive(index)}`}>
//     {img.url && img.url.match(/video/i) ? (
//       <video
//         controls
//         style={{ filter: theme ? "invert(1)" : "invert(0)" }}
//         src={img.url}
//         className="d-block w-100"
//         alt={img.url}
//       />
//     ) : (
//       <img
//         style={{ filter: theme ? "invert(1)" : "invert(0)" }}
//         src={img.url}
//         className="d-block w-100 justify-content"
//         alt={img.url}
//       />
//     )}
//   </div>
// ))}

//       </div>
//       <button
//         style={{ width: "5%" }}
//         className="carousel-control-prev"
//         type="button"
//         data-bs-target={`#image${id}`}
//         data-bs-slide="prev"
//       >
//         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//         <span className="visually-hidden">Previous</span>
//       </button>
//       <button
//         style={{ width: "5%" }}
//         className="carousel-control-next"
//         type="button"
//         data-bs-target={`#image${id}`}
//         data-bs-slide="next"
//       >
//         <span className="carousel-control-next-icon" aria-hidden="true"></span>
//         <span className="visually-hidden">Next</span>
//       </button>
//     </div>
//   );
// };

// export default Carousel;














// import React, { useState } from 'react';

// const Carousel = ({ items, startIndex }) => {
//   const [currentIndex, setCurrentIndex] = useState(startIndex);

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : items.length - 1));
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex < items.length - 1 ? prevIndex + 1 : 0));
//   };

//   return (
//     <div className="carousel">
//       <button onClick={handlePrev}>Prev</button>
//       <img src={items[currentIndex].url} alt={`Slide ${currentIndex}`} className="carousel-image" />
//       <button onClick={handleNext}>Next</button>
//     </div>
//   );
// };

// export default Carousel;





































// import React from "react";
// import { useSelector } from "react-redux";
// import '../styles/msgcarousel.css'

// const Carousel = ({ images, id }) => {
//   const { theme } = useSelector(state => state);

//   const isActive = index => {
//     return index === 0 ? "active" : "";
//   };

//   return (
//     <div id={`image${id}`} className="carousel slide" data-bs-ride="carousel">
//     <div className="carousel-indicators">
//       {images && Array.isArray(images) && images.map((img, index) => (
//         <button
//           key={index}
//           type="button"
//           data-bs-target={`#image${id}`}
//           data-bs-slide-to={index}
//           className={isActive(index)}
//           aria-current={index === 0 ? "true" : undefined}
//         />
//       ))}
//     </div>
//     <div className="carousel-inner">
//   {images && Array.isArray(images) && images.map((img, index) => (
//     <div key={index} className={`carousel-item ${isActive(index)}`}>
//       {img.url && img.url.match(/video/i) ? (
//         <video
//           controls
//           style={{ filter: theme ? "invert(1)" : "invert(0)" }}
//           src={img.url}
//           className="d-block w-100"
//           alt={img.url}
//         />
//       ) : (
//         <img
//           style={{ filter: theme ? "invert(1)" : "invert(0)"}}
//           src={img.url}
//           className="d-block w-100 justify-content"
//           alt={img.url}
//         />
//       )}
//     </div>
//   ))}
// </div>

//       <button
//         style={{ width: "5%" }}
//         className="carousel-control-prev"
//         type="button"
//         data-bs-target={`#image${id}`}
//         data-bs-slide="prev"
//       >
//         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//         <span className="visually-hidden">Previous</span>
//       </button>
//       <button
//         style={{ width: "5%" }}
//         className="carousel-control-next"
//         type="button"
//         data-bs-target={`#image${id}`}
//         data-bs-slide="next"
//       >
//         <span className="carousel-control-next-icon" aria-hidden="true"></span>
//         <span className="visually-hidden">Next</span>
//       </button>
//     </div>
//   );
// };

// export default Carousel;

























// import React from "react";
// import { useSelector } from "react-redux";
// import '../styles/msgcarousel.css'

// const Carousel = ({ images, id }) => {
//   const { theme } = useSelector(state => state);

//   const isActive = index => {
//     return index === 0 ? "active" : "";
//   };

//   return (
//     <div id={`image${id}`} className="carousel slide" data-bs-ride="carousel">
//     <div className="carousel-indicators">
//       {images && Array.isArray(images) && images.map((img, index) => (
//         <button
//           key={index}
//           type="button"
//           data-bs-target={`#image${id}`}
//           data-bs-slide-to={index}
//           className={isActive(index)}
//           aria-current={index === 0 ? "true" : undefined}
//         />
//       ))}
//     </div>
//     <div className="carousel-inner">
//   {images && Array.isArray(images) && images.map((img, index) => (
//     <div key={index} className={`carousel-item ${isActive(index)}`}>
//       {img.url && img.url.match(/video/i) ? (
//         <video
//           controls
//           style={{ filter: theme ? "invert(1)" : "invert(0)", width: "100%", height: "auto" }} // Adjust size of video
//           src={img.url}
//           className="d-block"
//           alt={img.url}
//         />
//       ) : (
//         <div>
//           <img
//             style={{ filter: theme ? "invert(1)" : "invert(0)", width: "50%", height: "auto" }} // Adjust size of image
//             src={img.url}
//             className="d-block"
//             alt={img.url}
//           />
//         </div>
        
//       )}
//     </div>
//   ))}
// </div>

//       <button
//         style={{ width: "5%" }}
//         className="carousel-control-prev"
//         type="button"
//         data-bs-target={`#image${id}`}
//         data-bs-slide="prev"
//       >
//         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//         <span className="visually-hidden">Previous</span>
//       </button>
//       <button
//         style={{ width: "5%" }}
//         className="carousel-control-next"
//         type="button"
//         data-bs-target={`#image${id}`}
//         data-bs-slide="next"
//       >
//         <span className="carousel-control-next-icon" aria-hidden="true"></span>
//         <span className="visually-hidden">Next</span>
//       </button>
//     </div>
//   );
// };

// export default Carousel;













import React from "react";
import { useSelector } from "react-redux";
import '../styles/msgcarousel.css'

const Carousel = ({ images, id }) => {
  const { theme } = useSelector(state => state);

  const isActive = index => {
    return index === 0 ? "active" : "";
  };

  return (
    <div id={`image${id}`} className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        {images && Array.isArray(images) && images.map((img, index) => (
          <button
            key={index}
            type="button"
            data-bs-target={`#image${id}`}
            data-bs-slide-to={index}
            className={isActive(index)}
            aria-current={index === 0 ? "true" : undefined}
          />
        ))}
      </div>
      <div className="carousel-inner">
        {images && Array.isArray(images) && images.map((img, index) => (
          <div key={index} className={`carousel-item ${isActive(index)}`}>
            {img.url && img.url.match(/video/i) ? (
              <video
                controls
                style={{ filter: theme ? "invert(1)" : "invert(0)", width: "100%", height: "auto" }} // Adjust size of video
                src={img.url}
                className="d-block mx-auto" // Center the video horizontally
                alt={img.url}
              />
            ) : (
              <div className="text-center"> {/* Center the image horizontally */}
                <img
                  style={{ filter: theme ? "invert(1)" : "invert(0)", maxWidth: "100%", height: "auto", margin: "0 auto" }} // Adjust size of image
                  src={img.url}
                  className="d-block" // Make image a block element
                  alt={img.url}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      <button
        style={{ width: "5%" }}
        className="carousel-control-prev"
        type="button"
        data-bs-target={`#image${id}`}
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        style={{ width: "5%", color:"black" }}
        className="carousel-control-next"
        type="button"
        data-bs-target={`#image${id}`}
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
