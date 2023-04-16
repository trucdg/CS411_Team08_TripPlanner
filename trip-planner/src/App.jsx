import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home/Home";
import Weather from "./pages/Weather/Weather";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Posts from "./pages/Posts/Posts";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/weather", element: <Weather /> },
      { path: "/posts", element: <Posts /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
