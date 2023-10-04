// 1. import area
import Geolocation from "../pages/Geolocation";
import Home from "../pages/Home";
import SearchFilter from "../pages/SearchFilter";
import AdminDashboard from "../pages/admindashboard/AdminDashboard";
import BusinessCategory from "../pages/justdial/BusinessCategory";
import JustDialBusinessRegister from "../pages/justdial/JustDialBusinessRegister";
import JustDialLogin from "../pages/justdial/JustDialLogin";
import JustDialRegister from "../pages/justdial/JustDialRegister";
import CreateStudent from "../pages/student/CreateStudent";
import CreateTeacher from "../pages/teacher/CreateTeacher";


// 2. functional area
export const routes = [
    {
      path:"index",
      element:<Home/>
    },
    {
      path:"teacher/create",
      element:<CreateTeacher/>
    },
    {
      path:"student/create",
      element:<CreateStudent/>
    },
    {
      path:"admin/dashboard",
      element:<AdminDashboard/>
    },
    {
      path:"justdial/category",
      element:<BusinessCategory/>
    },
    {
      path:"justdial/login",
      element:<JustDialLogin/>
    },
    {
      path:"justdial/register",
      element:<JustDialRegister/>
    },
    {
      path:"justdial/businessregister",
      element:<JustDialBusinessRegister/>
    },
    {
      path:"geolocation",
      element:<Geolocation/>
    },
    {
      path:"searchfilter",
      element:<SearchFilter/>
    }
  ]

// 3. export area
// module.exports is nothing but a javascript object
//module.exports = {routes};