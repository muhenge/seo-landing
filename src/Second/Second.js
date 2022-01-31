import React from 'react';
import  Header from "../Header/Header.js";
import Cards from "../First/Cards.js";
import './second.css'
const Second = () => {
  return (
    <div>
      <Header id="bg-black">
      <div className="position-absolute top-50 start-50 translate-middle">
          <span className="text-light display-3-md text-center">
            We help Businesses from any Country rank locally in other countries worldwide by providing an international SEO solution.
          </span>
          <div className="d-flex justify-content-center align-items-center">
            <button className="btn btn-warning text-black round mt-5 w-25">Start for free</button>
          </div>
        </div>
      </Header>
      <section className="vh-100">
        <div className="container-fluid py-9 px-6">
          <div className="row">
            <div className="col">
              <Cards id="bg-black">

              </Cards>
            </div>
            <div  className="col">
              <Cards id="bg-yellow">

              </Cards>
            </div>
            <div className="col">
              <Cards id="bg-black">

              </Cards>
            </div>
          </div>
        </div>
      </section>
      <section className="vh-100">
        <div className="container-fluid py-9 px-6">
        </div>
      </section>
    </div>
  );
};

export default Second;
