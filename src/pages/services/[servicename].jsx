import React, { useEffect, useContext } from 'react';
import { AppContext } from '../../controller/context'
import Header from '../components/Header';
import Head from "next/head";
import Footer from '../components/Footer';
import { useRouter } from 'next/router'
import Breadcrumb from '../components/Breadcrumb';
import information from '../../../information.json'
import Link from 'next/link';

export const getServerSideProps = async (context) => {
    const apidata = await fetch(information.base_url + '/api/serviceapi/' + context.params.servicename)
    const formateddata = await apidata.json();
    return { props: formateddata }
}

const Servicedetails = props => {
    const datacontext = useContext(AppContext);
    useEffect(() => datacontext.menuClose(), [])
    return (
        <>
            <Head>
                <title>{props.serviceresponse.name} | Dhyey Rathod</title>
                <meta name="Description" content="A professional Static Website Design Company in Delhi, India. We provide Responsive static web designing services at best prices." />
                <meta name="keywords" content="Static Website Designer Mumbai, Static Web Design Services, Static Website Designer in Mumbai, Responsive static web designing services Mumbai" />
                <meta property="og:url" content={information.base_url} />
                <meta property="og:site_name" content={information.name} />
                <meta property="article:publisher" content={information.base_url} />
                <meta property="og:image" content={information.base_url + "assets/images/dhyey.png"} />
                <meta property="og:title" content={props.serviceresponse.name} />
                <meta property="og:description" content={props.serviceresponse.short_description} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
            </Head>
            <Header />
            <Breadcrumb page={props.serviceresponse.name} />
            <section className="agy-blog-wrapper agy-blog-single-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-9 col-sm-12 col-12 mb-50">
                            <div className="agy-blog-section mb-0">
                                <div className="agy-blog-img">
                                    <a href=""><img className='w-100' src={props.serviceresponse.imageurl} alt="Dhyey Rathod Software Developer IN mumbai" /></a>
                                </div>
                                <div className="agy-blog-info">
                                    <ul>
                                        <li><img className="agy-user" src={information.base_url + "assets/images/dhyey.png"} alt="Dhyey Rathod Software Developer IN mumbai" /><span>Post By - </span><Link className="agy-user-name" href={"/"}>Dhyey Rathod</Link></li>
                                        <li><a href=""><i className="fa fa-calendar" />{props.serviceresponse.created_at}</a></li>
                                    </ul>
                                </div>
                                <div className="agy-blog-text">
                                    <a href="" className="agy-blog-heading text-justify">{props.serviceresponse.name}</a>
                                    <div dangerouslySetInnerHTML={{ __html: props.serviceresponse.long_description }}></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12 col-12 mb-50">
                            <div className="agy-blog-sidebar">
                                <div className="agy-sidebar-widgets agy-sidebar-search-widgets">
                                    <form className="agy-search-field">
                                        <input type="text" placeholder="Search here.." />
                                        <a href=""><i className="fa fa-search" /></a>
                                    </form>
                                </div>
                                <div className="agy-sidebar-widgets agy-sidebar-cat-widgets">
                                    <h4 className="agy-sub-heading ">Category</h4>
                                    <div className="agy-category-field">
                                        <ul>
                                            <li><a href="">Digital Markketing</a><span>( 212 )</span></li>
                                            <li><a href="">Business Development</a><span>( 92 )</span></li>
                                            <li><a href="">Car Seller</a><span>( 12 )</span></li>
                                            <li><a href="">Social Media</a><span>( 312 )</span></li>
                                            <li><a href="">Smart Work</a><span>( 112 )</span></li>
                                            <li><a href="">Support Desk</a><span>( 62 )</span></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="agy-sidebar-widgets agy-sidebar-post-widgets">
                                    <h4 className="agy-sub-heading ">Popular Post</h4>
                                    <div className="agy-latestPost-field">
                                        <ul>
                                            <li>
                                                <div className="agy-blog-thumb">
                                                    <img src="/assets/images/blog/thum1.jpg" alt="Dhyey Rathod Software Developer IN mumbai" />
                                                </div>
                                                <div className="agy-blog-title-wrap">
                                                    <a className="agy-blog-title" href="">What Are The Different Types Of Business</a>
                                                    <p className="agy-blog-date">May 06, 2022</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="agy-blog-thumb">
                                                    <img src="/assets/images/blog/thum2.jpg" alt="Dhyey Rathod Software Developer IN mumbai" />
                                                </div>
                                                <div className="agy-blog-title-wrap">
                                                    <a className="agy-blog-title" href="">How to earn mony with easy ways</a>
                                                    <p className="agy-blog-date">May 06, 2022</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="agy-blog-thumb">
                                                    <img src="/assets/images/blog/thum3.jpg" alt="Dhyey Rathod Software Developer IN mumbai" />
                                                </div>
                                                <div className="agy-blog-title-wrap">
                                                    <a className="agy-blog-title" href="">What Are The Different Types Of Dhyey Rathod Software Developer IN mumbai</a>
                                                    <p className="agy-blog-date">May 06, 2022</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="agy-sidebar-widgets agy-sidebar-arc-widgets">
                                    <h4 className="agy-sub-heading ">Archives</h4>
                                    <div className="agy-archives-field">
                                        <ul>
                                            <li><a href="">June 2022</a><span>( 212 )</span></li>
                                            <li><a href="">July 2022</a><span>( 92 )</span></li>
                                            <li><a href="">August 2022</a><span>( 12 )</span></li>
                                            <li><a href="">September 2022</a><span>( 312 )</span></li>
                                            <li><a href="">October 2022</a><span>( 112 )</span></li>
                                            <li><a href="">November 2022</a><span>( 62 )</span></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="agy-sidebar-widgets agy-sidebar-insta-widgets">
                                    <h4 className="agy-sub-heading ">Instagram</h4>
                                    <div className="agy-insta-field">
                                        <ul>
                                            <li><a href=""><img src="/assets/images/blog/insta1.jpg" alt="Dhyey Rathod Software Developer IN mumbai" /></a></li>
                                            <li><a href=""><img src="/assets/images/blog/insta2.jpg" alt="Dhyey Rathod Software Developer IN mumbai" /></a></li>
                                            <li><a href=""><img src="/assets/images/blog/insta3.jpg" alt="Dhyey Rathod Software Developer IN mumbai" /></a></li>
                                            <li><a href=""><img src="/assets/images/blog/insta4.jpg" alt="Dhyey Rathod Software Developer IN mumbai" /></a></li>
                                            <li><a href=""><img src="/assets/images/blog/insta5.jpg" alt="Dhyey Rathod Software Developer IN mumbai" /></a></li>
                                            <li><a href=""><img src="/assets/images/blog/insta6.jpg" alt="Dhyey Rathod Software Developer IN mumbai" /></a></li>
                                            <li><a href=""><img src="/assets/images/blog/insta7.jpg" alt="Dhyey Rathod Software Developer IN mumbai" /></a></li>
                                            <li><a href=""><img src="/assets/images/blog/insta8.jpg" alt="Dhyey Rathod Software Developer IN mumbai" /></a></li>
                                            <li><a href=""><img src="/assets/images/blog/insta9.jpg" alt="Dhyey Rathod Software Developer IN mumbai" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Servicedetails