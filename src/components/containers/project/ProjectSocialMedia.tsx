import React from "react";
import Image from "next/image";
import Link from "next/link";
import awardthumb from "public/images/award-thumb.png";
import glow_star from "public/images/glowing star.gif"; 
import dotlarge from "public/images/agency/dot-large.png";
import social_media from "public/images/projects/social-media.webp";

const ProjectSocialMedia = () => {
    
  return (
    <section className="section award">
      <div className="container">
        <div className="row gaper align-items-center">
          {/* <div className="col-12 ">
            <div className="award__thumb dir-rtl mt-5">
              <Image src={social_media} style={{height:'300px',width:'600px'}} alt="Image" className="unset fade-left" />
            </div>
          </div> */}
           <div className="row">
            <div className="col-md-6 col-12 d-md-flex align-items-center award__content section__content">
              <h2 className="title title-anim brand-title m-md-0 m-xl-0 mt-4">
                Social <span>Media</span>
              </h2>
            </div>
            <div className="award__thumb dir-rtl mt-5 col-md-6 col-12">
              <Image src={social_media} style={{height:'300px',width:'600px'}} alt="Image" className="unset fade-left" />
            </div>
          </div>
          <div className="col-12  ">
            <div className="award__content section__content">
             
              {/* <h2 className="title title-anim">
                Social <span>Media</span>
              </h2> */}
              <div className="paragraph">
                 <div className="animated-paragraph">
                    {/* <p>
                        <span>Discover the power of social engagement with Spearhead Creativity's Social Media services. </span>
                        <span>We excel in harnessing the dynamic potential of social platforms to amplify your brand’s presence and drive interaction. </span>
                        <span>Our team develops strategic, creative campaigns tailored to platforms like Facebook, Instagram, LinkedIn, and more, ensuring your message is seen by the right audience. </span>
                        <span>Let Spearhead Creativity help you connect, engage, and convert followers into brand advocates through innovative social strategies.</span>
                    </p> */}
                    {/* <p> */}
                        <p className="span" style={{fontSize:"25px"}}>Discover the power of social engagement with Spearhead Creativity's Social Media services. </p>
                        <p className="span" style={{fontSize:"25px"}}>We excel in harnessing the dynamic potential of social platforms to amplify your brand’s presence and drive interaction. </p>
                        <p className="span" style={{fontSize:"25px"}}>Our team develops strategic, creative campaigns tailored to platforms like Facebook, Instagram, LinkedIn, and more, ensuring your message is seen by the right audience. </p>
                        <p className="span" style={{fontSize:"25px"}}>Let Spearhead Creativity help you connect, engage, and convert followers into brand advocates through innovative social strategies.</p>
                    {/* </p> */}
                </div>

              </div>
              
              <div className="footer__cta text-start mt-5 text-center">
                <Link href="project-social-media-case-study" className="btn btn--secondary-2 casestudy-button">
                 Explore Our Work
                </Link>
               </div>
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

export default ProjectSocialMedia;
