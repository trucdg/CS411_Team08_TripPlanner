import { useState, useEffect } from "react";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  BrowserRouter,
} from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home/Home";
import Weather from "./pages/Weather/Weather";
import TravelFeed from "./pages/TravelFeed/TravelFeed";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import SignUpForm from "./pages/Auth/SignUp";
import LoginForm from "./pages/Auth/Login";
import WelcomePage from "./pages/Welcome/WelcomePage";
import Hotels from "./pages/Hotels/Hotels";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [token, setToken] = useState(false);

  if (token) {
    sessionStorage.setItem("token", JSON.stringify(token));
  }

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      let data = JSON.parse(sessionStorage.getItem("token"));
      setToken(data);
      console.log(data);
    }
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/weather", element: <Weather /> },
        { path: "/feed/*", element: <TravelFeed /> },
        { path: "/signup", element: <SignUpForm /> },
        { path: "/login", element: <LoginForm setToken={setToken} /> },
        { path: "/welcome", element: <WelcomePage token={token} /> },
        { path: "/hotels", element: <Hotels /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
