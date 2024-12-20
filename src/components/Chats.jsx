import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

const Chats = () => {
  const [chats, setChats] = useState([]);

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]);

  return (
    <div className="chats">
      {Object.entries(chats)?.map((chat)=>{
         <div className="userChat" key={chat[0]}>
         <img
           src="https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=600"
           alt=""
         />
         <div className="userChatInfo">
           <span>{chat[1].userInfo.displayName}</span>
           <p>{chat[1].userInfo.lastMessage?.text}</p>
         </div>
       </div>
      })}
     
    </div>
  );
};

export default Chats;
