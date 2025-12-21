import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// import App from "./App.jsx";

import { BrowserRouter, Route, Routes } from "react-router";

import HomePage from "./pages/HomePage/HomePage.jsx";
import CreatePage from "./pages//CreatePage//CreatePage.jsx";
import PostPage from "./pages/PostPage/PostPage.jsx";
import AuthPage from "./pages/AuthPage/AuthPage.jsx";
import ProfilePage from "./pages/ProfilePage/ProfilePage.jsx";
import SearchPage from "./pages/SearchPage/SearchPage.jsx";

import MainLayout from "./pages/Layout/MainLayout.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/pin/:id" element={<PostPage />} />
          <Route path="/:username" element={<ProfilePage />} />
          <Route path="/search" element={<SearchPage />} />
        </Route>
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
