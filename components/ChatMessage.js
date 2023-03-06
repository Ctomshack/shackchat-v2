import React from 'react'
import { auth } from '@/firebase';

const ChatMessage = (props) => {
  const { text, uid, photoURL, displayName } = props.message;
  // console.log(props.message)

  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";

  return (
    <>
      <div className={`message ${messageClass} my-2`}>
        <div className={` ${messageClass} w-full message flex-row gap-0.5`}>
          <div
            className={`text-sm text-displayName self-middle ${messageClass} px-2`}
          >
            {displayName}
          </div>
          <p className="dropshadow-lg shadow-md">{text}</p>
        </div>
      </div>
    </>
  );
};

export default ChatMessage;