import React, { useEffect, useContext } from 'react'
import Header from './components/Header'
import Head from "next/head";
import Breadcrumb from './components/Breadcrumb'
import Footer from './components/Footer'
import { AppContext } from '../controller/context'
const aboutus = ({ information }) => {
    const datacontext = useContext(AppContext);
    useEffect(() => {
        datacontext.menuClose()
    }, [])
    return (
        <>
            <Head>
                <title>About Us - Website Developer in Mumbai | Dhyey Rathod</title>
                <meta name="description" content="Dhyey Rathod is a web designer and developer based in Mumbai,India. My expertise include web development, mobile app development, ecommerce, SEO and digital marketing." />
                <meta name="apple-mobile-web-app-title" content="Website Developer and Designer in Mumbai | Dhyey Rathod" />
                <meta property="og:url" content={information.base_url + "/aboutus/"} />
                <meta property="og:site_name" content="Dhyey Rathod" />
                <meta property="article:publisher" content="https://www.facebook.com/dhyey.rathod.98" />

                <meta property="og:image" content={information.base_url + "/assets/images/dhyey.png"} />
                <meta property="og:title" content="About Us - Website Developer in Mumbai | Dhyey Rathod" />
                <meta property="og:description" content="Dhyey Rathod is a web designer and developer based in Mumbai,India. My expertise include web development, mobile app development, ecommerce, SEO and digital marketing." />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
            </Head>
            <Header />
            <Breadcrumb page={"About Us"} />
            <section className="agy-about-wrapper agy-about-home" id="about">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="agy-about-text">
                                <h4 className="agy-sub-heading relative">About Us</h4>
                                <h2>I Design and develop stunning Digital Products</h2>
                                <p>Dhyey Rathod is a profoundly experienced and proficient organization for Corporate Website Development, Software Development, and Digital Marketing.</p>
                                <div className="agy-divider" />
                                <p>Being in the IT business for over 5 years now Dhyey Rathod has a strong team of skilled and experienced IT experts.</p>
                                <ul className="agy-list-item">
                                    <li><a href="#"><span className="fa-solid fa-square-check" />On-time Delivery</a></li>
                                    <li><a href="#"><span className="fa-solid fa-square-check" />Growth Revenue</a></li>
                                    <li><a href="#"><span className="fa-solid fa-square-check" />Great Support </a></li>
                                    <li><a href="#"><span className="fa-solid fa-square-check" />Expert Team Work</a></li>
                                </ul>
                                <a href="#" className="agy-btn">Contact Us</a>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="agy-about-img relative">
                                <img src={information.base_url + "assets/images/agency-about-img.jpg"} alt="dhyey Rathod" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="agy-counter-wrapper overflow-hidden">
                <div className="container">
                    <div className="row counter-holder">
                        <div className="col-lg-3 col-md-3 col-sm-6 col-12" data-wow-delay="0.1s" style={{ visibility: 'visible', animationDelay: '0.1s' }}>
                            <div className="counter-item text-center">
                                <div className="agy-counter-icon"><img alt='' src={information.base_url + "assets/images/svg/011-rating.svg"} /></div>
                                <h1><span className="count-no" data-count={26}>26</span><span>k+</span></h1>
                                <p>Happy Customers</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-12" data-wow-delay="0.2s" style={{ visibility: 'visible', animationDelay: '0.2s' }}>
                            <div className="counter-item text-center">
                                <div className="agy-counter-icon"><img src={information.base_url + "assets/images/svg/012-start.svg"} /></div>
                                <h1><span className="count-no" data-count={700}>700</span><span>+</span></h1>
                                <p>Project Complete</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-12" data-wow-delay="0.3s" style={{ visibility: 'visible', animationDelay: '0.3s' }}>
                            <div className="counter-item text-center">
                                <div className="agy-counter-icon"><img src={information.base_url + "assets/images/svg/013-appartment.svg"} /></div>
                                <h1><span className="count-no" data-count={200}>200</span><span>+</span></h1>
                                <p>World Wide Branch</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-12" data-wow-delay="0.4s" style={{ visibility: 'visible', animationDelay: '0.4s' }}>
                            <div className="counter-item text-center">
                                <div className="agy-counter-icon"><img src={information.base_url + "assets/images/svg/014-medal.svg"} /></div>
                                <h1><span className="count-no" data-count={6}>6</span><span>k+</span></h1>
                                <p>Award Winner</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <Whyweare /> */}
            <Footer />
        </>
    )
}

export default aboutus