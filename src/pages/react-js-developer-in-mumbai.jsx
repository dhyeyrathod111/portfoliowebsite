import React, { useEffect, useContext } from 'react';
import { AppContext } from './../controller/context'
import Header from './components/Header';
import Head from "next/head";
import Footer from './components/Footer';
import Breadcrumb from './components/Breadcrumb';
import information from './../../information.json'
import Link from 'next/link';


export const getServerSideProps = async (context) => {
    const apidata = await fetch(information.base_url + '/api/serviceapi/react-js-developer-in-mumbai')
    const formateddata = await apidata.json();
    return { props: formateddata }
}

const Servicedetails = props => {
    const datacontext = useContext(AppContext);
    useEffect(() => {
        datacontext.menuClose()
    }, [])

    return (
        <>
            <Head>
                <title>React JS Developer In Mumbai | Dhyey Rathod</title>
                <meta name="description" content="ReactJs Developer in Mumbai. Build websites and apps with Dhyey Rathod." />
                <meta property="og:url" content="https://dhyeyrathod.vercel.app/react-js-developer-in-mumbai/" />
                <meta property="og:site_name" content="Dhyey Rathod" />
                <meta property="og:image" content={information.base_url + "assets/images/dhyey_icon.webp"} />
                <meta property="og:title" content="React JS Developer In Mumbai | Dhyey Rathod" />
                <meta property="og:description" content="ReactJs Developer in Mumbai. Build websites and apps with Dhyey Rathod." />
                <meta property="og:image:width" content="500" />
                <meta property="og:image:height" content="200" />
                <link rel="canonical" href="https://dhyeyrathod.vercel.app/react-js-developer-in-mumbai/" />
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
                                    <Link href="/"><img className='w-100' src={props.serviceresponse.imageurl} alt="Dhyey Rathod Software Developer IN mumbai" /></Link>
                                </div>

                                <div className="agy-blog-info">
                                    <ul>
                                        <li><img className="agy-user" src={information.base_url + "assets/images/dhyey.webp"} alt="Dhyey Rathod" /><span>Post By -</span><a className="agy-user-name" href="/">Dhyey Rathod</a></li>
                                        <li><Link href="/"><i className="fa fa-calendar" />March 9, 2022</Link></li>
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
            <Footer />
        </>
    )
}

export const config = {
    unstable_runtimeJS: false,
};

export default Servicedetails