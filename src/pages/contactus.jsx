import React, { useContext, useEffect, useState } from 'react'
import Header from './components/Header'
import Breadcrumb from './components/Breadcrumb'
import Footer from './components/Footer'
import { AppContext } from '../controller/context';
import { Resend } from 'resend';

const contactus = ({ information }) => {

    const [userpost, setUserpost] = useState({
        name: '', email: '', subject: '', phone: '', message: ''
    })

    const submitHandler = async event => {
        event.preventDefault();

        const resend = new Resend('re_7aySBTWL_B1g4JE76qWWq7Fk4WQiWnSc6');

        try {
            const data = await resend.emails.send({
                from: 'Dhyey <prince.rathod111@gmail.com>',
                to: ['dhyeyrathod111@gmail.com'],
                subject: 'Hello World',
                html: '<strong>It works!</strong>'
            });

            console.log(data);
        } catch (error) {
            console.error(error);
        }

    }

    const datacontext = useContext(AppContext);
    useEffect(() => datacontext.menuClose(), []);
    return (
        <>
            <Header />
            <Breadcrumb page="contact US" />
            <section className="agy-contact-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="agy-contact-form">
                                <h4 className="agy-sub-heading">Send Us A Messages</h4>
                                <form onSubmit={submitHandler}>
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                            <div className="agy-field-holder">
                                                <input type="text"
                                                    onChange={event => setUserpost({ ...userpost, name: event.target.value })}
                                                    className="agy-form-field require"
                                                    value={userpost.name}
                                                    placeholder="Enter Your Name"
                                                    name="full-name"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                            <div className="agy-field-holder">
                                                <input type="text"
                                                    className="agy-form-field require"
                                                    placeholder="Enter Your Email"
                                                    name="email"
                                                    value={userpost.email}
                                                    onChange={event => setUserpost({ ...userpost, email: event.target.value })}
                                                    data-valid="email"
                                                    data-error="Email should be valid."
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                            <div className="agy-field-holder">
                                                <input type="text"
                                                    className="agy-form-field require"
                                                    placeholder="Enter Your Subject"
                                                    value={userpost.subject}
                                                    onChange={event => setUserpost({ ...userpost, subject: event.target.value })}
                                                    name="subject"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                            <div className="agy-field-holder">
                                                <input type="text" className="agy-form-field" placeholder="Enter Your Phone"
                                                    value={userpost.phone}
                                                    onChange={event => setUserpost({ ...userpost, phone: event.target.value })}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                            <div className="agy-field-holder">
                                                <textarea placeholder="Enter Your Message..."
                                                    className="agy-form-field require"
                                                    value={userpost.message}
                                                    onChange={event => setUserpost({ ...userpost, message: event.target.value })}
                                                ></textarea>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                            <button type="submit" className="agy-btn submitForm">Submit</button>
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