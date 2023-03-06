import Head from "next/head";
import React from "react";
import { auth } from "@/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import ChatRoom from "@/components/ChatRoom";

const Chat = () => {
  const [user] = useAuthState(auth);

  const router = useRouter();

  // redirect to login page if user is not authenticated
  if (!auth.currentUser) {
    router.push("/");
    return null;
  }

  return (
    <>
      <Head>
        <title>ShackChat</title>
        <meta
          name="description"
          content="A real-time chat app built with next.js, firebase, and tailwindcss. Bootstrapped with create-next-app."
        />
        <link rel="icon" href="/shackChatFavicon.png" />
      </Head>

      <header className="flex justify-between px-8 py-2 md:py-6 bg-sidebar border-b border-gray-700 text-gray-700 shadow-lg fixed w-full top-0 z-20">
        <Welcome />
        <Logout />
      </header>

      <section id="chat-room-section" className=" my-4 mt-20 bg-background">
        <ChatRoom /> 
        </section>
    </>
  );
};

export default Chat;

function Logout() {
  const router = useRouter();

  const [user] = useAuthState(auth);
  const currentUser = [user][0];

  return (
    auth.currentUser && (
      <button
        className="text-green underline hover:text-slate-300 "
        onClick={() => {
          auth.signOut();
          router.push("/");
        }}
      >
        Sign Out
      </button>
    )
  );
}

function Welcome() {
  const [user] = useAuthState(auth);
  // console.log(auth.currentUser)
  let username = auth.currentUser.displayName.split(" ")[0];

  return (
    auth.currentUser && (
      <h3 className="text-slate-300 bg-sidebar ">{`Welcome to ShackChat, ${username}`}</h3>
    )
  );
}
