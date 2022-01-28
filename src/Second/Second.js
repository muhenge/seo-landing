import React from 'react';
import  Header from "../Header/Header.js";
import './second.css'
const Second = () => {
  return (
    <div>
      <Header id="header-two">
      <div className="position-absolute top-50 start-50 translate-middle">
          <span className="text-light display-3-md text-center">
            We help Businesses from any Country rank locally in other countries worldwide by providing an international SEO solution.
          </span>
          <div className="">
            <button className="d-flex justify-content-center align-items-center btn btn-warning text-black round mt-5">Start for free</button>
          </div>
        </div>
      </Header>
    </div>
  );
};

export default Second;
