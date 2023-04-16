import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Weather from "./pages/Weather";
import ErrorPage from "./pages/ErrorPage";
import Posts from "./pages/Posts";
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
