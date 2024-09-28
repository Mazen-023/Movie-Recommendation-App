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
import ProtectedRoute from '../components/ProtectedRoute';
import Profile from "../Profile/Profile";
import PageNotFound from "../components/404 Page";

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
      {
        path: "profile",
        element: 
          // <ProtectedRoute>
            <Profile />
          // </ProtectedRoute>
      },
      {
        path: "404-error-page",
        element: <PageNotFound />
      },
    ],
  },
]);

export default router;
