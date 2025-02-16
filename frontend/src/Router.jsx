import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import RegisterPage from "./pages/RegisterPage";
import Profile from "./pages/ProfilePage";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" />
      <Route path="/user/profile" element={<Profile />} />
    </Routes>
  )
}

export default Router;