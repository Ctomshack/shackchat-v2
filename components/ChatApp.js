// import Head from "next/head";
import React from "react";
import { auth } from "@/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import ChatRoom from "@/components/ChatRoom";
import Logout from "@/components/Logout";
import Welcome from "@/components/Welcome";
import Header from "@/components/Header";

const ChatApp = () => {
  const [user] = useAuthState(auth);

  const router = useRouter();

  return (
    <>
      <div className="flex justify-between px-4 md:px-8 py-2 md:py-6 bg-sidebar border-b border-gray-700 text-gray-700 shadow-lg fixed w-full top-0 z-20">
        {/* <Welcome />
        <Logout /> */}
        <Header />
      </div>

      <section id="chat-room-section" className=" my-4 mt-20 bg-background">
        <ChatRoom /> 
        </section>
    </>
  );
};

export default ChatApp;