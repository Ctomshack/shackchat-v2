import Head from 'next/head'
import { Inter } from 'next/font/google'
import { useEffect } from 'react';
import { auth, db } from "@/firebase";
import { useAuthState } from 'react-firebase-hooks/auth';
import Auth from '@/components/Auth';
import { Router, useRouter } from 'next/router';
import ChatApp from '@/components/ChatApp';
import ChatWithSidebar from '@/components/ChatWithSidebar';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [user] = useAuthState(auth);
  const router = useRouter();

  // useEffect(() => {
  //   if (user) {
  //     router.push('/chat');
  //   }
  // }, [user, router]);

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
      {user ? <ChatApp /> : <Auth />}
    </>
  )
}
