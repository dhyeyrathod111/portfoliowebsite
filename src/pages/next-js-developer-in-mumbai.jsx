
import React, { useEffect, useContext } from 'react';
import { AppContext } from '../controller/context'
import Header from './components/Header';
import Head from "next/head";
import Footer from './components/Footer';
import Breadcrumb from './components/Breadcrumb';
import information from '../../information.json'
import Link from 'next/link';

export const getServerSideProps = async (context) => {
    const apidata = await fetch(information.base_url + '/api/serviceapi/next-js-developer-in-mumbai')
    const formateddata = await apidata.json();
    return { props: formateddata }
}

const nextjs = props => {
    const datacontext = useContext(AppContext);
    useEffect(() => {
        datacontext.menuClose()
    }, [])
    return (
        <>
            <Head>
                <title>{props.serviceresponse.name + " | Dhyey Rathod"}</title>
                <meta name="Description" content={props.serviceresponse.meta_description} />
                <meta name="keywords" content={props.serviceresponse.meta_keywords} />
                <meta property="og:url" content={information.base_url} />
                <meta property="og:site_name" content={information.name} />
                <meta property="og:image" content={information.base_url + "assets/images/dhyey_icon.webp"} />
                <meta property="og:title" content={props.serviceresponse.name} />
                <meta property="og:description" content={props.serviceresponse.short_description} />
                <meta property="og:image:width" content="500" />
                <meta property="og:image:height" content="200" />
                <link rel="canonical" href={information.base_url + "/" + props.serviceresponse.url_slug + "/"} />
                <link rel="icon" type="image/x-icon" href={information.base_url + "assets/images/dhyey_icon.webp"} />
            </Head>
            <Header />
            <Breadcrumb page={props.serviceresponse.name} />
            <section className="agy-blog-wrapper agy-blog-single-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-50">
                            <div className="agy-blog-section mb-0">
                                <div className="agy-blog-img">
                                    <Link href="/"><img className='w-100' src={props.serviceresponse.imageurl} alt="Next Js Developer In MUmbai - Dhyey Rathod" /></Link>
                                </div>
                                <div className="agy-blog-info">
                                    <ul>
                                        <li>
                                            <Link className="agy-user-name" href="/">
                                                <img className="agy-user" src={information.base_url + "assets/images/dhyey_icon.webp"} alt="Best Next Js Developer In MUmbai - Dhyey Rathod" /><span>Post By - </span>Dhyey Rathod
                                            </Link>
                                        </li>
                                        <li><Link href="/"><i className="fa fa-calendar" />May 18, 2024</Link></li>
                                    </ul>
                                </div>

                                <Link href="/" className="agy-blog-heading text-center" style={{ width: "100%" }}>
                                    {props.serviceresponse.name}
                                </Link>
                                <div className="agy-blog-text">
                                    <div dangerouslySetInnerHTML={{ __html: props.serviceresponse.long_description }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="agy-appointment-wrapper overflow-hidden">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-12">
                            <div className="agy-appointment-form">
                                <form>
                                    <h4>Make An Appointment</h4>
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                            <div className="form-group mb-30">
                                                <input type="text" placeholder="Name" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                            <div className="form-group mb-30">
                                                <input type="text" placeholder="Email" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                            <div className="form-group mb-30">
                                                <input type="text" placeholder="Subject" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                            <div className="form-group mb-30">
                                                <input type="text" placeholder="Address" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                            <div className="form-group mb-0">
                                                <textarea placeholder="Work Description That You Want To Do..." defaultValue={""} />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                            <a href="javascript:void(0);" className="agy-btn white">Submit</a>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default nextjs;