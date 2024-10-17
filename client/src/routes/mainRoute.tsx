import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashBoard from "../pages/DashBoard";
import PatientDetails from "../pages/PatientDetails";
import Login from "../pages/Login";
import AuthProtector from "../lib/protectedCompoenents/AuthProtector";
import LoginProtect from "../lib/protectedCompoenents/LoginProtectRoute";

/*
routing with createborwser router 
high recommendation from react -router-dom
helps us to manage easly routes
*/
const MainRoutes = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthProtector>
        <DashBoard />
      </AuthProtector>
    ),
  },

  {
    path: "/login",
    element: (
      <LoginProtect>
        <Login />,
      </LoginProtect>
    ),
  },
  {
    path: "/:id",
    element: <PatientDetails />,
  },
]);

const MainRouter = () => {
  return <RouterProvider router={MainRoutes} />;
};

export default MainRouter;
