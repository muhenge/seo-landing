import React from 'react';
import  Header from "../Header/Header.js";
import Cards from "../First/Cards.js";
import Footer from "../Footer/Footer.js";
import call from '../images/call.png'
import plan from '../images/business-plan.png'
import search from '../images/web-template.png'
import './second.css'
const Second = () => {
  return (
    <div>
      <Header className="bg-black">
      <div className="position-absolute top-50 start-50 translate-middle">
          <span className="text-light display-3-md text-center">
            We help Businesses from any Country rank locally in other countries worldwide by providing an international SEO solution.
          </span>
          <div className="d-flex justify-content-center align-items-center">
            <button className="btn btn-lg btn-block bg-yellow text-black round mt-5 w-auto">Start for free</button>
          </div>
        </div>
      </Header>
      <section className="">
        <div className="container-fluid py-9 px-6">
          <div className="row">
            <div className="col">
              <Cards className="bg-yellow p-5">
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <div className="">
                  <i class="fas fa-phone-volume fa-6x"></i>
                  </div>
                  <div className="text-dark">
                  Book/Schedule a call with us
                  </div>
                </div>
              </Cards>
            </div>
            <div  className="col">
              <Cards className="bg-black p-5 text-white">
              <div className="d-flex flex-column justify-content-center align-items-center">
                  <div className="">
                  <i class="fas fa-sitemap fa-6x"></i>
                  </div>
                  <div className="text-white">
                  Book/Schedule a call with us
                  </div>
                </div>
              </Cards>
            </div>
            <div className="col">
              <Cards className="bg-yellow p-5">
              <div className="d-flex flex-column justify-content-center align-items-center">
                  <div className="">
                  <i class="fas fa-laptop-code fa-6x"></i>
                  </div>
                  <div className="text-dark">
                  Plan International SEO Solution Integration
                  </div>
                </div>
              </Cards>
            </div>
          </div>
        </div>
      </section>
      <section className="vh-100 bg-yellow position-relative text-dark">
      <div className="position-absolute top-50 start-50 translate-middle text-light">
            <h5 className="display-3">How does it help and benefits?</h5>
            <ul className="text-start py-5 text-dark">
              <li className="my-5 display-6" >
                <span class=""></span> Rank higher on the seach engines for keywords provided
              </li>
              <li className="my-5 display-6">
                Sharing content is made easier and more eloquent with dynamic meta tags
              </li>
              <li className="my-5 display-6">
                Get accessible url that are meaningful and represent the structure of your services
              </li>

            </ul>
            <div className="d-flex justify-content-center align-items-center">
            <button className="btn btn-lg btn-block bg-black text-warning round mt-5 w-auto">Start for free</button>
          </div>
          </div>
          
      </section>
      <section className="vh-100">
      <div className="container-fluid py-9 px-6">
          <div className="row">
            <div className="col">
              <Cards className="bg-black">

              </Cards>
            </div>
            <div  className="col">
              <Cards className="bg-yellow">

              </Cards>
            </div>
            <div className="col">
              <Cards className="bg-black">

              </Cards>
            </div>
          </div>
        </div>
      </section>
      <section className="vh-100 bg-black">
        <div className="container-fluid py-9 px-6">
          <div className="row">
            <div className="col">
            <Cards>
                <div className="d-flex justify-content-center align-items-center">
                  <div className="">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                  </div>
                  <span className="my--5 ml-5">
                    <img src="https://via.placeholder.com/50" alt=""/>
                  </span>
                </div>
              </Cards>
            </div>
            <div className="col">
            <Cards>
                <div className="d-flex justify-content-center align-items-center">
                  <div className="">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                  </div>
                  <span className="my--5 ml-5">
                    <img src="https://via.placeholder.com/50" alt=""/>
                  </span>
                </div>
              </Cards>
            </div>
         </div>
         <div className="row my-3">
            <div className="col">
            <Cards>
                <div className="d-flex justify-content-center align-items-center">
                  <div className="">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                  </div>
                  <span className="my--5 ml-5">
                    <img src="https://via.placeholder.com/50" alt=""/>
                  </span>
                </div>
              </Cards>
            </div>
            <div className="col">
            <Cards>
                <div className="d-flex justify-content-center align-items-center">
                  <div className="">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                  </div>
                  <span className="my--5 ml-5">
                    <img src="https://via.placeholder.com/50" alt=""/>
                  </span>
                </div>
              </Cards>
            </div>
         </div>
         <div className="row">
            <div className="col">
            <Cards>
                <div className="d-flex justify-content-center align-items-center">
                  <div className="">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                  </div>
                  <span className="my--5 ml-5">
                    <img src="https://via.placeholder.com/50" alt=""/>
                  </span>
                </div>
              </Cards>
            </div>
            <div className="col">
            <Cards>
                <div className="d-flex justify-content-center align-items-center">
                  <div className="">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                  </div>
                  <span className="my--5 ml-5">
                    <img src="https://via.placeholder.com/50" alt=""/>
                  </span>
                </div>
              </Cards>
            </div>
         </div>
        </div>
      </section>
      <Footer className="bg-yellow" />
    </div>
  );
};

export default Second;
