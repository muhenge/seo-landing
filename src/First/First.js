import React from "react";
import "./First.css";
const First = () => {
  return (
    <>
      <header id="header-one" className="vh-100 position-relative">
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
        <div class="d-flex position-absolute top-50 start-50 translate-middle">
          <span className="text-light display-3-md text-center">
            We help Businesses from any Country Rank Locally in other Countries Worldwide by providing an International SEO solution.
          </span>
        </div>
        <div className="position-absolute top-100 start-50 translate-middle w-50">
        <div className="row">
            <div className="col">
              <div className="card shadow border-light text-center p-5">
                <div className="card-body">
                </div>
              </div>
            </div>
            <div className="col ">
              <div className="card shadow border-light text-center shadow p-5">
                <div className="card-body">
                </div>
              </div>
            </div>
            <div className="col ">
              <div className="card shadow border-light text-center p-5">
                <div className="card-body">
                </div>
              </div>
            </div>
          </div>
          </div>
      </header>
      <section className="">
        <div className="container my-10">
          <div className="d-flex justify-content-center align-content-center">
            <span className="display-1">How it works</span>
          </div>
          <div className="row justify-content-center align-content-center my-10">
            <div className="col">
              <div className="card shadow-soft border-light text-center p-5">
              </div>
            </div>
            <div className="col">
            <div className="card shadow-soft border-light text-center p-5">
              </div>
            </div>
            <div className="col">
            <div className="card shadow-soft border-light text-center p-5">
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default First;
