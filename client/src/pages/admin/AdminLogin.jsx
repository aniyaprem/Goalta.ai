import { Row, Container, Col, Card, Form, Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { Cookies } from 'react-cookie';
import axios from 'axios'

const AdminLogin = ()=>{
    const cookie = new Cookies();
    const cookies = new Cookies();
    const navigate = useNavigate();
    const [data, setData] = useState({
        email:"",
        password:""
    });

    const handleChange = (e)=>{
        let value = e.target.value;
        let name = e.target.name;
        setData({
            ...data,
            [name]:value
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.post(`${process.env.REACT_APP_API_URL}/login`,data)
        .then((res)=>{
            if(res.data.success === true){
                if(res.data.role === 'admin'){
                    toast.error(res.data.message);
                    navigate('/admin');
                }else{
                    toast.error("You are not login Please try again");
                    cookies.remove('auth', {path:'/'});
                    navigate('/');
                }
            }
            console.log(res);
        }).catch((err)=>{
            console.log(err);
            if(err.response!==undefined){
                if(err.response.data.success===false){
                    if(err.response.data.error!==undefined){
                        toast.error(err.response.data.error);
                    }
                }
            }
        })
    }

    useEffect(()=>{
        const checkAuth = ()=>{
            cookie.get('auth') ? navigate('/admin/login') : navigate('/admin/login');
        }
        checkAuth();
    },[])

    return(
        <Container>
            <ToastContainer autoClose={10000} theme="dark" closeOnClick newestOnTop={true}/>
            <Row className="m-0 align-items-center justify-content-center" style={{height:70+'vh'}}>
                <Col xxl={6} xl={6} lg={6} my={1} sm={6} xs={12}>
                    <Card className="border-0 shadow-lg">
                        <Card.Body>
                            <Card.Title className="mb-4">Admin Login Here</Card.Title>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Username or Email</Form.Label>
                                    <Form.Control type="email" name="email" placeholder="Username or Email" value={data.email} onChange={handleChange}/>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" name="password" placeholder="Password" value={data.password} onChange={handleChange}/>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Button type="submit" variant="primary" className="text-capitalize w-100">login</Button>
                                </Form.Group>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default AdminLogin;