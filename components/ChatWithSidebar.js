import React from 'react'
import { auth, db } from '@/firebase';
import Sidebar from './Sidebar';
import ChatRoom2 from './ChatRoom2';
import Header2 from './Header2';

const ChatWithSidebar = () => {


    
  return (
    <>
    <div className='flex flex-col md:flex-row gap-4 md:gap-0 justify-center'>
        <Sidebar />
    <div className=''>
        <Header2 />
        <ChatRoom2 />
    </div>
    </div>
    </>
  )
}

export default ChatWithSidebar