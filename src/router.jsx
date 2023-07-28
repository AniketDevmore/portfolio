import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import AllProjects from "./components/allProjects/AllProjects";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/project",
    element: <Projects />,
  },
  {
    path: "/allProjects",
    element: <AllProjects />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);
