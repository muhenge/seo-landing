import React from 'react';

const Footer = (props) => {
  return (
    <>
      <footer className={props.className+" footer py-9"}>
            <div className="pattern pattern-soft top"></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 mb-4 mb-lg-0">
                        <a className="footer-brand mr-lg-5 d-flex" href="./index.html">
                            {/* <img src="./assets/img/brand/icon.svg" height="35" className="mr-3" alt="Footer logo"> */}
                        </a>
                        <p className="my-4">Create, prototype, collaborate and turn your ideas into incredible products with
                            the definitive platform for digital design.</p>

                    </div>

                    <div className="col-md-4 mb-4 mb-lg-0">
                        <p>
                        <h5>Contacts</h5>
                        </p>
                        <ul className="links-vertical">
                            <li>Kigali, RWANDA</li>
                            <li>KG 7 Ave, PO Box: 610</li>
                            <li>Kigali Heights Complex
                                6th floor, West wing</li>
                            <li>+250 781 512 514</li>
                        </ul>
                    </div>
                    
                    <div className="col-md-4 mb-4 mb-lg-0">
                        <p>
                        <h5>Other Products</h5>
                        </p>
                        <ul className="links-vertical">
                            {/* <li><a href="http://cloudhost.cm/" target="_blank">CloudHost</a></li>
                            <li><a href="http://pixel.cm/" target="_blank">Pixel</a></li> */}
                        </ul>
                    </div>

                </div>
                <hr className="my-4 my-lg-5"/>
                <div className="row">
                    <div className="col pb-4 mb-md-0">
                        <div className="d-flex text-center justify-content-center align-items-center">
                            <p className="font-weight-normal mb-0"> Copyright © CloudHost SEO powered by <a
                                    href="http://globexcam.com/" target="_blank">GlobexCam Group</a> <span
                                    className="current-year"></span>. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>
  );
}

export default Footer;
