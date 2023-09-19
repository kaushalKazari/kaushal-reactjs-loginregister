// 1. import area
import Crud1 from "../pages/Crud1";
import EditTeacher from "../pages/EditTeacher";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Register2 from "../pages/Register2";
import Register3 from "../pages/Register3";


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
    },
    {
      path:"register3",
      element:<Register3/>
    },
    {
      path:"crud1",
      element:<Crud1/>
    },
    {
      path:"editteacher",
      element:<EditTeacher/>
    }
  ]

// 3. export area
// module.exports is nothing but a javascript object
//module.exports = {routes};