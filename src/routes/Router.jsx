import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/Homelayout";
import App from "../App";
import Home from "../pages/Home";


const Router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
          {
            path:"/",element:<Home></Home>
          }
        ]
    },
    
   
]);

export default Router;