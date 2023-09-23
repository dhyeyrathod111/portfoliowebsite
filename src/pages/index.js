import { useEffect } from 'react';
import Header from './components/Header'
import Footer from './components/Footer';
import Whyweare from './components/Whyweare';
export default function () {
	useEffect(() => {
		
		var testimonialSlider = new Swiper('.agy-testimonial-slider .swiper', {
			autoHeight: false,
			autoplay: false,
			loop: false,
			spaceBetween: 0,
			centeredSlides: false,
			speed: 1500,
			pagination: {
				el: '.agy-testimonial-slider .agy-bullets',
				clickable: true,
			},
			navigation: {
				nextEl: '.agy-testimonial-slider .swiper-button-next',
				prevEl: '.agy-testimonial-slider .swiper-button-prev',
			},
			slidesPerView: 3,
			breakpoints: {
				0: {
					slidesPerView: 1,
					spaceBetween: 0,
				},
				575: {
					slidesPerView: 1,
					spaceBetween: 10,
				},
				767: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1200: {
					slidesPerView: 3,
					spaceBetween: 30,
				},
			},
		});
	}, [])
	return (
		<>
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
							<img src="assets/images/shap/01.png" />
						</li>
						<li>
							<img src="assets/images/shap/02.png" />
						</li>
						<li>
							<img src="assets/images/shap/03.png" />
						</li>
						<li>
							<img src="assets/images/shap/04.png" />
						</li>
						<li>
							<img src="assets/images/shap/05.png" />
						</li>
						<li>
							<img src="assets/images/shap/06.png" />
						</li>
						<li>
							<img src="assets/images/shap/07.png" />
						</li>
						<li>
							<img src="assets/images/shap/08.png" />
						</li>
						<li>
							<img src="assets/images/shap/09.png" />
						</li>
						<li>
							<img src="assets/images/shap/10.png" />
						</li>
					</ul>
					<div className="container">
						<div className="row align-items-center">
							<div className="col-lg-6 col-md-6 col-sm-6 col-12">
								<div className="agy-banner-text">
									<div className="agy-banner-title ">
										<h4><span>I AM</span></h4>
									</div>
									<h1>Dhyey Rathod</h1>
									<p>Website , Web appliation , Android and IOS application Designer and developer in Mumbai. <br /> My Excellent Services That Will Help To Grow Your Bussiness.</p>
									<a href="#" className="agy-btn">View More</a>
								</div>
							</div>
							<div className="col-lg-6 col-md-6 col-sm-6 col-12">
								<div className="agy-banner-img text-center">
									<img src="assets/images/agency-banner-img.png" alt="agency" />
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="agy-about-wrapper agy-about-home" id="about">
					<div className="container">
						<div className="row align-items-center">
							<div className="col-lg-6 col-md-6 col-sm-12 col-12">
								<div className="agy-about-img relative">
									<img src="assets/images/agency-about-img.png" alt="agency" />
								</div>
							</div>
							<div className="col-lg-6 col-md-6 col-sm-12 col-12">
								<div className="agy-about-text">
									<h4 className="agy-sub-heading relative">About Us</h4>
									<h2>I Design and develop stunning Digital Products</h2>
									<p>Dhyey Rathod is a profoundly experienced and proficient organization for Corporate Website Development, Software Development, and Digital Marketing.</p>
									<div className="agy-divider" />
									<p>Being in the IT business for over 5 years now Dhyey Rathod has a strong team of skilled and experienced IT experts.</p>
									<ul className="agy-list-item">
										<li><a href="#"><span className="fa-solid fa-square-check" />On-time Delivery</a></li>
										<li><a href="#"><span className="fa-solid fa-square-check" />Growth Revenue</a></li>
										<li><a href="#"><span className="fa-solid fa-square-check" />Great Support </a></li>
										<li><a href="#"><span className="fa-solid fa-square-check" />Expert Team Work</a></li>
									</ul>
									<a href="#" className="agy-btn">Contact Us</a>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="agy-counter-wrapper overflow-hidden">
					<div className="container">
						<div className="row counter-holder">
							<div className="col-lg-3 col-md-3 col-sm-6 col-12" data-wow-delay="0.1s" style={{ visibility: 'visible', animationDelay: '0.1s' }}>
								<div className="counter-item text-center">
									<div className="agy-counter-icon"><img src="assets/images/svg/011-rating.svg" /></div>
									<h1><span className="count-no" data-count={26}>26</span><span>k+</span></h1>
									<p>Happy Customers</p>
								</div>
							</div>
							<div className="col-lg-3 col-md-3 col-sm-6 col-12" data-wow-delay="0.2s" style={{ visibility: 'visible', animationDelay: '0.2s' }}>
								<div className="counter-item text-center">
									<div className="agy-counter-icon"><img src="assets/images/svg/012-start.svg" /></div>
									<h1><span className="count-no" data-count={700}>700</span><span>+</span></h1>
									<p>Project Complete</p>
								</div>
							</div>
							<div className="col-lg-3 col-md-3 col-sm-6 col-12" data-wow-delay="0.3s" style={{ visibility: 'visible', animationDelay: '0.3s' }}>
								<div className="counter-item text-center">
									<div className="agy-counter-icon"><img src="assets/images/svg/013-appartment.svg" /></div>
									<h1><span className="count-no" data-count={200}>200</span><span>+</span></h1>
									<p>World Wide Branch</p>
								</div>
							</div>
							<div className="col-lg-3 col-md-3 col-sm-6 col-12" data-wow-delay="0.4s" style={{ visibility: 'visible', animationDelay: '0.4s' }}>
								<div className="counter-item text-center">
									<div className="agy-counter-icon"><img src="assets/images/svg/014-medal.svg" /></div>
									<h1><span className="count-no" data-count={6}>6</span><span>k+</span></h1>
									<p>Award Winner</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* <section className="agy-service-wrapper overflow-hidden">
					<div className="container">
						<div className="row">
							<div className="agy-heading-wrapper full-width">
								<div className="col-xl-6 col-lg-8 col-md-10 col-sm-12 col-12 offset-xl-3 offset-lg-2 offset-md-1 text-center">
									<h4>Exclusive Service</h4>
									<h2>Dhyey Rathod Creative Consulting</h2>
									<p>We Design and develop your dream product & develop a strong, enviable online presence for your brand & make the best of the latest web technologies.!</p>
								</div>
							</div>
							<div className="col-lg-4 col-md-6 col-sm-6 col-12">
								<div className="agy-service-section wow fadeInUp" data-wow-delay="0.1s">
									<ul className="agy-shap-list">
										<li><img src="assets/images/services/01.png" /></li>
										<li><img src="assets/images/services/02.png" /></li>
										<li><img src="assets/images/services/03.png" /></li>
										<li><img src="assets/images/services/04.png" /></li>
										<li><img src="assets/images/services/05.png" /></li>
										<li><img src="assets/images/services/06.png" /></li>
									</ul>
									<div className="agy-service-icon">
										<img src="assets/images/services/digital-marketing.svg" />
									</div>
									<div className="agy-service-text">
										<h4><a href="javascript:void(0);">Web Designing</a></h4>
										<p>I never forget that this is your website and so we strive to build it just the way you want it, listening carefully to your ideas and requirements to deliver a highly professional website. Every step of the way you are supported by a dedicated project manager.</p>
										<a href="javascript:void(0);" className="agy-link">
											<span className="agy-link-txt">Read More</span>
											<span className="agy-link-icon">
												<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" x={0} y={0} viewBox="0 0 512 512" xmlSpace="preserve"><g><g xmlns="http://www.w3.org/2000/svg"><g><path d="M506.134,241.843c-0.006-0.006-0.011-0.013-0.018-0.019l-104.504-104c-7.829-7.791-20.492-7.762-28.285,0.068    c-7.792,7.829-7.762,20.492,0.067,28.284L443.558,236H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h423.557    l-70.162,69.824c-7.829,7.792-7.859,20.455-0.067,28.284c7.793,7.831,20.457,7.858,28.285,0.068l104.504-104    c0.006-0.006,0.011-0.013,0.018-0.019C513.968,262.339,513.943,249.635,506.134,241.843z" /></g></g><g xmlns="http://www.w3.org/2000/svg" /><g xmlns="http://www.w3.org/2000/svg" /><g xmlns="http://www.w3.org/2000/svg" /><g xmlns="http://www.w3.org/2000/svg" /><g xmlns="http://www.w3.org/2000/svg" /><g xmlns="http://www.w3.org/2000/svg" /><g xmlns="http://www.w3.org/2000/svg" /><g xmlns="http://www.w3.org/2000/svg" /><g xmlns="http://www.w3.org/2000/svg" /><g xmlns="http://www.w3.org/2000/svg" /><g xmlns="http://www.w3.org/2000/svg" /><g xmlns="http://www.w3.org/2000/svg" /><g xmlns="http://www.w3.org/2000/svg" /><g xmlns="http://www.w3.org/2000/svg" /><g xmlns="http://www.w3.org/2000/svg" /></g></svg>
											</span>
										</a>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6 col-sm-6 col-12">
								<div className="agy-service-section wow fadeInUp" data-wow-delay="0.2s">
									<ul className="agy-shap-list">
										<li><img src="assets/images/services/01.png" /></li>
										<li><img src="assets/images/services/02.png" /></li>
										<li><img src="assets/images/services/03.png" /></li>
										<li><img src="assets/images/services/04.png" /></li>
										<li><img src="assets/images/services/05.png" /></li>
										<li><img src="assets/images/services/06.png" /></li>
									</ul>
									<div className="agy-service-icon">
										<img src="assets/images/services/support.svg" />
									</div>
									<div className="agy-service-text">
										<h4><a href="javascript:void(0);">E-commerce Development</a></h4>
										<p>
											We are provide you an easy setup for your online shop/store, which is entirely user-friendly, reliable and secure for credit card payments and processing through any chosen merchant accounts.
										</p>
										<a href="javascript:void(0);" className="agy-link">
											<span className="agy-link-txt">Read More</span>
											<span className="agy-link-icon">
												<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" x={0} y={0} viewBox="0 0 512 512" xmlSpace="preserve"><g><g xmlns="http://www.w3.org/2000/svg"><g><path d="M506.134,241.843c-0.006-0.006-0.011-0.013-0.018-0.019l-104.504-104c-7.829-7.791-20.492-7.762-28.285,0.068    c-7.792,7.829-7.762,20.492,0.067,28.284L443.558,236H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h423.557    l-70.162,69.824c-7.829,7.792-7.859,20.455-0.067,28.284c7.793,7.831,20.457,7.858,28.285,0.068l104.504-104    c0.006-0.006,0.011-0.013,0.018-0.019C513.968,262.339,513.943,249.635,506.134,241.843z" /></g></g><g xmlns="http://www.w3.org/2000/svg" /><g xmlns="http://www.w3.org/2000/svg" /><g xmlns="http://www.w3.org/2000/svg" /><g xmlns="http://www.w3.org/2000/svg" /><g xmlns="http://www.w3.org/2000/svg" /><g xmlns="http://www.w3.org/2000/svg" /><g xmlns="http://www.w3.org/2000/svg" /><g xmlns="http://www.w3.org/2000/svg" /><g xmlns="http://www.w3.org/2000/svg" /><g xmlns="http://www.w3.org/2000/svg" /><g xmlns="http://www.w3.org/2000/svg" /><g xmlns="http://www.w3.org/2000/svg" /><g xmlns="http://www.w3.org/2000/svg" /><g xmlns="http://www.w3.org/2000/svg" /><g xmlns="http://www.w3.org/2000/svg" /></g></svg>
											</span>
										</a>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6 col-sm-6 col-12">
								<div className="agy-service-section wow fadeInUp" data-wow-delay="0.3s">
									<ul className="agy-shap-list">
										<li><img src="assets/images/services/01.png" /></li>
										<li><img src="assets/images/services/02.png" /></li>
										<li><img src="assets/images/services/03.png" /></li>
										<li><img src="assets/images/services/04.png" /></li>
										<li><img src="assets/images/services/05.png" /></li>
										<li><img src="assets/images/services/06.png" /></li>
									</ul>
									<div className="agy-service-icon">
										<img src="assets/images/services/consultancy.svg" />
									</div>
									<div className="agy-service-text">
										<h4><a href="javascript:void(0);">Web Application</a></h4>
										<p>
											I am committed to helping our clients by using the latest web technology with an objective to help you gain income, improve performance, reduce maintenance costs, enhance productivity and boost end user satisfaction.
										</p>
										<a href="javascript:void(0);" className="agy-link">
											<span className="agy-link-txt">Read More</span>
											<span className="agy-link-icon">
												<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" x={0} y={0} viewBox="0 0 512 512" xmlSpace="preserve"><g><g xmlns="http://www.w3.org/2000/svg"><g><path d="M506.134,241.843c-0.006-0.006-0.011-0.013-0.018-0.019l-104.504-104c-7.829-7.791-20.492-7.762-28.285,0.068    c-7.792,7.829-7.762,20.492,0.067,28.284L443.558,236H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h423.557    l-70.162,69.824c-7.829,7.792-7.859,20.455-0.067,28.284c7.793,7.831,20.457,7.858,28.285,0.068l104.504-104    c0.006-0.006,0.011-0.013,0.018-0.019C513.968,262.339,513.943,249.635,506.134,241.843z" /></g></g><g xmlns="http://www.w3.org/2000/svg" /><g xmlns="http://www.w3.org/2000/svg" /><g xmlns="http://www.w3.org/2000/svg" /><g xmlns="http://www.w3.org/2000/svg" /><g xmlns="http://www.w3.org/2000/svg" /><g xmlns="http://www.w3.org/2000/svg" /><g xmlns="http://www.w3.org/2000/svg" /><g xmlns="http://www.w3.org/2000/svg" /><g xmlns="http://www.w3.org/2000/svg" /><g xmlns="http://www.w3.org/2000/svg" /><g xmlns="http://www.w3.org/2000/svg" /><g xmlns="http://www.w3.org/2000/svg" /><g xmlns="http://www.w3.org/2000/svg" /><g xmlns="http://www.w3.org/2000/svg" /><g xmlns="http://www.w3.org/2000/svg" /></g></svg>
											</span>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section> */}

				{/* <section className="agy-testimonial-wrapper w-100">
					<div className="container">
						<div className="row">
							<div className="agy-white-title w-100">
								<div className="text-center font-weight-bold">
									<h2><i>Any fool can write code that a computer can understand. Good programmers write code that humans can understand.</i></h2>
								</div>
							</div>
						</div>
					</div>
				</section> */}

				<Whyweare />

				{/* <section className="agy-quote-wrapper overflow-hidden">
					<div className="container">
						<div className="row align-items-center">
							<div className="col-lg-6 col-md-6 col-sm-12 col-12 wow fadeInLeft" data-wow-delay="0.10ms">
								<div className="agy-quote-img relative text-center mb-30">
									<img src="assets/images/agency-quote.png" alt="agency" />
								</div>
							</div>
							<div className="col-lg-6 col-md-6 col-sm-12 col-12 mb-30">
								<div className="agy-quote-text">
									<h2>We Design to take the shape of Your Business Want to Know about us…?</h2>
									<p>Our aim is to provide customers to our clients. Our digital marketing strategies and related services will give a whole new look to your business and imagine how great would it be if people recognize your work throughout the internet and social media. We believe in working with you starting right from the ground level to the highest of platforms where you will be listed on page-one organic results and would rule all over the Internet.</p>
									<a href="javascript:void(0);" className="agy-btn white">Reqest A Quote</a>
									<h4>Please Feel Free To Contact Me For Any Clarification</h4>
									<h1><a href="tel:+91 9967313968" className="agy-quate-no">+(91) 9967313968</a></h1>
								</div>
							</div>
						</div>
					</div>
				</section> */}

				{/* <section className="agy-about-wrapper about-page">
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
										<img src="https://www.creativeitinstitute.com/images/course/course_1663052056.jpg" alt="agency" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</section> */}

				{/* <section className="agy-appointment-wrapper overflow-hidden">
					<div className="container">
						<div className="row align-items-center">
							<div className="col-lg-6 col-md-6 col-sm-12 col-12 text-center wow fadeInUp" data-wow-delay="0.10ms">
								<div className="agy-appointment-img">
									<img src="assets/images/agency-appointment-img.png" alt="agency" />
								</div>
							</div>
							<div className="col-lg-6 col-md-6 col-sm-12 col-12">
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
				</section> */}
			</main>
			<Footer />



		</>
	)
}
