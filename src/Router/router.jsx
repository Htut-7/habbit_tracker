import App from "../App";
import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Habbits from "../Pages/Habbits";
import AddHabbits from "../Pages/AddHabbits";
import EditHabbit from "../Pages/EditHabbit";
import Progress from "../Pages/Progress";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Profile from "../Pages/Profile";

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
        },
        {
          path: '/editHabbits/:id',
          element: <EditHabbit/>
        },
        {
          path: '/progress',
          element: <Progress/>
        },
        {
          path: '/about',
          element: <About/>
        },
        {
          path: '/contact',
          element: <Contact/>
        },
        {
          path: '/profile',
          element: <Profile/>
        }
    ]
  },
]);

export default router;