import React, { useRef, useState } from "react";
import { Router, useRouter } from "next/router";
import { RiChatSmile3Fill } from "react-icons/ri";


import { auth, db } from "@/firebase";

import { addDoc, collection } from "firebase/firestore";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const RegisterUser = () => {
  const emailRef = useRef();
  const nameRef = useRef();
  const passwordRef = useRef();
  const router = useRouter();
  const [alertMessage, setAlertMessage] = useState(null); // initialize alert message state to null

  // function to update the alert message
  const showAlert = (message) => {
    setAlertMessage(message);
    setTimeout(() => {
      setAlertMessage(null);
    }, 3000); // hide the alert after 3 seconds
  };

  const addUserToCollection = async (user) => {
    try {
      const docRef = await addDoc(collection(db, "allUsers"), {
        email: user.email,
        displayName: user.displayName,
        // photoURL: "",
        uid: user.uid,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const createNewUser = (email, password, name) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        return updateProfile(auth.currentUser, {
          email: email,
          displayName: name,
          uid: user.uid,
        });
      })
      .then(() => {
        if (auth.currentUser) {
          addUserToCollection(auth.currentUser);
          console.log("User added to collection");
          showAlert("Account created! Redirecting to login page...")
          setTimeout(() => {
            location.reload();
          }, 5000)
        } else {
          console.error("User not authenticated");
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorMessage);
      });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const name = nameRef.current.value;
    const password = passwordRef.current.value;
    if (email && password && name) createNewUser(email, password, name);
  };

  return (
    <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
      {alertMessage && (
      <div className="bg-green border border-white text-white px-4 py-3 rounded relative" role="alert">
        <strong className="font-bold">Success!</strong>
        <span className="block sm:inline">{alertMessage}</span>
        <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
          <svg onClick={() => setAlertMessage(null)} className="fill-current h-6 w-6 text-green-500 cursor-pointer" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 5.652a.999.999 0 10-1.414 1.414L11 8.414l-1.934 1.934a.999.999 0 101.414 1.414L12.414 10l1.934 1.934a.999.999 0 101.414-1.414L13.828 10l1.52-1.52a.999.999 0 000-1.414z"/></svg>
        </span>
      </div>
    )}
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="m-auto bg-green p-3 rounded-full w-[75px] shadow-xl">
            <RiChatSmile3Fill size={50} className="text-headerText m-auto" />
          </div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-headerText">
          Create new account
          </h2>
        </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-background py-8 px-4 shadow-xl sm:rounded-lg sm:px-10">
          <div className="">
            <div className="mt-6">
              <form onSubmit={onSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-300"
                  >
                    Name
                  </label>
                  <div className="mt-1">
                    <input
                      id="name"
                      name="name"
                      type="name"
                      ref={nameRef}
                      autoComplete="name"
                      required
                      className="block w-full appearance-none rounded-md border text-slate-300 bg-input border-gray-500 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-green focus:outline-none focus:ring-green sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-300"
                  >
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      ref={emailRef}
                      autoComplete="email"
                      required
                      className="block w-full appearance-none rounded-md border text-slate-300 border-gray-500 bg-input px-3 py-2 placeholder-gray-400 shadow-sm focus:border-green focus:outline-none focus:ring-green sm:text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-slate-300"
                  >
                    Password
                  </label>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      ref={passwordRef}
                      autoComplete="current-password"
                      placeholder="*must contain 5+ letters and a symbol (!@#)"
                      required
                      className="block w-full appearance-none rounded-md border text-slate-300 border-gray-500 bg-input px-3 py-2 placeholder-gray-400 shadow-sm focus:border-green focus:outline-none focus:ring-green sm:text-sm"
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md border border-transparent bg-green py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-green focus:ring-offset-2"
                  >
                    Sign up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterUser;
