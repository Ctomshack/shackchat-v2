import React, { useState } from "react";
import Login from "./Login";
import RegisterUser from "./RegisterUser";

const Auth = () => {
  const [index, setIndex] = useState(false);

  const toggleIndex = () => {
    setIndex((prevState) => !prevState);
  };

  return (
    <div>
      {!index ? <Login /> : <RegisterUser />}
      <p
        onClick={toggleIndex}
        className=" m-auto text-middle text-center text-sm text-slate-300 -mt-10"
      >
        {!index ? (
          <>
            <span>Or </span>
            <a
              href="#"
              className="font-medium text-green hover:underline"
            >
              Create an account
            </a>
          </>
        ) : (
          <>
            <span>Or </span>
            <a
              href="#"
              className="font-medium text-green hover:underline"
            >
              Already have an account?
            </a>
          </>
        )}
      </p>
    </div>
  );
};

export default Auth;


// import React from 'react'
// import { auth, db } from '@/firebase'
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

// import {
//     GoogleAuthProvider,
//     FacebookAuthProvider,
//     GithubAuthProvider,
//   } from "firebase/auth";

// const Auth = () => {
//     const [user, loading, error] = useAuthState(auth);

//   return (
//     <div>Auth</div>
//   )
// }

// function Login(){
//     const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
// }

// export default Auth