import React from 'react'
import { auth } from "@/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";

const Logout = () => {
    const router = useRouter();

    const [user] = useAuthState(auth);
    const currentUser = [user][0];
  
    return (
      auth.currentUser && (
        <button
          className="text-green border flex-initial border-green rounded-md py-1 px-2 sm:py-1.5 sm:px-3 text-xs sm:text-sm hover:text-slate-300 hover:border-slate-300"
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

export default Logout