import { useContext, useEffect } from 'react';
import Image from 'next/image'
import Head from "next/head";
import Header from './components/Header'
import Footer from './components/Footer';
import Whyweare from './components/Whyweare';
import Link from 'next/link'
import { AppContext } from '../controller/context'
import information from '../../information.json'


export const getServerSideProps = async (context) => {
	const apidata = await fetch(information.base_url + '/api/hello/')
	const formateddata = await apidata.json();
	return { props: formateddata }
}

export default function (props) {
	const datacontext = useContext(AppContext);
	useEffect(() => {
		datacontext.menuClose();
	}, [])
	return (
		<>
			<Head>
				<title>Website Developer and Designer in Mumbai | Dhyey Rathod</title>
				<meta name="description" content="Dhyey Rathod is a web designer and developer based in Mumbai,India. My expertise include web development, mobile app development, ecommerce, SEO and digital marketing." />
				<meta property="og:url" content={information.base_url} />
				<meta property="og:site_name" content="Dhyey Rathod" />
				<meta property="og:image" content={information.base_url + "assets/images/dhyey.webp"} />
				<meta property="og:title" content="Website Developer and Designer in Mumbai | Dhyey Rathod" />
				<meta property="og:description" content="Dhyey Rathod is a web designer and developer based in Mumbai,India. My expertise include web development, mobile app development, ecommerce, SEO and digital marketing." />
				<meta property="og:image:width" content="1200" />
				<meta property="og:image:height" content="630" />
				<link rel="canonical" href={information.base_url} />
			</Head>
			<Header />
			<main className="agy-main-wrapper">
				<section className="agy-banner-wrapper">
					<ul className="agy-dots-animation">
						<li />
						<li />
						<li />
						<li />
						<li />
						<li />
					</ul>
					<ul className="agy-img-animation">
						<li>
							<Image width="10" height="10" alt="Dhyey Rathod Software Developer IN mumbai" src="/assets/images/shap/01.png" />
						</li>
						<li>
							<Image width="10" height="10" alt="Dhyey Rathod Software Developer IN mumbai" src="/assets/images/shap/02.png" />
						</li>
						<li>
							<Image width="10" height="10" alt="Dhyey Rathod Software Developer IN mumbai" src="/assets/images/shap/03.png" />
						</li>
						<li>
							<Image width="10" height="10" alt="Dhyey Rathod Software Developer IN mumbai" src="/assets/images/shap/04.png" />
						</li>
						<li>
							<Image width="10" height="10" alt="Dhyey Rathod Software Developer IN mumbai" src="/assets/images/shap/05.png" />
						</li>
						<li>
							<Image width="10" height="10" alt="Dhyey Rathod Software Developer IN mumbai" src="/assets/images/shap/06.png" />
						</li>
						<li>
							<Image width="10" height="10" alt="Dhyey Rathod Software Developer IN mumbai" src="/assets/images/shap/07.png" />
						</li>
						<li>
							<Image width="10" height="10" alt="Dhyey Rathod Software Developer IN mumbai" src="/assets/images/shap/08.png" />
						</li>
						<li>
							<Image width="10" height="10" alt="Dhyey Rathod Software Developer IN mumbai" src="/assets/images/shap/09.png" />
						</li>
						<li>
							<Image width="10" height="10" alt="Dhyey Rathod Software Developer IN mumbai" src="/assets/images/shap/10.png" />
						</li>
					</ul>
					<div className="container">
						<div className="row align-items-center">
							<div className="col-lg-12 col-md-12 col-sm-12 col-12">
								<div className="agy-banner-text text-center">
									<div className="agy-banner-title ">
										<h4><span>I AM</span></h4>
									</div>
									<h1 className='text-danger'>{information.name}</h1>
									<p>Website , Web appliation , Android and IOS application Designer and developer in Mumbai. <br />
										<span className='text-danger'>My Excellent Services That Will Help To Grow Your Bussiness.</span><br />
										Empowering your Business , Growth AND Vision With Custom Software Solution.</p>
									<p></p>
									<p></p>
									<Link href="/aboutus" className="agy-btn">View More</Link>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="agy-about-wrapper agy-about-home" id="about">
					<div className="container">
						<div className="row align-items-center">
							<div className="col-lg-12 col-md-12 col-sm-12 col-12">
								<div className="agy-about-text">
									{/* <h4 className="agy-sub-heading relative">About Us</h4> */}
									<h2 className='text-center'>Best Website Designer and Developer In Mumbai</h2>
									<p style={{ textIndent: "50px" }}>Dhyey Rathod is a profoundly experienced and proficient for Corporate Website Development, Software Development, and Digital Marketing.</p>
									<p style={{ textIndent: "50px" }}>I provide my clients with the <b><Link href="/">best web design and development services available In Mumbai</Link></b>. The website and software developers at Code Lab allow us to collaborate with some of the top companies in the field, who can integrate new technologies into your company while still preserving a smooth workflow.</p>
									<p style={{ textIndent: "50px" }} className='mb-2'>I am provides a range of digital marketing services to boost your company's expansion and brand awareness in a cutthroat marketplace. We have a keep eye on every facet of the competitive market and its constant changes since we work in a variety of digital marketing sectors, including software development, mobile application development, web application development, web designing, and much more beyond your expectations. We thus go hand in hand to make sure your company adopts everything necessary to soar to new heights.</p>
									<p style={{ textIndent: "50px" }} className='mb-2'>Rather of having a leader, our team members guide each other to consistently surpass their own personal bests. We command and execute the newest innovations and applications that are in style to satisfy the distinct needs of different market investors and business owners. We are very pleased to present ourselves as one of the top, successful, respectable, and trustworthy information technology organizations, with expertise in technology innovation.</p>
									<p style={{ textIndent: "50px" }} className='mb-2'>We have extensive knowledge and proficiency in a variety of information technology fields, and we execute digital media technologies quickly and with precision. Receiving positive feedback from both our past and present clientele makes us happy as well. We would be delighted if you could also attend and express your gratitude to us for our exceptional assistance with your business transaction. In the broad field of digital marketing, we provide specialist solutions ranging from creating unique websites to placing them at the top of search engine results pages. Your quest is over if you're seeking for a visually appealing website designer and layout maker with a ton of valuable information. Our company, which leads India in IT solutions, can assist you in maintaining the expansion of your company from the ground up.</p>

									{/* <Link href="/contactus" className="agy-btn">Contact Us</Link> */}
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="agy-quote-wrapper overflow-hidden">
					<div className="container">
						<div className="row align-items-center">
							<div className="col-lg-6 col-md-6 col-sm-12 col-12" data-wow-delay="0.10ms">
								<div className="agy-quote-img relative text-center mb-30">
									<img alt="Dhyey Rathod Software Developer IN mumbai" src="assets/images/dhyey.webp" />
								</div>
							</div>
							<div className="col-lg-6 col-md-6 col-sm-12 col-12 mb-30">
								<div className="agy-quote-text">
									<h2>We Design to take the shape of Your Business Want to Know about us…?</h2>
									<p style={{ textIndent: "50px" }}>Our aim is to provide customers to our clients. Our digital marketing strategies and related services will give a whole new look to your business and imagine how great would it be if people recognize your work throughout the internet and social media. We believe in working with you starting right from the ground level to the highest of platforms where you will be listed on page-one organic results and would rule all over the Internet.</p>
									<a href="#" className="agy-btn white">Reqest A Quote</a>
									<h4>Please Feel Free To Contact Me For Any Clarification</h4>
									<h1><a href="tel:+91 9967313968" className="agy-quate-no">+(91) 9967313968</a></h1>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="agy-service-wrapper overflow-hidden">
					<div className="container">
						<div className="row">
							<div className="agy-heading-wrapper full-width">
								<div className="col-md-12 text-center">
									<h2>We Don't Just Commit; We Fulfill Expectations!</h2>
								</div>
							</div>
							<div className="col-md-4">
								<div className="agy-service-section" data-wow-delay="0.1s">
									<ul className="agy-shap-list">
										<li><img src="assets/images/services/01.png" /></li>
										<li><img src="assets/images/services/02.png" /></li>
										<li><img src="assets/images/services/03.png" /></li>
										<li><img src="assets/images/services/04.png" /></li>
										<li><img src="assets/images/services/05.png" /></li>
										<li><img src="assets/images/services/06.png" /></li>
									</ul>
									<div className="agy-service-text">
										<h4><Link href="/services/reactjs-development-in-mumbai/">Web Designing</Link></h4>
										<p style={{ textAlign: "justify" }}>Use our website design services right now to have an amazing online presence for your company, goods, or services. Our experts collaborate with you to exceed your exacting expectations. Let potential customers engage with your brand in a favorable way, hold onto your current clientele, and maintain raising your market worth. Our bespoke design and development services might be a real asset for your business's enhanced online visibility.</p>
									</div>
								</div>
							</div>

							<div className="col-md-4">
								<div className="agy-service-section" data-wow-delay="0.1s">
									<ul className="agy-shap-list">
										<li><img src="assets/images/services/01.png" /></li>
										<li><img src="assets/images/services/02.png" /></li>
										<li><img src="assets/images/services/03.png" /></li>
										<li><img src="assets/images/services/04.png" /></li>
										<li><img src="assets/images/services/05.png" /></li>
										<li><img src="assets/images/services/06.png" /></li>
									</ul>
									<div className="agy-service-text">
										<h4><Link href="/services/static-website-development/">Web Development</Link></h4>
										<p style={{ textAlign: "justify" }}>A gateway with easy accessibility, an intuitive layout, easy use, and creative UI/UX will eventually be necessary if you want to draw in prospective target audience members. With the assistance of skilled and competent staff, Vyapar Infotech strives to realize your dream company website. In order to beat the competition and gain market share, we assist your company in using the newest technology and maximizing intelligent applications.</p>
									</div>
								</div>
							</div>
							<div className="col-md-4">
								<div className="agy-service-section" data-wow-delay="0.1s">
									<ul className="agy-shap-list">
										<li><img src="assets/images/services/01.png" /></li>
										<li><img src="assets/images/services/02.png" /></li>
										<li><img src="assets/images/services/03.png" /></li>
										<li><img src="assets/images/services/04.png" /></li>
										<li><img src="assets/images/services/05.png" /></li>
										<li><img src="assets/images/services/06.png" /></li>
									</ul>
									<div className="agy-service-text">
										<h4><Link href="/services/static-website-development/">Digital Marketing</Link></h4>
										<p style={{ textAlign: "justify" }}>We have extensive knowledge in every pertinent sector and are experts in the field of digital marketing. We multitask to guarantee your business has a portion of digital excellence through social media management, mobile advertising, SEO, and content management. Our solutions yield revolutionary development and a well-organized management structure.</p>
									</div>
								</div>
							</div>
							<div className="col-md-4">
								<div className="agy-service-section" data-wow-delay="0.1s">
									<ul className="agy-shap-list">
										<li><img src="assets/images/services/01.png" /></li>
										<li><img src="assets/images/services/02.png" /></li>
										<li><img src="assets/images/services/03.png" /></li>
										<li><img src="assets/images/services/04.png" /></li>
										<li><img src="assets/images/services/05.png" /></li>
										<li><img src="assets/images/services/06.png" /></li>
									</ul>
									<div className="agy-service-text">
										<h4><Link href="/services/static-website-development/">Search Engine Optimization</Link></h4>
										<p style={{ textAlign: "justify" }}>Giving prospective customers the information they want is possible with the help of Vyapar Infotech's invaluable information. SEO raises the profile of your sector while increasing brand visibility and traffic. SEO will make it possible for your market to find your website on search engines and support the natural growth of your business with an established strategy, a better return on investment, a higher ranking, and more money. Vyapar Infotech, a strategically oriented Search Engine Optimization company in India</p>
									</div>
								</div>
							</div>
							<div className="col-md-4">
								<div className="agy-service-section" data-wow-delay="0.1s">
									<ul className="agy-shap-list">
										<li><img src="assets/images/services/01.png" /></li>
										<li><img src="assets/images/services/02.png" /></li>
										<li><img src="assets/images/services/03.png" /></li>
										<li><img src="assets/images/services/04.png" /></li>
										<li><img src="assets/images/services/05.png" /></li>
										<li><img src="assets/images/services/06.png" /></li>
									</ul>
									<div className="agy-service-text">
										<h4><Link href="/services/static-website-development/">Social Media Marketing</Link></h4>
										<p style={{ textAlign: "justify" }}>If you are unaware of the nuances of marketing, you can meet your aspirations and objectives by reaching out to Vyapar Infotech, an effective social media management company in India. To generate your website's traffic and spread awareness of your brand, we use platforms like Instagram, Facebook, Linkedin, YouTube, and so on. We commit to providing you with all-encompassing solutions to managing your social networks because we deliver every feature a corporation may potentially require from an online community.</p>
									</div>
								</div>
							</div>
							<div className="col-md-4">
								<div className="agy-service-section" data-wow-delay="0.1s">
									<ul className="agy-shap-list">
										<li><img src="assets/images/services/01.png" /></li>
										<li><img src="assets/images/services/02.png" /></li>
										<li><img src="assets/images/services/03.png" /></li>
										<li><img src="assets/images/services/04.png" /></li>
										<li><img src="assets/images/services/05.png" /></li>
										<li><img src="assets/images/services/06.png" /></li>
									</ul>
									<div className="agy-service-text">
										<h4><Link href="/services/static-website-development/">Google Map Listing</Link></h4>
										<p style={{ textAlign: "justify" }}>If you want your business to stand out and be more easily available to local clients, GMB optimization is essential. Customers are more likely to make a purchase from a service after finding it through its Google My Business page. Dhyey Rathod is a full-service Google My Business Management Company that uses real local SEO tactics, offers a comprehensive report and produces results you can trust for the online promotion of your goods.</p>
									</div>
								</div>
							</div>


						</div>
					</div>
				</section>

				<section className="agy-testimonial-wrapper w-100">
					<div className="container">
						<div className="row">
							<div className="agy-white-title w-100">
								<div className="text-center font-weight-bold">
									<h2><i>Any fool can write code that a computer can understand. Good programmers write code that humans can understand.</i></h2>
								</div>
							</div>
						</div>
					</div>
				</section>

				<Whyweare />

				<section className="agy-counter-wrapper overflow-hidden">
					<div className="container">
						<div className="row counter-holder">
							<div className="col-md-4" data-wow-delay="0.1s" style={{ visibility: 'visible', animationDelay: '0.1s' }}>
								<div className="counter-item text-center">
									<div className="agy-counter-icon"><img alt="Dhyey Rathod Software Developer IN mumbai" src="assets/images/svg/011-rating.svg" /></div>
									<h1><span className="count-no" data-count={26}>26</span></h1>
									<p>Happy Customers</p>
								</div>
							</div>
							<div className="col-md-4" data-wow-delay="0.2s" style={{ visibility: 'visible', animationDelay: '0.2s' }}>
								<div className="counter-item text-center">
									<div className="agy-counter-icon"><img alt="Dhyey Rathod Software Developer IN mumbai" src="assets/images/svg/012-start.svg" /></div>
									<h1><span className="count-no" data-count={70}>70</span></h1>
									<p>Project Complete</p>
								</div>
							</div>
							<div className="col-md-4" data-wow-delay="0.4s" style={{ visibility: 'visible', animationDelay: '0.4s' }}>
								<div className="counter-item text-center">
									<div className="agy-counter-icon"><img alt="Dhyey Rathod Software Developer IN mumbai" src="assets/images/svg/014-medal.svg" /></div>
									<h1><span className="count-no" data-count={1}>1</span></h1>
									<p>Award Winner</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="agy-about-wrapper about-page">
					<div className="container">
						<div className="row align-items-center">
							<div className='text-center mb-4'>
								<h2>Website Developer In Mumbai</h2>
							</div>
							<div className="col-lg-6 col-md-6 col-sm-12 col-12">
								<div className="agy-about-text">
									<p>Website design, development, and maintenance are together referred to as "website development." Numerous technical skills, programming languages, design concepts, and content production are required to make a website come to life online. It uses content management systems regularly to make it simple to update the content, and it involves both front-end and back-end development to construct the user interface and server-side functionality.</p>
									<div className="agy-divider" />
									<p>While e-commerce development focuses on developing online storefronts, database administration makes sure that data is saved and accessed efficiently. Web security measures protect user data, and performance is ensured via testing and maintenance. Website creation integrates technological know-how, creative design, and effective performance to provide businesses, organizations, or individuals an online presence. Companies may communicate with clients online and access their.</p>
								</div>
							</div>
							<div className="col-lg-6 col-md-6 col-sm-12 col-12 ">
								<div className="agy-about-img relative">
									<div>
										<img alt="Dhyey Rathod Software Developer IN mumbai" src="assets/images/development.jpg" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
			<Footer />



		</>
	)
}
