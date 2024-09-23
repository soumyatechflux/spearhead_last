import React from "react";
import Link from "next/link";

const ProjectPrBanner = () => {
  return (
    <section
      className="cmn-banner service-single-banner bg-img"
      style={{ backgroundImage: "url('/images/banner/cmn-banner-bg.png')" }}
    >
      <div className="container">
        <div className="row gaper align-items-center">
          <div className="col-12 col-lg-5 col-xl-7">
            <div className="text-center text-lg-start">
              <h2 className="title title-anim"> PR</h2>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">
                      <i className="fa-solid fa-house"></i>
                      Home
                    </Link>
                  </li>
                  {/* <li className="breadcrumb-item">
                    <Link href="service-single">Projects</Link>
                  </li> */}
                  <li className="breadcrumb-item active" aria-current="page">
                     PR
                  </li>
                </ol>
              </nav>
            </div>
          </div>
          <div className="col-12 col-lg-7 col-xl-5">
          <div className="text-center text-lg-start">
                {/* <p className="primary-text">
                
                </p> */}
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectPrBanner;
