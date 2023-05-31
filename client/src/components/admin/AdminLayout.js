import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'
import { useEffect } from 'react';
import '../../assets/css/admin.css'
import { Cookies } from 'react-cookie';
import { Outlet, useNavigate } from 'react-router-dom'

const AdminLayout = ()=>{
    const navigate = useNavigate()
    const cookies = new Cookies();
    const cookie = cookies.get('auth');
    let userrole = undefined;
    useEffect(()=>{
        userrole = localStorage.getItem('role');
        if(!cookie && userrole === undefined){
            navigate('/login');
        }else if(userrole === 'admin' && cookie){
            navigate('/admin');
        }else if(userrole === 'user' && cookie){
            navigate('/dashboard');
        }else{
            navigate('/login');
        }
    },[cookie]);

    return(
        <>
            {
                cookie ? 
                    <div className="page-wrapper">
                        <aside className='sidebar-div'>
                            <Sidebar/>
                        </aside>
                        <main className='admin-layout'>
                            <Header/>
                            <div className="page-content">
                                <Outlet/>
                            </div>
                            <Footer/>
                        </main>
                    </div>:navigate('/login')
            }
        </>
    )
}

export default AdminLayout;