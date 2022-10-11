import SignInPage from "./pages/SignIn/SignInPage";
import { Routes, Route, Navigate } from "react-router-dom";
import AuthDecoration from "./components/Layouts/FormDecoration/AuthDecoration";
import AuthRoutes from "./Routes/AuthRoutes";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
function App() {
  return (
    <Routes>
      <Route path="auth" element={<AuthDecoration />}>
        <Route index element={<SignInPage />} />
        <Route path="login" element={<Login />} />
      </Route>

      <Route element={<AuthRoutes />}>
        <Route path="home" element={<Home />} />
        <Route path="/profile/:username" element={<Profile />} />
      </Route>

      <Route path="validate" element={<SignInPage />} />
      <Route path="error" element={<SignInPage />} />

      <Route path="*" element={<Navigate to="/auth" replace />} />
    </Routes>
  );
}

export default App;
