import React from 'react';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import Cards from '../First/Cards'
import call from '../images/call.png'
import plan from '../images/business-plan.png'
import search from '../images/web-template.png'
import Footer from '../Footer/Footer';
import './third.css'

// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

// import { } from '@fortawesome/react-fontawesome';
// import {  } from '@fortawesome/free-brands-svg-icons'

const Third = () => {
  return (
    <>
      <Header className="bg-sky-two">
        <Nav className="bg-sky position-sticky start-100 top-0"/>
        <div className="d-flex position-absolute top-50 start-50 translate-middle">
          <span className="text-muted display-3-md text-center">
            We help Businesses from any Country rank locally in other countries worldwide by providing an international SEO solution.
          </span>
        </div>
      </Header>
      <section>
        <div className="container">
          <div className="my-7 d-flex align-items-center justify-content-between">
            <div className="">
             <span className="display-5 text-muted text-center">Book / Schadule a call with Us</span>
            </div>
            <div className="bg-sky round-custom p-5">
              <img src={call} alt="" width="350" />
            </div>
          </div>
          <div className="my-7 d-flex align-items-center justify-content-between">
            <div className="bg-pink-custom round-custom p-5">
              <img src={plan} alt="" width="350" />
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <span className="display-5 text-muted text-center">Do Business discovery section</span>
            </div>
          </div>
          <div className="my-7 d-flex align-items-center justify-content-between">
            <div className="">
              <span className="display-5 text-muted text-center">Plan international SEO integration</span>
            </div>
            <div className="round-custom p-5 bg-blue-light">
              <img src={search} alt="" width="350" />
            </div>
          </div>
        </div>
      </section>
      <section className="p-5">
        <div className="container text-center">
        <Cards className="bg-dark-blue text-center">
          <div className="text-light text-center">
            <h5 className="display-3">How does it help and benefits?</h5>
            <ul className="text-start py-5">
              <li className="py-3" >
                Rank higher on the seach engines for keywords provided
              </li>
              <li className="py-3">
                Sharing content is made easier and more eloquent with dynamic meta tags
              </li>
              <li className="py-3">
                Get accessible url that are meaningful and represent the structure of your services
              </li>

            </ul>
          </div>
          </Cards>
        </div>
      </section>
      <section className="">
        <div className="container my-10">
          <div className="d-flex justify-content-between align-content-center">
            <div className="text-muted">
              <span className="d-block display-1">
                100%
              </span>
              <span className="d-block">
                <span className="text-muted">
                Satisfactory rate of success
                </span>
              </span>
            </div>
            <div className="text-muted">
              <span className="d-block display-1">
                50
              </span>
              <span className="d-block">
                <span className="text-muted">
                New registered
                </span>
              </span>
            </div>
            <div className="text-muted">
            <span className="d-block display-1">
                100
              </span>
              <span className="d-block">
                <span className="text-muted">
                Registered daily
                </span>
              </span>
            </div>
          </div>
         
        </div>
      </section>
      <section className="vh-100 bg-sky-two">
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
      <Footer className="bg-dark-blue text-light"/>
    </>
  );
}

export default Third;
