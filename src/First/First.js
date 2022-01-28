import React from "react";
import Cards from "./Cards"
import Header from "../Header/Header";
import "./First.css";

const First = () => {
  return (
    <>
    
      <Header id="header-one">
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <div className="d-flex justify-content-end ">
            <div className="">
              
            </div>

            <div className="">
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </nav>
        <div className="d-flex position-absolute top-50 start-50 translate-middle">
          <span className="text-light display-3-md text-center">
            We help Businesses from any Country rank locally in other countries worldwide by providing an international SEO solution.
          </span>
        </div>
        <div className="position-absolute top-100 start-50 translate-middle w-50">
        <div className="row">
            <div className="col">
              <Cards>

              </Cards>
            </div>
            <div className="col ">
             <Cards></Cards>
            </div>
            <div className="col ">
              <Cards />
            </div>
          </div>
          </div>
          </Header>
      <section className="">
        <div className="container my-10">
          <div className="d-flex justify-content-center align-content-center">
            <span className="display-1 text-muted">How it works</span>
          </div>
          <div className="row justify-content-center align-content-center my-10">
            <div className="col">
              <Cards>
                
              </Cards>
            </div>
            <div className="col">
              <Cards></Cards>
            </div>
            <div className="col">
              <Cards></Cards>
            </div>
          </div>
        </div>
      </section>
      <section id="section-why" className="vh-100 vw-75 position-relative">
      
          <div className="position-absolute top-50 start-50 translate-middle text-light">
            <h5 className="display-3">How does it help and benefits?</h5>
            <ul className="list-unstyled text-start py-5">
              <li className="" >
                Rank higher on the seach engines for keywords provided
              </li>
              <li>
                Sharing content is made easier and more eloquent with dynamic meta tags
              </li>
              <li>
                Get accessible url that are meaningful and represent the structure of your services
              </li>

            </ul>
          </div>
      </section>
      <section>
        <div className="d-flex justify-content-center align-content-center mt-5">
        <button className="btn btn-primary w-25 p-3">Get Started</button>
        </div>
      
      </section>
      <section className="vh-100 position-relative">
        <div className="container position-absolute top-50 start-0">
          <div className="row">
            <div className="col pl-5">
            <h5 className="display-5">More data. More insights</h5>
              <p>
                With the size of our SEO databases and speed of our backlink crawler, imagine what you can achieve if you have the insights your competitors don’t.
              </p>            
              </div>
            <div className="col">
              
            </div>
          </div>
        </div>
      </section>
      <section className="vh-100">
        <div className="container">
        <h5 className="display-5 text-muted text-center">Testimonials</h5>
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
                  </span>Started
                </div>
              </Cards>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default First;
