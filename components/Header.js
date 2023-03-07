import React, { useState, useEffect } from 'react'
import Welcome from './Welcome';
import { auth, db } from "@/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import Logout from './Logout';

import { collection, getDocs } from "firebase/firestore"; 

const Header = () => {
    const [totalUsers, setTotalUsers] = useState(0);
    const [totalMessages, setTotalMessages] = useState(0);

  useEffect(() => {
    const getUsers = async () => {
      const querySnapshot = await getDocs(collection(db, "allUsers"));
      const count = querySnapshot.size;
      setTotalUsers(count);
    };
    const getMessages = async () => {
        const querySnapshot = await getDocs(collection(db, "messages"));
        const count = querySnapshot.size;
        setTotalMessages(count);
      };

    getUsers();
    getMessages();
  }, []);

  return (
    <div className="header flex flex-row text-slate-300 justify-between w-full">
          <div className="flex flex-col">
            <Welcome />
            <div className="text-slate-400 italic text-sm">
              {`${totalUsers} members | ${totalMessages} messages`}
            </div>
          </div>
          <Logout />
        </div>
  )
}

export default Header