import React from 'react';

const Nav = (props) => {
  return (
    <>
      <nav className={props.className+" navbar navbar-light"}>
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
    </>
  );
}

export default Nav;
