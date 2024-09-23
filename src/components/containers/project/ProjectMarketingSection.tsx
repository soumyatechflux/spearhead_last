import React from "react";
import Image from "next/image";
import Link from "next/link";
import awardthumb from "public/images/award-thumb.png";
import glow_star from "public/images/glowing star.gif"; 
import dotlarge from "public/images/agency/dot-large.png";
import marketing from "public/images/projects/marketingjpg.jpg";


const ProjectMarketingSection = () => {
    
  return (
    <section className="section award">
      <div className="container">
        <div className="row gaper align-items-center">
          {/* <div className="col-12 ">
            <div className="award__thumb dir-rtl mt-5">
              <Image src={marketing} style={{height:'300px',width:'600px'}} alt="Image" className="unset fade-left" />
            </div>
          </div> */}
           <div className="row">
            <div className="col-md-6 col-12 d-md-flex align-items-center award__content section__content">
              <h2 className="title title-anim brand-title m-md-0 m-xl-0 mt-4">
              Marketing 
              </h2>
            </div>
            <div className="award__thumb dir-rtl mt-5 col-md-6 col-12">
            <Image src={marketing} style={{height:'300px',width:'600px'}} alt="Image" className="unset fade-left" />
            </div>
          </div>
          <div className="col-12  ">
            <div className="award__content section__content">
             
              {/* <h2 className="title title-anim">
                Marketing 
                
              </h2> */}
              <div className="paragraph">
                 <div className="animated-paragraph">
                    {/* <p> */}
                  
                    <p className="span" style={{fontSize:"25px"}}> At Spearhead Creativity, we redefine success with cutting-edge Marketing solutions tailored for growth. Effective marketing is key to your business’s flourishing journey.  </p>
                    <p className="span" style={{fontSize:"25px"}}>Our expertise spans digital marketing, SEO, content creation, and PPC campaigns, all crafted with precision to meet your unique goals. With a blend of creativity and data-driven strategies, we ensure your marketing efforts lead to tangible results.  </p>
                    <p className="span" style={{fontSize:"25px"}}> Partner with Spearhead Creativity and achieve unparalleled success in today’s competitive digital landscape. </p>
                        
                    {/* </p> */}
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

export default ProjectMarketingSection;
