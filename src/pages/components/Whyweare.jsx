import React from 'react'
import Image from 'next/image'

const Whyweare = () => {
    return (
        <section className="agy-work-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12 d-flex align-items-center mb-30">
                        <div className="agy-work-text">
                            <h4 className="agy-sub-heading relative">Why We Are</h4>
                            <h2>Best Consulting For Every Business</h2>
                            <p>We offer End to End IT Services and solutions to grow your brand into the new Digital World. Get cost-effective solutions today!</p>
                            <ul className="agy-work-item">
                                <li><a href="#"><span className="fa fa-check-circle" />Website Development</a></li>
                                <li><a href="#"><span className="fa fa-check-circle" />E-Commerce Development</a></li>
                                <li><a href="#"><span className="fa fa-check-circle" />Web Application Development</a></li>
                                <li><a href="#"><span className="fa fa-check-circle" />Mobile Application Development</a></li>
                            </ul>
                            <a href="#" className="agy-btn">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Whyweare