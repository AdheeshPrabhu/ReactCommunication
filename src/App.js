// App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Pages/Login";
import Welcome from "./Pages/Welcome";
import Register from "./Pages/Register";
import GroupChat from "./Pages/Chat";
import UserList from "./Pages/UserList";
import DocumentList from "./Pages/DocumentList";
import RegisterSuccessful from "./Pages/RegisterSuccessful";
import LoginSuccessful from "./Pages/LoginSuccessful";
import Logout from "./Hooks/Logout";
import Nav from "./Pages/Nav";
import ProtectedRoute from "./Utils/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route
            path="/Chat"
            element={<ProtectedRoute element={<GroupChat />} />}
          />
          <Route
            path="/UserList"
            element={<ProtectedRoute element={<UserList />} />}
          />
          <Route
            path="/DocumentList"
            element={<ProtectedRoute element={<DocumentList />} />}
          />
          <Route path="/RegisterSuccessful" element={<RegisterSuccessful />} />
          <Route path="/LoginSuccessful" element={<LoginSuccessful />} />
        </Route>
        <Route index element={<Welcome />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Logout" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
