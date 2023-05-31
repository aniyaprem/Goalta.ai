import axios from 'axios';
import { Cookies } from 'react-cookie';
import AdminRoute from './router/AdminRoute';
import { Route, Routes } from "react-router-dom";
import Layout from './components/frontend/Layout'
import FrontendRoute from './router/FrontendRoute';
import AdminLayout from "./components/admin/AdminLayout";

function App() {
  const cookies = new Cookies();
  axios.defaults.withCredentials = true;
  axios.defaults.credentials = 'include';
  axios.defaults.headers.common['Authorization'] = `Bearer ${cookies.get('auth')}`;
  axios.defaults.headers.common['Content-Type'] = `application/json`;

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
            {
              FrontendRoute && FrontendRoute.map((item, index)=>{
                return(
                  <Route key={index} path={item.path} element={item.component}/>
                )
              })
            }
        </Route>
        <Route path="/" element={<AdminLayout/>}>
            {
              AdminRoute && AdminRoute.map((item, index)=>{
                return(
                  <Route key={index} path={item.path} element={item.component}/>
                )
              })
            }
        </Route>
      </Routes>
    </div>
  );
}

export default App;
