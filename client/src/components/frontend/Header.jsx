import '../../assets/front_assets/css/bootstrap.min.css'
import { Link, useNavigate } from 'react-router-dom';
import '../../assets/front_assets/css/style.css'
import '../../assets/front_assets/css/media.css'
import { Cookies } from 'react-cookie';

export default function Header() {
  const navigate = useNavigate()
  const cookies = new Cookies();
  const cookie = cookies.get('auth');

  const handleLogout = ()=>{
    cookies.remove('auth', {path:'/'});
    localStorage.clear();
    navigate('/');
  }

  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-md py-3">
          <div className="container">
            <a className="navbar-brand" to="javascript:;">
                <Link to="/" className='nav-link'> Goalta.ai</Link>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsibleNavbar"
            >
              <i className="bi bi-list" />
            </button>
            <div
              className="collapse navbar-collapse justify-content-between"
              id="collapsibleNavbar"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" to="#">
                    chat
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    to="#"
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    use cases <i className="bi bi-chevron-down" />
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" to="#">
                        teams
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" to="#">
                        emails
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" to="#">
                        blogs
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" to="#">
                        social media
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    to="#"
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    resources <i className="bi bi-chevron-down" />
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" to="#">
                        learn from our blog
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" to="#">
                        webinars
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" to="#">
                        support
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" to="#">
                        free AI writing generators
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" to="#">
                        free writing templates
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" to="#">
                        join the comunity
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" to="#">
                    pricing
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item">
                  {
                    cookie ? 
                    <Link className="nav-link" onClick={handleLogout} to="/">logout</Link>:
                    <Link to="/login" className='nav-link'>login</Link>
                  }
                </li>
                <li className="nav-item ms-md-4 ms-0">
                  <a className="nav-link header-button" to="#">
                    get started -- it's free
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
