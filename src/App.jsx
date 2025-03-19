import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./App.css";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Explore from "./pages/Explore";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <AboutUs /> },
      { path: "/explore", element: <Explore /> },
      { path: "/contact", element: <Contact /> },
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
