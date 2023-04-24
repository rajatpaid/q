import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contractor from "./pages/Contractor/Contractor";
import LoginPage from "./pages/Auth/login/login";
import HomePage from "./pages/Home/Home";
import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig } from "./authConfig";
import { MsalProvider } from "@azure/msal-react";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Contractor />,
      },
      {
        path: "contractor",
        element: <Contractor />,
      },
      {
        path: "home",
        element: <HomePage />,
      },
    ],
  },
  {
    path: "login",
    element: <LoginPage />,
  },
  // {
  //   element: <AuthLayout />,
  //   children: [
  //     {
  //       path: "login",
  //       element: <Login />,
  //       loader: redirectIfUser,
  //     },
  //     {
  //       path: "logout",
  //       action: logoutUser,
  //     },
  //   ],
  // },
]);
const root = createRoot(document.getElementById("root") as HTMLElement);
const msalInstance = new PublicClientApplication(msalConfig);
root.render(
  <MsalProvider instance={msalInstance}>
    <RouterProvider router={router} />;
  </MsalProvider>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
