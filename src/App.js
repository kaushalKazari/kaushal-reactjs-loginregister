import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { routes } from './routes/Routes';
import Layout from './components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import Register from './pages/Register';


function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes> 
          <Route path='/login' element={<Login/>}></Route>             
          <Route path='/' element={<Layout/>}>
            {
              routes.map((cv,idx,arr)=>{
                return <Route path={cv.path} element={cv.element}></Route>
              })
            }
          </Route>  
          <Route path='/register' element={<Register/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
