import React, { useEffect, useState, useReducer } from "react";
import Navbar from "../Navbar";
import "./Contact.scss"
import { Whatsapp } from "../helpers/Whatsapp";
import { StoreLocator } from "../helpers/StoreLocator";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault();
        
        emailjs.sendForm('service_6ka7oda','template_21msla6',e.target,'gw71val4_bY3QeqyF').then(
            function (response) {
                alert("Email Sent Successfully!");
            },
            function (error) {
                alert("Email Failed!");
            }
        );
    };


    return (
            <div>
                <Navbar />
                <div class="contactDiv">
                <section class="mb-4">

                    <h2 class="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
                    <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. <br />
                    Our team will come back to you withina matter of hours to help you. Send an Email or Chat with us directly on Whatsapp!</p>

                    <div class="row">

                        <div class="col-md-9 mb-md-0 mb-5">
                            <form id="contact-form" name="contact-form" onSubmit={sendEmail}>

                                <div class="row">
                                    <div class="col-md-6 inputBox">
                                        <div class="md-form mb-0">
                                            <input type="text" id="name" name="name" class="form-control" placeholder="Name" />
                                        </div>
                                    </div>
                                    <div class="col-md-6 inputBox">
                                        <div class="md-form mb-0">
                                            <input type="text" id="email" name="email" class="form-control" placeholder="Email" />
                                        </div>
                                    </div>

                                </div>
                                <div class="row">
                                    <div class="col-md-12 inputBox">
                                        <div class="md-form mb-0">
                                            <input type="text" id="subject" name="subject" class="form-control" placeholder="Subject" />
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12 inputBox">
                                        <div class="md-form">
                                            <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea" placeholder="Your Message">
                                            </textarea>
                                        </div>

                                    </div>
                                </div>

                            <div class="text-center text-md-left">
                                <input class="btn btn-primary" type="submit" value="Submit" />
                            </div>
                            </form>

                            <div class="status"></div>
                        </div>
                        <div class="col-md-3 text-center">
                            <ul class="list-unstyled mb-0">
                                <li><i class="fas fa-map-marker-alt fa-2x"></i>
                                    <p>Plot no 14, Krupa Anand Apartments, East Anandbagh, Secunderabad, Telangana 500047, India</p>
                                </li>

                                <li><i class="fas fa-phone mt-4 fa-2x"></i>
                                    <p>+91 89034982748</p>
                                </li>

                                <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                                    <p>clothesgallery.97@gmail.com</p>
                                </li>
                            </ul>
                        </div>

                    </div>
                    <Whatsapp />
                </section>
                <StoreLocator />
                </div>
            </div>
    );
}

export default Contact;