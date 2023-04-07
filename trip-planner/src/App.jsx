import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainNavigation from "./components/MainNavigation";
import Home from "./pages/Home";
import Weather from "./pages/Weather";
import "./App.css";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/weather", element: <Weather /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
