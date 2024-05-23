import React from 'react';
import MsgDisplay from './MsgDisplay';
import { useSelector } from 'react-redux';

const Chat = ({ messages, currentUser }) => {
  const theme = useSelector((state) => state.theme);

  return (
    <div>
      {messages.map((msg, index) => (
        <MsgDisplay
          key={index}
          user={msg.user}
          msg={msg}
          theme={theme}
          isOwnMessage={msg.user._id === currentUser._id}
        />
      ))}
    </div>
  );
};

export default Chat;
