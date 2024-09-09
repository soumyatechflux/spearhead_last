import React from "react";
import Link from "next/link";

const MoreAdvisoryServiceBanner = () => {
  return (
    <section
      className="cmn-banner service-single-banner bg-img"
      style={{ backgroundImage: "url('/images/banner/cmn-banner-bg.png')" }}
    >
      <div className="container">
        <div className="row gaper align-items-center">
          <div className="col-12 col-lg-5 col-xl-7">
            <div className="text-center text-lg-start">
              <h2 className="title title-anim">Spearhead Creativity Advisory Services</h2>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">
                      <i className="fa-solid fa-house"></i>
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link href="more-advisaory">More</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                  Spearhead Creativity Advisory Services
                  </li>
                </ol>
              </nav>
            </div>
          </div>
          <div className="col-12 col-lg-7 col-xl-5">
          <div className="text-center text-lg-start">
                <p className="primary-text">
                We specialize in providing top-notch advisory services to help businesses unlock their full creative potential. Our team of experts is dedicated to guiding you on a 
                journey towards innovative thinking, strategic planning, and effective execution.
                </p>
                <p className="primary-text">
                At Spearhead Creativity Advisory Service, we offer a wide range of services tailored to meet your unique needs. Whether you require assistance with brainstorming sessions, concept development, or creative problem-solving, our seasoned professionals are here to support you every step of the way.
                With our advisory services, you can expect:
                </p>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreAdvisoryServiceBanner;
