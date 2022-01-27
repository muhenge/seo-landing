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
              <div className="card shadow shadow-soft border-light text-center p-5">
                <div className="card-body">
                </div>
              </div>
            </div>
            <div className="col ">
              <div className="card shadow-soft border-light text-center shadow p-5">
                <div className="card-body">
                </div>
              </div>
            </div>
            <div className="col ">
              <div className="card shadow shadow-soft border-light text-center p-5">
                <div className="card-body">
                </div>
              </div>
            </div>
          </div>
          </div>
      </header>
      <section className="">
        
      </section>
    </>
  );
};

export default First;
