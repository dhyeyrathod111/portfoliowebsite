import React, { useContext, useEffect } from 'react'
import Header from './components/Header'
import Breadcrumb from './components/Breadcrumb'
import Footer from './components/Footer'
import { AppContext } from '../controller/context'

const contactus = ({ information }) => {
    const datacontext = useContext(AppContext);
    useEffect(() => datacontext.menuClose(), []);
    return (
        <>
            <Header />
            <Breadcrumb page="contact US" />
            <section className="agy-contact-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12 d-flex">
                            <div className="agy-contact-info agy-info-bg">
                                <h4 className="agy-sub-heading">Contact Information</h4>
                                <div className="agy-conatact-section">
                                    <h4>Location -</h4>
                                    <div className="agy-contact-info-inner">
                                        <span>
                                            <svg version="1.1" id="Layer-1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" space="preserve">
                                                <g>
                                                    <g>
                                                        <path d="M256,0C161.896,0,85.333,76.563,85.333,170.667c0,28.25,7.063,56.26,20.49,81.104L246.667,506.5
															c1.875,3.396,5.448,5.5,9.333,5.5s7.458-2.104,9.333-5.5l140.896-254.813c13.375-24.76,20.438-52.771,20.438-81.021
															C426.667,76.563,350.104,0,256,0z M256,256c-47.052,0-85.333-38.281-85.333-85.333c0-47.052,38.281-85.333,85.333-85.333
															s85.333,38.281,85.333,85.333C341.333,217.719,303.052,256,256,256z" />
                                                    </g>
                                                </g>
                                            </svg>
                                        </span>
                                        23 King Street, 5th Road Avenue, California
                                    </div>
                                </div>
                                <div className="agy-conatact-section">
                                    <h4>Call Us -</h4>
                                    <div className="agy-contact-info-inner">
                                        <span>
                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512.006 512.006" space="preserve">
                                                <g>
                                                    <g>
                                                        <g>
                                                            <path d="M502.05,407.127l-56.761-37.844L394.83,335.65c-9.738-6.479-22.825-4.355-30.014,4.873l-31.223,40.139
															c-6.707,8.71-18.772,11.213-28.39,5.888c-21.186-11.785-46.239-22.881-101.517-78.23c-55.278-55.349-66.445-80.331-78.23-101.517
															c-5.325-9.618-2.822-21.683,5.888-28.389l40.139-31.223c9.227-7.188,11.352-20.275,4.873-30.014l-32.6-48.905L104.879,9.956
															C98.262,0.03,85.016-2.95,74.786,3.185L29.95,30.083C17.833,37.222,8.926,48.75,5.074,62.277
															C-7.187,106.98-9.659,205.593,148.381,363.633s256.644,155.56,301.347,143.298c13.527-3.851,25.055-12.758,32.194-24.876
															l26.898-44.835C514.956,426.989,511.976,413.744,502.05,407.127z" />
                                                            <path d="M291.309,79.447c82.842,0.092,149.977,67.226,150.069,150.069c0,4.875,3.952,8.828,8.828,8.828
															c4.875,0,8.828-3.952,8.828-8.828c-0.102-92.589-75.135-167.622-167.724-167.724c-4.875,0-8.828,3.952-8.828,8.828
															C282.481,75.494,286.433,79.447,291.309,79.447z" />
                                                            <path d="M291.309,132.412c53.603,0.063,97.04,43.501,97.103,97.103c0,4.875,3.952,8.828,8.828,8.828
															c4.875,0,8.828-3.952,8.828-8.828c-0.073-63.349-51.409-114.686-114.759-114.759c-4.875,0-8.828,3.952-8.828,8.828
															C282.481,128.46,286.433,132.412,291.309,132.412z" />
                                                            <path d="M291.309,185.378c24.365,0.029,44.109,19.773,44.138,44.138c0,4.875,3.952,8.828,8.828,8.828
															c4.875,0,8.828-3.952,8.828-8.828c-0.039-34.111-27.682-61.754-61.793-61.793c-4.875,0-8.828,3.952-8.828,8.828
															C282.481,181.426,286.433,185.378,291.309,185.378z" />
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                        </span>
                                        +1-2355-3345-5<br />+1-1245-1242-4
                                    </div>
                                </div>
                                <div className="agy-conatact-section">
                                    <h4>Mail Us -</h4>
                                    <div className="agy-contact-info-inner">
                                        <span>
                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" space="preserve">
                                                <g>
                                                    <g>
                                                        <path d="M467,61H45c-6.927,0-13.412,1.703-19.279,4.51L255,294.789l51.389-49.387c0,0,0.004-0.005,0.005-0.007
														c0.001-0.002,0.005-0.004,0.005-0.004L486.286,65.514C480.418,62.705,473.929,61,467,61z" />
                                                    </g>
                                                </g>
                                                <g>
                                                    <g>
                                                        <path d="M507.496,86.728L338.213,256.002L507.49,425.279c2.807-5.867,4.51-12.352,4.51-19.279V106
														C512,99.077,510.301,92.593,507.496,86.728z" />
                                                    </g>
                                                </g>
                                                <g>
                                                    <g>
                                                        <path d="M4.51,86.721C1.703,92.588,0,99.073,0,106v300c0,6.923,1.701,13.409,4.506,19.274L173.789,256L4.51,86.721z" />
                                                    </g>
                                                </g>
                                                <g>
                                                    <g>
                                                        <path d="M317.002,277.213l-51.396,49.393c-2.93,2.93-6.768,4.395-10.605,4.395s-7.676-1.465-10.605-4.395L195,277.211
														L25.714,446.486C31.582,449.295,38.071,451,45,451h422c6.927,0,13.412-1.703,19.279-4.51L317.002,277.213z" />
                                                    </g>
                                                </g>
                                            </svg>
                                        </span>
                                        dummy@example.com<br />dummy2@example.com
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                            <div className="agy-contact-form">
                                <h4 className="agy-sub-heading">Send Us A Messages</h4>
                                <form>
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                            <div className="agy-field-holder">
                                                <input type="text" className="agy-form-field require" placeholder="Enter Your Name" name="full-name" id="full-name" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                            <div className="agy-field-holder">
                                                <input type="text" className="agy-form-field require" placeholder="Enter Your Email" name="email" id="email" data-valid="email" data-error="Email should be valid." />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                            <div className="agy-field-holder">
                                                <input type="text" className="agy-form-field require" placeholder="Enter Your Subject" name="subject" id="subject" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                            <div className="agy-field-holder">
                                                <input type="text" className="agy-form-field" placeholder="Enter Your Phone" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                            <div className="agy-field-holder">
                                                <textarea placeholder="Enter Your Message..." className="agy-form-field require" name="message" id="message" defaultValue={""} />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                            <button type="button" className="agy-btn submitForm">Submit</button>
                                            <div className="response" />
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

export default contactus