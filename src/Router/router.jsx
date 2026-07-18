import App from "../App";
import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Habbits from "../Pages/Habbits";
import AddHabbits from "../Pages/AddHabbits";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/register',
            element: <Register/>
        },
        {
            path: '/login',
            element: <Login/>
        },
        {
          path: '/habbits',
          element: <Habbits/>
        },
        {
          path: '/habbits/addHabbits',
          element: <AddHabbits/>
        }
    ]
  },
]);

export default router;