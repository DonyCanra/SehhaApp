import { createBrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginPage from "../auth/Login";
import ResendEmail from "../auth/ResendEmail";
import ResetPassword from "../auth/ResetPassword";
import Layout from "../layouts";
import Dashboard from "../layouts/pages/Dashboards";
import EMR from "../layouts/pages/EMR";
import Registration from "../layouts/pages/Registration";
import Profile from "../layouts/pages/Profile";
import Setting from "../layouts/pages/Setting";
import Pharmacy from "../layouts/pages/Pharmacy";
import Cashier from "../layouts/pages/Cashier";
import PageNotFound from "../components/ErrorPages/404";

// Protected Route Component
const ProtectedRoute = ({ element }) => {
  const navigate = useNavigate();
  useEffect(() => {
    // Cek token di sessionStorage atau localStorage
    const isAuthenticated = sessionStorage.getItem("token") || localStorage.getItem("token");
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [navigate]);
  return element;
};

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/resend-email",
    element: <ResendEmail />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
  {
    path: "/*",
    element: <PageNotFound />, // Halaman 404 jika route tidak ditemukan
  },
  {
    element: <Layout />, // Layout untuk halaman yang butuh autentikasi
    children: [
      {
        path: "/",
        element: <ProtectedRoute element={<Dashboard />} />,
      },
      {
        path: "/registration",
        element: <ProtectedRoute element={<Registration />} />,
      },
      {
        path: "/emr",
        element: <ProtectedRoute element={<EMR />} />,
      },
      {
        path: "/pharmacy",
        element: <ProtectedRoute element={<Pharmacy />} />,
      },
      {
        path: "/cashier",
        element: <ProtectedRoute element={<Cashier />} />,
      },
      {
        path: "/profile",
        element: <ProtectedRoute element={<Profile />} />,
      },
      {
        path: "/setting",
        element: <ProtectedRoute element={<Setting />} />,
      },
    ],
  },
]);

export default router;
