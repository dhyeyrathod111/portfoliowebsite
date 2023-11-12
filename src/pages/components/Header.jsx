import { useContext, useEffect } from 'react';
import React from 'react'
import Link from 'next/link'
import { AppContext } from '../../controller/context';
import information from '../../../information.json'
const Header = () => {
    const datacontext = useContext(AppContext);
    const mobilemenutogal = event => {
        event.preventDefault();
        (datacontext.menuflag == "") ? datacontext.openMenu() : datacontext.menuClose();
    }
    

    return (
        <header className="agy-header-wrapper agy-header-style-one" id="agencyHeader">
            <div className="agy-top-header">
                <div className="container-fluid agency-container">
                    <div className="agy-top-header-row">
                        <div className="header-info">
                            <ul>
                                <li>
                                    <div className="info-icon">
                                        <i className="fa-solid fa-envelope" />
                                    </div>
                                    <div className="info-data">
                                        <h6>Contact Number</h6>
                                        <a href="#">+91 {information.contact}</a>
                                    </div>
                                </li>
                                <li>
                                    <div className="info-icon">
                                        <i className="fa-solid fa-square-phone" />
                                    </div>
                                    <div className="info-data">
                                        <h6>Email Address</h6>
                                        <a href="#">{information.email}</a>
                                    </div>
                                </li>
                                <li>
                                    <div className="info-icon">
                                        <i className="fa-solid fa-location-dot" />
                                    </div>
                                    <div className="info-data">
                                        <h6>Our Location</h6>
                                        <a href="#">{information.address}</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="header-socials">
                            <ul>
                                <li>
                                    <a href="#">
                                        <i className="fa-brands fa-facebook-f" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa-brands fa-instagram" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa-brands fa-pinterest-p" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa-brands fa-dribbble" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main-header">
                <div className="container-fluid agency-container">
                    <div className="row align-items-center">
                        <div className="col-lg-3 col-md-4 col-sm-4 col-4">
                            <div className="agy-logo">
                                {/* <Link href={"/"}><img src={information.base_url + "assets/images/logo.png"} alt="logo" /></Link> */}
                                <Link href={"/"}>
                                    <div className="agy-page-title-text">
                                        <h1 style={{ color: "white" }}>Dhyey Rathod</h1>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-8 col-sm-8 col-8">
                            <div className="agy-main-menu main-menu-parent">
                                <div className={"agy-nav-items main-menu-wrapper text-right " + datacontext.menuflag}>
                                    <ul className="menu">
                                        <li><Link href={"/"}>Home</Link></li>
                                        <li><Link href={"/aboutus"}>About Us</Link></li>
                                        <li><Link href={"/services"}>Services</Link></li>
                                        <li><Link href={"/contactus"}>Contact</Link></li>
                                    </ul>
                                </div>
                                <div className={"agy-search-wrapper menu-btn-wrap " + datacontext.menuflag}>
                                    <ul className="display-flex">
                                        <li>
                                            <span href="" onClick={mobilemenutogal} className="menu-btn">
                                                <span />
                                                <span />
                                                <span />
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header