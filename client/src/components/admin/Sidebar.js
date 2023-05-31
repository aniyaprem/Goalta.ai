import {Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FiCpu, FiUsers } from "react-icons/fi";

const Sidebar = ()=>{
    return (
        <>
            <Nav.Item className="logo border-bottom">
                <Link to="/admin">canws.ai</Link>
            </Nav.Item>
            <Nav className="side-menu flex-column">
                <Nav.Item>
                    <Link to="/admin">dashboard <FiCpu/></Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/admin/users">users <FiUsers/></Link>
                </Nav.Item>
            </Nav>
        </>
    )
}

export default Sidebar;