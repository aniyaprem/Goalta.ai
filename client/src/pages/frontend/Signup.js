import axios from 'axios';
import { useEffect, useState } from 'react';
import useFetch from "../../hooks/useFetch";
import { Link,useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import { Row, Container, Col, Card, Form, Button } from 'react-bootstrap';

const Signup = ()=>{
    const { handleGoogle, loading, error } = useFetch("http://localhost:5000/api/signup");
    const navigate = useNavigate();
    const [data, setData] = useState({
        name:'',
        email:'',
        phone:'',
        password:'',
        confirm_password:''
    });

    useEffect(()=>{
        if (window.google) {
            window.google.accounts.id.initialize({
                client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
                callback: handleGoogle,
            });
      
            window.google.accounts.id.renderButton(document.getElementById("signUpDiv"), {
                // type: "standard",
                theme: "filled_black",
                // size: "small",
                text: "continue_with",
                shape: "pill",
            });
      
            // google.accounts.id.prompt()
        }
    },[handleGoogle])

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
        console.log("data all",data);
        axios.post(`${process.env.REACT_APP_API_URL}/register`, data)
        .then((res)=>{
            if(res.data.success===true){
                toast.success(res.data.message);
                navigate('/login');
            }else{
                toast.error(res.data.error);
            }
        }).catch((err)=>{
            console.log("eror data ::",err);
            if(err.response.data.success===false){
                let errors = err.response.data.error;
                for(let x in errors){
                    toast.error(errors[x]);
                }
            }
        })
    }

    return (
        <Container>
            <ToastContainer newestOnTop={true} theme="dark" pauseOnHover closeOnClick autoClose={10000}/>
            <Row className="m-0 align-items-center justify-content-center my-5">
                <Col xxl={8} xl={8} lg={4} my={1} sm={8} xs={12}>
                    <Card className="border-0 shadow-lg">
                        <Card.Body className="">
                            <Card.Title className="mb-4">Sign UP  Here</Card.Title>
                            {error && <p style={{ color: "red" }}>{error}</p>}
                                {loading ? (
                                <div>Loading....</div>
                                ) : (
                                <div id="signUpDiv" data-text="signup_with"></div>
                            )}
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Name" name="name" value={data.name} onChange={handleChange}/>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Email" name="email" value={data.email} onChange={handleChange}/>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control type="number" placeholder="Enter Phone" name="phone" value={data.phone} onChange={handleChange}/>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" name="password" value={data.password} onChange={handleChange}/>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="confirm Password" name="confirm_password" value={data.confirm_password} onChange={handleChange}/>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Button type="submit" variant="success" className="text-capitalize">Sing UP</Button>
                                </Form.Group>
                                You have an Account ?
                                <Link to="/login" className='d-block text-center text-capitalize'> Sign In</Link>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Signup;