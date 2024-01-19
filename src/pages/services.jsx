import React, { useEffect, useContext } from 'react'
import Header from './components/Header'
import Breadcrumb from './components/Breadcrumb'
import Footer from './components/Footer'
import { AppContext } from '../controller/context'
import Link from 'next/link';
import information from '../../information.json'
import Head from "next/head";

export const getServerSideProps = async (context) => {
    const apidata = await fetch(information.base_url + '/api/hello/')
    const formateddata = await apidata.json();
    return { props: formateddata }
}

const services = props => {
    const datacontext = useContext(AppContext);
    useEffect(() => {
        datacontext.menuClose()
    }, []);
    return (
        <>
            <Head>
                <title>Services - Website Developer in Mumbai | Dhyey Rathod</title>
                <meta name="description" content="Dhyey Rathod is a web designer and developer based in Mumbai,India. My expertise include web development, mobile app development, ecommerce, SEO and digital marketing." />
                <meta name="apple-mobile-web-app-title" content="Website Developer and Designer in Mumbai | Dhyey Rathod" />
                <meta property="og:url" content={information.base_url + "/services/"} />
                <meta property="og:site_name" content="Dhyey Rathod" />
                <meta property="article:publisher" content="https://www.facebook.com/dhyey.rathod.98" />
                <meta property="og:image" content={information.base_url + "assets/images/dhyey.webp"} />
                <meta property="og:title" content="Services - Website Developer in Mumbai | Dhyey Rathod" />
                <meta property="og:description" content="Dhyey Rathod is a web designer and developer based in Mumbai,India. My expertise include web development, mobile app development, ecommerce, SEO and digital marketing." />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <link rel="canonical" href={information.base_url + "services/"} />
            </Head>
            <Header />
            <Breadcrumb page={"Services"} />
            <section className="agy-service-wrapper overflow-hidden">
                <div className="container">
                    <div className="row">
                        <div className="agy-heading-wrapper full-width">
                            <div className="col-md-12 text-center">
                                <h2>Website And Web Aplicaton Development Services</h2>
                                <p>Dhyey Rathod uses cutting-edge technologies to impress our clients with excellent results. We have a lengthy history of effectively creating and completing IT projects. At a fraction of the cost, we offer mobile apps and websites with premium user interfaces. Dhyey Rathod technology places an important priority on achieving a high level of client satisfaction and maintaining the viability of projects from our current prospects; as a result, we uphold a standard of excellence in our services and commit to an on-time delivery philosophy.</p>
                            </div>
                        </div>

                        {
                            props.serviceresponse.map((oneservice, index) => {
                                return (
                                    <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={oneservice._id}>
                                        <div className="agy-service-section" data-wow-delay="0.1s" style={{ visibility: 'visible', animationDelay: '0.1s' }}>
                                            <ul className="agy-shap-list">
                                                <li><img alt="Dhyey Rathod Software Developer IN mumbai" src={information.base_url + "assets/images/services/01.png"} /></li>
                                                <li><img alt="Dhyey Rathod Software Developer IN mumbai" src={information.base_url + "assets/images/services/02.png"} /></li>
                                                <li><img alt="Dhyey Rathod Software Developer IN mumbai" src={information.base_url + "assets/images/services/03.png"} /></li>
                                                <li><img alt="Dhyey Rathod Software Developer IN mumbai" src={information.base_url + "assets/images/services/04.png"} /></li>
                                                <li><img alt="Dhyey Rathod Software Developer IN mumbai" src={information.base_url + "assets/images/services/05.png"} /></li>
                                                <li><img alt="Dhyey Rathod Software Developer IN mumbai" src={information.base_url + "assets/images/services/06.png"} /></li>
                                            </ul>
                                            <div className="agy-service-icon">
                                                <img alt="Dhyey Rathod Software Developer IN mumbai" src={information.base_url + "assets/images/services/strategy-research.svg"} />
                                            </div>
                                            <div className="agy-service-text">
                                                <Link href={information.base_url + "services/" + oneservice.url_slug}>
                                                    <h4>{oneservice.name}</h4>
                                                </Link>
                                                <p>{oneservice.short_description}</p>
                                                <Link href={information.base_url + "services/" + oneservice.url_slug} className="agy-link">
                                                    <span>Read More</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default services