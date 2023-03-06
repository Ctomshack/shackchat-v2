import React from 'react'
import { auth } from "@/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Welcome = () => {
    const [user] = useAuthState(auth);
    // console.log(auth.currentUser)
    let username = auth.currentUser.displayName.split(" ")[0];
  
    return (
      auth.currentUser && (
        <h3 className="text-slate-300 bg-sidebar ">{`Welcome to ShackChat, ${username}`}</h3>
      )
    );
}

export default Welcome