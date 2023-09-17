import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { routes } from './routes/Routes';
import Layout from './components/Layout';

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            {
              routes.map((cv,idx,arr)=>{
                return <Route path={cv.path} element={cv.element}></Route>
              })
            }
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
