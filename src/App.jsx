import React, { useContext } from 'react'
import Register from './pages/Register'
import "./style.scss";
import Login from './pages/Login';
import Home from './pages/Home';
import {BrowserRouter,Routes,Route, Navigate} from "react-router-dom";
import { AuthContext } from './context/AuthContext';

const App = () => {
  
  const {currentUser} = useContext(AuthContext);
  const ProtectedRoute = ({children})=>{
    if(!currentUser){
      return <Navigate to="/login"/>
    }

    return children
  }

  return (
    <BrowserRouter future={{ v7_relativeSplatPath: true }}>
    <Routes>
    <Route path="/" element={<ProtectedRoute><Home/></ProtectedRoute> } />
    <Route path="login" element={<Login />} />
    <Route path="register" element={<Register />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
