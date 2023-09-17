// 1. import area
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Register2 from "../pages/Register2";


// 2. functional area
export const routes = [
    {
      path:"index",
      element:<Home/>
    },
    {
      path:"login",
      element:<Login/>
    },
    {
      path:"register",
      element:<Register/>
    },
    {
      path:"register2",
      element:<Register2/>
    }
  ]

// 3. export area
// module.exports is nothing but a javascript object
//module.exports = {routes};