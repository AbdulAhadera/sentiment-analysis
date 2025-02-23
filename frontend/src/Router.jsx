import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import RegisterPage from "./pages/RegisterPage";
import ReviewPage from "./pages/ReviewPage";
import Profile from "./pages/ProfilePage";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" />
      <Route path="/user/profile" element={<Profile />} />
      <Route path="/product/review" element={<ReviewPage />} />
    </Routes>
  )
}

export default Router;