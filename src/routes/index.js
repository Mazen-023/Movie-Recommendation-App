import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import ExplorePage from "../pages/ExplorePage";
import DetailsPage from "../pages/DetailsPage";
import SearchPage from "../pages/SearchPage";

import Login from "../components/Form/Login";
import Registration from "../components/Form/Registration";
import PassConfirm from "../components/Form/PassConfirm";
import ResetPass from "../components/Form/ResetPass";
import Verification from "../components/Form/Verification";
import Dashboard from '../components/Dashboard'; // Protected Route
import ProtectedRoute from '../components/ProtectedRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: ":explore",
        element: <ExplorePage />,
      },
      {
        path: ":explore/:id",
        element: <DetailsPage />,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "registration",
        element: <Registration />,
      },
      {
        path: "dahboard",
        element: 
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
      },
      {
        path: "confirmation",
        element: <PassConfirm />,
      },
      {
        path: "reset",
        element: <ResetPass />,
      },
      {
        path: "verification",
        element: <Verification />,
      },
    ],
  },
]);

export default router;
