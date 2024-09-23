import React from "react";
import Image from "next/image";
import Link from "next/link";
import awardthumb from "public/images/award-thumb.png";
import glow_star from "public/images/glowing star.gif"; 
import dotlarge from "public/images/agency/dot-large.png";
import sakal from "public/images/more/logo_black.webp";

const SakalFamilySection = () => {
    
  return (
    <section className="section award">
      <div className="container">
        <div className="row gaper align-items-center">
          <div className="col-12 ">
            <div className="award__thumb dir-rtl mt-5">
              <Image src={sakal} style={{height:'300px',width:'500px'}} alt="Image" className="unset fade-left" />
            </div>
          </div>
          <div className="col-12  offset-xxl-1">
            <div className="award__content section__content">
             
              <h2 className="title title-anim">
              SAKAL<span> Group </span> and Family <span>Office</span>
              </h2>
              <div className="sakal-paragraph">
                 <div className="sakal-animated-paragraph">
                    <p className="sakal-para">
                    
                        Welcome to the SAKAL Group and Family Office section of Spearhead Creativity. As a leading global enterprise, the SAKAL Group is synonymous with innovation and excellence, focusing on diverse investment opportunities and strategic partnerships. Our Family Office is dedicated to managing and expanding the group’s portfolio, ensuring sustainable growth and long-term value creation.

                    </p>
                    <p className="sakal-para">
                    I am Paul Williams, the Managing Partner for the Middle East GCC and Asia, regions marked by rapid economic growth and dynamic business landscapes. In my role, I oversee strategic initiatives, investments, and operations, leveraging local insights to navigate these unique markets. My commitment to excellence and strategic vision ensures that the SAKAL Group continues to thrive and expand its influence across these regions. 
                    </p>

                    <p className="sakal-para">
                    At Spearhead Creativity, we are proud to align with SAKAL Group’s principles of leadership and innovation, driving forward-thinking solutions that foster growth and success.
                    </p>
                </div>

              </div>
              <div className="award__content-meta">
                {/* <div className="single">
                  <h4>2018</h4>
                  <h4>Awwwards</h4>
                  <p>Website of the day</p>
                </div>
                <div className="single">
                  <h4>2020</h4>
                  <h4>Awwwards</h4>
                  <p>National design contest</p>
                </div>
                <div className="single">
                  <h4>2022</h4>
                  <h4>Awwwards</h4>
                  <p>Apps of the day</p>
                </div> */}
              </div>
              {/* <div className="section__content-cta">
                <Link href="about-us" className="btn btn--primary">
                  Know More
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <Image src={glow_star} alt="Image" className="star" />
      <Image src={glow_star} alt="Image" className="star-two" />
      <Image src={dotlarge} alt="Image" className="dot" />
      <Image src={dotlarge} alt="Image" className="dot-two" />
      <Image src={glow_star} alt="Image" className="star-two" />
    </section>
  );
};

export default SakalFamilySection;
