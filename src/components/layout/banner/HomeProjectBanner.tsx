import React from "react";
import Link from "next/link";

const HomeProjectBanner = () => {
  return (
    <section
      className="cmn-banner service-single-banner bg-img"
      style={{ backgroundImage: "url('/images/banner/cmn-banner-bg.png')" }}
    >
      <div className="container">
        <div className="row gaper align-items-center">
          <div className="col-12 col-lg-5 col-xl-7">
            <div className="text-center text-lg-start">
              <h2 className="title title-anim">Samples of Work</h2>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">
                      <i className="fa-solid fa-house"></i>
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link href="/our-projects">project</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                  Samples of Work
                  </li>
                </ol>
              </nav>
            </div>
          </div>
          <div className="col-12 col-lg-7 col-xl-5">
          <div className="text-center text-lg-start">
                <p className="primary-text">
                Welcome to Spearhead Creativity's PR Case Studies page! Here, we highlight our innovative approach and successful projects that captivate audiences and drive results. Explore our exemplary case studies to see our strategic PR expertise in action. For more insights or to collaborate with us, please get in touch. We look forward to bringing your story to life!
                </p>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeProjectBanner;
