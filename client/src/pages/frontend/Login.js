import { Row, Container, Col, Form, Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import useFetch from "../../hooks/useFetch";
import { Cookies } from 'react-cookie';
import axios from 'axios'

const Login = ()=>{
    const { handleGoogle, loading, error } = useFetch("http://localhost:5000/api/login");
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
        axios.post(`${process.env.REACT_APP_API_URL}/login`,data,{
            withCredentials:true,
            credentials:'include',
            headers:{
                'Content-Type':'application/json'
            }
        }).then((res)=>{
            console.log(res);
            if(res.data.success === true){
                localStorage.setItem('role', res.data.role);
                localStorage.setItem('authuser', JSON.stringify(res.data.authuser));
                let userrole = localStorage.getItem('role');
                if(userrole === 'user'){
                    toast.success(res.data.message);
                    navigate('/dashboard');
                }else if (userrole === 'admin') {
                    toast.success(res.data.message);
                    navigate('/admin');
                }
                else{
                    toast.error("You are not login Please try again");
                    cookies.remove('auth', {path:'/'});
                    navigate('/');
                }
            }
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
        if(window.google){
            window.google.accounts.id.initialize({
                client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
                callback: handleGoogle,
            });

            window.google.accounts.id.renderButton(document.getElementById("loginDiv"), {
                // type: "standard",
                theme: "filled_black",
                // size: "small",
                text: "signin_with",
                shape: "pill",
            });
        }
        // const checkAuth = ()=>{
        //     let userrole = localStorage.getItem('role');
        //     if(!cookie && userrole === undefined){
        //         navigate('/login');
        //     }else if(userrole === 'admin' && cookie){
        //         navigate('/admin');
        //     }else if(userrole === 'user' && cookie){
        //         navigate('/dashboard');
        //     }else{
        //         navigate('/login');
        //     }
        // }
        // checkAuth();
    },[handleGoogle ])

    return(
        <Container>
            <ToastContainer autoClose={10000} theme="dark" closeOnClick newestOnTop={true}/>
            <Col xxl={9} xl={9} lg={9} md={9} sm={12} xs={12} className="m-auto">
                <Row className="m-0 my-5">
                    <Col xxl={4} xl={4} lg={4} md={4} sm={12} xs={12}>
                        <h4 className="login__heading">Log in or <span className="d-block">Create Account</span></h4>
                        <div className="login-text">Quickly get started by signing in using your existing accounts.</div>
                        {error && <p style={{ color: "red" }}>{error}</p>}
                        {loading ? <div>Loading....</div> : <div id="loginDiv"></div>}
                    </Col>
                    <Col xxl={8} xl={8} lg={8} md={8} sm={12} xs={12}>
                        <div className="login-text mb-3">By proceeding, you are agreeing to Copy.ai's <Link to="/login">Terms of Service</Link> and <Link to="/login">Privacy Notice</Link></div>
                        <div className="social-login-btn d-flex ">
                            <Button className="flex-grow-1 google-login-btn btn btn-default me-3">Continue with Google</Button>
                            <Button className="flex-grow-1 facebook-login-btn btn btn-default">Continue with Facebook</Button>
                        </div>
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
                                <Button type="submit" variant="success" className="text-capitalize w-100">login</Button>
                            </Form.Group>
                            <Link to="/signup" className='d-block text-center'>Create an Account!</Link>
                        </Form>
                    </Col>
                </Row>
            </Col>
        </Container>
    )
}

export default Login;