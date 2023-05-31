import { FiUser} from "react-icons/fi";
import { Link, useNavigate } from 'react-router-dom';
import { Nav ,Navbar } from 'react-bootstrap';
import { FiMenu } from "react-icons/fi";
import { Cookies } from 'react-cookie';

const Header = ()=>{
    const navigate = useNavigate()
    const cookies = new Cookies();

    const handleLogout = ()=>{
        cookies.remove('auth', {path:'/'});
        localStorage.clear();
        navigate('/');
    }

    return (
        <header className="header border-start px-2">
            <Navbar collapseOnSelect expand="lg" className="h-100">
                <Navbar.Brand href="#home"><FiMenu/></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link className="nav-link" to="/">Features</Link>
                        <Link className="nav-link" to="/">Pricing</Link>
                    </Nav>
                    <Nav className="align-items-center">
                        <Link to="" className="nav-link">
                            <span style={{width:40+'px',height:40+'px'}} className="rounded-pill border d-flex align-items-center justify-content-center"><FiUser/></span>
                        </Link>
                        <Link className="nav-link" onClick={handleLogout} to="/">logout</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
}

export default Header;