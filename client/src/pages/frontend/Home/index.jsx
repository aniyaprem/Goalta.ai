import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="d-block">
        <section className="banner">
            <div className="container text-center">
            <h1 className="banenr-heading">
                Whatever you want to ask,
                <span>our chat has the answers</span>
            </h1>
            <div className="banner-text">
                Get your <strong>free account today</strong>
            </div>
            <div className="banner-button mt-3">
                <Link to="/" className="google-button banner-btn">
                <i className="bi bi-google me-2" /> Sign up with Google
                </Link>
                <span className="between-text mx-2">or</span>
                <Link to="/" className="email-button banner-btn">
                Sign up with Email
                <i className="ms-2 bi bi-arrow-right" />
                </Link>
            </div>
            <div className="between-text mt-3">No credit card required</div>
            </div>
        </section>
        <section className="about-ai">
            <div className="container">
            <div className="row m-0">
                <div className="col-xxl-4 col-xl-4 col-md-4 col-lg-4 col-sm-6 col-12 mb-3 mb-xxl-0 mb-xl-0 mb-lg-0 mb-md-0">
                <div className="about-box d-flex align-items-center">
                    <div className="icon">
                    <i className="bi bi-clipboard-data" />
                    </div>
                    <div className="about-text ms-3">
                    <div className="about-box-heading">for blog writers</div>
                    <div className="about-box-text">
                        <Link to="/" className="to">
                        Write blogs 10x faster
                        </Link>
                    </div>
                    </div>
                    <div className="ms-auto right-icon me-3">
                    <i className="bi bi-arrow-right" />
                    </div>
                </div>
                </div>
                <div className="col-xxl-4 col-xl-4 col-md-4 col-lg-4 col-sm-6 col-12 mb-3 mb-xxl-0 mb-xl-0 mb-lg-0 mb-md-0">
                <div className="about-box d-flex align-items-center">
                    <div className="icon">
                    <i className="bi bi-clipboard-data" />
                    </div>
                    <div className="about-text ms-3">
                    <div className="about-box-heading">for social media manager</div>
                    <div className="about-box-text">
                        <Link to="/" className="to">
                        Write higher converting posts
                        </Link>
                    </div>
                    </div>
                    <div className="ms-auto right-icon me-3">
                    <i className="bi bi-arrow-right" />
                    </div>
                </div>
                </div>
                <div className="col-xxl-4 col-xl-4 col-md-4 col-lg-4 col-sm-6 col-12 mb-3 mb-xxl-0 mb-xl-0 mb-lg-0 mb-md-0">
                <div className="about-box d-flex align-items-center">
                    <div className="icon">
                    <i className="bi bi-clipboard-data" />
                    </div>
                    <div className="about-text ms-3">
                    <div className="about-box-heading">for email marketers</div>
                    <div className="about-box-text">
                        <Link to="/" className="to">
                        Write more engaging emails
                        </Link>
                    </div>
                    </div>
                    <div className="ms-auto right-icon me-3">
                    <i className="bi bi-arrow-right" />
                    </div>
                </div>
                </div>
            </div>
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-10 mt-5 m-auto">
                <div className="video-row pt-5">
                <Link
                    to="/"
                    data-bs-toggle="modal"
                    data-bs-target="#myModal"
                    className="video-box position-relative"
                >
                    <video preload="auto" loop autoPlay muted width="100%">
                    <source src="images/videostart.mp4" type="video/mp4" />
                    </video>
                    <div className="position-absolute top-50 start-50 translate-middle play-btn d-flex align-items-center justify-content-center">
                    <i className="bi bi-play-fill" />
                    </div>
                </Link>
                </div>
            </div>
            </div>
        </section>
        <section className="goals">
            <div className="container">
            <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7 col-sm-11 m-auto">
                <h2 className="text-center section-heading">
                The main goal for us is your result!
                </h2>
            </div>
            <div className="row mt-5">
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 mb-3 mb-xxl-0 mb-xl-0 mb-lg-0 mb-md-0">
                <div className="goal-box text-center p-3">
                    <div className="goal-box-icon m-auto mb-auto">
                    <i className="bi bi-headset" />
                    </div>
                    <h3 className="goal-box-heading mt-4">
                    free updates &amp; support
                    </h3>
                    <div className="goal-box-text my-3">
                    Consectetur adipiscing elit, sed do eiusm od tempor incididunt ut
                    labore.{' '}
                    </div>
                    <div className="goal-box-btn">
                    <Link
                        to="/"
                        className="text-decoration-none text-capitalize"
                    >
                        read more <i className="bi bi-arrow-right ms-1" />
                    </Link>
                    </div>
                </div>
                </div>
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 mb-3 mb-xxl-0 mb-xl-0 mb-lg-0 mb-md-0">
                <div className="goal-box text-center p-3">
                    <div className="goal-box-icon m-auto mb-auto">
                    <i className="bi bi-envelope-at" />
                    </div>
                    <h3 className="goal-box-heading mt-4">online communication</h3>
                    <div className="goal-box-text my-3">
                    Consectetur adipiscing elit, sed do eiusm od tempor incididunt ut
                    labore.{' '}
                    </div>
                    <div className="goal-box-btn">
                    <Link
                        to="/"
                        className="text-decoration-none text-capitalize"
                    >
                        read more <i className="bi bi-arrow-right ms-1" />
                    </Link>
                    </div>
                </div>
                </div>
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 mb-3 mb-xxl-0 mb-xl-0 mb-lg-0 mb-md-0">
                <div className="goal-box text-center p-3">
                    <div className="goal-box-icon m-auto mb-auto">
                    <i className="bi bi-robot" />
                    </div>
                    <h3 className="goal-box-heading mt-4">endless possiblities</h3>
                    <div className="goal-box-text my-3">
                    Consectetur adipiscing elit, sed do eiusm od tempor incididunt ut
                    labore.{' '}
                    </div>
                    <div className="goal-box-btn">
                    <Link
                        to="/"
                        className="text-decoration-none text-capitalize"
                    >
                        read more <i className="bi bi-arrow-right ms-1" />
                    </Link>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        <section className="testimonials-sec bg-white pt-0">
            <div className="container">
            <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-10 col-sm-11 m-auto">
                <h2 className="text-center section-heading">
                Explore the power of AI tools, developed with ingenuity,
                <div>
                    brilliance, quality and <span id="typed" />
                </div>
                </h2>
            </div>
            <div className="row mt-5">
                <div className="customer-logos slider">
                <div className="slide">
                    <img src="images/partner-2_1.png" alt="img"/>
                </div>
                <div className="slide">
                    <img src="images/partner-2_2.png" alt="img" />
                </div>
                <div className="slide">
                    <img src="images/partner-2_3.png" alt="img" />
                </div>
                <div className="slide">
                    <img src="images/partner-2_4.png" alt="img" />
                </div>
                <div className="slide">
                    <img src="images/partner-2_5.png" alt="img" />
                </div>
                <div className="slide">
                    <img src="images/partner-2_6.png" alt="img" />
                </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="testimonial slider">
                <div className="slide">
                    <div className="testimonial-box">
                    <div className="testimonial-text mb-4">
                        Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua ut enim ad minim. Adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore.
                    </div>
                    <div className="testimonial-author d-flex align-items-center">
                        <img src="images/testi-2-150x150.jpg"  alt="img"/>
                        <div className="author-info">
                        <div className="author-name text-capitalize">jane farmer</div>
                        <div className="author-occupation  text-capitalize">
                            expert
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="slide">
                    <div className="testimonial-box">
                    <div className="testimonial-text mb-4">
                        Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua ut enim ad minim. Adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore.
                    </div>
                    <div className="testimonial-author d-flex align-items-center">
                        <img src="images/testi-2-150x150.jpg" alt="img" />
                        <div className="author-info">
                        <div className="author-name text-capitalize">jane farmer</div>
                        <div className="author-occupation  text-capitalize">
                            expert
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="slide">
                    <div className="testimonial-box">
                    <div className="testimonial-text mb-4">
                        Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua ut enim ad minim. Adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore.
                    </div>
                    <div className="testimonial-author d-flex align-items-center">
                        <img src="images/testi-2-150x150.jpg"  alt="img"/>
                        <div className="author-info">
                        <div className="author-name text-capitalize">jane farmer</div>
                        <div className="author-occupation  text-capitalize">
                            expert
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        <section className="security-section bg-white">
            <div className="container-fluid px-0 px-xxl-5 px-xl-5 px-lg-5 px-md-4">
            <div className="security-div">
                <h1 className="section-heading text-center mb-5">
                The highest standard of security and compliance.
                </h1>
                <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-8 col-sm-10 m-auto text-center">
                <div className="security-imgs pt-5">
                    <img
                    src="images/64517906eaceb7c86f013e18_SOC2.png"
                    style={{ maxWidth: 200 }}  alt="img"
                    />
                    <img
                    src="images/64516a65bba49db2700ed42e_SOC 2 (1)-p-500.png"
                    style={{ maxWidth: 200 }}  alt="img"
                    />
                </div>
                <div className="security-text mt-5 mb-4 text-center">
                    Goalta.ai is SOC 2 Type II compliant in accordance with American
                    Institute of Certified Public Accountants (AICPA) standards for SOC
                    for Service Organizations also known as SSAE 18. Goalta.ai manages
                    your data with the highest standard of security and
                    compliance—giving you peace of mind.
                </div>
                <Link to="/" className="theme-btn m-auto">
                    learn more
                </Link>
                </div>
            </div>
            </div>
        </section>
        <section className="how-works bg-white pt-0">
            <div className="container">
            <h2 className="section-heading mb-5 text-center">How it works</h2>
            <div className="row align-items-center pt-5">
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 mb-3 mb-xxl-0 mb-xl-0 mb-lg-0 mb-md-0">
                <img
                    src="images/6297c0caffa00e75739ceb0b_step-1.svg"
                    className="w-100 diagram-img"  alt="img"
                />
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 mb-3 mb-xxl-0 mb-xl-0 mb-lg-0 mb-md-0">
                <div className="how-works-content d-flex">
                    <span>1</span>
                    <div className="how-text">
                    <h2>Enter you copywriting project</h2>
                    <p>
                        Choose from emails, social posts, long-term blog posts, and
                        more!
                    </p>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-12">
                <img
                src="images/628288c5cd3e84f1470a378c_line_right.svg"
                className="dot-img"  alt="img"
                />
            </div>
            <div className="row align-items-center">
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 mb-3 mb-xxl-0 mb-xl-0 mb-lg-0 mb-md-0">
                <div className="how-works-content d-flex">
                    <span>2</span>
                    <div className="how-text">
                    <h2>Give Goalta.ai a bit of context</h2>
                    <p>Enter few sentences about your brand and products.</p>
                    </div>
                </div>
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 mb-3 mb-xxl-0 mb-xl-0 mb-lg-0 mb-md-0">
                <img
                    src="images/6297c0cab1392750c5d86460_step-2.svg"
                    className="w-100 diagram-img"  alt="img"
                />
                </div>
            </div>
            <div className="col-12">
                <img
                src="images/628288c5cd3e84727f0a378f_line_left.svg"
                className="dot-img" alt="img"
                />
            </div>
            <div className="row align-items-center">
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 mb-3 mb-xxl-0 mb-xl-0 mb-lg-0 mb-md-0">
                <img
                    src="images/629d8cb48867426d37876661_feature-thumbnail3-min (1).png"
                    className="w-100 diagram-img"  alt="img"
                />
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                <div className="how-works-content d-flex">
                    <span>3</span>
                    <div className="how-text">
                    <h2>Shift through the results</h2>
                    <p>
                        Our AI content generator gives you multiple options for each
                        campaign that you're working on.
                    </p>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-12">
                <img
                src="images/628288c5cd3e84d55f0a378e_line_middle-from-left.svg"
                className="dot-img"  alt="img"
                />
            </div>
            <div className="d-block">
                <div className="col-xxl-6 col-xl-6 col-md-6 col-sm-12 m-auto">
                <div className="how-works-content d-flex d-xxl-none d-xl-none d-lg-none d-md-none">
                    <span>4</span>
                    <div className="how-text">
                    <h2>Edit, polish, and publish</h2>
                    <p>
                        Use Copy.ai's editor to rewrite paragraphs and polish up
                        sentences. Then, just copy and paste the work into your CMS for
                        publishing.
                    </p>
                    </div>
                </div>
                <div className="how-works-content d-none d-xxl-block d-xl-block d-lg-block d-md-block text-center">
                    <div className="how-text">
                    <h2>
                        <span>4</span> Edit, polish, and publish
                    </h2>
                    <p>
                        Use Copy.ai's editor to rewrite paragraphs and polish up
                        sentences. Then, just copy and paste the work into your CMS for
                        publishing.
                    </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>

    </div>
  )
}
