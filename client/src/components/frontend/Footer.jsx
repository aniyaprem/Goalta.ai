import React from 'react'


export default function Footer() {
  return (
    <div>
        <footer className="pb-0">
  <div className="container pb-5">
    <div className="row">
      <div className="col-xxl-6 col-xl-6 col-md-6 col-sm-12 mb-3 mb-xxl-0 mb-xl-0 mb-lg-0 mb-md-0">
        <h2 className="text-white">Goalta.a</h2>
        <div className="newsletter">
          <h4 className="newsletter-heading mb-4">newsletter signup</h4>
          <form method="post">
            <div className="input-group border-top-0">
              <span className="input-group-text py-0">
                <i className="bi bi-envelope" />
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Enter You Email Address"
              />
              <span className="input-group-text p-0">
                <button className="btn" type="button">
                  <i className="bi bi-arrow-right" />
                </button>
              </span>
            </div>
            <div className="form-check mt-4">
              <input
                className="form-check-input"
                type="checkbox"
                id="check1"
                name="privacy_policy"
                defaultValue={1}
              />
              <label className="form-check-label">
                I Agree to the <a to="javascript:;">Privacy Policy</a>
              </label>
            </div>
          </form>
        </div>
      </div>
      <div className="col-xxl-6 col-xl-6 col-md-6 col-sm-12">
        <h2 className="section-heading text-white">
          AI art tips from the finest ANN artists.
        </h2>
        <div className="row">
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">
            <h4 className="text-capitalize text-white mt-3">product</h4>
            <ul className="nav footer-links flex-column">
              <li className="nav-item">
                <a to="javascript:;" className="nav-link">
                  chat by Goalta.ai
                </a>
              </li>
              <li className="nav-item">
                <a to="javascript:;" className="nav-link">
                  reviews
                </a>
              </li>
              <li className="nav-item">
                <a to="javascript:;" className="nav-link">
                Goalta.ai API
                </a>
              </li>
              <li className="nav-item">
                <a to="javascript:;" className="nav-link">
                  pricing
                </a>
              </li>
              <li className="nav-item">
                <a to="javascript:;" className="nav-link">
                  alternatives
                </a>
              </li>
            </ul>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">
            <h4 className="text-capitalize text-white mt-3">company</h4>
            <ul className="nav footer-links flex-column">
              <li className="nav-item">
                <a to="javascript:;" className="nav-link">
                  blog
                </a>
              </li>
              <li className="nav-item">
                <a to="javascript:;" className="nav-link">
                  webinars
                </a>
              </li>
              <li className="nav-item">
                <a to="javascript:;" className="nav-link">
                  press
                </a>
              </li>
              <li className="nav-item">
                <a to="javascript:;" className="nav-link">
                  careers
                </a>
              </li>
              <li className="nav-item">
                <a to="javascript:;" className="nav-link">
                  comunities
                </a>
              </li>
            </ul>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">
            <h4 className="text-capitalize text-white mt-3">support</h4>
            <ul className="nav footer-links flex-column">
              <li className="nav-item">
                <a to="javascript:;" className="nav-link">
                  contact us
                </a>
              </li>
              <li className="nav-item">
                <a to="javascript:;" className="nav-link">
                  report a bug
                </a>
              </li>
              <li className="nav-item">
                <a to="javascript:;" className="nav-link">
                  report an qutage
                </a>
              </li>
              <li className="nav-item">
                <a to="javascript:;" className="nav-link">
                  request a new feature
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="footer-bottom">
      <div className="row">
        <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-12">
          <div className="row align-items-center">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 d-flex align-items-center">
              <h2 className="text-white">Goalta.ai</h2>
              <div className="footer-text ms-3">© 2023 CanwsAi, Inc.</div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <ul className="nav footer-nav">
                <li className="nav-item">
                  <a className="nav-link" to="#">
                    privacy notice
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" to="#">
                    terms of service
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" to="#">
                    status
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12">
          <ul className="nav footer-social justify-content-end">
            <li className="nav-item me-2">
              <a className="nav-link" to="#">
                <i className="bi bi-twitter" />
              </a>
            </li>
            <li className="nav-item me-2">
              <a className="nav-link" to="#">
                <i className="bi bi-linkedin" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" to="#">
                <i className="bi bi-facebook" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</footer>

    </div>
  )
}
