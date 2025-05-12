import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Signin from "./pages/Signin";
import SignUp from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import RootLayout from "./layout/RootLayout";
import { GoogleOAuthProvider } from "@react-oauth/google";
import PaymentPage from "./pages/Payments";
import FreeDashboard from "./pages/FreeDashboard";
import RedirectAuthenticatedUser from "./components/Authentication/RedirectAuthenticatedUser";
import AuthenticateUser from "./components/Authentication/AuthenticateUser";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/signin",
        element: <RedirectAuthenticatedUser>
          <Signin />
        </RedirectAuthenticatedUser>,
      },
      {
        path: "/signup",
        element: <RedirectAuthenticatedUser>
          <SignUp />
        </RedirectAuthenticatedUser>,
      },
      {
        path: "/dashboard",
        element: <AuthenticateUser>
          <Dashboard />
        </AuthenticateUser>,
      },
      {
        path: '/payments',
        element: <AuthenticateUser>
          <PaymentPage />
        </AuthenticateUser>
      },
      // {
      //   path: '/visitorDashboard',
      //   element: <VisitorDashboard />
      // },
      {
        path: '/freeDashboard',
        element: <FreeDashboard />
      }
    ],
  },
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFound />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  </React.StrictMode>
);