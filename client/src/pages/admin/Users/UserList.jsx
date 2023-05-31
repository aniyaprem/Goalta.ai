import axios from 'axios';
import {Table, Card, Button} from 'react-bootstrap';
import { FiUserPlus, FiTrash2,FiEdit } from "react-icons/fi";
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Link,useNavigate } from 'react-router-dom';
// import UserEdit from './UserEdit';

const UserList = ()=>{
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    // const userId = 'your_user_id'; // Replace with the actual user ID

    const handleDelete = (id)=>{
         axios.delete(`${process.env.REACT_APP_API_URL}/user-delete/${id}`)
        .then((res)=>{
            if(res.data.success === true){
                toast.success(res.data.message);
                navigate('/admin/users');
               
            }else{
                toast.error(res.data.error);
            }
        }).catch((err)=>{
            if(err.response.data.success===false){
                let errors = err.response.data.error;
                toast.error(errors);
                
            }
        })
    }
   
    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_API_URL}/user-list`)
        .then((res)=>{
            if(res.data.success===true){
                setUsers(res.data.data);
            }           
        }).catch((err)=>{
            console.log(err);
        })
    },[]);

   
  
    return (
        <Card className="shadow-lg border-0">
             <ToastContainer newestOnTop={true} theme="dark" pauseOnHover closeOnClick autoClose={10000}/>
            <Card.Header className="p-3 d-flex align-items-center justify-content-between">
                <Card.Title className="m-0 text-capitalize">user list</Card.Title>
                <Link to="/admin/add-user" className="text-capitalize bg-primary text-decoration-none text-white btn"><FiUserPlus/> add users</Link>
            </Card.Header>
            <Card.Body>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.length && users.map((item, index)=>{
                                return(
                                    <tr key={index}>
                                        <td>{item._id}</td>
                                        <td className="text-capitalize">{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td>
                                            <Button type="button" variant="danger" onClick={()=>{handleDelete(item._id);}}><FiTrash2/></Button>

                                            
                                            <Link to={`/admin/edit-user/${item._id}`}><Button type="button" className="mx-1" variant="warning"><FiEdit/></Button></Link>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    )
}

export default UserList;