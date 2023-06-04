import React, { useEffect, useState, useReducer } from "react";
import Navbar from "../Navbar";
import "./Appointment.scss"
import { Whatsapp } from "../helpers/Whatsapp";
import { StoreLocator } from "../helpers/StoreLocator";
import emailjs from "@emailjs/browser";
import PhoneInput from 'react-phone-input-international'
import 'react-phone-input-international/lib/style.css'



const Appointment = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const sendEmail = (e) => {
        e.preventDefault();
        e.target.getElementsByTagName('input')[2].setAttribute('name','phoneNumber');
        emailjs.sendForm('service_ooawdev','template_vnxax2d',e.target,'gw71val4_bY3QeqyF').then(
            function (response) {
                window.location.reload(false);
                alert("Email Sent Successfully!");

            },
            function (error) {
                alert("Email Failed!");
            }
        );
    };
    const changeType = (e) => {
        e.target.getAttribute('placeholder') == 'date' ?
        e.target.setAttribute('type','date') :
        e.target.setAttribute('type','time');
    }

    return (
            <div>
                <Navbar />
                <div class="contactDiv">
                <section class="mb-4">

                    <h2 class="h1-responsive font-weight-bold text-center my-4">Book An Appointment</h2>
                    

                    <div class="row">

                        <div class="col-md-9 mb-md-0 mb-5">
                            <form id="contact-form" name="contact-form" onSubmit={sendEmail}>

                                <div  style={{display: "flex"}}>
                                    <div class="name inputBox">
                                        <div class="">
                                            <input type="text" id="firstname" name="firstname" class="form-control" placeholder="Firstname" />
                                        </div>
                                    </div>
                                    <div class="name inputBox">
                                        <div class="">
                                            <input type="text" id="lastname" name="lastname" class="form-control" placeholder="Fastname" />
                                        </div>
                                    </div>

                                </div>
                                <div className="inputBox">
                                <PhoneInput
                                    country={'in'}
                                    value={phoneNumber}
                                    onChange={setPhoneNumber}
                                />
                                </div>
                                <div class="name inputBox">
                                    <div class="">
                                        <input type="email" id="email" name="email" class="form-control" placeholder="Email" />
                                    </div>
                                </div>
                                <div style={{display: "flex"}}>
                                    <div class="name inputBox">
                                        <input type="text" id="date" name="date" class="form-control" placeholder="date" onMouseEnter={changeType} />
                                    </div>
                                    <div class="name inputBox">
                                        <input type="text" id="time" name="time" class="form-control" placeholder="time" onMouseEnter={changeType}/>
                                    </div>
                                </div>
                                <div class="name inputBox">
                                    <div class="">
                                        <textarea type="text" id="message" name="message" rows="1" class="form-control md-textarea" placeholder="Looking For..">
                                        </textarea>
                                    </div>
                                </div>
                                
                                

                            <div class="inputBox bookButton">
                                <input class="btn btn-primary" type="submit" value="Book an Appointment" />
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

export default Appointment;