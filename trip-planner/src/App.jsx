import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home/Home";
import Weather from "./pages/Weather/Weather";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Posts from "./pages/TravelFeed/TravelFeed";
import "./App.css";
import CreatePost from "./pages/TravelFeed/CreatePost";
import TravelFeed from "./pages/TravelFeed/TravelFeed";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/weather", element: <Weather /> },
      {
        path: "/feed",
        element: <TravelFeed />,
        children: [
          {
            path: "newpost",
            element: <CreatePost />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
