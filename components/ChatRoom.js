import React, { useEffect, useState, useRef } from "react";
import ChatMessage from "./ChatMessage";
import { auth,  } from "@/firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { RiSendPlaneFill } from "react-icons/ri";

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/analytics";

firebase.initializeApp({
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_G_TAG,
});

const db = firebase.firestore();

const ChatRoom = () => {
  const textValue = useRef();
  const messagesRef = db.collection("messages");
  const messagesQuery = messagesRef.orderBy("createdAt");

  const [messages] = useCollectionData(messagesQuery, { idField: "id" });

  const [formValue, setFormValue] = useState("");

  useEffect(() => {
    textValue.current.scrollIntoView({ behavior: "smooth" });
  });

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;
    const displayName = auth.currentUser.displayName.split(" ")[0];
    // console.log(displayName)

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
      displayName,
    });

    setFormValue("");
    textValue.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <main className="chat-room h-[95vh] overflow-y-scroll px-4 pt-4 pb-6 touch-pan-y">
        {messages &&
          messages.map((message) => (
            <ChatMessage key={message.createdAt} message={message} />
          ))}

        <span ref={textValue}></span>
      </main>

      <form
        onSubmit={sendMessage}
        className="h-[10vh] border-t border-gray-700 flex align-middle bg-background shadow-lg fixed bottom-0 w-full px-2 md:px-8 py-2"
      >
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="Type message here"
          className=" my-2 block w-full appearance-none rounded-md border bg-input text-slate-100 border-gray-600 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-green focus:outline-none focus:ring-green sm:text-sm"
        />

        <button
          type="submit"
          disabled={!formValue}
          className="bg-sendInput cursor-pointer text-green rounded-md my-2  px-6 text-center align-middle border border-gray-600 hover:bg-gray-900 hover:text-slate-100"
        >
          <RiSendPlaneFill size={25} />
        </button>
      </form>
    </>
  );
};

export default ChatRoom;
