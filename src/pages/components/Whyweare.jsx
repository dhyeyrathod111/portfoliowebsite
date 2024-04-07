import React from 'react'
import information from './../../../information.json'

const Whyweare = () => {
    return (
        <section className="agy-work-wrapper">
            <div className="container">
                <div className="row">

                    <div className="col-lg-6 col-md-6 col-sm-12 col-12" data-wow-delay="0.10ms">
                        <div className="agy-quote-img relative text-center mb-30">
                            <img alt="Dhyey Rathod Software Developer IN mumbai" src={information.base_url + "assets/images/dhyey-rathod.webp"} />
                        </div>
                    </div>
                    <div className="col-md-6 d-flex align-items-center mb-30">
                        <div className="agy-work-text">
                            <h4 className="agy-sub-heading relative">I Am</h4>
                            <h2>Best Website Developer And Designer In Mumbai</h2>
                            <p>Dhyey Rathod techniccal experties is the ultimate solution for all your needs. If you are in search of a website designing service that truly understands your requirements. Moreover, we possess extensive expertise in software development, including online courier software, logistic software, transportation software, Air/cargo tracking for transport software, online exam software, bus ticket booking software, MLM software, laboratory information management software, Metal testing laboratory management software, CRM(Customer Relations Management) Software, ERP Software, Inventory Software, Stock Management Software, School Management Software, Hospital management Software, Clinic Management Software, Bulk Email Sending Software, Bulk SMS Sending Software, Hotel management Software, and HR Management Software. Furthermore, we are the exclusive Software Development Company in Ahmedabad that offers customized software and online application development. As an experienced E-commerce Web Development Company, we are committed to fulfilling all your requirements.</p>

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