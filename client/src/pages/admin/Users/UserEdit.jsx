import axios from 'axios';
import {useEffect, useState } from 'react';
import { FiList } from "react-icons/fi";
import { Link,useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { Card, Form, Row, Col, Button} from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const UserEdit = ()=>{
    const { id } = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState({
        name:'',
        email:'',
        phone:'',
    });

    const handleChange = (e)=>{
        let value = e.target.value;
        let name = e.target.name;
        setData({
            ...data,
            [name]:value
        })
    }


    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_API_URL}/user-edit/${id}`, data)
        .then((res)=>{
            if(res.data.success===true){
                setData(res.data.data);
            }           
        }).catch((err)=>{
            console.log(err);
        })
    },[]);

  

    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.put(`${process.env.REACT_APP_API_URL}/user-update/${id}`, data)
        .then((res)=>{
            if(res.data.success === true){
                toast.success(res.data.message);
                setData({name:'', email:'',phone:'',password:'',confirm_password:''});
                navigate('/admin/users');
            }else{
                toast.error(res.data.error);
            }
        }).catch((err)=>{
            if(err.response.data.success===false){
                let errors = err.response.data.error;
                for(let x in errors){
                    toast.error(errors[x]);
                }
            }
        })
    }


    return (
        <Card className="shadow-lg border-0">
            <ToastContainer newestOnTop={true} theme="dark" pauseOnHover closeOnClick autoClose={10000}/>
            <Card.Header className="p-3 d-flex align-items-center justify-content-between">
                <Card.Title className="m-0 text-capitalize">add user</Card.Title>
                <Link to="/admin/users" className="text-capitalize bg-primary text-decoration-none text-white btn"><FiList/> users</Link>
            </Card.Header>
            <Card.Body>
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={12}>
                            <Form.Label>Name</Form.Label>
                            <Form.Group className="mb-3">
                                <Form.Control type="text" placeholder="Enter Name" name="name" value={data.name} onChange={handleChange}/>
                            </Form.Group>
                        </Col>
                        <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={12}>
                            <Form.Label>Email</Form.Label>
                            <Form.Group className="mb-3">
                                <Form.Control type="email" placeholder="Enter Email" name="email" value={data.email} onChange={handleChange}/>
                            </Form.Group>
                        </Col>
                        <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={12}>
                            <Form.Label>phone</Form.Label>
                            <Form.Group className="mb-3">
                                <Form.Control type="tel" placeholder="Enter phone" name="phone" value={data.phone} onChange={handleChange}/>
                            </Form.Group>
                        </Col>
                       
                        
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <Form.Group>
                                <Button type="submit" className="text-capitalize">update user</Button>
                            </Form.Group>
                        </Col>
                    </Row>

                </Form>
            </Card.Body>
        </Card>
    )
}

export default UserEdit;