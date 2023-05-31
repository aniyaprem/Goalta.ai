import { Cookies } from 'react-cookie'
import { Table, Col } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

export default function UserDashboard() {
  const navigate = useNavigate()
  const cookies = new Cookies();
  const cookie = cookies.get('auth');
  const [user, setUser] = useState({});

  let userrole = undefined;

  useEffect(()=>{
    userrole = localStorage.getItem('role');
    setUser(JSON.parse(localStorage.getItem('authuser')));
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
  
  return (
    <div className="d-block">
      <div className="container py-5">
        <Col xxl={6} xl={6} lg={6} md={6} sm={8} xs={12} className="m-auto">
          <Table striped bordered hover className="table-bordered">
            <tr>
              <th>Name</th>
              <td>{user.name}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{user.email}</td>
            </tr>
            <tr>
              <th>phone</th>
              <td>{user.phone}</td>
            </tr>
          </Table>
        </Col>
      </div>
    </div>
  )
}
