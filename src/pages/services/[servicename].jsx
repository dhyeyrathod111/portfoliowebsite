import React, { useEffect, useContext } from 'react';
import { AppContext } from '../../controller/context'
import Header from '../components/Header';
import Head from "next/head";
import Footer from '../components/Footer';
import { useRouter } from 'next/router'
import Breadcrumb from '../components/Breadcrumb';
import information from '../../../information.json'
import Link from 'next/link';

export const config = { amp: true }

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
                <meta name="Description" content={props.serviceresponse.meta_description} />
                <meta name="keywords" content={props.serviceresponse.meta_keywords} />
                <meta property="og:url" content={information.base_url} />
                <meta property="og:site_name" content={information.name} />
                <meta property="article:publisher" content={information.base_url} />
                <meta property="og:image" content={information.base_url + "assets/images/dhyey.webp"} />
                <meta property="og:title" content={props.serviceresponse.name} />
                <meta property="og:description" content={props.serviceresponse.short_description} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <link rel="canonical" href={information.base_url + "services/" + props.serviceresponse.url_slug + "/"} />
            </Head>
            <Header />
            <Breadcrumb page={props.serviceresponse.name} />
            <section className="agy-blog-wrapper agy-blog-single-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-50">
                            <div className="agy-blog-section mb-0">
                                <div className="agy-blog-img">
                                    <a href=""><img className='w-100' src={props.serviceresponse.imageurl} alt="Dhyey Rathod Software Developer IN mumbai" /></a>
                                </div>

                                <div className="agy-blog-info">
                                    <ul>
                                        <li><img className="agy-user" src={information.base_url + "assets/images/dhyey.webp"} alt="Dhyey Rathod" /><span>Post By -</span><a className="agy-user-name" href="javascript:void(0);">Dhyey Rathod</a></li>
                                        <li><a href=""><i className="fa fa-calendar" />March 9, 2022</a></li>
                                        <li><a href=""><i className="fa fa-comments-o" />0 Comments</a></li>
                                    </ul>
                                </div>
                                <a href="javascript:void(0);" className="agy-blog-heading text-center" style={{ width: "100%" }}>
                                    {props.serviceresponse.name}
                                </a>
                                <div className="agy-blog-text">
                                    <div dangerouslySetInnerHTML={{ __html: props.serviceresponse.long_description }}></div>
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