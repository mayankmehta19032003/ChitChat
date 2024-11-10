import React, { useContext, useState } from "react";
import { collection, query, where, getDocs, setDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";

const SearchBar = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);

  const {currentUser} = useContext(AuthContext);

  const handleSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", username)
    );

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleKey = (e) => {
    e.code == "Enter" && handleSearch();
  };

  const handleSelect = async ()=>{
    const combinedId = currentUser.uid > user.uid ? currentUser.uid + user.uid : user.uid > currentUser.uid;

    try {
      const res = await getDocs(db,"chats",combinedId);

      if(!res.exists()){
        await setDoc(doc,(db,"chats",combinedId),{
          messages: []
        } )
      }
    } catch (error) {
      console.log(error);
    }
    
  }

  return (
    <div className="search">
      <div className="searchForm">
        <input
          type="text"
          placeholder="find a user"
          onKeyDown={handleKey}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      {user &&<div className="userChat" onClick={handleSelect}>
        <img
          src="https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <div className="userChatInfo">
          <span>{user.displayName}</span>
        </div>
      </div>}
    </div>
  );
};

export default SearchBar;
