import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore"; 
import { useNavigate } from "react-router";


const Register = () => {
  const [err,setErr] = useState(false);
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      //authentication
      const res = await createUserWithEmailAndPassword(auth, email, password);
      
      //firbase database to store user detail
      await setDoc(doc(db,"users",res.user.uid),{
        uid: res.user.uid,
        displayName,
        email
      });

      //firbase database to store user chats
      await setDoc(doc(db,"userChats",res.user.uid),{ }); 
      navigate("/");

    } catch (error) {
      setErr(true);
    }
      
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">ChitChat</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src="src/assets/addAvatar.png" alt="" />
            <span>Add an avatar</span>
          </label>
          <button>Sign up </button>
          {err && <span>Something went wrong</span>}
        </form>
        <p>You do have an account? Login</p>
      </div>
    </div>
  );
};

export default Register;
