import React, { useRef } from "react";
import contactImage from '../components/assets/contactImage.png';

import Nav from 'react-bootstrap/Nav';
import { useEffect } from "react";
import { Facebook, Twitter, Google, Instagram, LinkedIn, GitHub, Business, BusinessCenter, Phone, Email } from '@mui/icons-material';
import { Helmet } from "react-helmet";

import emailjs from 'emailjs-com'; // Updated import statement

const Contact = () => {
    useEffect(() => {

        window.scrollTo(0, 0);
    }, []);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_jvs621f', 'template_yle285k', form.current, '422YHYb6cxzCdJopF') // Update with your actual service, template, and user IDs
            .then(
                (response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    alert('Form submitted successfully');
                    form.current.reset(); // Reset form fields
                },
                (error) => {
                    console.error('FAILED...', error);
                    alert('Failed to submit form. Please try again.'); // Display an error message
                }
            );
    };
    return (
        <div>
            <Helmet>
                <title>Get in Touch with Us: Micro Quartz Contact Page </title>
                <meta
                    name="description"
                    content="Reach out to us easily through the contact us page of Micro Quartz website. We're here to assist you with all your queries!"
                />
                {/* Add more meta tags as needed */}
            </Helmet>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <div className="ContactTopContainer">
                <div className="row">
                    <div className="col-lg-6">



                    </div>
                    <div className="col-lg-6">


                    </div>
                </div>

            </div>

            <div className="row">
                <div className="col-lg-6">

                </div>
                <div className="col-lg-6"></div>
            </div>
            <section id="contactSection" className="mb-4">
                <br></br><br></br>
                <p className="text-center w-responsive mx-auto mb-5">
                    We strive for transparency and honesty in all of our customer relationships. We know how often questions can come up in this industry, and we’re ready to answer all of them. If there’s something we missed, please reach out to us.
                </p>


                <div className="row">
                    <div id="secondContainer" className="col-md-3 text-center">
                        <img className="contactImage" src={contactImage} alt="" />

                    </div>

                    <div className="col-md-1"></div>

                    <div id="firstContainer" className="col-md-8 mb-md-0 mb-5">
                        <form ref={form} onSubmit={sendEmail}>
                            <div class="form-group">
                                <label for="user_name">Name</label>
                                <input type="text" class="form-control" id="user_name" name="user_name" />
                            </div>
                            <div class="form-group">
                                <label for="user_email">Email</label>
                                <input type="email" class="form-control" id="user_email" name="user_email" />
                            </div>
                            <div class="form-group">
                                <label for="subject">Subject</label>
                                <input type="text" class="form-control" id="subject" name="subject" />
                            </div>
                            <div class="form-group">
                                <label for="message">Message</label>
                                <textarea class="form-control" id="message" name="message"></textarea>
                            </div>
                            <br></br>
                            <button type="submit" class="btn btn-primary">Send</button>
                        </form>
                    </div>


                </div>
                <br></br>
                <br></br>
                <div className="row">
                    <div className="col-lg-12  order-lg-1 order-2">
                        <div className="detailsCard">
                            <div className="row">
                                <div className="col-md-6 ">
                                    <div className="detailCardItem">
                                        <a href="#" className=" me-4">
                                            <Business /> {/* Factory Icon */}
                                        </a><p><span style={{ fontWeight: 'bolder', marginRight: '5px' }}>Factory:</span> G-1 26,27 RIICO Industrial Area<br></br> Sanwar(Rajasthan)
                                        <br></br>​ 313204</p>

                                    </div>
                              
                                    <div id="phoneNO" className="detailCardItem">
                                        <a href="tel:+919166676663" className="me-4">
                                            <Phone /> {/* Office Icon */}
                                        </a> <a href="tel:+919166676663" ><p><span style={{ fontWeight: 'bolder', marginRight: '5px' }}>Phone No:</span> +91 9166676663</p>
                                        </a>
                                    </div>
                                   

                                </div>
                                

                                <div className="col-md-6 ">
                                <div className="detailCardItem">
                                        <a href="#" className="me-4">
                                            <BusinessCenter /> {/* Office Icon */}
                                        </a><p><span style={{ fontWeight: 'bolder', marginRight: '5px' }}>Office:</span>  302, Vallabh Apartment
                                            New Navratna Complex, Bhuwana<br></br>
                                            Udaipur (Rajasthan)
                                            <br></br> 313001</p>

                                    </div>

                                  
                                    <div className="detailCardItem">
                                        <a hhref="mailto: microquartz@live.com" className="me-4">
                                            <Email /> {/* Office Icon */}
                                        </a> <a href="mailto: microquartz@live.com" ><p><span style={{ fontWeight: 'bolder', marginRight: '5px' }}>Email:</span>  microquartz@live.com</p>
                                        </a>
                                    </div>

                                </div>
                            </div>



                        </div>
                    </div>

                </div>


            </section>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14482.212985044362!2d74.1016963!3d24.8449473!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396878dfc917871d%3A0x9c3ff80331471d67!2sMicro%20Quartz!5e0!3m2!1sen!2sin!4v1707488970373!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: '0' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <br></br>
            <br></br>




        </div>
    )
}
export default Contact