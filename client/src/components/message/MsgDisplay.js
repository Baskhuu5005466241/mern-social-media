// src/components/MsgDisplay.js
import '../../styles/messagephoto.css';
import React, { useState } from 'react';
import Avatar from '../Avatar';
import '../../styles/messengercarousal.css'
import MsgCarousel from '../MsgCarousel';

const MsgDisplay = ({ user, msg, theme, isOwnMessage }) => {
  const [showCarousel, setShowCarousel] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleMediaClick = (index) => {
    setSelectedIndex(index);
    setShowCarousel(true);
  };

  const handleCloseCarousel = () => {
    setShowCarousel(false);
  };

  return (
    <>
      <div className={`chat_message ${isOwnMessage ? 'own_message' : ''}`}>
        {!isOwnMessage && <Avatar src={user.avatar} size="small-avatar" />}
        <div className={`chat_content ${isOwnMessage ? 'own_content' : ''}`}>
          <div className="chat_details">
            {msg.text && (
              <div className="chat_text">
                {msg.text}
              </div>
            )}
            <div className="chat_media_wrapper">
              {msg.media && msg.media.map((item, index) => (
                <div key={index} className={`chat_media ${isOwnMessage ? 'own_media' : ''}`}>
                  {item && item.url && item.url.match && item.url.match(/video/i) ? (
                    <video controls>
                      <source src={item.url} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img
                      src={item.url}
                      alt="media"
                      className="chat_image"
                      style={{ filter: theme ? 'invert(1)' : 'invert(0)', cursor: 'pointer' }}
                      onClick={() => handleMediaClick(index)}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="chat_time">
              {new Date(msg.createdAt).toLocaleString()}
            </div>
          </div>
        </div>
        {isOwnMessage && <Avatar src={user.avatar} size="small-avatar" />}
      </div>

      {showCarousel && (
        <MsgCarousel items={msg.media} startIndex={selectedIndex} onClose={handleCloseCarousel} />
      )}
    </>
  );
};

export default MsgDisplay;
