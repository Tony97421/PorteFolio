import "./styles/index.scss";
import Principal from "./pages/Principal";
import Intro from "./pages/Intro";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Stacks from "./pages/Stacks";
import EnCours from "./pages/EnCours";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Intro />,
    },
    {
      path: "/Principal",
      element: <Principal />,
    },
    {
      path: "/Stacks",
      element: <Stacks />,
    },
    {
      path: "/EnCours",
      element: <EnCours />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
