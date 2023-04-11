import React, { useEffect, useState, useReducer } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Accordion from "../helpers/Accordion";
import Footer from "../helpers/Footer";
import Navbar from "../Navbar";
import "./Home.scss";
const Home = () => {
  return (
    <>
      <div>
        <Navbar />
        <div class="">
          <main>
            <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary mainHero">
              <div class="col-md-9 mx-auto my-5">
                <h1 class="display-4 fw-normal">Custom Made Clothes Gallery</h1>
                <p class="lead fw-normal">
                  We are an influential clothing brand who offer a wide range of
                  clothing collections made for you specially. We try to make
                  you look as best as possible on your upcoming occasions. Leave
                  the outfit designing to us and enjoy the occasion.
                </p>
                <a class="btn btn-outline-secondary" href="#">
                  Coming soon
                </a>
              </div>
              <div class="product-device shadow-sm d-none d-md-block"></div>
              <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
            </div>
            <div class="" style={{justifyContent: "center"}}>
              <div class="">
                <div class="my-3 p-3" style={{textAlign: "center"}}>
                  <h2 class="display-5">Women</h2>
                  <p class="lead">We offer a moderate collection for women as of now. <br/>Our inventory consists of from sarees to lehengas</p>
                </div>
                <div
                  class="bg-body shadow-sm mx-auto"
                  style={{width: "50%", height: "300px", borderRadius: "21px 21px 0 0"}}
                ></div>
              </div>
              <div class="">
                <div class="my-3 py-3" style={{textAlign: "center"}}>
                  <h2 class="display-5">Men</h2>
                  <p class="lead">We offer a huge collection for men.<br/>Our inventory consists of from sarees to lehengas</p>
                </div>
                <div
                  class="bg-body shadow-sm mx-auto"
                  style={{width: "50%", height: "300px", borderRadius: "21px 21px 0 0"}}
                ></div>
              </div>
            </div>
          </main>
        </div>
        {/* <Accordion heading={"Test header"} /> */}
        
      </div>
      <Footer />
    </>
  );
};

export default Home;
