import React from "react";
import { auth } from "@/firebase";

const ChatMessage2 = (props) => {
  const { text, uid, photoURL, displayName, createdAt } = props.message;
  const messageDate = createdAt ? createdAt.toDate() : null;
  const messageTime = messageDate ? messageDate.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  }) : null;;

  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";
  const messageTitleClass = uid === auth.currentUser.uid ? "sentTitle" : "receivedTitle";

  return (
    <>
      <div className={`message ${messageClass} my-2 px-3`}>
        <div className={` ${messageClass} w-full message flex-row gap-0.5`}>
          <div
            className={`text-sm text-displayName self-middle ${messageClass} ${messageTitleClass} px-2`}
          >
            <div className={`${messageTitleClass} text-slate-300`}>
            <div className="text-[10px] mx-2 text-displayName">{`${messageTime}`}</div>
            {displayName}
            </div>
          </div>
          <p className="dropshadow-lg shadow-md text-sm">{text}</p>
        </div>
      </div>
    </>
  );
};
90
export default ChatMessage2;
