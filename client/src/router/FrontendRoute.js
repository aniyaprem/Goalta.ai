import Login from '../pages/frontend/Login'
import Signup from '../pages/frontend/Signup';
import Home from '../pages/frontend/Home';
import AdminLogin from '../pages/admin/AdminLogin';
import UserDashboard from '../pages/frontend/UserDashboard';

const FrontendRoute = [
    {path:'/', name:'Home', component:<Home/>},
    {path:'/admin/login', name:'AdminLogin', component:<AdminLogin/>},
    {path:'/login', name:'Login', component:<Login/>},
    {path:'/signup', name:'Signup', component:<Signup/>},
    {path:'/dashboard', name:'UserDashboard', component:<UserDashboard/>},
];

export default FrontendRoute;

