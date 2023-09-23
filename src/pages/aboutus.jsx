import React, { useEffect } from 'react'
import Header from './components/Header'
import Breadcrumb from './components/Breadcrumb'
import Whyweare from './components/Whyweare'
import Footer from './components/Footer'
const aboutus = () => {
    useEffect(() => {
        var testimonialSlider = new Swiper('.agy-testimonial-slider .swiper', {
            autoHeight: false,
            autoplay: false,
            loop: false,
            spaceBetween: 0,
            centeredSlides: false,
            speed: 1500,
            pagination: {
                el: '.agy-testimonial-slider .agy-bullets',
                clickable: true,
            },
            navigation: {
                nextEl: '.agy-testimonial-slider .swiper-button-next',
                prevEl: '.agy-testimonial-slider .swiper-button-prev',
            },
            slidesPerView: 3,
            breakpoints: {
                0: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                },
                575: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                767: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
            },
        });

    }, [])
    return (
        <>
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
                                <img src="assets/images/agency-about-img.png" alt="agency" />
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
                                <div className="agy-counter-icon"><img src="assets/images/svg/011-rating.svg" /></div>
                                <h1><span className="count-no" data-count={26}>26</span><span>k+</span></h1>
                                <p>Happy Customers</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-12" data-wow-delay="0.2s" style={{ visibility: 'visible', animationDelay: '0.2s' }}>
                            <div className="counter-item text-center">
                                <div className="agy-counter-icon"><img src="assets/images/svg/012-start.svg" /></div>
                                <h1><span className="count-no" data-count={700}>700</span><span>+</span></h1>
                                <p>Project Complete</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-12" data-wow-delay="0.3s" style={{ visibility: 'visible', animationDelay: '0.3s' }}>
                            <div className="counter-item text-center">
                                <div className="agy-counter-icon"><img src="assets/images/svg/013-appartment.svg" /></div>
                                <h1><span className="count-no" data-count={200}>200</span><span>+</span></h1>
                                <p>World Wide Branch</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-12" data-wow-delay="0.4s" style={{ visibility: 'visible', animationDelay: '0.4s' }}>
                            <div className="counter-item text-center">
                                <div className="agy-counter-icon"><img src="assets/images/svg/014-medal.svg" /></div>
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