import Dashboard from "../pages/admin/Dashboard";
import UserList from "../pages/admin/Users/UserList"; 
import AddUser from "../pages/admin/Users/AddUser"; 
import UserEdit from "../pages/admin/Users/UserEdit";

const AdminRoute = [
    {path:'/admin', name:'Dashboard', component:<Dashboard/>},
    {path:'/admin/users', name:'UserList', component:<UserList/>},
    {path:'/admin/add-user', name:'AddUser', component:<AddUser/>},
    {path:'/admin/edit-user/:id', name:'UserEdit', component:<UserEdit/>},
];

export default AdminRoute;