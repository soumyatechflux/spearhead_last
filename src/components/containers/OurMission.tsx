import React from "react";
import Image from "next/image";
import Londan from "public/images/AdvisoryService/one.jpg";
import paris from "public/images/AdvisoryService/two.jpg";
import dubai from "public/images/AdvisoryService/three.jpg";
import four from "public/images/AdvisoryService/four.jpg";
import five from "public/images/AdvisoryService/five.jpg";

const OurMission = () => {
  return (
    <section className="section mission-s fade-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12">
            {/* <div className="section__header--secondary">
              <div className="row gaper align-items-center">
                <div className="col-12 col-lg-5 col-xxl-5">
                  <div className="section__header text-center text-lg-start mb-0">
                    <span className="sub-title">
                      mission & vission
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                    <h2 className="title title-anim">Our Commitment</h2>
                  </div>
                </div>
                <div className="col-12 col-lg-7 col-xxl-5 offset-xxl-2">
                  <div className="text-center text-lg-start">
                    <p>
                    We specialize in providing top-notch advisory services to help businesses unlock their full creative potential. Our team of experts is dedicated to guiding you on a journey towards 
                    innovative thinking, strategic planning, and effective execution.
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        <div className="row gaper">
          <div className="col-12 col-lg-6">
            <div className="mission-s__single mission-s__single--alt fade-top ">
              <h3>Creative Strategy Development</h3>
              <div className="section__content-cta">
                <p className="primary-text">
                We work closely with you to devise creative strategies that align with your business objectives and 
                target audience. Our team ensures that your brand stands out and engages customers effectively.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="mission-s__single fade-top">
              <Image src={dubai} alt="Image" className="adv-img" style={{width:'100%'}}/>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="mission-s__single fade-top">
              <Image src={Londan} alt="Image" className="adv-img" style={{width:'100%'}}/>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="mission-s__single mission-s__single--alt fade-top">
              <h3>Ideation Workshops</h3>
              <div className="section__content-cta">
                <p className="primary-text">
                Our interactive and collaborative workshops ignite a spark of creativity among your team. Through thought-provoking exercises and 
                techniques, we empower your team members to generate groundbreaking ideas and unique solutions.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="mission-s__single mission-s__single--alt fade-top">
              <h3>Trend Analysis and Market Research</h3>
              <div className="section__content-cta">
                <p className="primary-text">
                Stay ahead of the curve with our comprehensive trend analysis and market research services. We analyze industry trends, 
                consumer behavior, and competitor insights to help you identify opportunities and capture the market.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="mission-s__single fade-top">
              <Image src={paris} alt="Image" className="adv-img" style={{width:'100%'}}/>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="mission-s__single fade-top">
              <Image src={four} alt="Image" className="adv-img" style={{width:'100%'}}/>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="mission-s__single mission-s__single--alt fade-top">
              <h3>Innovation Roadmapping</h3>
              <div className="section__content-cta">
                <p className="primary-text">
                Our experts assist you in creating a roadmap for innovation, enabling you to implement new ideas seamlessly. We identify potential bottlenecks, 
                devise actionable plans, and provide ongoing support to ensure successful implementation.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="mission-s__single mission-s__single--alt fade-top">
              <h3>Creative Evaluation and Optimization</h3>
              <div className="section__content-cta">
                <p className="primary-text">
                We conduct rigorous evaluations of your creative campaigns, identifying areas for improvement and optimization. Through 
                data-driven analysis and feedback, we guide you toward achieving maximum impact and ROI
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="mission-s__single fade-top">
              <Image src={five} alt="Image" className="adv-img" style={{width:'100%'}}/>
            </div>
          </div>
          
          {/* <div className="">
            <p>
              Partner with Spearhead Creativity Advisory Service to unlock your business's creative potential, drive innovation, and establish
               a unique market position. Embrace the power of creativity and let us help you soar to new heights!
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default OurMission;
