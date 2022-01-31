import React from 'react';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import Cards from '../First/Cards'
import call from '../images/call.png'
import plan from '../images/business-plan.png'
import search from '../images/web-template.png'
import './third.css'
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

// import { } from '@fortawesome/react-fontawesome';
// import {  } from '@fortawesome/free-brands-svg-icons'


const Third = () => {
  return (
    <>
      <Header className="bg-sky-two">
        <Nav className="bg-sky"/>
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
        <div className="container">
          <Cards className="bg-dark-blue">
          <div className="text-light">
            <h5 className="display-3">How does it help and benefits?</h5>
            <ul className="list-unstyled text-start py-5">
              <li className="" >
                Rank higher on the seach engines for keywords provided
              </li>
              <li className="">
                Sharing content is made easier and more eloquent with dynamic meta tags
              </li>
              <li className="">
                Get accessible url that are meaningful and represent the structure of your services
              </li>

            </ul>
          </div>
          </Cards>
        </div>
      </section>
    </>
  );
}

export default Third;
