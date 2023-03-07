// import Sidebar from "@/components/Sidebar";
// import Head from "next/head";
// import React from "react";
// import { auth } from "@/firebase";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { useRouter } from "next/router";
// import ChatRoom from "@/components/ChatRoom";
// import Logout from "@/components/Logout";
// // import Welcome from "@/components/Welcome";

// const Test = () => {
//     const [user] = useAuthState(auth);

    

//   return (
//     <>
//     <div className="flex flex-col md:flex-row">
//       <Sidebar />

//       <div className="flex flex-col w-full md:h-full relative">
//         <div className="header flex flex-row text-slate-300 justify-between p-6 pt-12 md:absolute w-full">
//           <div className="flex flex-col">
//             <Welcome />
//             <div className="text-slate-400 italic">
//               5000 members | 5000 messages
//             </div>
//           </div>
//           <div>Sign Out</div>
//         </div>
//         <div className="chatroom"></div>
//         <div className="text-container md:absolute">
//             Test
//         </div>
//       </div>
//     </div>
//     </>
//   );
// };

// export default Test;

// function Welcome() {
//   const [user] = useAuthState(auth);
//   // console.log(auth.currentUser)
//   let username = auth.currentUser.displayName.split(" ")[0];

//   return (
//     auth.currentUser && (
//       <h3 className="text-slate-300 bg-sidebar ">{`Welcome to ShackChat, ${username}`}</h3>
//     )
//   );
// }
