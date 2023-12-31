import React from 'react';
import Link from 'next/link'
import information from '../../../information.json'

const Footer = () => {
    return (
        <footer>
            <div className="agy-footer-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-6 col-12 mb-30">
                            <div className="agy-widgets">
                                {/* <img src="assets/images/white-logo.png" alt="agency" /> */}
                                <Link href={"/"}>
                                    <div className="agy-page-title-text">
                                        <h1 style={{ color: "white" }}>Dhyey Rathod</h1>
                                    </div>
                                </Link>
                                <p>Consectetur adipisicing seeid doersi eiusmod tempoerer incididunt ut labore et dolore magereina aliqua. Ut enim ad minim veniam, quis nostrud.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                            <div className="row">
                                {/* <div className="col-lg-6 col-md-6 col-sm-6 col-12 mb-30">
                                    <div className="agy-widgets agy-footer-menu">
                                        <h4 className="agy-sub-heading relative">Support</h4>
                                        <ul>
                                            <li><a href="#">Express</a></li>
                                            <li><a href="#">Material</a></li>
                                            <li><a href="#">Lockmisth</a></li>
                                            <li><a href="#">Vehicle</a></li>
                                            <li><a href="#">Commodity</a></li>
                                        </ul>
                                    </div>
                                </div> */}
                                <div className="col-lg-6 col-md-6 col-sm-6 col-12 mb-30">
                                    <div className="agy-widgets agy-footer-menu">
                                        <h4 className="agy-sub-heading relative">Links</h4>
                                        <ul>
                                            <li><Link href="/aboutus">About</Link></li>
                                            <li><Link href="/services">Service</Link></li>
                                            <li><Link href="/contactus">Contact</Link></li>
                                            {/* <li><a href="#">Our Clients</a></li> */}
                                            {/* <li><a href="#">Download Broucher</a></li> */}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-12 mb-30">
                            <div className="agy-widgets agy-footer-address">
                                <h4 className="agy-sub-heading relative">Working Hours</h4>
                                <ul>
                                    <li>Monday - Friday : 9:00 to 17:00</li>
                                    <li>Saturday : 10:00 to 15:00</li>
                                </ul>
                                <h6>Call Now -</h6>
                                <h5>+(91) {information.contact}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="agy-copyright-wrapper">
                <div className="col-lg-12 col-md-12 col-sm-12 col-12 text-center">
                    <p>Copyright © 2022 <a href="#;">Dhyey Rathod</a>. All Right Reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer